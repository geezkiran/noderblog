import React from 'react';
import { motion } from 'framer-motion';
import styles from './TrustedSection.module.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
});

export default function TrustedSection() {
  return (
    <section className={styles.trustedSection}>
      <motion.div {...fadeUp(0)}>
        <p className={styles.trustedText}>Trusted by innovative teams worldwide</p>
        <div className={styles.trustedLogosContainer}>
          <div className={styles.trustedLogosTrack}>
            <div className={styles.trustedLogosGroup}>
              <span className={styles.trustedLogo}>Acme Corp</span>
              <span className={styles.trustedLogo}>Globex</span>
              <span className={styles.trustedLogo}>Soylent</span>
              <span className={styles.trustedLogo}>Initech</span>
              <span className={styles.trustedLogo}>Umbrella</span>
            </div>
            <div className={styles.trustedLogosGroup} aria-hidden="true">
              <span className={styles.trustedLogo}>Acme Corp</span>
              <span className={styles.trustedLogo}>Globex</span>
              <span className={styles.trustedLogo}>Soylent</span>
              <span className={styles.trustedLogo}>Initech</span>
              <span className={styles.trustedLogo}>Umbrella</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
