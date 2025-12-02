# 🚀 Jayanth Kumar - Future Tech Portfolio

<div align="center">

![Portfolio Banner](https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6)

A modern, futuristic portfolio website featuring cutting-edge design, smooth animations, and AI-powered chat functionality.

[![React](https://img.shields.io/badge/React-19.2.0-61dafb?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178c6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646cff?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Google AI](https://img.shields.io/badge/Google_AI-Gemini-4285f4?style=flat&logo=google&logoColor=white)](https://ai.google.dev/)

</div>

---

## ✨ Features

### 🎨 Modern Design
- **Futuristic UI/UX** - Sleek, immersive design with glassmorphism effects
- **Dark/Light Mode** - Seamless theme switching with smooth transitions
- **Animated Background** - Dynamic mesh gradient background
- **Responsive Layout** - Optimized for all devices and screen sizes
- **Smooth Animations** - Scroll-based reveal animations and micro-interactions

### 🤖 AI-Powered Chat
- **Gemini Integration** - Interactive AI chatbot powered by Google's Gemini API
- **Real-time Conversations** - Instant responses and natural language processing
- **Smart Assistant** - Get answers about my skills, projects, and experience

### 📱 Sections
- **Hero** - Eye-catching introduction with call-to-action
- **About** - Professional background and personal introduction
- **Education** - Academic qualifications and achievements
- **Selected Works** - Showcase of featured projects with details
- **Skills** - Technical expertise and proficiency levels
- **Contact** - Get in touch via multiple channels
- **Footer** - Social links and additional information

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 19, TypeScript |
| **Build Tool** | Vite |
| **Styling** | Vanilla CSS with CSS Variables |
| **AI/ML** | Google Gemini API |
| **Type Safety** | TypeScript 5.8 |

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/jayanth-kumar-future-tech-portfolio.git
   cd jayanth-kumar-future-tech-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create or update the `.env.local` file in the root directory:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

   > **Get your API key**: Visit [Google AI Studio](https://makersuite.google.com/app/apikey) to obtain your free Gemini API key.

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` to view the portfolio.

### Build for Production

To create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

---

## 📁 Project Structure

```
jayanth-kumar-future-tech-portfolio/
├── components/              # React components
│   ├── About.tsx           # About section
│   ├── BackgroundMesh.tsx  # Animated background
│   ├── ChatWidget.tsx      # AI chat interface
│   ├── Contact.tsx         # Contact form & info
│   ├── Education.tsx       # Education timeline
│   ├── Footer.tsx          # Footer section
│   ├── Hero.tsx            # Hero/landing section
│   ├── Navbar.tsx          # Navigation bar
│   ├── ProjectCard.tsx     # Project display card
│   ├── ScrollReveal.tsx    # Animation wrapper
│   ├── SelectedWorks.tsx   # Portfolio projects
│   └── Skills.tsx          # Skills showcase
├── services/               # API services
│   └── geminiService.ts    # Gemini AI integration
├── public/                 # Static assets
├── App.tsx                 # Main application component
├── index.tsx               # Application entry point
├── types.ts                # TypeScript type definitions
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Project dependencies
└── .env.local              # Environment variables
```

---

## 🎯 Key Components

### Hero Section
The landing section with an attention-grabbing introduction and call-to-action buttons.

### About Section
Professional background, skills overview, and personal introduction.

### Education Timeline
Visual representation of academic journey and achievements.

### Selected Works
Portfolio showcase featuring project cards with descriptions, tech stacks, and links.

### Skills Showcase
Interactive display of technical skills organized by categories.

### AI Chat Widget
Floating chatbot powered by Google Gemini for interactive Q&A.

### Contact Form
Multi-channel contact options with integrated form submission.

---

## 🔧 Configuration

### Theme Customization

The portfolio supports dark and light modes. Theme settings are managed via CSS variables defined in the root styles. You can customize colors, fonts, and other design tokens in the CSS files.

### Gemini AI Configuration

The AI chat functionality is configured in `services/geminiService.ts`. You can modify:
- Model selection (currently using Gemini)
- Temperature and response parameters
- System prompts and personality
- Rate limiting and error handling

---

## 🌐 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/jayanth-kumar-future-tech-portfolio)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add `VITE_GEMINI_API_KEY` to environment variables
4. Deploy!

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add environment variable: `VITE_GEMINI_API_KEY`
6. Deploy!

### Other Platforms

The portfolio can be deployed to any static hosting service that supports Vite:
- GitHub Pages
- Cloudflare Pages
- Firebase Hosting
- AWS Amplify

---

## 📝 Customization Guide

### Update Personal Information

1. **Hero Section**: Edit `components/Hero.tsx` - Update name, tagline, and CTA buttons
2. **About Section**: Edit `components/About.tsx` - Update bio and description
3. **Education**: Edit `components/Education.tsx` - Add your educational background
4. **Projects**: Edit `components/SelectedWorks.tsx` - Showcase your projects
5. **Skills**: Edit `components/Skills.tsx` - List your technical skills
6. **Contact Info**: Edit `components/Contact.tsx` - Update contact details

### Update Styling

- Global styles and CSS variables can be found in the component files
- Theme colors are defined using CSS custom properties
- Modify animation timings and effects in respective component files

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/YOUR_USERNAME/jayanth-kumar-future-tech-portfolio/issues).

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Jayanth Kumar**

- Portfolio: [Your Portfolio URL](#)
- GitHub: [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/YOUR_PROFILE)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- Google Gemini AI for the intelligent chat functionality
- React team for the amazing framework
- Vite for the blazing fast build tool
- The open-source community for inspiration and resources

---

## 📸 Screenshots

> Add screenshots of your portfolio here to showcase the design

---

<div align="center">

### ⭐ Star this repo if you find it helpful!

**Made with ❤️ using React, TypeScript, and Vite**

</div>
