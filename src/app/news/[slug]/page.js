import { newsPosts } from '@/lib/news-posts';
import { notFound } from 'next/navigation';

export async function generateStaticParams () {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata ({ params }) {
  const post = newsPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title
  };
}

export default function NewsPostPage ({ params }) {
  const post = newsPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const { title, date, thumbnail, Component } = post;

  return (
    <main className='max-w-3xl mx-auto px-4 py-8'>
      <article>
        <h1 className='text-3xl font-bold mb-2'>{title}</h1>
        <p className='text-gray-500 text-sm mb-4'>
          {new Date(date).toLocaleDateString()}
        </p>

        {thumbnail && (
          <img
            src={thumbnail}
            alt=''
            className='w-full h-auto rounded mb-6'
          />
        )}

        <div className='prose'>
          <Component />
        </div>
      </article>
    </main>
  );
}
