"use client";

import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

export const useAnimations = () => {
  
  // Stagger in animation for grid items
  const animateGridItems = (selector: string, delay: number = 0) => {
    animate(selector, {
      opacity: [0, 1],
      translateY: [30, 0],
      scale: [0.95, 1],
      duration: 800,
      delay: stagger(100, { start: delay }),
      easing: 'easeOutCubic'
    });
  };

  // Fade in animation
  const fadeIn = (selector: string, delay: number = 0) => {
    animate(selector, {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
      delay,
      easing: 'easeOutQuart'
    });
  };

  // Scale in animation
  const scaleIn = (selector: string, delay: number = 0) => {
    animate(selector, {
      opacity: [0, 1],
      scale: [0.8, 1],
      duration: 500,
      delay,
      easing: 'easeOutBack'
    });
  };

  // Slide in from direction
  const slideIn = (selector: string, direction: 'left' | 'right' | 'up' | 'down', delay: number = 0) => {
    const params = {
      opacity: [0, 1] as [number, number],
      duration: 700,
      delay,
      easing: 'easeOutCubic' as const
    };

    switch (direction) {
      case 'left':
        animate(selector, { ...params, translateX: [-50, 0] });
        break;
      case 'right':
        animate(selector, { ...params, translateX: [50, 0] });
        break;
      case 'up':
        animate(selector, { ...params, translateY: [-30, 0] });
        break;
      case 'down':
        animate(selector, { ...params, translateY: [30, 0] });
        break;
    }
  };

  // Pulse animation
  const pulse = (selector: string, scale: number = 1.05) => {
    animate(selector, {
      scale: [1, scale, 1],
      duration: 1500,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine'
    });
  };

  // Hover effect
  const hoverEffect = (element: HTMLElement, scale: number = 1.02) => {
    const handleMouseEnter = () => {
      animate(element, {
        scale: scale,
        duration: 200,
        easing: 'easeOutQuart'
      });
    };

    const handleMouseLeave = () => {
      animate(element, {
        scale: 1,
        duration: 200,
        easing: 'easeOutQuart'
      });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  };

  // Language switch animation
  const languageSwitch = (selector: string) => {
    animate(selector, {
      opacity: [0, 1],
      rotateX: [90, 0],
      duration: 400,
      easing: 'easeOutCubic'
    });
  };

  // Pixel accent animation
  const pixelAccentAnimation = (selector: string, delay: number = 200) => {
    animate(selector, {
      scaleY: [0, 1],
      duration: 600,
      delay,
      easing: 'easeOutCubic'
    });
  };

  // Progress bar animation
  const progressBar = (selector: string, width: string | number) => {
    animate(selector, {
      width: width,
      duration: 1000,
      easing: 'easeOutCubic'
    });
  };

  // Divider animation
  const animateDivider = (selector: string, delay: number = 0) => {
    animate(selector, {
      scaleX: [0, 1],
      duration: 800,
      delay,
      easing: 'easeOutCubic'
    });
  };

  return {
    animateGridItems,
    fadeIn,
    scaleIn,
    slideIn,
    pulse,
    hoverEffect,
    languageSwitch,
    pixelAccentAnimation,
    progressBar,
    animateDivider
  };
};

// Hook for entrance animations on component mount
export const useEntranceAnimation = (selector: string, animationType: 'fade' | 'scale' | 'slide' = 'fade', delay: number = 0) => {
  const hasAnimated = useRef(false);
  const { fadeIn, scaleIn, slideIn } = useAnimations();

  useEffect(() => {
    if (hasAnimated.current) return;
    
    const timer = setTimeout(() => {
      switch (animationType) {
        case 'fade':
          fadeIn(selector, delay);
          break;
        case 'scale':
          scaleIn(selector, delay);
          break;
        case 'slide':
          slideIn(selector, 'up', delay);
          break;
      }
      hasAnimated.current = true;
    }, 50);

    return () => clearTimeout(timer);
  }, [selector, animationType, delay, fadeIn, scaleIn, slideIn]);
};

// Hook for hover animations
export const useHoverAnimation = (scale: number = 1.02) => {
  const elementRef = useRef<HTMLElement>(null);
  const { hoverEffect } = useAnimations();

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    return hoverEffect(element, scale);
  }, [scale, hoverEffect]);

  return elementRef;
};