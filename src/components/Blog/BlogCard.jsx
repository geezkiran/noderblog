'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock3, ArrowRight } from 'lucide-react';
import styles from './Blog.module.css';

export default function BlogCard({ post, index }) {
  return (
    <motion.div
      className={styles.blogCard}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link href={`/${post.slug}`} className={styles.cardLink}>
        <div className={styles.cardImageContainer}>
          <img src={post.image.src} alt={post.title} className={styles.cardImage} />
          <div className={styles.categoryBadge}>Article</div>
        </div>
        <div className={styles.cardContent}>
          <h3 className={`${styles.cardTitle} ${styles.clampOneLine}`}>{post.title}</h3>
          <p className={`${styles.cardExcerpt} ${styles.clampTwoLines}`}>{post.excerpt}</p>

          <div className={styles.cardMeta}>
            <span className={`${styles.metaItem} ${styles.dateMeta}`}>
              <Calendar size={12} /> {post.date}
            </span>
            <span className={styles.metaItem}>
              <Clock3 size={14} /> {post.readTime}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
