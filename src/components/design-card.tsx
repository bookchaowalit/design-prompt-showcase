"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Copy, Check, Eye } from "lucide-react";
import { DesignType } from "@/data/designs";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAnimations } from "@/hooks/useAnimations";
import { animate } from "animejs";

interface DesignCardProps {
  design: DesignType;
}

export function DesignCard({ design }: DesignCardProps) {
  const [copied, setCopied] = useState(false);
  const { language, t } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);
  const {} = useAnimations();

  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(design.prompt);
      setCopied(true);
      
      // Copy animation
      animate('.copy-button', {
        scale: [1, 1.1, 1],
        duration: 300,
        easing: 'easeOutBack'
      });
      
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const getCategoryTranslation = (category: string): string => {
    const categoryKey = `category.${category.toLowerCase().replace(/[^a-z0-9]/g, '')}`;
    const translated = t(categoryKey);
    return translated === categoryKey ? category : translated;
  };

  // Card hover effects
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => {
      animate(card, {
        scale: 1.02,
        translateY: -4,
        duration: 300,
        easing: 'easeOutCubic'
      });

      // Animate pixel accent line
      const accentEl = card.querySelector('.card-pixel-accent');
      if (accentEl) {
        animate(accentEl, {
          scaleX: [0, 1],
          duration: 400,
          easing: 'easeOutCubic'
        });
      }
    };

    const handleMouseLeave = () => {
      animate(card, {
        scale: 1,
        translateY: 0,
        duration: 300,
        easing: 'easeOutCubic'
      });

      // Hide pixel accent
      const accentEl = card.querySelector('.card-pixel-accent');
      if (accentEl) {
        animate(accentEl, {
          scaleX: 0,
          duration: 200,
          easing: 'easeOutCubic'
        });
      }
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <Card ref={cardRef} className="retro-card overflow-hidden h-full flex flex-col relative">
      {/* Pixel accent line for hover */}
      <div className="card-pixel-accent absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pixel-blue via-pixel-pink to-pixel-green transform scale-x-0 origin-left"></div>
      
      <CardHeader className="pb-4">
        {/* Gradient header with pixel accent */}
        <div className={`h-32 rounded-lg bg-gradient-to-br ${design.gradient} mb-4 relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute bottom-3 right-3">
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-white/90 text-gray-900 rounded text-xs font-mono font-medium">
              <div className="w-2 h-2 bg-pixel-blue rounded-full"></div>
              {getCategoryTranslation(design.category)}
            </span>
          </div>
        </div>
        
        <CardTitle className="text-xl font-semibold text-foreground leading-tight mb-3">
          {design.title[language]}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col">
        <p className="text-muted-foreground leading-relaxed mb-4 flex-1">
          {design.description[language]}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {design.tags.slice(0, 4).map((tag) => (
            <span 
              key={tag} 
              className="inline-flex items-center gap-1 px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs mono-text transform transition-transform hover:scale-105"
            >
              <div className="w-1 h-1 bg-pixel-pink rounded-full"></div>
              {tag}
            </span>
          ))}
          {design.tags.length > 4 && (
            <span className="px-2 py-1 text-xs text-muted-foreground mono-text">
              +{design.tags.length - 4}
            </span>
          )}
        </div>

        {/* Dialog Trigger */}
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              className="pixel-button w-full relative overflow-hidden"
              size="sm"
            >
              <span className="relative z-10 flex items-center justify-center">
                <Eye className="w-4 h-4 mr-2" />
                {t('button.viewPrompt')}
              </span>
            </Button>
          </DialogTrigger>
          
          <DialogContent className="bg-card border-border max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader className="pb-4">
              <DialogTitle className="text-2xl font-semibold text-foreground flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-pixel-blue to-pixel-pink rounded-full"></div>
                {design.title[language]}
              </DialogTitle>
              <p className="text-muted-foreground text-lg leading-relaxed pt-2">
                {design.description[language]}
              </p>
            </DialogHeader>
            
            <div className="space-y-6">
              {/* Category */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-pixel-green rounded-full"></div>
                  {t('modal.category')}
                </h4>
                <span className="inline-flex items-center gap-2 px-3 py-2 bg-secondary text-secondary-foreground rounded-lg mono-text font-medium">
                  <div className="w-2 h-2 bg-pixel-blue rounded-full"></div>
                  {getCategoryTranslation(design.category)}
                </span>
              </div>
              
              {/* Tags */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-pixel-pink rounded-full"></div>
                  {t('modal.tags')}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {design.tags.map((tag, index) => (
                    <span 
                      key={tag} 
                      className="inline-flex items-center gap-1 px-3 py-1 bg-secondary text-secondary-foreground rounded-md mono-text text-sm"
                    >
                      <div 
                        className={`w-1.5 h-1.5 rounded-full ${
                          index % 3 === 0 ? 'bg-pixel-blue' : 
                          index % 3 === 1 ? 'bg-pixel-pink' : 'bg-pixel-green'
                        }`}
                      ></div>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* AI Prompt */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-pixel-blue to-pixel-pink rounded-full"></div>
                    {t('modal.aiPrompt')}
                  </h4>
                  <Button
                    onClick={handleCopyPrompt}
                    variant="outline"
                    size="sm"
                    className="copy-button border-pixel-blue text-pixel-blue hover:bg-pixel-blue hover:text-white transition-all duration-200"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        {t('button.copied')}
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        {t('button.copyPrompt')}
                      </>
                    )}
                  </Button>
                </div>
                
                <div className="relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pixel-blue via-pixel-pink to-pixel-green rounded-t"></div>
                  <div className="bg-muted border border-border rounded-lg p-6 pt-8">
                    <p className="mono-text text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                      {design.prompt}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}