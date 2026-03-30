import { blogPosts } from '../../data/blogData';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://noder.blog';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: 'Post Not Found | Noder' };
  }

  const postUrl = `${BASE_URL}/${post.slug}`;

  return {
    metadataBase: new URL(BASE_URL),
    title: `${post.title} | Noder`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      siteName: 'Noder',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image.src,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image.src],
    },
  };
}

export default function SlugLayout({ children }) {
  return children;
}
