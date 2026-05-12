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

      </div>
      <div className={styles.headerVisual}>
        <div className={styles.gridOverlay} />
      </div>
    </section>
  );
}
