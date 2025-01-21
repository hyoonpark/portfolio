import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { useTheme } from '../contexts/ThemeContext';

interface MenuItem {
  name: string;
  href: string;
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();

  const menuItems: MenuItem[] = [
    { name: 'About', href: 'about' },
    { name: 'Experience', href: 'experience' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <nav className="fixed w-full bg-white dark:bg-dark-card shadow-md z-50">
      <div className="container-wrapper">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold dark:text-dark-text">HaYoon</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white focus:outline-none"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <SunIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <MoonIcon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
            <div className="md:hidden ml-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-dark-card">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                smooth={true}
                duration={500}
                className="cursor-pointer block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Header; 