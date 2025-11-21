import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  icon = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg";
  
  const variants = {
    primary: "bg-brand-orange text-white hover:bg-orange-600 hover:shadow-orange-500/30",
    secondary: "bg-brand-blue text-white hover:bg-brand-darkBlue",
    outline: "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
      {icon && <ArrowRight className="ml-2 w-5 h-5" />}
    </button>
  );
};