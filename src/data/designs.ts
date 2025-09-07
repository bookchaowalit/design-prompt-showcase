export interface DesignType {
  id: string;
  title: {
    en: string;
    th: string;
  };
  description: {
    en: string;
    th: string;
  };
  category: string;
  prompt: string;
  tags: string[];
  gradient: string;
}

export const designData: DesignType[] = [
  {
    id: "pixel-art-8bit",
    title: {
      en: "Pixel Art (8-bit)",
      th: "พิกเซลอาร์ต (8-bit)"
    },
    description: {
      en: "Classic chunky pixel style with limited colors, reminiscent of NES, Game Boy, or Atari era games with authentic retro charm",
      th: "สไตล์พิกเซลแบบคลาสสิก เรียบง่าย ใช้สีจำกัด เหมือนเกมยุค NES, Game Boy หรือ Atari ที่มีเสน่ห์แบบดั้งเดิม"
    },
    category: "Retro Gaming",
    prompt: "Create classic 8-bit pixel art with a very limited color palette (typically 4-16 colors), chunky blocky pixels, and simple geometric shapes. Style should be reminiscent of early video games like NES, Game Boy, or Atari era with high contrast, bold pixels, and minimalist detail level. Focus on iconic retro gaming aesthetics with clear pixel boundaries.",
    tags: ["pixel art", "8-bit", "retro", "NES", "Game Boy", "classic"],
    gradient: "from-pixel-green to-pixel-blue"
  },
  {
    id: "pixel-art-16bit",
    title: {
      en: "Pixel Art (16-bit)",
      th: "พิกเซลอาร์ต (16-bit)"
    },
    description: {
      en: "More detailed pixel art with expanded color palette and refined sprites, reminiscent of Super Nintendo and Sega Genesis era",
      th: "รายละเอียดเยอะขึ้นกว่าดั้งเดิม แต่ยังคงความเป็นพิกเซลที่ดู \"เกมยุคเก่า\" เหมือนงาน Super Nintendo หรือ Sega"
    },
    category: "Retro Gaming",
    prompt: "Create a 16-bit pixel art style image with detailed sprites reminiscent of Super Nintendo or Sega Genesis era games. Use a limited color palette with crisp, defined pixels. The style should have more detail than 8-bit but maintain that classic retro gaming aesthetic with clean pixel boundaries and vibrant colors.",
    tags: ["pixel art", "16-bit", "retro", "gaming", "SNES"],
    gradient: "from-neon-cyan to-neon-blue"
  },
  {
    id: "pixel-art-32bit",
    title: {
      en: "Pixel Art (32-bit)",
      th: "พิกเซลอาร์ต (32-bit)"
    },
    description: {
      en: "High-resolution pixel art with rich color palettes and smooth gradients, similar to PlayStation 1 or advanced arcade games",
      th: "ความละเอียดสูงขึ้น มีการใช้สีเยอะขึ้น คล้ายเกมยุค PlayStation 1 หรือ Arcade ขั้นสูง"
    },
    category: "Retro Gaming", 
    prompt: "Generate a 32-bit pixel art style with higher resolution and more colors than 16-bit, similar to PlayStation 1 or advanced arcade games. Include smooth gradients within the pixel constraints, more detailed shading, and richer color palettes while maintaining the distinctive pixelated look.",
    tags: ["pixel art", "32-bit", "retro", "gaming", "PlayStation"],
    gradient: "from-neon-purple to-neon-pink"
  },
  {
    id: "chiptune-retro-wave",
    title: {
      en: "Chiptune / Retro Wave Visual",
      th: "ชิปทูน / เรโทร เวฟ วิชวล"
    },
    description: {
      en: "80s-90s inspired digital aesthetics with neon colors, Tron-style grids, and futuristic digital typography",
      th: "เอาสีและกราฟิกจากยุค 80–90 มาใช้ เช่น โทนสี \"นีออน\" + เส้นกริดแบบ Tron + ฟอนต์ดิจิทัล"
    },
    category: "Synthwave",
    prompt: "Create a retro wave/synthwave aesthetic inspired by 1980s-90s digital culture. Use bright neon colors (pink, cyan, purple), Tron-style grid lines, digital fonts, and geometric shapes. Include elements like wireframe mountains, sunset gradients, and chrome effects with a futuristic but nostalgic feel.",
    tags: ["synthwave", "retro", "neon", "80s", "digital", "Tron"],
    gradient: "from-neon-pink via-neon-purple to-neon-cyan"
  },
  {
    id: "low-poly-3d",
    title: {
      en: "Low-Poly 3D",
      th: "โลว์-โพลี 3D"
    },
    description: {
      en: "Modern minimalist 3D design using simple geometric shapes with clean angular forms and flat colors",
      th: "คล้ายกับ 8-bit แต่เป็นเวอร์ชันสามมิติที่ใช้รูปทรงเหลี่ยม ๆ ดูเป็นงาน polygon สวยเรียบง่าย"
    },
    category: "3D Minimalist",
    prompt: "Design in low-poly 3D style using simple geometric shapes with minimal polygons. Create clean, angular forms with flat colors and subtle gradients. The aesthetic should be modern and minimalist with sharp edges, faceted surfaces, and a simplified geometric approach to 3D modeling.",
    tags: ["3D", "low-poly", "geometric", "minimal", "polygon"],
    gradient: "from-neon-green to-neon-blue"
  },
  {
    id: "minimal-vector-pixel",
    title: {
      en: "Minimal Vector Pixel-inspired",
      th: "เวกเตอร์มินิมอลแรงบันดาลใจจากพิกเซล"
    },
    description: {
      en: "Clean vector graphics inspired by pixel art aesthetics, combining scalability with retro blocky charm",
      th: "เอาความเรียบง่ายแบบพิกเซลมาทำเป็นไอคอนหรือเวกเตอร์ เรียบแต่ยังให้อารมณ์ retro"
    },
    category: "Vector Design",
    prompt: "Create minimal vector graphics inspired by pixel art aesthetics. Use simple geometric shapes, clean lines, and limited color palettes. The design should be scalable vector format but maintain the blocky, grid-based feeling of pixel art with modern minimalist sensibilities.",
    tags: ["vector", "minimal", "pixel-inspired", "icon", "geometric"],
    gradient: "from-neon-yellow to-neon-pink"
  },
  {
    id: "cyberpunk-ui",
    title: {
      en: "Cyberpunk UI/HUD",
      th: "ไซเบอร์พังค์ UI/HUD"
    },
    description: {
      en: "Futuristic interface design with HUD elements, neon glowing borders, and angular geometric shapes",
      th: "ดีไซน์อินเตอร์เฟสแบบไซเบอร์พังค์ มีหน้าจอ HUD, สีนีออน, และเส้นขอบแหลมคม"
    },
    category: "UI/Interface",
    prompt: "Design a cyberpunk-style user interface with HUD elements, neon glowing borders, angular geometric shapes, and futuristic display panels. Use bright cyan, magenta, and green neon colors on dark backgrounds with glitch effects and digital typography.",
    tags: ["cyberpunk", "UI", "HUD", "interface", "futuristic"],
    gradient: "from-neon-cyan to-neon-pink"
  },
  {
    id: "vaporwave-aesthetic",
    title: {
      en: "Vaporwave Aesthetic",
      th: "เอสเธติกเวเปอร์เวฟ"
    },
    description: {
      en: "Dreamy vaporwave art with pink-purple gradients, palm trees, Greek statues, and VHS glitch effects",
      th: "ศิลปะแบบ Vaporwave ด้วยสีชมพู-ม่วง, ปาล์ม, รูปปั้นกรีก, และ VHS glitch effects"
    },
    category: "Vaporwave",
    prompt: "Create a vaporwave aesthetic with pink and purple gradients, palm trees, Greek statues, VHS glitch effects, and retrofuturistic elements. Include geometric grids, sunset colors, and nostalgic 80s-90s imagery with a dreamy, surreal quality.",
    tags: ["vaporwave", "aesthetic", "pink", "purple", "retro", "glitch"],
    gradient: "from-neon-pink via-neon-purple to-neon-blue"
  },
  {
    id: "neon-noir",
    title: {
      en: "Neon Noir",
      th: "นีออนนัวร์"
    },
    description: {
      en: "Blend of film noir darkness with bright neon lighting, creating mysterious and moody urban nightscapes",
      th: "การผสมผสานระหว่างความมืดของ Film Noir กับแสงนีออนสีสดใส สร้างบรรยากาศลึกลับ"
    },
    category: "Cinematic",
    prompt: "Blend film noir darkness with bright neon lighting. Create mysterious, moody scenes with high contrast between deep shadows and vibrant neon signs. Include rain-soaked streets, urban nightlife, and dramatic lighting that combines classic noir cinematography with cyberpunk neon aesthetics.",
    tags: ["noir", "neon", "cinematic", "moody", "urban", "mystery"],
    gradient: "from-cyber-dark via-neon-purple to-neon-cyan"
  },
  {
    id: "glitch-art",
    title: {
      en: "Glitch Art Digital",
      th: "ดิจิทัลกลิตช์อาร์ต"
    },
    description: {
      en: "Digital art that simulates system errors with pixel corruption, color shifting, and data moshing effects",
      th: "ศิลปะที่จำลอง error ของระบบดิจิทัล เช่น pixel corruption, color shifting, และ data moshing"
    },
    category: "Digital Art",
    prompt: "Create digital glitch art with pixel corruption effects, color channel shifting, data moshing, and digital noise. Simulate technical errors and malfunctions in digital media with fragmented imagery, RGB separation, and abstract digital artifacts.",
    tags: ["glitch", "digital", "corruption", "error", "abstract"],
    gradient: "from-neon-pink via-neon-green to-neon-cyan"
  },
  {
    id: "holographic-chrome",
    title: {
      en: "Holographic Chrome",
      th: "โฮโลแกรมโครเมียม"
    },
    description: {
      en: "Iridescent chrome effects that shift colors with viewing angle, featuring rainbow reflections and metallic sheens",
      th: "เอฟเฟกต์โครเมียมแบบโฮโลแกรมที่เปลี่ยนสีตามมุมมอง สะท้อนแสงแบบอิริเดสเซนต์"
    },
    category: "Material Design",
    prompt: "Design with holographic chrome effects that shift colors depending on viewing angle. Create iridescent surfaces with rainbow reflections, metallic sheens, and prismatic light dispersion. The material should appear liquid metal with multi-colored highlights.",
    tags: ["holographic", "chrome", "iridescent", "metallic", "rainbow"],
    gradient: "from-neon-cyan via-neon-purple via-neon-pink to-neon-green"
  },
  {
    id: "ascii-art-modern",
    title: {
      en: "Modern ASCII Art",
      th: "ASCII อาร์ตสมัยใหม่"
    },
    description: {
      en: "Contemporary ASCII art using Unicode characters to create detailed and complex visual compositions",
      th: "ASCII Art แบบใหม่ที่ใช้ Unicode characters สร้างภาพที่ซับซ้อนและมีรายละเอียดมากขึ้น"
    },
    category: "Text Art",
    prompt: "Create modern ASCII art using Unicode characters and symbols to form detailed images. Use various text symbols, box drawing characters, and extended ASCII to create complex visual compositions that work in text format while maintaining artistic appeal.",
    tags: ["ASCII", "text art", "Unicode", "typography", "character"],
    gradient: "from-neon-green to-neon-cyan"
  },
  {
    id: "matrix-digital-rain",
    title: {
      en: "Matrix Digital Rain",
      th: "ดิจิทัลเรนแมทริกซ์"
    },
    description: {
      en: "Iconic Matrix-style digital rain effect with falling Japanese characters in bright green on black background",
      th: "เอฟเฟกต์ Digital Rain แบบ Matrix ด้วยตัวอักษรญี่ปุ่นและสีเขียวนีออน"
    },
    category: "Cinematic",
    prompt: "Create the iconic Matrix digital rain effect with falling Japanese characters (katakana, hiragana, kanji) in bright green on black background. Include varying speeds of falling text, glowing effects, and the characteristic cascading digital code aesthetic.",
    tags: ["Matrix", "digital rain", "Japanese", "green", "code"],
    gradient: "from-cyber-dark to-neon-green"
  }
];

export const categories = [
  "All",
  "Retro Gaming",
  "Synthwave", 
  "3D Minimalist",
  "Vector Design",
  "UI/Interface",
  "Vaporwave",
  "Cinematic",
  "Digital Art",
  "Material Design",
  "Text Art"
];