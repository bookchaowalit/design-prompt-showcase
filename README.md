# AI Design Prompt Collection

A modern editorial-style Next.js website showcasing AI design prompts with subtle pixel/retro accents. Built with TypeScript, Tailwind CSS, and shadcn/ui components for optimal readability and user experience.

## Design Philosophy

🎯 **Minimal/Modern Editorial** - Clean, readable base design for easy content discovery  
✨ **Subtle Pixel/Retro Elements** - Small pixel accents, gradient dividers, and retro button effects  
📖 **Editorial Typography** - Inter font family for superior readability  
🎨 **Smart Color System** - Clean grays with strategic pixel-blue, pixel-pink, and pixel-green accents  

## Features

- 🎨 **12 Different Design Categories** - From Pixel Art to Cyberpunk UI
- 📚 **Editorial-First Design** - Optimized for reading and content discovery
- ✨ **Subtle Pixel Accents** - Retro elements that enhance without overwhelming  
- 📋 **Copy-to-Clipboard Functionality** - Easy prompt copying for AI tools
- 🎯 **Smart Category Filtering** - Filter designs by category with visual indicators
- 📱 **Responsive Design** - Works perfectly on all device sizes
- ⚡ **Fast Performance** - Built with Next.js 15 and Turbopack
- 🌙 **Dark Mode Support** - Automatic light/dark theme switching

## Design Categories

- **Retro Gaming**: Pixel Art (16-bit/32-bit)
- **Synthwave**: Chiptune/Retro Wave visuals  
- **3D Minimalist**: Low-Poly 3D designs
- **Vector Design**: Minimal pixel-inspired vectors
- **UI/Interface**: Cyberpunk UI/HUD designs
- **Vaporwave**: Classic vaporwave aesthetics
- **Cinematic**: Neon Noir and Matrix-style
- **Digital Art**: Glitch art and digital effects
- **Material Design**: Holographic chrome effects
- **Text Art**: Modern ASCII art

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter (editorial) + JetBrains Mono (code)
- **Deployment**: Vercel

## Design System

### Typography
- **Editorial**: Inter font for superior readability
- **Monospace**: JetBrains Mono for code and technical content
- **Hierarchy**: Clear typographic scale with proper spacing

### Colors
- **Base**: Clean whites and grays for maximum readability
- **Accents**: Strategic use of pixel-blue (#3b82f6), pixel-pink (#ec4899), pixel-green (#10b981)
- **Dark Mode**: Optimized dark theme with enhanced pixel colors

### Components
- **Cards**: Subtle shadows with pixel accent on hover
- **Buttons**: Retro-inspired with pixel accent animations  
- **Tags**: Monospace font with small pixel indicators
- **Dividers**: Gradient pixel-style dividers

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

### Deploy to Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy your app
4. Your app will be available at `https://your-project-name.vercel.app`

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts to configure your deployment
```

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── globals.css     # Editorial theme + pixel accents
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Main page
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── category-filter.tsx # Pixel-enhanced category filter
│   └── design-card.tsx     # Editorial card design
└── data/
    └── designs.ts      # Design data and types
```

## Customization

### Adding New Design Types

1. Edit `src/data/designs.ts`
2. Add new design objects to the `designData` array
3. Include categories in the `categories` array

### Modifying Design System

1. **Colors**: Edit CSS variables in `src/app/globals.css`
2. **Typography**: Update font imports and CSS classes
3. **Pixel Accents**: Customize `.pixel-accent`, `.pixel-divider`, etc.

### Key CSS Classes

All components use a modern editorial design with subtle pixel accents:
- `.editorial-title` - Main title styling with tight letter spacing
- `.pixel-accent` - Adds a subtle gradient side accent
- `.pixel-divider` - Gradient divider with pixel pattern
- `.retro-card` - Card with hover effects and pixel accent
- `.pixel-button` - Button with retro animation effects
- `.category-tag` - Monospace category tags with pixel indicators
- `.mono-text` - JetBrains Mono for technical content
- `.gradient-text` - Subtle gradient text effect

## Design Guidelines

- **Editorial First**: Prioritize readability and content hierarchy
- **Subtle Accents**: Use pixel elements sparingly for personality  
- **Clean Layout**: Generous whitespace and clear content sections
- **Accessible**: High contrast ratios and semantic HTML
- **Performance**: Optimized images and minimal animations

## License

This project is open source and available under the MIT License.