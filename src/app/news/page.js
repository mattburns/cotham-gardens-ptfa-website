import { newsPosts } from '@/lib/news-posts';
import Link from 'next/link';

export const metadata = {
  title: 'News'
};

export default function NewsPage () {
  const sorted = newsPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <main className='max-w-3xl mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-6'>News</h1>
      <ul className='space-y-8'>
        {sorted.map((post) => (
          <li key={post.slug} className='border-b pb-4'>
            {post.thumbnail && (
              <img
                src={post.thumbnail}
                alt={post.title}
                className='w-full h-auto mb-4'
              />
            )}
            <h2 className='text-2xl font-semibold'>
              <Link href={`/news/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className='text-gray-600 text-sm'>
              {new Date(post.date).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
