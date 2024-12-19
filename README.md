# Modern Church Website

A modern, responsive church website built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design for all screen sizes
- Modern UI with Tailwind CSS
- Component-based architecture
- TypeScript for type safety
- Reusable components and utilities
- Clean and maintainable code structure

## Project Structure

```
src/
├── components/
│   ├── common/          # Reusable components
│   │   ├── Button.tsx
│   │   └── SectionHeader.tsx
│   ├── contact/         # Contact-related components
│   │   ├── ContactCard.tsx
│   │   └── ContactForm.tsx
│   ├── services/        # Service-related components
│   │   └── ServiceCard.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   └── Services.tsx
├── utils/              # Utility files
│   ├── constants.ts    # Configuration and constants
│   └── types.ts        # TypeScript interfaces
├── App.tsx
└── main.tsx
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Customization

You can customize the website by:

1. Modifying content in `src/utils/constants.ts`
2. Adjusting styles in component files
3. Adding new components as needed
4. Updating images and colors to match your church's branding

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- Lucide React Icons