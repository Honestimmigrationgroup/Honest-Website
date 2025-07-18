# Honest Immigration - Study Abroad Consultancy Website

A modern, responsive website for Honest Immigration consultancy services, built with Next.js 15, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive**: Fully responsive design for all devices
- **SEO Optimized**: Complete SEO setup with sitemaps, meta tags, and structured data
- **Performance**: Optimized for Core Web Vitals and fast loading
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Interactive Elements**: Animated components and smooth transitions
- **Contact Forms**: Server actions for form submissions
- **Multi-destination**: Dedicated pages for different study abroad destinations

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/your-username/honest-immigration.git
   cd honest-immigration
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   Edit `.env.local` with your actual values.

4. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

\`\`\`
honest-immigration/
├── app/                    # Next.js App Router
│   ├── about-us/          # About us page
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── study-abroad/      # Study abroad destinations
│   ├── success-stories/   # Success stories page
│   ├── actions/           # Server actions
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── robots.ts         # Dynamic robots.txt
│   └── sitemap.ts        # Dynamic sitemap
├── components/            # Reusable components
├── hooks/                # Custom React hooks
├── public/               # Static assets
├── utils/                # Utility functions
└── README.md
\`\`\`

## 🛠️ Available Scripts

\`\`\`bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks

# Deployment
npm run deploy       # Deploy to Vercel
\`\`\`

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Connect to GitHub**
   - Push your code to GitHub
   - Connect your repository to Vercel

2. **Environment Variables**
   Set these in Vercel dashboard:
   \`\`\`
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   CONTACT_EMAIL=your-email@domain.com
   \`\`\`

3. **Custom Domain**
   - Add your custom domain in Vercel dashboard
   - Configure DNS records as instructed

4. **Automatic Deployments**
   - Every push to main branch triggers deployment
   - Preview deployments for pull requests

### Manual Deployment

\`\`\`bash
# Build the project
npm run build

# Deploy to Vercel
npx vercel --prod
\`\`\`

## 📧 Contact Form Setup

The contact form uses Next.js Server Actions. To receive emails:

1. **Update contact action** in `app/actions/contact.ts`
2. **Add email service** (SendGrid, Resend, etc.)
3. **Set environment variables** for email configuration

## 🔍 SEO Configuration

### Google Search Console
1. Verify ownership using meta tag in `app/layout.tsx`
2. Submit sitemap: `https://your-domain.com/sitemap.xml`

### Social Media
Update social media handles in `app/layout.tsx`:
\`\`\`tsx
twitter: {
  creator: "@your-twitter-handle",
  site: "@your-twitter-handle",
},
\`\`\`

## 🎨 Customization

### Colors
Update brand colors in `tailwind.config.ts`:
\`\`\`js
colors: {
  primary: {
    50: '#your-color',
    // ... other shades
  }
}
\`\`\`

### Content
- **Hero Section**: Edit `app/page.tsx`
- **About Us**: Edit `app/about-us/page.tsx`
- **Services**: Edit `app/services/page.tsx`
- **Destinations**: Edit files in `app/study-abroad/`

### Images
Replace images in `public/` folder:
- `logo.png` - Company logo
- `hero-image.png` - Hero section image
- `world-map-final.png` - World map image

## 🧪 Testing

\`\`\`bash
# Run type checking
npm run type-check

# Run linting
npm run lint

# Test build
npm run build
\`\`\`

## 📱 Progressive Web App (PWA)

The site includes PWA capabilities:
- **Manifest**: `public/manifest.json`
- **Service Worker**: Auto-generated by Next.js
- **Offline Support**: Basic offline functionality

## 🔧 Development Tools

### Recommended VS Code Extensions
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- TypeScript Importer
- Prettier - Code formatter
- Auto Rename Tag

### Code Formatting
The project uses Prettier and ESLint for code formatting:
\`\`\`bash
# Format code
npm run format

# Fix linting issues
npm run lint:fix
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check this README and inline comments
- **Issues**: Create an issue on GitHub
- **Email**: contact@honestimmigration.com

## 🔄 Updates

To update dependencies:
\`\`\`bash
# Check outdated packages
npm outdated

# Update packages
npm update

# Update Next.js
npm install next@latest react@latest react-dom@latest
\`\`\`

## 📊 Analytics

The site is ready for analytics integration:
- **Google Analytics**: Add GA4 tracking ID
- **Vercel Analytics**: Enable in Vercel dashboard
- **Facebook Pixel**: Add pixel ID for ad campaigns

## 🌍 Internationalization

To add multiple languages:
1. Install `next-intl`
2. Configure locale routing
3. Add translation files
4. Update components for i18n

---

**Built with ❤️ by Honest Immigration Team**
