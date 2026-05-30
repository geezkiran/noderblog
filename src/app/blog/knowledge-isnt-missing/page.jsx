'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Article.module.css';

export default function ArticlePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.articlePage}>
      {/* 1. ARTICLE HEADER */}
      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
        <Link href="/" className={styles.logo}>
          Noder
        </Link>
        <Link href="https://noderhq.com" className={styles.navLink}>
          noderhq.com &rarr;
        </Link>
      </header>

      {/* 2. HERO / TITLE BLOCK */}
      <section className={styles.hero}>
        <span className={styles.eyebrow}>
          Noder Blog &nbsp;&middot;&nbsp; Learning Infrastructure
        </span>
        <h1 className={styles.title}>
          Knowledge Isn't Missing &mdash; It's Inaccessible
        </h1>
        <p className={styles.subtitle}>
          We don't have a knowledge problem. We have a navigation problem.
        </p>

        <div className={styles.metaRow}>
          <span className={styles.metaItem}>May 2025</span>
          <span className={styles.separator}>&middot;</span>
          <span className={styles.metaItem}>6 min read</span>
          <span className={styles.separator}>&middot;</span>
          <span className={styles.metaItem}>Kiran</span>
        </div>
      </section>

      {/* 3. ARTICLE BODY */}
      <article className={styles.bodyContainer}>
        <p>
          In the last decade, we have successfully digitized the sum total of human output. From 
          scholarly journals to the chaotic streams of social media, the world's knowledge is 
          ostensibly at our fingertips. Yet, the experience of modern learning often feels like 
          drowning in a sea of contextless data.
        </p>

        <p>
          We are currently living through a paradox: we have never had more access to 
          information, yet we have never found it more difficult to turn that information into 
          functional knowledge. The missing link isn't the data itself—it's the <strong>infrastructure 
          of accessibility</strong>.
        </p>

        <h2 data-counter="01">The Navigation Crisis</h2>
        <p>
          Search engines were designed to find documents, not answers. They index strings, not 
          concepts. When a learner asks a complex question today, they aren't looking for a list 
          of ten blue links; they are looking for a path through a territory they don't yet 
          understand.
        </p>
        
        <p>
          The burden of synthesis has been placed entirely on the individual. We expect 
          students, researchers, and professionals to be their own librarians, curators, and 
          architects of information.
        </p>

        <p>
          This cognitive load is the "hidden tax" on modern curiosity. For every hour spent 
          actually learning, two hours are spent searching, verifying, and organizing. 
          The efficiency of our learning tools has not scaled with the volume of our data.
        </p>

        {/* 4. PULL QUOTE */}
        <div className={styles.pullQuote}>
          <blockquote className={styles.pullQuoteText}>
            The problem isn't that knowledge doesn't exist &mdash; 
            it's that there's no infrastructure to navigate to it.
          </blockquote>
        </div>

        <h2 data-counter="02">The Architecture of Insight</h2>
        <p>
          Traditional tools prioritize <strong>storage</strong> over <strong>retrieval</strong>. 
          We have become masters of the digital "junk drawer"—saving articles we'll never read, 
          bookmarking threads we'll never revisit, and hoarding PDFs that sit in dark folders 
          until the hard drive is wiped.
        </p>

        <p>
          To solve the inaccessibility problem, we must transition from a search-based 
          paradigm to a navigation-based one. This requires three fundamental shifts:
        </p>

        <ol>
          <li><strong>Relational Mapping:</strong> Understanding how one concept anchors another.</li>
          <li><strong>Contextual Awareness:</strong> Surfacing information based on the user's current mental model.</li>
          <li><strong>Active Synthesis:</strong> Tools that help bridge the gap between "reading" and "understanding."</li>
        </ol>

        <p>
          When we build infrastructure that understands the <em>topology</em> of knowledge, 
          learning stops being an act of hunting and starts being an act of exploration. 
          It becomes cinematic. It becomes precise.
        </p>

        <h2 data-counter="03">Data & The Overload</h2>
        <p>
          The numbers tell a story of a system nearing its breaking point. Information 
          overload is no longer a buzzword; it is a measurable drag on human potential.
        </p>

        {/* 5. STAT CALLOUT BLOCK */}
        <div className={styles.statGrid}>
          <div className={styles.statCell}>
            <div className={styles.statNumber}>65%</div>
            <div className={styles.statLabel}>of learners</div>
            <p className={styles.statContext}>
              Report feeling "overwhelmed" by the sheer volume of available resources in their field.
            </p>
          </div>
          <div className={styles.statCell}>
            <div className={styles.statNumber}>18m</div>
            <div className={styles.statLabel}>lost hours</div>
            <p className={styles.statContext}>
              Estimated weekly productivity lost to inefficient information retrieval in corporate environments.
            </p>
          </div>
        </div>

        <h3>The Noder Approach</h3>
        <p>
          At <Link href="https://noderhq.com">Noder</Link>, we aren't building another database. 
          We are building a compass. By treating knowledge as a dynamic, interconnected 
          web rather than a static library, we enable a level of fluidity that was 
          previously impossible.
        </p>

        <p>
          It is time to stop asking where the knowledge is. It's time to start asking why we 
          can't reach it. The future of learning isn't more content—it's better paths.
        </p>

        <hr />


      </article>
    </div>
  );
}
