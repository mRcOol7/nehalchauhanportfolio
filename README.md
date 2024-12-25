# Nehal CHauhan Portfolio

<div align="center">

[![Twitter Follow](https://img.shields.io/twitter/follow/nehal_chauhan19?style=social)](https://twitter.com/nehal_chauhan19)

A modern, minimalist portfolio website built with React, TypeScript, and ShadcnUI components.

[Live Demo](https://your-portfolio-url.com) | [Report Bug](https://github.com/mRcOol7/nehalchauhanportfolio/issues) | [Request Feature](https://github.com/mRcOol7/nehalchauhanportfolio/issues)

</div>

## ✨ Features

- 🎨 **Modern Design**: Clean, minimalist interface with attention to typography and spacing
- 🌓 **Dark Mode**: Seamless dark/light theme switching
- 📱 **Responsive**: Optimized for all device sizes
- ⚡ **Performance**: Built with Vite for lightning-fast development and builds
- 🔒 **Type-Safe**: Full TypeScript support for robust development
- 🎭 **Animations**: Smooth transitions and effect using AOS

## 🛠️ Tech Stack

### Core
- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)

### UI & Styling
- [TailwindCSS](https://tailwindcss.com/)
- [ShadcnUI](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [GSAP](https://greensock.com/gsap/)

### State Management & Routing
- [TanStack Query](https://tanstack.com/query)
- [React Router DOM](https://reactrouter.com/)
## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm/yarn/pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mRcOol7/nehalchauhanportfolio
   ```
2. Navigate to project directory:
   ```bash
   cd nehalchauhanportfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```
5. Open http://localhost:5173 in your browser.

📝 **Available Scripts**
```bash
# Development server
npm run dev

# Production build
npm run build

# Development build
npm run build:dev

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📁 Project Structure

```plaintext
minimalist-portfolio-vista-21/
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/          # Page components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── styles/         # Global styles
│   └── types/          # TypeScript type definitions
├── public/             # Static assets
├── dist/              # Production build
└── ...config files
```

## ⚙️ Configuration

### Styling
Customize TailwindCSS in `tailwind.config.ts`:
```javascript
module.exports = {
  // Your custom configuration
  theme: {
    extend: {
      // Custom extensions
    }
  }
}
```

### Components
Modify ShadcnUI components in `components.json`:
```json
{
  "style": "default",
  "rsc": false,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/styles/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  }
}
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👥 Contact

Your Name - @mRcOol7

Project Link: [GitHub Repository](https://github.com/mRcOol7/nehalchauhanportfolio)

## 🙏 Acknowledgments

- ShadcnUI
- Radix UI
- TailwindCSS
- Vite
- React

⭐️ Star this project if you find it useful!
