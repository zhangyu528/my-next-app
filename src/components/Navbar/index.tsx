'use client';

import { useState } from 'react';
import { navStyles } from './styles';
import LoginModal from '../LoginModal';
import SignupModal from '../SignupModal';
import ArrowButton from '@/components/base/ArrowButton';

export default function Navbar({ 
  logo = "Next App"
}) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  return (
    <>
      <nav className={navStyles.nav}>
        <div className={navStyles.container}>
          <div className={navStyles.logo}>{logo}</div>
          <div className={navStyles.itemsWrapper}>
            <ArrowButton 
              onClick={() => setIsLoginModalOpen(true)} 
              variant="outline"
            >
              Log in
            </ArrowButton>
            <ArrowButton 
              onClick={() => setIsSignupModalOpen(true)}
              variant="default"
            >
              Get started for free
            </ArrowButton>
          </div>
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