'use client';

import ArrowButton from '@/components/base/ArrowButton';
import Button from '@/components/base/Button';
import { componentPageStyles } from './styles';

export default function ComponentsShowcase() {
  return (
    <div className={componentPageStyles.wrapper}>
      <h1 className={componentPageStyles.title}>Components Showcase</h1>
      
      {/* Buttons Section */}
      <section className={componentPageStyles.section}>
        <h2 className={componentPageStyles.sectionTitle}>Buttons</h2>
        
        {/* Basic Buttons */}
        <div className="mb-8">
          <h3 className={componentPageStyles.componentTitle}>Basic Buttons:</h3>
          <div className="flex gap-4">
            <Button variant="default">Default Button</Button>
            <Button variant="primary">Primary Button</Button>
            <Button variant="outline">Outline Button</Button>
          </div>
        </div>

        {/* Arrow Buttons */}
        <div className="space-y-4">
          <h3 className={componentPageStyles.componentTitle}>Arrow Buttons:</h3>
          <div className="flex gap-4">
            <ArrowButton variant="default">Default Arrow</ArrowButton>
            <ArrowButton variant="primary">Primary Arrow</ArrowButton>
            <ArrowButton variant="outline">Outline Arrow</ArrowButton>
          </div>
        </div>
      </section>

      {/* Component Information */}
      <section className={componentPageStyles.infoSection}>
        <h2 className={componentPageStyles.sectionTitle}>Component Information</h2>
        <div className={componentPageStyles.infoCard}>
          <h3 className="text-lg font-medium mb-2">Button Features:</h3>
          <ul className={componentPageStyles.infoList}>
            <li>Basic Buttons: Three variants (default, primary, outline)</li>
            <li>Arrow Buttons: Adds arrow animation and rounded corners transition</li>
            <li>Hover Effects: Color transitions, border changes</li>
            <li>Interactive Elements: Click handlers and modal triggers</li>
          </ul>
        </div>
      </section>
    </div>
  );
} 