"use client";

import { useState, useEffect } from "react";
import { designData, categories } from "@/data/designs";
import { DesignCard } from "@/components/design-card";
import { CategoryFilter } from "@/components/category-filter";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAnimations } from "@/hooks/useAnimations";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { t } = useLanguage();
  const { fadeIn, slideIn, animateGridItems, animateDivider, pixelAccentAnimation } = useAnimations();

  const filteredDesigns = selectedCategory === "All" 
    ? designData 
    : designData.filter(design => design.category === selectedCategory);

  // Initial page animations
  useEffect(() => {
    const timer = setTimeout(() => {
      // Header animations
      fadeIn('.header-title', 0);
      slideIn('.header-subtitle', 'up', 200);
      slideIn('.header-description', 'up', 300);
      pixelAccentAnimation('.pixel-accent-line', 400);
      animateDivider('.pixel-divider', 500);
      
      // Stats animations
      slideIn('.stats-container', 'up', 600);
      
      // Category filter animation
      slideIn('.category-filter', 'up', 700);
      
      // Language toggle
      slideIn('.language-toggle', 'down', 100);
      
      // Footer animation
      fadeIn('.footer-content', 800);
    }, 100);

    return () => clearTimeout(timer);
  }, [fadeIn, slideIn, animateDivider, pixelAccentAnimation]);

  // Animate grid when designs change
  useEffect(() => {
    const timer = setTimeout(() => {
      animateGridItems('.design-card', 0);
    }, 50);
    return () => clearTimeout(timer);
  }, [filteredDesigns, animateGridItems]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Language Toggle - Top Right */}
        <div className="flex justify-end mb-8 language-toggle opacity-0">
          <LanguageToggle />
        </div>

        {/* Header */}
        <header className="text-center mb-16">
          <div className="pixel-accent inline-block">
            <h1 className="header-title editorial-title text-4xl md:text-6xl mb-6 text-foreground opacity-0">
              {t('site.title')}
            </h1>
            <div className="pixel-accent-line w-1 h-8 bg-gradient-to-b from-pixel-blue to-pixel-pink rounded-full mx-auto mb-4 transform scale-y-0 origin-bottom"></div>
          </div>
          <p className="header-subtitle text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed opacity-0">
            {t('site.subtitle')}
          </p>
          <p className="header-description text-lg text-muted-foreground mb-8 max-w-2xl mx-auto opacity-0">
            {t('site.description')}
          </p>
          <div className="pixel-divider w-24 mx-auto mb-8 transform scale-x-0 origin-center"></div>
        </header>

        {/* Statistics */}
        <div className="stats-container flex justify-center gap-12 mb-12 opacity-0">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">
              {filteredDesigns.length}
            </div>
            <div className="mono-text text-muted-foreground">{t('stats.designTypes')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">
              {categories.length - 1}
            </div>
            <div className="mono-text text-muted-foreground">{t('stats.categories')}</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="category-filter opacity-0">
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* Design Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredDesigns.map((design) => (
            <div key={design.id} className="design-card opacity-0">
              <DesignCard design={design} />
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="footer-content text-center pt-16 border-t border-border opacity-0">
          <div className="pixel-divider w-16 mx-auto mb-6"></div>
          <p className="mono-text text-muted-foreground mb-2">
            {t('footer.builtWith')} <span className="text-pixel-blue">Next.js</span> + <span className="text-pixel-pink">TypeScript</span> + <span className="text-pixel-green">Tailwind CSS</span>
          </p>
          <p className="mono-text text-muted-foreground text-sm">
            {t('footer.designSystem')}
          </p>
        </footer>
      </div>
    </div>
  );
}