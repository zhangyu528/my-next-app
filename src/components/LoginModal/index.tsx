'use client';

import { modalStyles } from './styles';
import { LoginModalProps } from './types';
import GithubIcon from '../icons/GithubIcon';
import ArrowButton from '@/components/base/Button/variants/ArrowButton';
import Input from '@/components/base/Input';

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
            <Input 
              type="email" 
              placeholder="Email"
              inputSize="md"
            />
          </div>
          
          <div>
            <Input 
              type="password" 
              placeholder="Password"
              inputSize="md"
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