# Contributing to Honest Immigration Website

Thank you for your interest in contributing to the Honest Immigration website! This document provides guidelines and instructions for contributors.

## 🤝 How to Contribute

### Reporting Issues

1. **Check existing issues** first to avoid duplicates
2. **Use issue templates** when available
3. **Provide detailed information**:
   - Browser and version
   - Operating system
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable

### Suggesting Features

1. **Open a feature request** issue
2. **Describe the feature** in detail
3. **Explain the use case** and benefits
4. **Consider implementation** complexity

## 🛠️ Development Setup

### Prerequisites

- Node.js 18+
- Git
- Code editor (VS Code recommended)

### Setup Steps

1. **Fork the repository**
   \`\`\`bash
   # Click "Fork" on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/honest-immigration.git
   cd honest-immigration
   \`\`\`

2. **Add upstream remote**
   \`\`\`bash
   git remote add upstream https://github.com/original-owner/honest-immigration.git
   \`\`\`

3. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

4. **Set up environment**
   \`\`\`bash
   cp .env.example .env.local
   # Edit .env.local with your values
   \`\`\`

5. **Start development server**
   \`\`\`bash
   npm run dev
   \`\`\`

## 📝 Coding Standards

### Code Style

- **TypeScript**: Use TypeScript for all new files
- **Formatting**: Use Prettier (runs automatically)
- **Linting**: Follow ESLint rules
- **Naming**: Use camelCase for variables, PascalCase for components

### Component Guidelines

\`\`\`tsx
// ✅ Good component structure
'use client' // Only if needed

import { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        'base-styles',
        variant === 'primary' && 'primary-styles',
        variant === 'secondary' && 'secondary-styles',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
\`\`\`

### File Organization

\`\`\`
components/
├── ui/              # Reusable UI components
├── forms/           # Form components
├── layout/          # Layout components
└── feature/         # Feature-specific components

app/
├── (routes)/        # Route groups
├── api/             # API routes
├── actions/         # Server actions
└── globals.css      # Global styles
\`\`\`

### Commit Messages

Use conventional commits:

\`\`\`bash
# Format: type(scope): description

feat(contact): add email validation
fix(navbar): resolve mobile menu issue
docs(readme): update installation steps
style(button): improve hover states
refactor(utils): simplify date formatting
test(contact): add form validation tests
\`\`\`

### Branch Naming

\`\`\`bash
# Feature branches
feature/contact-form-validation
feature/new-destination-page

# Bug fixes
fix/mobile-navigation-issue
fix/form-submission-error

# Documentation
docs/update-readme
docs/add-api-documentation
\`\`\`

## 🔄 Pull Request Process

### Before Submitting

1. **Update your fork**
   \`\`\`bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   \`\`\`

2. **Create feature branch**
   \`\`\`bash
   git checkout -b feature/your-feature-name
   \`\`\`

3. **Make your changes**
   - Write clean, documented code
   - Add tests if applicable
   - Update documentation

4. **Test your changes**
   \`\`\`bash
   npm run type-check
   npm run lint
   npm run build
   \`\`\`

5. **Commit your changes**
   \`\`\`bash
   git add .
   git commit -m "feat(scope): description"
   \`\`\`

6. **Push to your fork**
   \`\`\`bash
   git push origin feature/your-feature-name
   \`\`\`

### Pull Request Guidelines

1. **Use the PR template**
2. **Link related issues**
3. **Provide clear description**
4. **Include screenshots** for UI changes
5. **Request review** from maintainers

### PR Template

\`\`\`markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tests pass locally
- [ ] Manual testing completed
- [ ] Cross-browser testing (if UI changes)

## Screenshots
(If applicable)

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No console errors
\`\`\`

## 🧪 Testing

### Manual Testing

1. **Cross-browser testing**
   - Chrome, Firefox, Safari, Edge
   - Mobile browsers

2. **Responsive testing**
   - Mobile (320px+)
   - Tablet (768px+)
   - Desktop (1024px+)

3. **Accessibility testing**
   - Keyboard navigation
   - Screen reader compatibility
   - Color contrast

### Automated Testing

\`\`\`bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build test
npm run build
\`\`\`

## 📚 Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

### Tools
- [VS Code Extensions](.vscode/extensions.json)
- [Prettier Configuration](.prettierrc)
- [ESLint Configuration](.eslintrc.json)

## 🆘 Getting Help

- **GitHub Issues**: For bugs and feature requests
- **Discussions**: For questions and general discussion
- **Email**: contact@honestimmigration.com

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Honest Immigration! 🙏
