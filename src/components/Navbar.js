import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, BellIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '#home', current: true },
  { name: 'Features', href: '#features', current: false },
  { name: 'Guilds', href: '#guilds', current: false },
  { name: 'Quests', href: '#quests', current: false },
  { name: 'Leaderboard', href: '#leaderboard', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure 
      as="nav" 
      className="bg-dark/95 backdrop-blur-md shadow-lg sticky top-0 z-50"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <div className="flex items-center text-white">
                    <div className="h-9 w-9 rounded-md bg-gradient-to-br from-primary to-indigo-500 flex items-center justify-center mr-2 shadow-md relative group overflow-hidden">
                      {/* Animated glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
                      <svg className="h-5 w-5 text-white relative z-10" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-2xl font-bold tracking-tight">
                      SkillSaga
                    </span>
                  </div>
                </div>
                <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'border-secondary text-white'
                          : 'border-transparent text-gray-300 hover:border-gray-300 hover:text-white',
                        'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-200'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
                {/* Notification bell with dot indicator */}
                <button className="relative text-gray-400 hover:text-white transition duration-200">
                  <BellIcon className="h-6 w-6" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-secondary ring-2 ring-dark"></span>
                </button>
                
                <div className="h-5 w-px bg-gray-700"></div>
                
                <button
                  type="button"
                  className="relative bg-transparent hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium border border-gray-700 transition-all duration-200 overflow-hidden group"
                >
                  <span className="relative z-10">Sign In</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </button>
                <button
                  type="button"
                  className="relative bg-gradient-to-r from-primary to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md transition-all duration-200 hover:shadow-lg overflow-hidden group"
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                </button>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Transition
            enter="transition duration-200 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-150 ease-in"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="sm:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800">
              <div className="pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-primary/20 border-secondary text-white'
                        : 'border-transparent text-gray-300 hover:bg-gray-700/30 hover:text-white',
                      'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="pt-4 pb-5 border-t border-gray-800">
                <div className="px-5 space-y-3">
                  <button
                    type="button"
                    className="w-full bg-gray-800 hover:bg-gray-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium border border-gray-700 transition-colors duration-200"
                  >
                    Sign In
                  </button>
                  <button
                    type="button"
                    className="w-full bg-gradient-to-r from-primary to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium shadow-md transition-all duration-200"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
} 