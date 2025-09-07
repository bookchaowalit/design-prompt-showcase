"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { animate } from "animejs";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  const getCategoryTranslation = (category: string): string => {
    const categoryKey = `category.${category.toLowerCase().replace(/[^a-z0-9]/g, '')}`;
    const translated = t(categoryKey);
    return translated === categoryKey ? category : translated;
  };

  const handleCategoryChange = (category: string) => {
    onCategoryChange(category);
  };

  // Add hover effects to category buttons
  useEffect(() => {
    const buttons = containerRef.current?.querySelectorAll('.category-tag');
    if (!buttons) return;

    const listeners: Array<() => void> = [];

    buttons.forEach((button) => {
      const handleMouseEnter = () => {
        if (!button.classList.contains('active')) {
          animate(button, {
            scale: 1.05,
            duration: 200,
            easing: 'easeOutQuart'
          });
        }
      };

      const handleMouseLeave = () => {
        if (!button.classList.contains('active')) {
          animate(button, {
            scale: 1,
            duration: 200,
            easing: 'easeOutQuart'
          });
        }
      };

      button.addEventListener('mouseenter', handleMouseEnter);
      button.addEventListener('mouseleave', handleMouseLeave);

      listeners.push(() => {
        button.removeEventListener('mouseenter', handleMouseEnter);
        button.removeEventListener('mouseleave', handleMouseLeave);
      });
    });

    return () => {
      listeners.forEach(cleanup => cleanup());
    };
  }, [categories, selectedCategory]);


  return (
    <div ref={containerRef} className="mb-12">
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`category-tag transition-all duration-200 ${selectedCategory === category ? 'active' : ''}`}
          >
            {category === 'All' ? t('category.all') : getCategoryTranslation(category)}
          </button>
        ))}
      </div>
      
      {/* Active category indicator with pixel accent */}
      {selectedCategory !== "All" && (
        <div className="text-center">
          <div className="category-indicator inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-lg">
            <div className="w-2 h-2 bg-pixel-blue rounded-full pixel-pulse"></div>
            <span className="mono-text text-sm text-accent-foreground">
              {t('stats.showing')}: <span className="font-semibold text-pixel-blue">
                {getCategoryTranslation(selectedCategory)}
              </span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}