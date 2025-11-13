## Kijabe Limb Reconstruction Unit WebSite

This is a modern landing page for Kijabe Limb Reconstruction Unit, built with [Next.js](https://nextjs.org) and TypeScript, following the App Router architecture.

## Tech Stack

- **Framework**: Next.js 15.3.2 (with App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 with shadcn/ui components
- **Animation**: Framer Motion 12.16.0
- **Icons**: Lucide React & React Icons
- **UI Components**: Radix UI primitives with shadcn/ui
- **State Management**: React 19
- **Build Tool**: Vercel (Turbopack enabled for development)

## Project Structure

```
landingpage-klru/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── donate/            # Donation page
│   ├── patient-resources/ # Patient resources page
│   ├── patient-stories/   # Patient stories page
│   ├── favicon.ico        # Website favicon
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── 404.tsx            # 404 error page
│   └── not-found.tsx      # Not found page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   │   ├── button.tsx    # Button component
│   │   ├── card.tsx      # Card component
│   │   ├── input.tsx     # Input component
│   │   ├── label.tsx     # Label component
│   │   ├── progressBar.tsx # Progress bar component
│   │   └── sheet.tsx     # Sheet component
│   ├── sections/         # Page sections
│   │   ├── ColoredBorder.tsx
│   │   ├── foot.tsx
│   │   ├── heartwave-animation.tsx
│   │   ├── Home-banner.tsx
│   │   ├── home-donate.tsx
│   │   ├── HospitalSection.tsx
│   │   ├── MeetSurgeonSection.tsx
│   │   ├── nav-donate.tsx
│   │   ├── patient-story-card.tsx
│   │   ├── PatientLS.tsx
│   │   ├── PatientSect.tsx
│   │   ├── PatientServices.tsx
│   │   ├── PatientSS.tsx
│   │   ├── PatientStoryHeader.tsx
│   │   └── services-section.tsx
│   ├── footer.tsx        # Site footer
│   └── navbar.tsx        # Navigation bar
├── lib/                  # Utility libraries
│   ├── utils.ts          # Utility functions
│   └── fakes/            # Mock data
│       ├── about-fakes.ts
│       ├── donate-fakes.ts
│       ├── home-fakes.ts
│       ├── not-found-fakes.ts
│       ├── patient-resources-fakes.ts
│       └── stories-fakes.ts
├── public/              # Static assets
│   ├── documents/       # PDF documents
│   ├── fonts/           # Custom fonts (Coves Bold & Light)
│   └── images/          # All images and SVG assets (60+ files)
├── package.json         # Dependencies and scripts
├── next.config.ts       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
├── postcss.config.mjs   # PostCSS configuration
├── eslint.config.mjs    # ESLint configuration
└── components.json      # shadcn/ui configuration
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd landingpage-klru
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

- `npm run dev` - Start development server with Turbopack for faster builds
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, accessible components with shadcn/ui
- **Performance**: Optimized with Next.js 15 and Turbopack
- **Type Safety**: Full TypeScript support
- **Animation**: Smooth transitions with Framer Motion
- **Custom Fonts**: Coves Bold and Light fonts included
- **SEO Friendly**: Next.js App Router with optimized metadata

## Build for Production

```bash
npm run build
npm run start
```

The production build will be optimized and ready for deployment.

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Customization

- Modify components in `/components` directory
- Update pages in `/app` directory
- Add new routes by creating new directories in `/app`
- Customize styles in `app/globals.css`
- Add new utilities in `lib/utils.ts`
- Update mock data in `lib/fakes/` files
