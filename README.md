# Premium Adult Coloring Books - Next.js Landing Page

A modern, responsive landing page for premium adult coloring books built with Next.js 14 and Tailwind CSS.

## 🚀 Features

- **Next.js 14 App Router** - Latest Next.js features with App Router
- **TypeScript** - Full type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Built-in metadata and Open Graph tags
- **Performance Optimized** - Next.js Image component and optimizations
- **Facebook Pixel Integration** - Analytics tracking
- **Vercel Analytics** - Performance monitoring

## 📁 Project Structure

```
landingpage_amazon/
├── app/
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page component
├── components/
│   ├── ProductCard.tsx      # Reusable product card
│   ├── BenefitCard.tsx      # Reusable benefit card
│   ├── TestimonialCard.tsx  # Reusable testimonial card
│   └── Footer.tsx           # Footer component
├── public/
│   ├── favicon.svg          # Site favicon
│   ├── site.webmanifest     # PWA manifest
│   └── *.jpg               # Product images
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd landingpage_amazon
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Colors
The project uses a green/emerald color scheme. You can customize colors in:
- `tailwind.config.js` - Add custom colors
- `app/globals.css` - Modify gradient classes

### Content
Update product information, testimonials, and benefits in:
- `app/page.tsx` - Main content data
- `components/` - Individual component content

### Images
- Place new images in `public/` directory
- Update image paths in `app/page.tsx`
- Use Next.js Image component for optimization

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🔧 Configuration Files

### `next.config.js`
- App Router enabled
- Image domains configured for Amazon images
- Analytics integration

### `tailwind.config.js`
- Content paths for all components
- Custom font family (Inter)
- Extended theme configuration

### `tsconfig.json`
- TypeScript configuration
- Path aliases (`@/*`)
- Next.js specific settings

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## 📊 Analytics

- **Facebook Pixel**: Track conversions and user behavior
- **Vercel Analytics**: Monitor performance and user experience

## 🔒 Privacy

- No personal data collection
- Anonymous analytics only
- Privacy policy included
- GDPR compliant

## 📞 Contact

For questions or support:
- Email: Wonderwallart@gmx.net
- Developer: Mikael Söderberg

## 📄 License

This project is private and proprietary.

---

Built with ❤️ using Next.js 14 and Tailwind CSS 