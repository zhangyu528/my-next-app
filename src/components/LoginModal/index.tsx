'use client';

import { modalStyles } from './styles';
import { LoginModalProps } from './types';
import GithubIcon from '../icons/GithubIcon';
import ArrowButton from '@/components/base/ArrowButton';

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  if (!isOpen) return null;

  return (
    <div className={modalStyles.overlay}>
      <div className={modalStyles.container}>
        <button 
          onClick={onClose}
          className={modalStyles.closeButton}
        >
          ✕
        </button>
        
        <button 
          className={modalStyles.githubButton}
          onClick={() => {/* GitHub OAuth 逻辑 */}}
        >
          <GithubIcon />
          Continue with GitHub
        </button>

        <div className={modalStyles.divider}>
          <span>or</span>
        </div>
        
        <form className={modalStyles.form} onSubmit={(e) => e.preventDefault()}>
          <div>
            <input 
              type="email" 
              placeholder="Email"
              className={modalStyles.formGroup.input}
            />
          </div>
          
          <div>
            <input 
              type="password" 
              placeholder="Password"
              className={modalStyles.formGroup.input}
            />
          </div>
          
          <div className="w-full">
            <ArrowButton 
              onClick={() => {/* 登录逻辑 */}} 
              styleType="primary"
            >
              Log in
            </ArrowButton>
          </div>
        </form>
      </div>
    </div>
  );
} 