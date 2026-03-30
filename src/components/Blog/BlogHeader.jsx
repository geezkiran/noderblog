'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Blog.module.css';
import logo from '../../app/assets/logoicon.png';

export default function BlogHeader() {
  return (
    <section className={styles.blogHeader}>
      <div className={styles.headerContent}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <Link href="/">
            <img src={logo.src} alt="Noder Logo" className={styles.title} width={150} />
          </Link>
          <p className={styles.description} style={{ maxWidth: '450px' }}>
            Insights, updates, and deep dives into the future of organized learning.
          </p>
        </motion.div>
      </div>
      <div className={styles.headerVisual}>
        <div className={styles.gridOverlay} />
      </div>
    </section>
  );
}
