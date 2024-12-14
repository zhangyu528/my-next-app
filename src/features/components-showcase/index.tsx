'use client';

import ArrowButton from '@/components/base/ArrowButton';
import { useState } from 'react';
import LoginModal from '@/components/LoginModal';
import SignupModal from '@/components/SignupModal';
import { componentPageStyles } from './styles';

export default function ComponentsShowcase() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  return (
    <div className={componentPageStyles.wrapper}>
      <h1 className={componentPageStyles.title}>Components Showcase</h1>
      
      {/* Buttons Section */}
      <section className={componentPageStyles.section}>
        <h2 className={componentPageStyles.sectionTitle}>Buttons</h2>
        <div className="space-y-4">
          {/* Login Button */}
          <div>
            <h3 className={componentPageStyles.componentTitle}>Login Button:</h3>
            <div className={componentPageStyles.componentWrapper}>
              <ArrowButton 
                onClick={() => setIsLoginModalOpen(true)}
                variant="outline"
              >
                Log in
              </ArrowButton>
            </div>
          </div>

          {/* Signup Button */}
          <div>
            <h3 className={componentPageStyles.componentTitle}>Signup Button:</h3>
            <div className={componentPageStyles.componentWrapper}>
              <ArrowButton 
                onClick={() => setIsSignupModalOpen(true)}
                variant="default"
              >
                Get started for free
              </ArrowButton>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
      <SignupModal 
        isOpen={isSignupModalOpen} 
        onClose={() => setIsSignupModalOpen(false)} 
      />

      {/* Component Information */}
      <section className={componentPageStyles.infoSection}>
        <h2 className={componentPageStyles.sectionTitle}>Component Information</h2>
        <div className={componentPageStyles.infoCard}>
          <h3 className="text-lg font-medium mb-2">Button Interactions:</h3>
          <ul className={componentPageStyles.infoList}>
            <li>Hover on buttons to see text movement effect</li>
            <li>Click buttons to trigger respective modals</li>
            <li>Test modal close functionality</li>
          </ul>
        </div>
      </section>
    </div>
  );
} 