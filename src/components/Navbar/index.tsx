'use client';

import { useState } from 'react';
import { navStyles } from './styles';
import LoginModal from '../LoginModal';
import SignupModal from '../SignupModal';
import LoginButton from '../LoginButton';
import SignupButton from '../SignupButton';

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
            <LoginButton onClick={() => setIsLoginModalOpen(true)} />
            <SignupButton onClick={() => setIsSignupModalOpen(true)} />
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