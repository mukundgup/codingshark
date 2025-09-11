"use client";

import Image from 'next/image';
import imag1 from '../../../public/images/Apexon_Logo.jpg'
export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800">Student Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Image src="/notification-icon.png" alt="Notifications" width={24} height={24} />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Image src={imag1} alt="Profile" width={24} height={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Stats Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Progress Overview</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Completed Assignments</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600">Attendance Rate</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Tasks */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Tasks</h2>
            <ul className="space-y-3">
              <li className="flex items-center justify-between">
                <span className="text-gray-600">Math Assignment</span>
                <span className="text-sm text-red-500">Due Tomorrow</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-gray-600">Science Project</span>
                <span className="text-sm text-yellow-500">Due in 3 days</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-gray-600">History Essay</span>
                <span className="text-sm text-green-500">Due in 1 week</span>
              </li>
            </ul>
          </div>

          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Image src="/assignment-icon.png" alt="Assignment" width={20} height={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-800">Submitted Physics Assignment</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Image src="/grade-icon.png" alt="Grade" width={20} height={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-800">Received Grade: Math Quiz</p>
                  <p className="text-xs text-gray-500">Yesterday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
