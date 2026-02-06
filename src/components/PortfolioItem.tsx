'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PortfolioItem as PortfolioItemType } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';
import styles from './PortfolioItem.module.css';

interface Props {
    item: PortfolioItemType;
}

const PortfolioItem = ({ item }: Props) => {
    const { language, t } = useLanguage();

    return (
        <div className={styles.card}>
            {/* <div className={styles.imageContainer}>
                <Image
                    src={item.imageUrl}
                    alt={item.title[language]}
                    width={600}
                    height={400}
                    className={styles.image}
                />
            </div> */}
            <div className={styles.content}>
                <h3 className={styles.title}>{item.title[language]}</h3>
                <p className={styles.description}>{item.shortDescription[language]}</p>
                <div className={styles.tags}>
                    {item.tags.map(tag => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                </div>
                {
                    !item.noInfo && (
                    <Link href={`/projects/${item.id}`} className={styles.link}>
                    {t('viewProject')}
                    </Link>)
                }
            </div>
        </div>
    );
};

export default PortfolioItem;
