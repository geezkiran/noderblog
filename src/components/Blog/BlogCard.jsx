'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
        </div>
      </Link>
    </motion.div>
  );
}
