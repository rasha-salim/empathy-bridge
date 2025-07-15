# Unboxing Empathy - Project Context

## Project Overview
Unboxing Empathy is a Next.js application designed to build empathy around the Gaza crisis through interactive perspective-taking scenarios. The app will be open-source and deployed for free on Netlify.

## Technical Requirements

### Tech Stack
- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Charts:** Recharts
- **Icons:** Lucide React
- **Deployment:** Netlify (free tier)
- **Repository:** GitHub (open source)

### Dependencies
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "lucide-react": "latest",
    "recharts": "latest"
  },
  "devDependencies": {
    "@types/node": "latest",
    "@types/react": "latest",
    "@types/react-dom": "latest",
    "typescript": "latest",
    "tailwindcss": "latest",
    "autoprefixer": "latest",
    "postcss": "latest"
  }
}
```

## Architecture

### Folder Structure
```
unboxing-empathy/
├── app/
│   ├── page.tsx (main game)
│   ├── analytics/page.tsx
│   ├── global/page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── EmpathyGame.tsx
│   ├── NavigationBar.tsx
│   ├── AnalyticsView.tsx
│   └── GlobalImpactView.tsx
├── lib/
│   ├── scenarios.ts
│   ├── types.ts
│   └── utils.ts
├── public/
├── docs/
│   ├── CONTRIBUTING.md
│   ├── DEPLOYMENT.md
│   └── API.md
└── README.md
```

## Core Features

### MVP Features (Must Have)
1. **Perspective-Taking Game**
   - Gaza-focused scenarios with multiple viewpoints
   - Deep psychological analysis of each perspective
   - Progress tracking through scenarios

2. **Analytics Dashboard**
   - Personal empathy growth tracking
   - Data visualization with charts
   - Achievement system

3. **Global Impact View**
   - Community statistics
   - Real-world impact metrics
   - Calls to action for humanitarian support

4. **AI Integration (Optional)**
   - Personalized content generation using `window.claude?.complete()`
   - Graceful fallbacks when AI unavailable
   - Error handling for API failures

### Future Features (Post-MVP)
- Voice narration
- Multi-language support
- User authentication
- Real-time collaboration
- Additional conflict regions

## Code Standards

### TypeScript
- Use strict TypeScript configuration
- Define interfaces for all data structures
- Use proper typing for all functions and components
- Add JSDoc comments for public APIs

### React Best Practices
- Use functional components with hooks
- Implement proper error boundaries
- Use React.memo() for performance optimization
- Follow component composition patterns

### Styling Guidelines
- Use Tailwind CSS utility classes
- Maintain consistent color scheme:
  - Primary: Blue (#3B82F6)
  - Secondary: Purple (#8B5CF6)
  - Accent: Red (#EF4444) for empathy/heart elements
  - Success: Green (#10B981)
  - Warning: Orange (#F59E0B)
- Ensure mobile-first responsive design
- Maintain accessibility (ARIA labels, keyboard navigation)

### File Naming Conventions
- Components: PascalCase (e.g., `EmpathyGame.tsx`)
- Utilities: camelCase (e.g., `formatDate.ts`)
- Constants: UPPER_SNAKE_CASE
- Interfaces: PascalCase with descriptive names

## Data Structures

### Key Interfaces
```typescript
interface Perspective {
  role: string;
  background: string;
  thoughts: string;
  feelings: string;
  needs: string;
  physiological: string;
  longTermImpact: string;
}

interface Scenario {
  id: number;
  title: string;
  complexity: 'low' | 'medium' | 'high';
  region: string;
  context: string;
  situation: string;
  perspectives: Perspective[];
  systemicFactors: string[];
}

interface UserProfile {
  name: string;
  age: string;
  completedScenarios: number[];
  empathyGrowth: EmpathyGrowthPoint[];
  achievements: string[];
}
```

## Content Guidelines

### Scenario Content
- Focus on Gaza crisis with respectful, educational approach
- Include multiple perspectives (children, parents, aid workers, observers)
- Provide psychological, physiological, and systemic context
- Maintain factual accuracy and cultural sensitivity
- Include systemic factors contributing to situations

### Tone and Language
- Empathetic and respectful
- Educational without being preachy
- Age-appropriate for teenagers and adults
- Culturally sensitive and accurate
- Action-oriented (providing ways to help)

## Performance Requirements

### Optimization Targets
- First Contentful Paint: < 2 seconds
- Time to Interactive: < 3 seconds
- Bundle size: < 500KB compressed
- Lighthouse score: > 90 for all metrics

### Implementation
- Use Next.js static generation where possible
- Implement lazy loading for charts
- Optimize images and assets
- Use React.memo() for expensive components

## Accessibility Requirements

### Standards
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Color contrast ratios > 4.5:1
- Focus indicators on all interactive elements

### Implementation
- Proper ARIA labels
- Semantic HTML structure
- Alternative text for images
- Focus management for modals

## Deployment Configuration

### Netlify Setup
- Build command: `npm run build`
- Publish directory: `out` (for static export)
- Node version: 18.x
- Redirect rules for SPA routing

### Environment Variables
- None required for MVP
- Optional: Analytics tracking ID
- Future: AI API keys

## Testing Strategy

### Manual Testing
- Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- Mobile responsiveness (iOS Safari, Chrome Mobile)
- Accessibility testing with screen readers
- Performance testing with slow networks

### Automated Testing (Future)
- Unit tests for utility functions
- Component testing with React Testing Library
- E2E testing with Playwright

## Documentation Requirements

### Code Documentation
- JSDoc comments for all public functions
- README with setup instructions
- CONTRIBUTING guide for open source
- API documentation for components

### User Documentation
- Clear instructions for each game phase
- Help text for complex features
- Accessibility features explanation

## Security Considerations

### Data Privacy
- No personal data collection beyond localStorage
- Clear privacy policy for future features
- Secure handling of user input

### Content Security
- Sanitize any user-generated content
- Validate all input data
- Implement proper error boundaries

## Success Metrics

### Technical Metrics
- Zero critical accessibility violations
- Lighthouse performance score > 90
- Bundle size under 500KB
- Zero TypeScript errors

### User Experience Metrics
- Completion rate of scenarios
- Time spent in analytics section
- Mobile vs desktop usage patterns
- User feedback on empathy building

## Development Workflow

### Git Workflow
- Main branch for production-ready code
- Feature branches for new development
- Conventional commits for clear history
- Pull request reviews for quality

### Code Quality
- TypeScript strict mode enabled
- ESLint and Prettier configuration
- Pre-commit hooks for code formatting
- Component architecture reviews

## Open Source Preparation

### Documentation
- Clear README with project mission
- Contributor guidelines
- Code of conduct
- Issue templates

### Community
- Welcoming to contributors of all skill levels
- Clear guidelines for adding new scenarios
- Documentation for extending features
- Regular maintenance and updates