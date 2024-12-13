'use client';

import { modalStyles } from './styles';
import { LoginModalProps } from './types';

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
        
        <h2 className={modalStyles.title}>Log in to your account</h2>
        
        <form className={modalStyles.form} onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className={modalStyles.formGroup.label}>Email</label>
            <input 
              type="email" 
              className={modalStyles.formGroup.input}
            />
          </div>
          
          <div>
            <label className={modalStyles.formGroup.label}>Password</label>
            <input 
              type="password" 
              className={modalStyles.formGroup.input}
            />
          </div>
          
          <button 
            type="submit"
            className={modalStyles.submitButton}
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
} 