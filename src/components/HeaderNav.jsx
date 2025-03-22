import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, BriefcaseIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const navigation = [
  { name: 'Active Travel', href: '/activetravel' },
  { name: 'About', href: '/about' }
];

function classNames (...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function HeaderNav () {
  return (
    <Disclosure as='nav' className='bg-pink-700'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            {/* Mobile menu button */}
            <DisclosureButton className='group relative inline-flex items-center justify-center rounded-md p-2  hover:bg-emerald-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
              <span className='absolute -inset-0.5' />
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon aria-hidden='true' className='block size-6 group-data-[open]:hidden' />
              <XMarkIcon aria-hidden='true' className='hidden size-6 group-data-[open]:block' />
            </DisclosureButton>
          </div>
          <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex shrink-0 items-center'>
              <BriefcaseIcon aria-hidden='true' className='size-6 text-white' />
              <Link
                href='/'
              >
                <span className='text-white font-semibold text-xl ml-2'>Cotham
                  Gardens PTFA
                </span>
              </Link>
            </div>
            <div className='hidden sm:ml-6 sm:block'>
              <div className='flex space-x-4'>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href} className={classNames('text-gray-100 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                  >{item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className='sm:hidden'>
        <div className='space-y-1 px-2 pb-3 pt-2'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href} className='text-gray-900 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-sm font-medium'

            >{item.name}
            </Link>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
