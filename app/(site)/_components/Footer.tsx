"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/assets/images/Coding-Sharks-Logo.png";
const Footer = () => {
  return (
    <footer className="bg-white text-black border-t border-orange-400 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src={logo}
              alt="Coding Sharks Logo"
              width={200}
              height={80}
              priority
              className="object-contain"
            />
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
            {/* Contact Us */}
            <div>
              <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="tel:+917747004451" className="hover:text-orange-500">
                    Phone: +91 7747004451
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@thecodingsharks.in"
                    className="hover:text-orange-500"
                  >
                    Email: info@thecodingsharks.in
                  </a>
                </li>
              </ul>
            </div>

            {/* Directions */}
            <div>
              <h3 className="text-lg font-semibold mb-4">DIRECTIONS</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a
                    href="https://www.google.com/maps/place/Coding+Sharks/@22.6946993,75.8635913,17z/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-500"
                  >
                    Google Location
                  </a>
                </li>
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h3 className="text-lg font-semibold mb-4">COURSES</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="/mernStackPage" className="hover:text-orange-500">
                    MERN Stack Development
                  </Link>
                </li>
                <li>
                  <Link href="/pythonDeveloperPage" className="hover:text-orange-500">
                    Python Developer
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-orange-500">
                    Data Analyst
                  </Link>
                </li>
              </ul>
            </div>

            {/* Public */}
            <div>
              <h3 className="text-lg font-semibold mb-4">FOR THE PUBLIC</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="/" className="hover:text-orange-500">
                    Students Work
                  </Link>
                </li>
                <li>
                  <Link href="/aboutme" className="hover:text-orange-500">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-6 border-t border-orange-400 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Social Icons */}
          <div className="flex space-x-5">
            <a
              href="https://www.youtube.com/@codingsharksofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 text-gray-700 hover:text-red-600 transition"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://www.instagram.com/thecodingsharks_official/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 text-gray-700 hover:text-pink-500 transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/codingsharks/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 text-gray-700 hover:text-blue-600 transition"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500 text-center">
            © 2025 Coding Sharks. All rights reserved.
          </p>

          {/* Policies */}
          <div className="text-sm">
            <a
              href="https://www.linkedin.com/company/codingsharks/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-orange-500"
            >
              by codingsharks team
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
