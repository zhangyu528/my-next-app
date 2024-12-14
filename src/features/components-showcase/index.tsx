'use client';

import ArrowButton from '@/components/base/ArrowButton';
import Button from '@/components/base/Button';
import Input from '@/components/base/Input';
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

      {/* Inputs Section */}
      <section className={componentPageStyles.section}>
        <h2 className={componentPageStyles.sectionTitle}>Inputs</h2>
        
        {/* Input Variants */}
        <div className="mb-8">
          <h3 className={componentPageStyles.componentTitle}>Input Variants:</h3>
          <div className="space-y-4 max-w-md">
            <Input 
              variant="default" 
              placeholder="Default Input"
            />
            <Input 
              variant="search" 
              placeholder="Search Input"
            />
            <Input 
              variant="minimal" 
              placeholder="Minimal Input"
            />
          </div>
        </div>

        {/* Input Sizes */}
        <div className="mb-8">
          <h3 className={componentPageStyles.componentTitle}>Input Sizes:</h3>
          <div className="space-y-4 max-w-md">
            <Input 
              size="sm" 
              placeholder="Small Input"
            />
            <Input 
              size="md" 
              placeholder="Medium Input"
            />
            <Input 
              size="lg" 
              placeholder="Large Input"
            />
          </div>
        </div>

        {/* Input States */}
        <div className="mb-8">
          <h3 className={componentPageStyles.componentTitle}>Input States:</h3>
          <div className="space-y-4 max-w-md">
            <Input 
              placeholder="Normal Input"
            />
            <Input 
              error 
              placeholder="Error Input"
            />
            <Input 
              success 
              placeholder="Success Input"
            />
            <Input 
              disabled 
              placeholder="Disabled Input"
            />
          </div>
        </div>
      </section>

      {/* Component Information */}
      <section className={componentPageStyles.infoSection}>
        <h2 className={componentPageStyles.sectionTitle}>Component Information</h2>
        <div className={componentPageStyles.infoCard}>
          <h3 className="text-lg font-medium mb-2">Features:</h3>
          <ul className={componentPageStyles.infoList}>
            <li>Buttons: Three variants with arrow animation option</li>
            <li>Inputs: Multiple variants, sizes and states</li>
            <li>Hover Effects: Color transitions, animations</li>
            <li>State Management: Error, success, and disabled states</li>
          </ul>
        </div>
      </section>
    </div>
  );
} 