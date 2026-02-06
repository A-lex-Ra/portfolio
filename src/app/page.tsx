'use client';

import React from 'react';
import Header from '@/components/Header';
import PortfolioList from '@/components/PortfolioList';
import { useLanguage } from '@/context/LanguageContext';
import styles from './page.module.css';

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className={styles.main}>
      <Header />

      {/* <section className={styles.hero}>
        <h1 className={styles.title}>{t('role')}</h1>
        <p className={styles.subtitle}>{t('about')}</p>
      </section> */}

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('projects')}</h2>
        <PortfolioList />
      </section>
    </main>
  );
}
