'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import styles from './Header.module.css';
import Link from 'next/link';

const Header = () => {
    const { t } = useLanguage();

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href={'https://github.com/A-lex-Ra'} className={styles.logo}>
                    {t('name')}
                </Link>
            </div>
            <nav className={styles.nav}>
                <LanguageSwitcher />
            </nav>
        </header>
    );
};

export default Header;
