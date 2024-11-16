import Link from 'next/link';
import { attributes } from '../../content/links.md';
export default function Links () {
  const { title, links } = attributes;

  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>{title}</h2>
        </div>
        <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {links.map((link) => (
            <article key={link.url} className='flex max-w-xl flex-col items-start justify-between'>
              <div className='group relative'>
                <h3 className='mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600'>
                  <Link
                    href={link.url}
                  >
                    {link.name}
                  </Link>
                </h3>
                <p className='mt-5 line-clamp-3 text-sm/6 text-gray-600'>{link.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
