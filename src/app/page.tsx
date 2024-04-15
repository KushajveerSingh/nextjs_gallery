import { db } from '~/server/db';

export const dynamic = 'force-dynamic';

const mock_urls = [
  'https://utfs.io/f/168ebb9c-0a9a-46de-b6b4-567bc2d2aaf8-p0533c.jpg',
  'https://utfs.io/f/4b949ac7-bf4e-4f51-a0c4-d23ba4bbaa52-c5cuc5.jpg',
  'https://utfs.io/f/cf291211-d2ba-4c77-9ddc-f2750b09fcfc-af3aju.jpg',
  'https://utfs.io/f/1f98759f-05bf-4e48-afc0-9f72996c27b5-bj1gow.jpg',
];

const mock_images = mock_urls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main>
      <div className='flex flex-wrap gap-4'>
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}

        {mock_images.map((image) => (
          <div
            key={image.id}
            className='w-48'
          >
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
