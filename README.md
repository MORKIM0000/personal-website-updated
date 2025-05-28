# Website Documentation

## Overview

This is a personal website built with React, TypeScript, and Tailwind CSS. It features a clean, modern design with a minimalist color palette (black, white, and teal as an accent color). The site serves as a hub for writing and experiences in medicine, bioethics, and education.

## Project Structure

```
personal-website/
├── public/                  # Static assets
├── src/
│   ├── assets/              # Images and other assets
│   ├── components/          # Reusable UI components
│   │   ├── layout/          # Layout components (Header, Footer)
│   │   └── ui/              # UI components from shadcn/ui
│   ├── content/             # Markdown content files
│   │   ├── blog/            # Blog posts in Markdown
│   │   ├── mcat-resources/  # MCAT resources in Markdown
│   │   └── study-guides/    # Study guides in Markdown
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── pages/               # Page components
│   ├── App.tsx              # Main App component
│   ├── index.css            # Global styles
│   └── main.tsx             # Entry point
├── package.json             # Project dependencies
└── tailwind.config.js       # Tailwind CSS configuration
```

## Features

1. **Clean, Modern Design**
   - Minimalist color palette (black, white, and teal accent)
   - Clean typography with serif fonts for headings and sans-serif for body text
   - Responsive layout with plenty of white space

2. **Content Sections**
   - Blog for essays and reflections on bioethics, medical humanities, etc.
   - MCAT Resources section for study materials
   - Study Guides section organized by subject
   - About Me page with bio and social links
   - Contact form with social media integration

3. **Markdown-based Content Management**
   - Easy content creation using Markdown files
   - Organized content directories for different sections
   - Utility functions for parsing and rendering Markdown

4. **Mobile-Friendly and Performance Optimized**
   - Responsive design that works on all device sizes
   - Lazy loading for images and non-critical resources
   - Performance optimizations for fast loading

## Adding Content

### Blog Posts

To add a new blog post:

1. Create a new Markdown file in `src/content/blog/` with a descriptive filename (e.g., `new-post-title.md`)
2. Add the required frontmatter at the top of the file:

```markdown
---
title: "Your Post Title"
date: "YYYY-MM-DD"
excerpt: "A brief description of your post"
category: "Category Name"
---

# Your Post Title

Your content goes here...
```

3. Write your content using Markdown syntax
4. The post will automatically appear in the blog listing

### MCAT Resources

To add a new MCAT resource:

1. Create a new Markdown file in `src/content/mcat-resources/` with a descriptive filename
2. Add the required frontmatter:

```markdown
---
title: "Resource Title"
date: "YYYY-MM-DD"
excerpt: "Brief description"
type: "Study Guide/Flashcards/Practice Questions/etc."
difficulty: "Beginner/Intermediate/Advanced"
downloadable: true
---

# Resource Title

Content goes here...
```

### Study Guides

To add a new study guide:

1. Create a new Markdown file in `src/content/study-guides/` with a descriptive filename
2. Add the required frontmatter:

```markdown
---
title: "Study Guide Title"
date: "YYYY-MM-DD"
excerpt: "Brief description"
subject: "biology/chemistry/physics/etc."
level: "AP/College"
---

# Study Guide Title

Content goes here...
```

## Development

### Running the Development Server

```bash
cd personal-website
pnpm run dev
```

### Building for Production

```bash
pnpm run build
```

### Deployment

The site can be deployed to any static site hosting service like Netlify, Vercel, or GitHub Pages.

## Future Enhancements

The site is built to be easily expandable with features like:
- Newsletter signup integration
- Embedded data visualizations
- AI tools for student support
- User authentication for premium content
