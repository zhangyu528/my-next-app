'use client';

import { useState } from 'react';
import { navStyles, defaultNavItems } from './styles';
import LoginModal from '../LoginModal';
import SignupModal from '../SignupModal';
import { NavItem, NavbarProps } from './types';

export default function Navbar({ 
  logo = "Next App",
  items = defaultNavItems
}) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '/login') {
      e.preventDefault();
      setIsLoginModalOpen(true);
    } else if (href === '/signup') {
      e.preventDefault();
      setIsSignupModalOpen(true);
    }
  };

  return (
    <>
      <nav className={navStyles.nav}>
        <div className={navStyles.container}>
          <div className={navStyles.logo}>{logo}</div>
          <div className={navStyles.itemsWrapper}>
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleItemClick(e, item.href)}
                className={item.isButton ? navStyles.button : navStyles.link}
              >
                {item.label}
              </a>
            ))}
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