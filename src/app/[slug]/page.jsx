'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import BlogFooter from '../../components/Blog/BlogFooter';
import { blogPosts } from '../../data/blogData';
import styles from '../../components/Blog/Blog.module.css';

function renderInlineText(text) {
  const lines = text.split('\n');

  return lines.flatMap((line, lineIndex) => {
    const segments = line.split(/(\^[^^]+\^)/g);
    const rendered = segments.map((segment, index) => {
      if (segment.startsWith('^') && segment.endsWith('^')) {
        return <sup key={`${lineIndex}-${index}`}>{segment.slice(1, -1)}</sup>;
      }

      return segment.replace(/\/\/(.*?)\/\//g, '$1');
    });

    if (lineIndex < lines.length - 1) {
      return [...rendered, <br key={`br-${lineIndex}`} />];
    }

    return rendered;
  });
}

function renderContentBlock(block, index) {
  if (block.type === 'heading') {
    return <h2 key={index}>{renderInlineText(block.text)}</h2>;
  }

  if (block.type === 'paragraph') {
    return <p key={index}>{renderInlineText(block.text)}</p>;
  }

  return null;
}

const postMetaItems = [
  { key: 'publication', icon: Calendar, getValue: (post) => post.date },
  { key: 'author', icon: User, getValue: (post) => post.author },
  { key: 'tag', icon: Tag, getValue: (post) => post.tag, nextLine: true },
];

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen">
        <main className={styles.postLayout}>
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <Link href="/" className={styles.backButton}>
              <ArrowLeft size={16} /> Back to Blog
            </Link>
          </div>
        </main>
        <BlogFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <main className={styles.postLayout}>
        <article className={styles.postHeader}>
          <h1 className={styles.postTitle}>{post.title}</h1>

          <div className={styles.postMeta}>
            {postMetaItems.map(({ key, icon: Icon, getValue, nextLine }) => (
              <div
                key={key}
                className={`${styles.postMetaItem}${nextLine ? ` ${styles.postMetaItemNextLine}` : ''}`}
              >
                <Icon size={14} className={styles.postMetaIcon} aria-hidden="true" />
                <span className={styles.postMetaValue}>{getValue(post)}</span>
              </div>
            ))}
          </div>
        </article>

        <div className={styles.postContent}>
          {post.content.map((block, index) => renderContentBlock(block, index))}
        </div>
      </main>
      <BlogFooter />
    </div>
  );
}
