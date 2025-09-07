"use client";


interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="mb-12">
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`category-tag ${selectedCategory === category ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Active category indicator with pixel accent */}
      {selectedCategory !== "All" && (
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-lg">
            <div className="w-2 h-2 bg-pixel-blue rounded-full pixel-pulse"></div>
            <span className="mono-text text-sm text-accent-foreground">
              Showing: <span className="font-semibold text-pixel-blue">{selectedCategory}</span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}