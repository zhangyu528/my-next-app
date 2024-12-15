'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import ArrowButton from '@/components/base/Button/variants/ArrowButton';
import SignupModal from '@/components/SignupModal';
import { pageStyles } from './page.styles';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <div className={pageStyles.wrapper}>
        <main className={pageStyles.main}>
          {/* Hero Section */}
          <div className={pageStyles.hero.wrapper}>
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
                onClick={() => setIsModalOpen(true)}
              >
                Get started for free
              </ArrowButton>
            </div>
          </div>

          {/* Stats Section */}
          <div className={pageStyles.stats.wrapper}>
            <div className={pageStyles.stats.container}>
              <div className={pageStyles.stats.item}>
                <div className={pageStyles.stats.number}>10M+</div>
                <div className={pageStyles.stats.label}>Active Users</div>
              </div>
              <div className={pageStyles.stats.item}>
                <div className={pageStyles.stats.number}>99.9%</div>
                <div className={pageStyles.stats.label}>Uptime SLA</div>
              </div>
              <div className={pageStyles.stats.item}>
                <div className={pageStyles.stats.number}>24/7</div>
                <div className={pageStyles.stats.label}>Support</div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className={pageStyles.features.wrapper}>
            <div className={pageStyles.features.container}>
              <h2 className={pageStyles.features.title}>
                Everything you need to succeed
              </h2>
              <div className={pageStyles.features.grid}>
                {[
                  {
                    title: 'Real-time Collaboration',
                    description: 'Work together with your team in real-time, see changes as they happen.'
                  },
                  {
                    title: 'Advanced Analytics',
                    description: 'Get detailed insights into your project performance and team productivity.'
                  },
                  {
                    title: 'Enterprise Security',
                    description: 'Bank-grade security with end-to-end encryption and compliance features.'
                  }
                ].map((feature, index) => (
                  <div key={index} className={pageStyles.features.card}>
                    <h3 className={pageStyles.features.cardTitle}>{feature.title}</h3>
                    <p className={pageStyles.features.cardText}>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className={pageStyles.cta.wrapper}>
            <div className={pageStyles.cta.container}>
              <h2 className={pageStyles.cta.title}>Ready to get started?</h2>
              <p className={pageStyles.cta.text}>
                Join thousands of teams already using our platform
              </p>
              <ArrowButton 
                styleType="primary"
                className={pageStyles.cta.button}
                onClick={() => setIsModalOpen(true)}
              >
                Start your free trial
              </ArrowButton>
            </div>
          </div>
        </main>
      </div>

      <SignupModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
