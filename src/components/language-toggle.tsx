"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { animate } from "animejs";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'th' : 'en');
  };


  // Hover effects
  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseEnter = () => {
      animate(button, {
        scale: 1.05,
        duration: 200,
        easing: 'easeOutQuart'
      });
    };

    const handleMouseLeave = () => {
      animate(button, {
        scale: 1,
        duration: 200,
        easing: 'easeOutQuart'
      });
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <Button
      ref={buttonRef}
      onClick={toggleLanguage}
      variant="outline"
      size="sm"
      className="border-pixel-blue text-pixel-blue hover:bg-pixel-blue hover:text-white transition-colors duration-200 font-mono relative overflow-hidden"
    >
      <Languages className="w-4 h-4 mr-2" />
      <span className="inline-block">
        {language === 'en' ? 'ไทย' : 'EN'}
      </span>
    </Button>
  );
}