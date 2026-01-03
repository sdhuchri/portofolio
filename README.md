# 🚀 Portfolio - Suryana Dhuchri

A modern, animated portfolio website built with Next.js 16, featuring smooth animations and transitions inspired by premium websites like [vyro.ai](https://vyro.ai/).

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI with premium aesthetics
- 🌊 **Smooth Animations** - Scroll-triggered animations and micro-interactions
- 🎭 **Dark Mode Ready** - Built-in dark mode support (can be easily implemented)
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Turbopack** - Lightning-fast development with Next.js Turbopack
- 🎯 **SEO Optimized** - Proper meta tags and semantic HTML
- 🔥 **Performance First** - Optimized images and lazy loading
- 🎪 **Interactive Elements** - Hover effects and smooth transitions

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Fonts**: Inter & Space Grotesk (Google Fonts)
- **Icons**: Material Symbols Outlined
- **Animations**: Custom CSS animations + Intersection Observer API

## 📁 Project Structure

```
portofolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and animations
│   │   ├── layout.tsx           # Root layout with metadata
│   │   └── page.tsx             # Main portfolio page
│   └── components/
│       ├── Navbar.tsx           # Animated navigation bar
│       ├── AnimatedSection.tsx  # Scroll-triggered animations
│       └── SmoothScroll.tsx     # Parallax scroll effects
├── public/                      # Static assets
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portofolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```
   
   Get your API key from [OpenAI Platform](https://platform.openai.com/api-keys)

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Update Personal Information

Edit `src/app/page.tsx` to update:
- Name and title
- Professional summary
- Skills and technologies
- Projects and experience
- Contact information

### Change Colors

Edit `tailwind.config.ts` and `src/app/globals.css` to customize:
- Primary colors
- Background colors
- Text colors
- Accent colors

### Modify Animations

Edit `src/app/globals.css` to adjust:
- Animation durations
- Animation delays
- Keyframe definitions
- Transition timings

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎯 Sections

1. **Hero** - Introduction with profile image and CTA buttons
2. **About** - Professional background and statistics
3. **Skills** - Technical expertise organized by categories
4. **Projects** - Portfolio of completed projects
5. **Experience** - Professional timeline
6. **Contact** - Call-to-action and social links
7. **Footer** - Copyright and social media links

## 🌟 Animation Features

- **Fade In Up** - Elements slide up while fading in
- **Fade In** - Simple opacity transitions
- **Slide In Left/Right** - Directional slide animations
- **Scale In** - Elements scale from smaller to normal size
- **Float** - Continuous floating animation for background elements
- **Hover Lift** - Cards lift on hover with shadow effects
- **Stagger** - Sequential animation delays for lists

## 🔧 Configuration Files

### `next.config.ts`
- Image optimization settings
- Remote image patterns for external URLs

### `tailwind.config.ts`
- Custom color palette
- Font families
- Animation keyframes
- Custom utilities

### `tsconfig.json`
- TypeScript compiler options
- Path aliases (`@/*` for imports)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎨 Design Principles

1. **Clean & Minimal** - Focus on content, not clutter
2. **Professional** - Business-appropriate aesthetics
3. **Modern** - Contemporary design trends
4. **Accessible** - Semantic HTML and proper contrast
5. **Fast** - Optimized for performance

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

- **Netlify**: Connect GitHub repo and deploy
- **AWS Amplify**: Use the Amplify Console
- **Docker**: Build and deploy as container

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Suryana Dhuchri**
- Email: suryana.dhuchri@gmail.com
- LinkedIn: [linkedin.com/in/sdhuchri](https://linkedin.com/in/sdhuchri)
- GitHub: [github.com/sdhuchri](https://github.com/sdhuchri)

## 🙏 Acknowledgments

- Design inspiration from [vyro.ai](https://vyro.ai/)
- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Material Symbols](https://fonts.google.com/icons)

---

⭐ **If you like this project, please give it a star!** ⭐
