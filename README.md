# Rsbuild Tailwind shadcn/ui Template

A modern React template built with Rsbuild, Tailwind CSS, and shadcn/ui. This template provides a robust foundation for building scalable React applications with a focus on developer experience and performance.

## Features

- ⚡ **Rsbuild** - Modern build tool optimized for React applications
- 🎨 **Tailwind CSS** - Utility-first CSS framework with custom configuration
- 🎯 **shadcn/ui** - High-quality, accessible React components
- 🔧 **TypeScript** - Type safety and better developer experience
- 🛠 **Biome** - Fast, modern formatting and linting
- 🌙 **Dark Mode** - Built-in dark mode support with system preference detection
- 📱 **Responsive** - Mobile-first design approach
- ⚓ **Type Safe** - Strict TypeScript configuration
- 🚀 **Fast Refresh** - Quick feedback loop during development
- 📦 **Component Library** - Pre-built components ready to use

## Quick Start

```bash
# Clone the repository
git clone https://github.com/suryavirkapur/rsbuild-tw-shadcn-template.git

# Navigate to the directory
cd rsbuild-tw-shadcn-template

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm format` - Format code with Biome
- `pnpm check` - Run type check and linting

## Project Structure

```bash
src/
  ├── components/      # UI components
  │   └── ui/         # shadcn/ui components
  ├── hooks/          # Custom React hooks
  ├── lib/            # Utility functions and types
  ├── App.tsx         # Main application component
  ├── index.tsx       # Application entry point
  └── App.css         # Global styles and Tailwind imports
```

## Built With

- [React 18](https://reactjs.org/)
- [Rsbuild](https://rsbuild.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Biome](https://biomejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Lucide Icons](https://lucide.dev/)

## Customization

### Tailwind Configuration

The template includes a custom Tailwind configuration in `tailwind.config.js`. You can modify the theme, colors, and other settings here.

### Components

shadcn/ui components are located in `src/components/ui/`. You can customize these components by modifying their source files.

### Theme

Dark mode support is implemented using Tailwind's dark mode feature. Theme preferences are persisted in localStorage and respect system preferences by default.

## Adding New Components

1. Install new shadcn/ui components:

```bash
pnpm dlx shadcn-ui@latest add [component-name]
```

1. Import and use in your components:

```tsx
import { Button } from "@/components/ui/button"
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [shadcn](https://ui.shadcn.com) for the amazing UI components
- [Rsbuild team](https://github.com/web-infra-dev/rsbuild) for the build tool
- [Tailwind CSS team](https://tailwindcss.com/) for the CSS framework
- [Biome team](https://biomejs.dev/) for the toolchain

## Support

Give a ⭐️ if this project helped you!

---
Created with 💙 by [Suryavir Kapur](https://suryavirkapur.com).
