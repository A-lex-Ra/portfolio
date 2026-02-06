'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleLanguage = () => {
        const newLang = language === 'en' ? 'ru' : 'en';
        setLanguage(newLang);

        // Update URL with new lang parameter (client-side only)
        if (typeof window !== 'undefined') {
            const url = new URL(window.location.href);
            url.searchParams.set('lang', newLang);
            window.history.pushState({}, '', url.toString());
        }
    };

    return (
        <button className={styles.container} onClick={toggleLanguage} aria-label="Switch Language">
            <span className={styles.flag}>
                <Image src="/portfolio/globe.svg" alt="Language" width={20} height={20} priority />
            </span>
            <span className={styles.label}>
                {language}
            </span>
        </button>
    );
};

export default LanguageSwitcher;
