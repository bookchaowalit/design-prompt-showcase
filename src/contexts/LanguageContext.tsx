"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type Language = 'en' | 'th';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('en');

  // Load language preference from localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'th')) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const langTranslations = translations[language] || translations.en;
    return (langTranslations as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Translation data
const translations = {
  en: {
    // Header
    'site.title': 'AI Design Prompt Collection',
    'site.subtitle': 'Curated AI Prompts for Creative Design',
    'site.description': 'Discover and copy AI prompts for various design styles - from pixel art to modern interfaces',
    
    // Navigation & Actions
    'language.switch': 'Switch to Thai',
    'category.all': 'All',
    'button.viewPrompt': 'View Prompt',
    'button.copyPrompt': 'Copy Prompt',
    'button.copied': 'Copied!',
    
    // Statistics
    'stats.designTypes': 'Design Types',
    'stats.categories': 'Categories',
    'stats.showing': 'Showing',
    
    // Modal
    'modal.category': 'Category',
    'modal.tags': 'Tags', 
    'modal.aiPrompt': 'AI Prompt',
    
    // Categories
    'category.retroGaming': 'Retro Gaming',
    'category.synthwave': 'Synthwave',
    'category.3dMinimalist': '3D Minimalist',
    'category.vectorDesign': 'Vector Design',
    'category.uiInterface': 'UI/Interface',
    'category.vaporwave': 'Vaporwave',
    'category.cinematic': 'Cinematic',
    'category.digitalArt': 'Digital Art',
    'category.materialDesign': 'Material Design',
    'category.textArt': 'Text Art',
    
    // Footer
    'footer.builtWith': 'Built with',
    'footer.designSystem': 'Modern Editorial × Pixel Retro Design System',
  },
  th: {
    // Header
    'site.title': 'คลังรวม AI Design Prompt',
    'site.subtitle': 'AI Prompts คัดสรรสำหรับการออกแบบ',
    'site.description': 'ค้นหาและคัดลอก AI prompts สำหรับสไตล์ดีไซน์ต่างๆ ตั้งแต่ pixel art ถึงอินเทอร์เฟซสมัยใหม่',
    
    // Navigation & Actions  
    'language.switch': 'Switch to English',
    'category.all': 'ทั้งหมด',
    'button.viewPrompt': 'ดูพรอมต์',
    'button.copyPrompt': 'คัดลอกพรอมต์',
    'button.copied': 'คัดลอกแล้ว!',
    
    // Statistics
    'stats.designTypes': 'รูปแบบดีไซน์',
    'stats.categories': 'หมวดหมู่',
    'stats.showing': 'กำลังแสดง',
    
    // Modal
    'modal.category': 'หมวดหมู่',
    'modal.tags': 'แท็ก',
    'modal.aiPrompt': 'AI Prompt',
    
    // Categories
    'category.retroGaming': 'เกมย้อนยุค',
    'category.synthwave': 'ซินธ์เวฟ',
    'category.3dMinimalist': '3D มินิมอล',
    'category.vectorDesign': 'เวกเตอร์ดีไซน์',
    'category.uiInterface': 'UI/อินเทอร์เฟซ',
    'category.vaporwave': 'เวเปอร์เวฟ',
    'category.cinematic': 'ซินีมาติก',
    'category.digitalArt': 'ดิจิทัลอาร์ต',
    'category.materialDesign': 'แมทีเรียลดีไซน์',
    'category.textArt': 'เท็กซ์อาร์ต',
    
    // Footer
    'footer.builtWith': 'สร้างด้วย',
    'footer.designSystem': 'ระบบดีไซน์ Editorial สมัยใหม่ × Pixel Retro',
  }
} as const;