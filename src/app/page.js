import { attributes, react as HomeContent } from '@/content/home.md';

export default function Page () {
  const { title } = attributes;

  return (
    <div className='py-8 sm:py-12'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <p className='mt-2 text-4xl font-extrabold tracking-tight text-slate-800 sm:text-5xl lg:text-balance'>
            {title}
          </p>
          <div className='mt-6 text-lg/8 text-gray-600'>
            <HomeContent />
          </div>
        </div>
      </div>
    </div>
  );
}
