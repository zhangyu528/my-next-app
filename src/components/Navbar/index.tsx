'use client';

import { useState } from 'react';
import { navStyles } from '../../styles/theme/navbar';
import LoginModal from '../LoginModal';
import SignupModal from '../SignupModal';
import ArrowButton from '@/components/base/Button/variants/ArrowButton';
import LogoIcon from '../icons/LogoIcon';

export default function Navbar() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  return (
    <>
      <nav className={navStyles.nav.base}>
        <LogoIcon />
        <div className={navStyles.actionButtons.wrapper}>
          <ArrowButton 
            onClick={() => setIsLoginModalOpen(true)} 
            styleType="outline"
          >
            Log in
          </ArrowButton>
          <ArrowButton 
            onClick={() => setIsSignupModalOpen(true)}
            styleType="default"
          >
            Get started for free
          </ArrowButton>
        </div>
      </nav>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
      <SignupModal 
        isOpen={isSignupModalOpen} 
        onClose={() => setIsSignupModalOpen(false)} 
      />
    </>
  );
}