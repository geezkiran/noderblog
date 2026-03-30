'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Calendar, User, Clock3 } from 'lucide-react';
import BlogNavbar from '../../components/Blog/BlogNavbar';
import BlogFooter from '../../components/Blog/BlogFooter';
import BlogCard from '../../components/Blog/BlogCard';
import { blogPosts } from '../../data/blogData';
import styles from '../../components/Blog/Blog.module.css';

function renderInlineText(text) {
  const segments = text.split(/(\/\/.*?\/\/)/g);

  return segments.map((segment, index) => {
    if (segment.startsWith('//') && segment.endsWith('//')) {
      return (
        <span key={`${segment}-${index}`} className={styles.inlineHighlight}>
          {segment.slice(2, -2)}
        </span>
      );
    }

    return segment;
  });
}

function renderContentBlock(block, index) {
  if (block.type === 'heading') {
    const featuredHeadings = [
      'Why the Index Works: The Cognitive Science',
      'Why the Index Works | The Cognitive Science',
      'How to build a Learning Index',
      'Common Mistakes',
    ];
    const headingClassName = featuredHeadings.includes(block.text)
      ? styles.featuredHeading
      : undefined;

    return (
      <h2 key={index} className={headingClassName}>
        {renderInlineText(block.text)}
      </h2>
    );
  }

  if (block.type === 'quote') {
    return <blockquote key={index}>{renderInlineText(block.text)}</blockquote>;
  }

  if (block.type === 'list') {
    const ListTag = block.variant === 'ordered' ? 'ol' : 'ul';
    const listClassName = block.variant === 'ordered'
      ? `${styles.postList} ${styles.orderedList}`
      : `${styles.postList} ${styles.unorderedList}`;

    return (
      <ListTag key={index} className={listClassName}>
        {block.items.map((item) => (
          <li key={item}>{renderInlineText(item)}</li>
        ))}
      </ListTag>
    );
  }

  if (block.type === 'code') {
    return (
      <pre key={index} className={styles.codeBlock}>
        <code>{block.text}</code>
      </pre>
    );
  }

  return <p key={index}>{renderInlineText(block.text)}</p>;
}

export default function BlogPostPage() {
  const { slug } = useParams();

  const post = blogPosts.find((p) => p.slug === slug);
  const recommendedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen">
        <BlogNavbar />
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
      <BlogNavbar />
      <main className={styles.postLayout}>
        

        <article className={styles.postHeader}>
          <div className={styles.cardMeta}>
            <span className={styles.metaItem}>
              <Calendar size={14} /> {post.date}
            </span>
            <span className={styles.metaItem}>
              <User size={14} /> {post.author}
            </span>
            <span className={styles.metaItem}>
              <Clock3 size={14} /> {post.readTime}
            </span>
          </div>
          <h1 className={styles.postTitle}>{post.title}</h1>
        </article>

        <img src={post.image.src} alt={post.title} className={styles.postHeroImage} />
        <p className={styles.imageDescription}>{post.title}</p>

        <div className={styles.postContent}>
          {post.content.map((block, index) => renderContentBlock(block, index))}
        </div>

        {recommendedPosts.length > 0 && (
          <section className={styles.recommendSection}>
            <div className={styles.recommendHeader}>
              <p className={styles.recommendEyebrow}></p>
              <h2 className={styles.recommendTitle}>Also read</h2>
            </div>

            <div className={styles.recommendGrid}>
              {recommendedPosts.map((recommendedPost, i) => (
                <BlogCard key={recommendedPost.slug} post={recommendedPost} index={i} />
              ))}
            </div>
          </section>
        )}
      </main>
      <BlogFooter />
    </div>
  );
}
