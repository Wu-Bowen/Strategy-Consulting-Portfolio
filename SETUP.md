# Strategy Consulting Portfolio - Setup Guide

## Overview
This is a professional portfolio website for Eric Wu, targeting the Analyst position at Lake Partners in Seattle.

## Required Dependencies

Before running the application, you need to install the following packages:

```bash
npm install styled-components framer-motion
```

### Dependencies Breakdown:
- **styled-components** (^6.1.0 or latest): For CSS-in-JS styling with component-scoped styles
- **framer-motion** (^11.0.0 or latest): For smooth animations and transitions

## Installation Steps

1. **Install dependencies:**
   ```bash
   npm install
   npm install styled-components framer-motion
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx       # Fixed navigation header with smooth scroll
│   ├── Hero.jsx         # Hero section with animated text
│   ├── About.jsx        # About section with bio
│   ├── Skills.jsx       # Skills showcase with cards
│   ├── Projects.jsx     # Featured projects section
│   └── Footer.jsx       # Footer with contact info
├── App.jsx              # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles and CSS variables
```

## Design System

### Color Palette
- **Primary Navy**: #1A2A3A
- **Secondary Aqua**: #00BFA6
- **Accent Gold**: #FFC857
- **Background**: #F5F5F5
- **Text Dark**: #333333

### Typography
- **Headings**: Montserrat (Google Fonts)
- **Body**: Open Sans (Google Fonts)

### Key Features
- Smooth scroll navigation
- Framer Motion animations (fade-in, slide, stagger)
- Responsive design (mobile, tablet, desktop)
- Gestalt design principles (proximity, similarity, hierarchy)
- Professional consulting-focused content

## Adding Resume and Cover Letter

Place your resume and cover letter PDFs in the `public` folder:
- `public/resume.pdf`
- `public/cover-letter.pdf`

These files are referenced in the download links throughout the site.

## Customization

### Update Personal Information
Edit the following files to customize:
- `src/components/Header.jsx` - Name in logo
- `src/components/Hero.jsx` - Name and title
- `src/components/Footer.jsx` - Contact information, social links

### Modify Projects
Edit `src/components/Projects.jsx` to add/remove/modify project cards.

### Adjust Colors
Update CSS variables in `src/index.css` to change the color scheme.

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes
- All animations are optimized for performance
- Images use placeholders (replace with actual profile photo if desired)
- Social media links are placeholder URLs (update with actual links)
- Email and phone in footer should be updated with real contact info
