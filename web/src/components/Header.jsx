import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

import DefaultAvatar from '../assets/default_avatar.png';
import { classNames } from '../utils'

const navigation = [
  { name: 'Card table', href: '/', },
  { name: 'To-dos', href: '/todos' },
  { name: 'Message board', href: '/message-board' },
  { name: 'Chat', href: '/chat' },
]

const userNavigation = [
  { name: 'Profile', href: '/profile' },
  { name: 'Sign out', href: '/logout' },
]

const Header = ({ user }) => {
  const pathname = window.location.pathname
  // console.log(pathname)
  return (
    <Disclosure as="nav" className="sticky top-0 z-10 bg-sky-500 backdrop-filter backdrop-blur-lg bg-opacity-30">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between px-4 sm:px-0">
              <div className="flex items-center">
                <div className="hidden md:block">
                  <div className="flex items-baseline space-x-4">
                    {navigation.map((item) => {
                      const current = pathname === item.href
                      return <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          current
                            ? 'bg-sky-300 text-white'
                            : 'text-slate-900 hover:bg-sky-300 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    })}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-8 rounded-full" src={user.profilePicture} alt={DefaultAvatar} />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <Link
                                key={item.href}
                                to={item.href}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-slate-700'
                                )}
                              >
                                {item.name}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-slate-900 hover:bg-sky-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                  <span className="absolute -inset-0.5" />
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

          <Disclosure.Panel className="border-b border-slate-300 md:hidden">
            <div className="space-y-1 px-2 py-3 sm:px-3">
              {navigation.map((item) => {
                const current = pathname === item.href
                return <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    current ? 'bg-sky-300 text-white' : 'text-slate-900 hover:bg-sky-300 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              })}
            </div>
            <div className="border-t border-slate-300 pb-3 pt-4">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img className="h-10 w-10 rounded-full" src={user.profilePicture} alt={DefaultAvatar} />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-slate-900">{user.username}</div>
                  <div className="text-sm font-medium leading-none text-slate-400">{user.email}</div>
                </div>
              </div>
              <div className="mt-3 space-y-1 px-2">
                {userNavigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-slate-900 hover:bg-sky-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Header;
