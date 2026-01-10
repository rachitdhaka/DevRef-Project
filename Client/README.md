<div align="center">
  <br />
  <h1>🚀 DEV REF</h1>
  <br />

  <h3><strong>Don't Install. Just Build.</strong></h3>
  
  <p>
    The missing half of your UI library. <br/>
    A curated vault of <strong>Zero-Dependency</strong> frontend components.
  </p>

  <div>
    <img src="https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  </div>

  <br />

  <br />
</div>

---

## ⚡ The Philosophy

**Dependency Fatigue is real.** Most libraries force you to install heavy packages, wrap your app in providers, and fight with their default styles.

**Dev Ref** is different.
We provide **Raw Code**.

### The Three-Step Workflow:

1. 📋 **Copy** the component or logic
2. 📁 **Paste** it into your project
3. 🎯 **Own** it forever

No hidden abstractions. No `node_modules` black holes. Just production-ready code that **you control**.

> _"Why install a 50KB library when you only need 5KB of code?"_

---

## 💎 Features

### 🎨 Frontend Components (Visual)

Modular, accessible UI components built with **React** and **Tailwind CSS**.

- ⚛️ **Atomic Design:** From simple Buttons to complex Data Tables
- ✨ **Interactive Animations:** Smooth transitions powered by Framer Motion
- 🌊 **Infinity Canvas:** A distraction-free browsing experience with no sidebars
- 🌗 **Dark Mode Ready:** Built-in theme support with next-themes

### 🛠️ The Experience

- 🎯 **Floating Dock Navigation:** A unique, app-like navigation experience
- 🎨 **Component Showcase:** Interactive previews with live code editing
- 📱 **Fully Responsive:** Works seamlessly on all devices
- 🔍 **Easy Discovery:** Find the perfect component for your needs

---

## 🏗️ Tech Stack

This repository contains the source code for the **Dev Ref** platform itself.

### Core Technologies

| Category      | Technology           | Version |
| :------------ | :------------------- | :------ |
| **Framework** | Next.js (App Router) | 16.0.7  |
| **Runtime**   | React                | 19.2.0  |
| **Language**  | TypeScript           | 5.x     |
| **Styling**   | Tailwind CSS         | 4.x     |
| **Animation** | Framer Motion        | 12.x    |
| **Theme**     | next-themes          | 0.4.6   |
| **Linting**   | ESLint               | 9.x     |

### Planned Integrations

- 🎨 **Syntax Highlighting:** Shiki / Prism
- 🎯 **Icons:** Lucide React
- ☁️ **Deployment:** Vercel
- 🔍 **Search:** Algolia / Fuse.js

---

## 📂 Project Structure

```bash
devref/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── Blogs/             # Blog section
│   ├── Main/              # Main application
│   ├── Pages/             # Additional pages
│   │   └── Landing.tsx    # Landing page component
│   └── components/        # Shared components
│       ├── Button.tsx
│       ├── Container.tsx
│       ├── Footer.tsx
│       ├── GridSection.tsx
│       ├── Hero.tsx
│       ├── ModeToggle.tsx
│       └── Navbar.tsx
├── Providers/
│   └── Theme-providers.tsx # Theme context provider
├── public/
│   ├── Images/            # Static images
│   ├── svg/               # SVG components
│   │   ├── Moon.tsx
│   │   └── Sun.tsx
│   └── Video/             # Video assets
├── eslint.config.mjs      # ESLint configuration
├── next.config.ts         # Next.js configuration
├── postcss.config.mjs     # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.17 or higher)
- **npm** or **yarn** or **pnpm**
- **Git**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/devref.git
   cd devref
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Available Scripts

| Script          | Description                          |
| :-------------- | :----------------------------------- |
| `npm run dev`   | Start the development server         |
| `npm run build` | Build the application for production |
| `npm start`     | Start the production server          |
| `npm run lint`  | Run ESLint to check code quality     |

---

## 🎯 Usage

### For Developers Using Dev Ref Components

1. **Browse** the component library
2. **Preview** the component in action
3. **Copy** the raw code (zero dependencies!)
4. **Paste** into your project
5. **Customize** as needed - you own the code!

### For Contributors

See the [Contributing](#-contributing) section below.

---

## 🌟 Roadmap

- [x] Core Next.js setup with TypeScript
- [x] Dark/Light theme support
- [x] Basic component library
- [ ] Complete component vault (50+ components)
- [ ] Advanced animation examples
- [ ] Search functionality
- [ ] Code playground integration
- [ ] User authentication for saving favorites
- [ ] Community contributions platform
- [ ] VS Code extension for quick access

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-component
   ```
3. **Make your changes**
   - Add components to `app/components/`
   - Follow the existing code style
   - Ensure components are zero-dependency (except React/Next.js)
   - Add proper TypeScript types
4. **Commit your changes**
   ```bash
   git commit -m 'Add: Amazing component with X functionality'
   ```
5. **Push to your fork**
   ```bash
   git push origin feature/amazing-component
   ```
6. **Open a Pull Request**

### Contribution Guidelines

- ✅ Components should be **copy-paste ready**
- ✅ Use **TypeScript** for type safety
- ✅ Follow **Tailwind CSS** conventions
- ✅ Ensure **accessibility** (ARIA labels, keyboard navigation)
- ✅ Write **clean, readable code** with comments
- ✅ Test on multiple screen sizes
- ❌ No external dependencies (except React/Next.js/Tailwind)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Inspired by [shadcn/ui](https://ui.shadcn.com/) - The copy-paste philosophy
- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - For smooth animations
- [Next.js](https://nextjs.org/) - The React framework for production

---

## 📧 Contact

Have questions or suggestions? Reach out:

- 🐦 Twitter: [@yourhandle](https://twitter.com/yourhandle)
- 📧 Email: your.email@example.com
- 💬 Discord: [Join our community](https://discord.gg/yourserver)

---

<div align="center">
  <br />
  <p>
    <strong>Built with ❤️ by developers, for developers.</strong>
  </p>
  <p>
    If you find this project helpful, give it a ⭐ on GitHub!
  </p>
  
  [![Star on GitHub](https://img.shields.io/github/stars/yourusername/devref?style=social)](https://github.com/yourusername/devref)
  
  <br />
</div>
```
