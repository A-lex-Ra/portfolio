"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PortfolioItem } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';
import styles from './page.module.css';
import Markdown from 'react-markdown';

interface Props {
    project: PortfolioItem;
    details?: Record<string, string>;
}

// Use react-markdown for rendering markdown content

export default function ProjectContent({ project, details }: Props) {
    const { language } = useLanguage();

    return (
        <div className={styles.container}>
            <Link href="/" className={styles.backLink}>
                ← Back to Portfolio
            </Link>

            {/* Hero Section */}
            <div className={styles.hero}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={project.imageUrl}
                        alt={project.title[language]}
                        width={800}
                        height={500}
                        className={styles.heroImage}
                        priority
                    />
                </div>
                <div className={styles.heroContent}>
                    <h1>{project.title[language]}</h1>
                    <p className={styles.description}>
                        {project.shortDescription[language]}
                    </p>
                    <div className={styles.tags}>
                        {project.tags.map((tag) => (
                            <span key={tag} className={styles.tag}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Markdown Content */}
            {details && (
                <div className={styles.content}>
                    <Markdown children={details[language as keyof typeof details]} />
                </div>
            )}

            {/* External Link */}
            {project.link && project.link !== '#' && (
                <div className={styles.footer}>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.externalLink}>
                        View Live Project →
                    </a>
                </div>
            )}
        </div>
    );
}
