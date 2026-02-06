import React from 'react';
import Link from 'next/link';
import { portfolioItems } from '@/data/portfolio';
import { projectDetails } from '@/data/projectDetails';
import styles from './page.module.css';
import ProjectContent from './ProjectContent';

interface Props {
    params: {
        id: string;
    };
}

// Generate static params for all projects (required for static export)
export async function generateStaticParams() {
    return portfolioItems.map((item) => ({
        id: item.id,
    }));
}

export default async function ProjectPage({ params }: Props) {
    // Await params (Next.js 15 behavior)
    const resolvedParams = await params;
    
    const project = portfolioItems.find((p) => p.id === resolvedParams.id);
    const details = projectDetails[resolvedParams.id as keyof typeof projectDetails];

    if (!project) {
        return (
            <div className={styles.container}>
                <Link href="/" className={styles.backLink}>
                    ← Back to Portfolio
                </Link>
                <p>Project not found</p>
            </div>
        );
    }

    return <ProjectContent project={project} details={details} />;
}

