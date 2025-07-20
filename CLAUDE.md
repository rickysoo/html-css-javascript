# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static educational web application that teaches HTML, CSS, and JavaScript fundamentals through interactive demonstrations. It's a vanilla web project with no build tools, frameworks, or server-side components.

**Live Demo:** https://rickysoo.github.io/html-css-javascript/

## Development Commands

### Local Development
```bash
# No build process required - open directly in browser
open index.html
# Or serve locally (optional)
python -m http.server 8000
# Or use any static file server
```

### Deployment
```bash
# Deploy to GitHub Pages (automatic on push to master)
git add .
git commit -m "your changes"
git push origin master
```

## Architecture & Code Structure

### Core Files
- `index.html` - Single-page application with all content
- `styles.css` - Complete styling with CSS custom properties and responsive design
- `script.js` - Vanilla JavaScript for all interactivity
- `sitemap.xml` - SEO sitemap for search engines

### Key Architectural Patterns

#### 1. Progressive Enhancement Structure
The application demonstrates web technologies in layers:
- **HTML Structure** → **CSS Styling** → **JavaScript Interactivity**
- Each section builds upon the previous to show integration

#### 2. Interactive Code Playground
- Live code editors for HTML, CSS, and JavaScript
- Real-time preview using iframe with `srcdoc` attribute
- Sandboxed execution environment with security controls

#### 3. Theme System
- CSS custom properties for light/dark themes
- Theme state persisted in localStorage
- Dynamic theme switching without page reload

#### 4. Mobile-First Responsive Design
- Hamburger navigation menu for mobile devices
- Responsive breakpoints: 480px, 600px, 768px, 1024px
- Touch-friendly UI elements (44px minimum tap targets)

### Security Implementation

#### Content Security Policy
- Strict CSP headers implemented in meta tags
- Allows only trusted CDN sources (cdnjs.cloudflare.com)
- Prevents XSS attacks while allowing necessary inline scripts

#### Iframe Sandboxing
- Code playground uses sandboxed iframe execution
- Prevents malicious code from affecting parent page
- Allows `allow-scripts` and `allow-same-origin` only

#### External Dependencies
- Prism.js from CDN with Subresource Integrity (SRI)
- All external resources served over HTTPS
- No third-party analytics or tracking

### JavaScript Architecture

#### Module Pattern
JavaScript is organized into functional modules:
- Mobile navigation toggle
- Theme management  
- Smooth scrolling navigation
- Interactive demonstrations
- Code playground functionality
- Form validation examples

#### Event Handling Strategy
- Uses event delegation where appropriate
- Proper cleanup and memory management
- Touch-friendly interactions for mobile

### CSS Architecture

#### Custom Properties System
```css
:root {
    --primary-color: #4a90e2;
    --text-color: #333;
    --bg-color: #ffffff;
    /* Theme-aware color system */
}

[data-theme="dark"] {
    --primary-color: #5aa3f0;
    --text-color: #ecf0f1;
    --bg-color: #1a1a1a;
    /* Dark theme overrides */
}
```

#### Responsive Design Strategy
- Mobile-first CSS approach
- Flexbox and CSS Grid for layouts
- Responsive typography with relative units
- Progressive enhancement for advanced features

### Interactive Features Implementation

#### Code Playground
- Three synchronized editors (HTML, CSS, JS)
- Live preview generation using template strings
- Error handling for malformed JavaScript
- Copy-to-clipboard functionality for code blocks

#### Educational Demonstrations
- Step-by-step technology integration demos
- Interactive elements that respond to user actions
- Visual feedback for learning reinforcement

## Development Guidelines

### Adding New Interactive Examples
1. Create HTML structure in the examples section
2. Add corresponding CSS classes following existing patterns
3. Implement JavaScript functionality using event listeners
4. Ensure mobile responsiveness and accessibility

### Modifying Styles
- Use CSS custom properties for consistent theming
- Test both light and dark themes
- Maintain responsive design across all breakpoints
- Follow established naming conventions (BEM-like)

### Security Considerations
- Never use `eval()` or similar dangerous functions
- Sanitize any user input in playground examples
- Maintain CSP compliance for any new external resources
- Test iframe sandbox restrictions

### Mobile Optimization
- Test hamburger navigation functionality
- Ensure touch targets meet 44px minimum
- Verify responsive layout on various screen sizes
- Check theme toggle accessibility on mobile

## Educational Content Structure

The application follows a pedagogical progression:

1. **Basics Section** - Individual technology explanations
2. **Integration Section** - Step-by-step combination demonstration  
3. **Playground Section** - Interactive experimentation
4. **Examples Section** - Real-world implementation patterns

When adding new content, maintain this learning progression and ensure examples are beginner-friendly while demonstrating practical concepts.