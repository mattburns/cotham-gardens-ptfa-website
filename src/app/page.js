import HomeCTA from '@/components/home-cta';

export default function Home () {
  return (
    <div className='bg-white py-24 sm:py-16'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <p className='mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance'>
            Cotham Gardens School Street
          </p>
          <p className='mt-6 text-lg/8 text-gray-600'>
            A community project to champion active travel and safer streets.
          </p>
        </div>
      </div>
      <HomeCTA />
    </div>
  );
}
