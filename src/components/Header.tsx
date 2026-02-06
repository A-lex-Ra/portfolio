'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import styles from './Header.module.css';

const Header = () => {
    const { t } = useLanguage();

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                {t('name')}
            </div>
            <nav className={styles.nav}>
                <LanguageSwitcher />
            </nav>
        </header>
    );
};

export default Header;
