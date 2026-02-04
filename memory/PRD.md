# Wealth Advisor Website - PRD

## Original Problem Statement
Build a modern, clean and conversion-focused website for a Wealth Advisor / Financial Advisor operating in Poland. Professional, minimalist, premium design with dark blue/navy, white, and gold accents. Polish language throughout.

## User Choices
- Meeting booking: Simple form with date/time selection (stored in MongoDB)
- Blog: Static articles embedded in code
- Forms: Save to database (mock)
- Images: User will replace placeholders

## Architecture

### Backend (FastAPI)
- **API Routes**: `/api/contact`, `/api/bookings`, `/api/bookings/available-slots`, `/api/blog/articles`, `/api/blog/categories`
- **Database**: MongoDB for contacts and bookings
- **Static Data**: 5 educational blog articles in Polish

### Frontend (React)
- **Pages**: Home, O mnie, O firmie, Umów spotkanie, Blog, Blog Article, Kontakt
- **Components**: Navbar, Footer
- **UI Library**: Shadcn/UI with custom styling
- **Styling**: Tailwind CSS with custom colors (Navy #0A192F, Gold #D4AF37)

## Core Features (Implemented)
- [x] Hero section with CTAs
- [x] Trust elements (statistics)
- [x] Services section (Bento grid)
- [x] About advisor page with bio, education, experience
- [x] About company page with mission, values, compliance
- [x] Meeting booking with calendar and time slots
- [x] Blog with categories and search
- [x] Contact form
- [x] Responsive navigation with mobile menu
- [x] Polish language throughout

## User Personas
1. **Individual Investor**: Seeking professional financial advice for personal wealth building
2. **Pre-retiree**: Planning for retirement, looking for pension planning services
3. **Business Owner**: Needing wealth management and asset protection

## Prioritized Backlog

### P0 (Critical) - DONE
- All core pages implemented
- Navigation working
- Forms functional
- Blog with articles

### P1 (Important)
- Google Calendar integration for real booking sync
- Email notifications for form submissions
- Admin panel for blog management
- Analytics integration

### P2 (Nice to have)
- Multi-language support
- Newsletter subscription
- Client testimonials section
- Live chat widget

## What's Been Implemented
- **2026-02-04**: Initial MVP with all 6 pages, booking system, blog, contact forms

## Next Tasks
1. Replace placeholder images with actual advisor/company photos
2. Update contact information with real data
3. Consider adding Google Analytics
4. Optional: Implement email notifications (SendGrid)
