'use client';

import { modalStyles } from './styles';
import { SignupModalProps } from './types';

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
        
        <h2 className={modalStyles.title}>Create your account</h2>
        
        <form className={modalStyles.form} onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className={modalStyles.formGroup.label}>Full Name</label>
            <input 
              type="text" 
              className={modalStyles.formGroup.input}
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className={modalStyles.formGroup.label}>Email</label>
            <input 
              type="email" 
              className={modalStyles.formGroup.input}
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label className={modalStyles.formGroup.label}>Password</label>
            <input 
              type="password" 
              className={modalStyles.formGroup.input}
              placeholder="Create a password"
            />
          </div>
          
          <button 
            type="submit"
            className={modalStyles.submitButton}
          >
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
} 