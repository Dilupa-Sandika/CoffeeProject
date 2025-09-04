# Coco Espresso AU - E-Commerce Website

A world-class, minimalist e-commerce landing page for Coco Espresso AU, built with Next.js 14, Tailwind CSS, and Sanity.io.

## Features

- **Single-page design** with above-the-fold purchase flow
- **Responsive** mobile-first design
- **Shopping cart** with real-time updates using Zustand
- **Sanity.io integration** for product management
- **Minimalist design** with premium coffee brand aesthetics

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Styling:** Tailwind CSS with custom brand colors
- **State Management:** Zustand for cart functionality
- **CMS:** Sanity.io for product data
- **Icons:** Lucide React

## Quick Start

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.local.example .env.local
   ```
   Then edit `.env.local` and add your Sanity credentials:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Sanity.io Setup

This project is configured to work with Sanity.io for product management. You'll need to:

1. Create a Sanity project at [sanity.io](https://sanity.io)
2. Set up a product schema with the following fields:
   - `name` (string)
   - `description` (text)
   - `image` (image)
   - `slug` (slug, required, should be "coco-espresso-coffee")
   - `variations` (array of objects with: `weight`, `price`, `inStock`)

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── Header.js
│   ├── Hero.js
│   ├── CartSidebar.js
│   └── OurStory.js
├── store/
│   └── cart.js
sanity/
└── client.js
```

## Color Palette

- **Primary Brown:** #6B4F4B
- **Light Beige Background:** #F5EFE6  
- **Accent White:** #FFFFFF
- **Body Text:** #333333

## Fonts

- **Headings:** Poppins (Google Fonts)
- **Body Text:** Inter (Google Fonts)
