'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { pageStyles, featureItems } from './page.styles';

export default function Home() {
  const [email, setEmail] = useState('');

  return (
    <div className={pageStyles.wrapper}>
      <Navbar logo="Your Logo" />
      
      <main className={pageStyles.main}>
        {/* Hero 区域 */}
        <div className={pageStyles.hero.container}>
          <h1 className={pageStyles.hero.title}>
            Build something amazing
          </h1>
          <p className={pageStyles.hero.subtitle}>
            Create, collaborate, and ship your best work faster than ever
          </p>
          
          {/* 邮件订阅 */}
          <div className={pageStyles.form.container}>
            <form className={pageStyles.form.wrapper} onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={pageStyles.form.input}
              />
              <button className={pageStyles.form.button}>
                Get Started
              </button>
            </form>
          </div>
        </div>

        {/* 特性列表 */}
        <div className={pageStyles.features.container}>
          <div className={pageStyles.features.grid}>
            {featureItems.map((feature, index) => (
              <div
                key={index}
                className={pageStyles.features.card}
              >
                <h3 className={pageStyles.features.title}>{feature.title}</h3>
                <p className={pageStyles.features.description}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className={pageStyles.footer.wrapper}>
        <div className={pageStyles.footer.container}>
          <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
