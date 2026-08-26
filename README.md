# Estatemarket

A modern real estate marketplace for browsing, listing, and managing property listings — built with the Next.js App Router, Prisma (Postgres/Neon), and Better Auth.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-7-2D3748?logo=prisma)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-4169E1?logo=postgresql&logoColor=white)](https://neon.tech/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com/)

**Repo:** [github.com/IztihadRafid/EstateManagment](https://github.com/IztihadRafid/EstateManagment)
**Live demo:** [estate-managment.vercel.app](https://estate-managment.vercel.app/)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Database Schema](#database-schema)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Database Setup](#database-setup)
  - [Running Locally](#running-locally)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Estatemarket is a full-stack property listing platform. Users can browse properties, search a marketplace, view property details, contact the owner by email, and (once authenticated) list their own properties with image uploads. Auth supports both email/password and Google sign-in, and transactional email (contact form, inquiries) is sent via Resend using React Email templates.

## Features

- 🏠 **Property Listings** — Browse properties with filters, view full property detail pages
- 🔍 **Search & Filters** — Search box and filter modal for narrowing listings by type, price, etc.
- 🛒 **Marketplace** — Dedicated marketplace view of listings
- 🔐 **Authentication** — Email/password + Google OAuth via Better Auth, with session-based access control
- ➕ **Add Property** — Authenticated users can create listings with image uploads (Cloudinary)
- 📩 **Contact & Inquiry Emails** — Property inquiry form sends templated emails via Resend + React Email
- 📱 **Fully Responsive** — Mobile-first layouts, including a slide-out navigation menu
- 👤 **Personalized Navbar** — Displays the logged-in user's name and session-aware actions
- 🔒 **Protected Routes** — `(protected)` route group gates `/properties` behind authentication
- 💀 **Loading States** — Skeleton components for property cards and content while data loads
- ⚡ **Server & Client Components** — Session-dependent routes are forced dynamic; the rest render statically where possible

## Tech Stack

| Layer            | Technology                                  |
|-------------------|-----------------------------------------------|
| Framework         | [Next.js 16](https://nextjs.org/) (App Router) |
| UI Library         | React 19                                       |
| Language           | TypeScript                                     |
| Styling            | Tailwind CSS 4, `tailwind-merge`, `class-variance-authority` |
| State              | Zustand (modal/UI stores)                      |
| Database           | PostgreSQL (Neon serverless)                   |
| ORM                | Prisma 7 (`@prisma/adapter-neon`)              |
| Authentication      | Better Auth (email/password + Google OAuth)    |
| Image Uploads       | Cloudinary                                     |
| Transactional Email | Resend + React Email                           |
| Icons               | Lucide React, React Icons                      |
| Notifications        | react-hot-toast                                |
| Deployment          | Vercel                                         |

## Database Schema

Defined in `prisma/schema.prisma` (PostgreSQL):

- **User** — id, name, email, emailVerified, image, relations to sessions/accounts/properties
- **Property** — title, description, propertyType, listingType, price, bedrooms, bathrooms, parkingSpaces, area, location, address, image, owned by a `User`
- **Session**, **Account**, **Verification** — managed by Better Auth's Prisma adapter for auth/session handling

## Project Structure

```
EstateManagment/
├── prisma/
│   └── schema.prisma                  # User, Property, Session, Account, Verification models
├── public/images/                     # Logos, hero image, gallery images
├── src/
│   ├── app/
│   │   ├── (protected)/
│   │   │   ├── layout.tsx             # Auth-gated layout
│   │   │   └── properties/page.tsx    # Property listing (force-dynamic, session-dependent)
│   │   ├── api/
│   │   │   ├── auth/[...all]/route.ts # Better Auth handler
│   │   │   ├── properties/route.ts    # Properties API route
│   │   │   ├── send-contact/route.ts  # Contact form email endpoint
│   │   │   └── send-email/route.ts    # Inquiry email endpoint
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── marketplace/page.tsx
│   │   ├── property/[propertyId]/page.tsx
│   │   ├── privacy/page.tsx
│   │   ├── terms/page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx                   # Home page
│   ├── components/
│   │   ├── Navbar/, Footer/
│   │   ├── home/                      # RecentProperties, SearchBox
│   │   ├── marketplace/MarketPlace.tsx
│   │   ├── modals/                    # Login, Register, CreateProperty, Filter, base Modal
│   │   ├── properties/                # PropertyCard, PropertyTypeCard, ImageUpload, Counter, EmailForm
│   │   ├── emails/InquiryEmail.tsx    # React Email template
│   │   ├── skeletonCard/              # Loading skeletons
│   │   ├── layouts/FrontendLayout.tsx
│   │   └── ui/                        # Button, Input, EmptyState
│   ├── constants/                     # Filter options, property types, footer data, dummy data
│   ├── database/db.ts                 # Prisma client instance
│   ├── lib/
│   │   ├── auth.ts                    # Better Auth server config (email/password + Google)
│   │   ├── auth-client.ts             # Better Auth client hooks (useSession, signOut, ...)
│   │   ├── cloudinary.ts, resend.ts, utils.ts
│   ├── server-actions/
│   │   ├── getCurrentUser.tsx         # Server-only, uses next/headers
│   │   ├── getProperties.tsx
│   │   ├── getProperty.tsx
│   │   ├── getRecentProperties.tsx
│   │   └── getUserProperty.ts
│   ├── services/                      # Cloudinary + Google sign-in helpers
│   ├── store/                         # useAuthModalStore, useCreatePropertyModalStore, useFilterModalStore
│   └── types/                         # property.ts, footertypes.ts
├── prisma.config.ts
├── next.config.ts
├── components.json                    # shadcn/ui config
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18.18+ (Next.js 16 / React 19 — Node 20+ recommended)
- npm
- A PostgreSQL database — this project is built for [Neon](https://neon.tech/) (`@prisma/adapter-neon`)
- A [Cloudinary](https://cloudinary.com/) account (image uploads)
- A [Resend](https://resend.com/) account (transactional email)
- A [Google Cloud OAuth](https://console.cloud.google.com/) client (Google sign-in)

### Installation

```bash
git clone https://github.com/IztihadRafid/EstateManagment.git
cd EstateManagment
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
# Database (Neon Postgres)
DATABASE_URL="postgresql://user:password@host/dbname?sslmode=require"

# Better Auth
BETTER_AUTH_URL="http://localhost:3000"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Cloudinary (image uploads)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloud-name"
NEXT_PUBLIC_CLOUDINARY_API_KEY="your-api-key"
NEXT_PUBLIC_CLOUDINARY_API_SECRET="your-api-secret"

# Resend (transactional email)
RESEND_API_KEY="your-resend-api-key"
EMAIL_FROM="onboarding@yourdomain.com"
```

> ⚠️ Never commit `.env`. In production (Vercel), set these under Project Settings → Environment Variables.

### Database Setup

```bash
npx prisma generate
npx prisma migrate dev --name init
```

Inspect data with Prisma Studio:

```bash
npx prisma studio
```

### Running Locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Command         | Description                                              |
|------------------|------------------------------------------------------------|
| `npm run dev`   | Start the development server                              |
| `npm run build` | Runs `prisma generate` then `next build` for production   |
| `npm run start` | Start the production server                               |
| `npm run lint`  | Run ESLint                                                 |

## Deployment

Deployed on [Vercel](https://vercel.com/):

1. Push to GitHub.
2. Import the repo into Vercel.
3. Add all environment variables listed above in the Vercel project settings.
4. Use a Neon (or other serverless-friendly) Postgres instance so connections work well in Vercel's serverless functions.
5. Vercel runs `npm run build` (`prisma generate && next build`) automatically on each deploy.

**Note:** `/properties` is under the `(protected)` route group and reads the session via `next/headers` in `getCurrentUser`, so it's rendered dynamically (`force-dynamic`) rather than statically — this is expected since its content depends on the logged-in user.

## Roadmap

- [ ] Saved / favorited properties
- [ ] Owner dashboard for managing listed properties (edit/delete)
- [ ] Pagination / infinite scroll on listings
- [ ] Map view for property locations
- [ ] Admin moderation for listings

## Contributing

Contributions are welcome. Please open an issue to discuss significant changes before submitting a pull request.

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## License

This project is licensed under the [MIT License](LICENSE).

---

Built by [Iztihad Rafid](https://github.com/IztihadRafid)
