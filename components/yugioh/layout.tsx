import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import React from 'react';

const name = 'Cody Berndt';
export const siteTitle = 'Cody Berndt';

// : { children: any, home?: boolean }
export default function Layout({ children, home = false }) {
  return (
    <div className={styles.container}>
      <Head>

      </Head>
      <header className={styles.header}>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}