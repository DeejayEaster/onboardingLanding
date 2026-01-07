# SingleLink - React Landing Page

A beautiful, modern React landing page for a client onboarding platform that helps agencies, consultants, and service providers create branded onboarding experiences.

## Features

- **React 18** - Built with modern React hooks and functional components
- **Vite** - Fast build tool and dev server
- **Modern Design** - Clean, professional UI with gradient accents
- **Responsive** - Fully responsive design that works on all devices
- **Smooth Animations** - Intersection Observer-based fade-in animations
- **SEO Friendly** - Semantic HTML structure
- **Component-Based** - Modular React components for easy maintenance

## Project Structure

```
singlelink/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── SocialProof.jsx
│   │   ├── Problem.jsx
│   │   ├── Solution.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── SmartAssessments.jsx
│   │   ├── UseCases.jsx
│   │   ├── Features.jsx
│   │   ├── WhoItsFor.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm (or yarn/pnpm)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Page Structure

The landing page follows a marketing-focused structure:

1. **Hero Section** - Category definition and primary CTA
2. **Social Proof** - Early trust signals
3. **Problem Section** - Current state of onboarding pain points
4. **Solution Section** - Better way positioning
5. **How It Works** - Simple 4-step process
6. **Smart Assessments** - Key differentiation feature
7. **Use Cases** - Self-identification for different business types
8. **Features** - Grouped by outcome
9. **Who It's For** - Qualification section
10. **CTA Section** - Soft conversion
11. **Footer** - Confidence and legitimacy

## Customization

- **Colors**: Edit the CSS variables in `src/styles.css` (root section)
- **Content**: Update text in component files in `src/components/`
- **Gradient**: The primary gradient is defined as `linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)`

## Technologies Used

- React 18.2.0
- Vite 5.0.8
- Modern CSS with CSS Variables
- Intersection Observer API for animations

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge)
