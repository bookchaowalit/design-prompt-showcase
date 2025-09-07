"use client";

import { useState } from "react";
import { designData, categories } from "@/data/designs";
import { DesignCard } from "@/components/design-card";
import { CategoryFilter } from "@/components/category-filter";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredDesigns = selectedCategory === "All" 
    ? designData 
    : designData.filter(design => design.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="pixel-accent inline-block">
            <h1 className="editorial-title text-4xl md:text-6xl mb-6 text-foreground">
              AI Design <span className="gradient-text">Prompt</span> Collection
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
            คลังรวม AI Prompts สำหรับสร้างงานดีไซน์ในสไตล์ต่างๆ
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            พร้อมตัวอย่างและคำอธิบาย เพื่อค้นหาและใช้งานได้ง่าย
          </p>
          <div className="pixel-divider w-24 mx-auto mb-8"></div>
        </header>

        {/* Statistics */}
        <div className="flex justify-center gap-12 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">
              {filteredDesigns.length}
            </div>
            <div className="mono-text text-muted-foreground">Design Types</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">
              {categories.length - 1}
            </div>
            <div className="mono-text text-muted-foreground">Categories</div>
          </div>
        </div>

        {/* Category Filter */}
        <CategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Design Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredDesigns.map((design) => (
            <DesignCard key={design.id} design={design} />
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center pt-16 border-t border-border">
          <div className="pixel-divider w-16 mx-auto mb-6"></div>
          <p className="mono-text text-muted-foreground mb-2">
            Built with <span className="text-pixel-blue">Next.js</span> + <span className="text-pixel-pink">TypeScript</span> + <span className="text-pixel-green">Tailwind CSS</span>
          </p>
          <p className="mono-text text-muted-foreground text-sm">
            Modern Editorial × Pixel Retro Design System
          </p>
        </footer>
      </div>
    </div>
  );
}