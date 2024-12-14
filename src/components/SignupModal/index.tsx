'use client';

import { modalStyles } from './styles';
import { SignupModalProps } from './types';
import GithubIcon from '../icons/GithubIcon';

export default function SignupModal({ isOpen, onClose }: SignupModalProps) {
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
        
        <h2 className={`${modalStyles.title} text-center`}>Welcome to Next app</h2>
        
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
            <label className={modalStyles.formGroup.label}>Email</label>
            <input 
              type="email" 
              className={modalStyles.formGroup.input}
              placeholder="Enter your email"
            />
          </div>
          
          <button 
            type="submit"
            className={modalStyles.submitButton}
          >
            Continue with Email
          </button>
        </form>
      </div>
    </div>
  );
} 