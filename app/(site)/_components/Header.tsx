'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import logo from "../../../public/assets/images/Coding-Sharks-Logo.png";

interface NavLink {
  name: string;
  path: string;
}

function Header() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    try {
      const username = localStorage.getItem('username');
      const token = localStorage.getItem('token');
      const adminStatus = localStorage.getItem('isAdmin');

      if (username && token) {
        setIsLoggedIn(true);
        setUserName(username);
        setIsAdmin(adminStatus === 'true');
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
    setIsLoggedIn(false);
    setUserName('');
    setIsAdmin(false);
    router.push('/');
  };

  const navLinks: NavLink[] = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Python', path: '/paythonnew' }, // spelling "pythonnew" correct kar lena
    { name: 'Mern Stack', path: '/mernstacknew' },
    { name: 'About us', path: '/aboutus' },
  ];

  const currentNavLinks: NavLink[] = [
    ...navLinks,
    ...(isLoggedIn ? [{ name: 'Dashboard', path: '/user/dashbord' }] : []),
    ...(isAdmin ? [{ name: 'Admin Panel', path: '/AdminLayout' }] : []),
  ];

  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className="bg-white px-6 py-3 text-lg shadow-sm">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image
              src={logo}
              width={115}
              height={40}
              alt="Coding Sharks Logo"
              className="h-auto"
              priority
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            {currentNavLinks.map((link) => (
              // <Link
              //   key={link.path}
              //   href={link.path}
              //   className={`hover:text-[#ff9a70] transition-colors ${
              //     pathname === link.path
              //       ? 'text-black font-semibold'
              //       : 'text-gray-400'
              //   }`}
              // >
              //   {link.name}
              // </Link>
              <Link
                key={link.path}
                href={{ pathname: link.path }}
                onClick={handleMenuToggle}
                className={`block hover:text-[#ff9a70] transition-colors ${pathname === link.path
                    ? "text-black font-semibold"
                    : "text-gray-400"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop auth buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {isLoggedIn ? (
              <>
                <span className="text-black font-medium">{userName}</span>
                <button
                  onClick={handleLogout}
                  className="rounded-full border border-[#ff9a70] text-[#ff9a70] bg-black px-6 py-1.5 font-medium transition-all hover:bg-[#ff9a70] hover:text-white"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link href="/login">
                <button
                  type="button"
                  className="rounded-full border border-[#ff9a70] text-[#ff9a70] bg-black px-6 py-1.5 font-medium transition-all hover:bg-[#ff9a70] hover:text-white"
                >
                  Login
                </button>
              </Link>
            )}
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={handleMenuToggle}
            className="md:hidden text-gray-700 focus:outline-none"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 space-y-3">
            {currentNavLinks.map((link) => (
              <Link
                key={link.path}
                href={{ pathname: link.path }}
                onClick={handleMenuToggle}
                className={`block hover:text-[#ff9a70] transition-colors ${pathname === link.path
                    ? "text-black font-semibold"
                    : "text-gray-400"
                  }`}
              >
                {link.name}
              </Link>

            ))}

            {isLoggedIn ? (
              <>
                <span className="block text-black font-medium">{userName}</span>
                <button
                  onClick={handleLogout}
                  className="w-full rounded-full border border-[#ff9a70] text-[#ff9a70] bg-white px-6 py-1.5 font-medium transition-all hover:bg-[#ff9a70] hover:text-white"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link href="/login">
                <button
                  type="button"
                  onClick={handleMenuToggle}
                  className="w-full rounded-full border border-[#ff9a70] text-[#ff9a70] bg-white px-6 py-1.5 font-medium transition-all hover:bg-[#ff9a70] hover:text-white"
                >
                  Login
                </button>
              </Link>
            )}
          </div>
        )}
      </nav>

      <div className="h-[1px] w-full bg-[#ff9a70]"></div>
    </>
  );
}

export default Header;
