'use client';

import Navbar from '@/components/Navbar';
import ArrowButton from '@/components/base/Button/variants/ArrowButton';
import { pageStyles } from './page.styles';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={pageStyles.wrapper}>
        <main className={pageStyles.main}>
          <div className={pageStyles.hero.container}>
            <h1 className={pageStyles.hero.title}>
              Build something amazing
            </h1>
            <p className={pageStyles.hero.subtitle}>
              Create, collaborate, and ship your best work faster than ever before
            </p>
            <ArrowButton 
              styleType="primary"
              className={pageStyles.hero.button}
            >
              Get started for free
            </ArrowButton>
          </div>
        </main>
      </div>
    </>
  );
}
