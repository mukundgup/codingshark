"use client";

import React, { useState, useEffect, useCallback } from "react";
import { FaUserGraduate } from "react-icons/fa";

const API_BASE_URL = "http://localhost:5000/api"; // Backend API

const ProfilePage = () => {
  const [profileData, setProfileData] = useState<any>(null);
  const [courseProgressData, setCourseProgressData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  // --- Authentication Check ---
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUserId = localStorage.getItem("userId");

    if (token && storedUserId) {
      setAuthToken(token);
      setUserId(storedUserId);
    } else {
      setError("You must be logged in to view your profile.");
      setLoading(false);
    }
  }, []);

  // --- Fetch Profile & Progress ---
  const fetchProfileAndProgress = useCallback(async () => {
    if (!authToken || !userId) {
      setLoading(false);
      setError("Authentication token or User ID is missing. Please log in.");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      // 1. User Profile
      const userResponse = await fetch(`${API_BASE_URL}/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (!userResponse.ok) {
        const errData = await userResponse.json();
        throw new Error(errData.message || "Failed to fetch user profile.");
      }

      const userData = await userResponse.json();
      const user = userData.user;

      setProfileData({
        name: user.username || "N/A",
        bio: "Student | Web Developer",
        joinDate: user.joinedDate
          ? new Date(user.joinedDate).toLocaleDateString()
          : user.createdAt
          ? new Date(user.createdAt).toLocaleDateString()
          : "N/A",
        phoneno: user.phone || "N/A",
        email: user.email || "N/A",
        location: user.address || "N/A",
      });

      // 2. Course Progress
      if (user.course_id) {
        const courseId = user.course_id._id || user.course_id;
        const courseName = user.course_id.name || "Assigned Course";

        const progressResponse = await fetch(
          `${API_BASE_URL}/user-progress/${courseId}`,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        if (progressResponse.ok) {
          const progressData = await progressResponse.json();
          setCourseProgressData({
            course: courseName,
            progress: progressData.progress?.progress_percentage || 0,
          });
        } else {
          setCourseProgressData({
            course: courseName,
            progress: 0,
          });
        }
      }
    } catch (err: any) {
      setError(err.message);
      setProfileData(null);
      setCourseProgressData(null);
    } finally {
      setLoading(false);
    }
  }, [authToken, userId]);

  useEffect(() => {
    if (authToken && userId) {
      fetchProfileAndProgress();
    }
  }, [authToken, userId, fetchProfileAndProgress]);

  // --- Loading State ---
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20 text-lg text-gray-600">
        Loading profile data...
      </div>
    );
  }

  // --- Error State ---
  if (error) {
    return (
      <div className="flex justify-center items-center py-10">
        <div className="bg-red-100 text-red-700 px-6 py-4 rounded-lg">
          Error: {error}
        </div>
      </div>
    );
  }

  // --- No Profile Data ---
  if (!profileData) {
    return (
      <div className="flex justify-center items-center py-20 text-lg text-gray-600">
        Please log in to view your profile.
      </div>
    );
  }

  // --- Profile UI ---
  return (
    <div className="flex-1 p-8">
      <div className="bg-white rounded-2xl shadow-md w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
        {/* Left Section */}
        <div className="flex flex-col items-center text-center">
          <FaUserGraduate className="text-orange-500 text-8xl md:text-9xl mb-5" />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            {profileData.name}
          </h1>
          <p className="text-gray-500 mt-2">{profileData.bio}</p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-8">
          {/* Personal Info */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Personal Info
            </h2>
            <p className="text-gray-600 mb-2">
              <strong>Email:</strong> {profileData.email}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Location:</strong> {profileData.location}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Joined:</strong> {profileData.joinDate}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Phone no.:</strong> {profileData.phoneno}
            </p>
          </div>

          {/* Course Progress */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Course Progress
            </h2>
            {courseProgressData ? (
              <div>
                <p className="text-gray-700 mb-2">
                  {courseProgressData.course} (
                  {courseProgressData.progress.toFixed(0)}%)
                </p>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-orange-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${courseProgressData.progress}%` }}
                  ></div>
                </div>
              </div>
            ) : (
              <p className="text-gray-600">
                Not enrolled in a course or no progress found yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
