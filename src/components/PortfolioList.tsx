'use client';

import React from 'react';
import { portfolioItems } from '@/data/portfolio';
import PortfolioItem from './PortfolioItem';
import styles from './PortfolioList.module.css';

const PortfolioList = () => {
    return (
        <div className={styles.grid}>
            {portfolioItems.map(item => (
                <PortfolioItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default PortfolioList;
