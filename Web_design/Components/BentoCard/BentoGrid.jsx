import styles from './BentoGrid.module.css';
import { ToggleRight, ArrowLeftRight } from 'lucide-react';

const bentoItems = [
  {
    icon: <ToggleRight size={20} color="#e8e8e8" strokeWidth={1.5} />,
    title: 'Advanced code-switching',
    description:
      'Advanced recognition handles natural multilingual conversations without errors.',
  },
  {
    icon: <ArrowLeftRight size={20} color="#e8e8e8" strokeWidth={1.5} />,
    title: 'Any-to-any translation',
    description: 'Ensures seamless communication across all supported languages.',
  },
];

export default function BentoGrid() {
  return (
    <section className={styles.wrapper}>

      {/* ── Desktop layout ── */}
      <div className={styles.desktopGrid}>

        {/* Left — large image card */}
        <div className={`${styles.card} ${styles.imageCard}`}>
          {/* Replace src with your actual image path */}
          <img
            src="/your-image.webp"
            alt="Feature visual"
            className={styles.image}
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>

        {/* Right — 2 stacked text cards */}
        <div className={styles.stackedCol}>
          {bentoItems.map((item, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.iconWrap}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          ))}
        </div>

      </div>

      {/* ── Mobile layout ── */}
      <div className={styles.mobileGrid}>
        <div className={`${styles.card} ${styles.imageCard}`}>
          <img
            src="/your-image.webp"
            alt="Feature visual"
            className={styles.image}
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
        {bentoItems.map((item, i) => (
          <div className={styles.card} key={i}>
            <div className={styles.iconWrap}>{item.icon}</div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDesc}>{item.description}</p>
          </div>
        ))}
      </div>

    </section>
  );
}
