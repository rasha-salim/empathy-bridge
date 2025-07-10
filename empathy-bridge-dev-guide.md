# Empathy Bridge - Development Guide

## Overview
This guide will help you build and deploy the Empathy Bridge application using Claude Code in 2-3 days. The app focuses on building empathy around the Gaza crisis through perspective-taking scenarios.

## Prerequisites
- Node.js 18+ installed
- GitHub account
- Netlify account (free)
- Claude Code access
- 3-4 hours daily for 2-3 days

---

## Phase 1: Project Setup (Day 1 - Hour 1)

### Claude Code Prompt 1: Initial Setup
```
Create a Next.js 14 project called "empathy-bridge" with the following requirements:

1. Use TypeScript and App Router
2. Install and configure Tailwind CSS
3. Install these dependencies:
   - lucide-react (for icons)
   - recharts (for analytics charts)
   - @types/node, @types/react, @types/react-dom

4. Create this folder structure:
   ```
   empathy-bridge/
   ├── app/
   │   ├── page.tsx
   │   ├── analytics/
   │   │   └── page.tsx
   │   ├── global/
   │   │   └── page.tsx
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
   └── README.md
   ```

5. Set up a clean Tailwind config with custom colors for the empathy theme
6. Create basic TypeScript interfaces for the game data structures
7. Initialize git repository and create initial commit

Please create all the boilerplate files and basic structure.
```

---

## Phase 2: Core Components (Day 1 - Hours 2-3)

### Claude Code Prompt 2: Type Definitions
```
In lib/types.ts, create comprehensive TypeScript interfaces for:

1. Perspective interface with fields:
   - role: string
   - background: string
   - thoughts: string
   - feelings: string
   - needs: string
   - physiological: string
   - longTermImpact: string

2. Scenario interface with fields:
   - id: number
   - title: string
   - complexity: 'low' | 'medium' | 'high'
   - region: string
   - context: string
   - situation: string
   - perspectives: Perspective[]
   - systemicFactors: string[]

3. UserProfile interface with fields:
   - name: string
   - age: string
   - location: string
   - completedScenarios: number[]
   - empathyGrowth: EmpathyGrowthPoint[]
   - achievements: string[]
   - preferredComplexity: string

4. EmpathyGrowthPoint interface for analytics

5. GlobalStats interface for the global impact page

Also create utility functions for:
- Local storage operations (save/load user profile)
- Empathy score calculations
- Data formatting for charts

Export all interfaces and add JSDoc comments for documentation.
```

### Claude Code Prompt 3: Scenario Data
```
In lib/scenarios.ts, create 3-4 detailed Gaza-focused scenarios following this structure:

1. "The Displacement Crisis" - Family forced to evacuate
   - Child perspective (8-year-old Fatima)
   - Parent perspective (Ahmad, injured teacher)
   - Aid worker perspective (Sarah from Canada)

2. "The Generational Trauma" - Three generations in refugee camp
   - Grandmother (78, survivor of 1948)
   - Mother (45, born in camp)
   - Teenager (16, aspiring engineer)

3. "The Interrupted Education" - Children missing school
   - Student perspective
   - Teacher perspective  
   - International observer perspective

4. "The Healing Path" - Post-conflict rebuilding
   - Community leader
   - Young peace activist
   - International supporter

Each scenario should include:
- Rich background details
- Psychological depth
- Physiological impacts
- Long-term implications
- Systemic factors contributing to the situation

Make the content respectful, educational, and factually grounded. Include detailed JSDoc comments explaining the educational purpose of each scenario.
```

---

## Phase 3: Main Game Component (Day 1 - Hour 4)

### Claude Code Prompt 4: Core Game Logic
```
Create components/EmpathyGame.tsx as the main game component with:

1. State management for:
   - Current scenario and selected perspective
   - User profile and empathy score
   - Game phase (intro, playing, reflection, complete)
   - View mode (game, analytics, global)

2. Core functions:
   - selectPerspective() - handles perspective selection
   - updateEmpathyGrowth() - tracks user progress
   - nextScenario() - advances through scenarios
   - saveProgress() - persists to localStorage

3. AI Integration (with graceful fallbacks):
   - generatePersonalizedContent() function that:
     * Attempts to call window.claude?.complete() if available
     * Falls back to static personalized responses
     * Handles errors gracefully
     * Shows loading states

4. Game phases:
   - Intro screen with user profile setup
   - Main game with scenario selection
   - Reflection screen with deep perspective analysis
   - Completion screen with achievements

5. Responsive design using Tailwind
6. Accessibility features (proper ARIA labels, keyboard navigation)
7. Error boundaries and loading states

The component should be modular, well-commented, and follow React best practices.
```

---

## Phase 4: Analytics Dashboard (Day 2 - Hours 1-2)

### Claude Code Prompt 5: Analytics Components
```
Create components/AnalyticsView.tsx with advanced data visualization:

1. Stats cards showing:
   - Current empathy score
   - Perspectives explored
   - Growth rate percentage
   - Achievements earned

2. Charts using Recharts:
   - Line chart for empathy growth over time
   - Radar chart for perspective empathy levels
   - Bar chart for scenario completion rates

3. Recent insights section:
   - Timeline of explored perspectives
   - Personal reflection notes
   - Growth milestones

4. Data processing functions:
   - getEmpathyGrowthData() - formats data for line chart
   - getEmpathyRadarData() - calculates perspective scores
   - calculateGrowthRate() - determines progress metrics

Also create components/GlobalImpactView.tsx showing:
- Global community statistics
- Real-world impact metrics
- Gaza-specific engagement data
- Call-to-action sections for humanitarian support

Both components should be responsive, accessible, and handle empty data states gracefully.
```

### Claude Code Prompt 6: Navigation and Layout
```
Create components/NavigationBar.tsx with:

1. Clean, responsive navigation between:
   - Experience (main game)
   - Analytics (personal progress)
   - Global Impact (community stats)

2. User profile indicator
3. Settings toggle (for future features)
4. Responsive mobile menu
5. Active state indicators

Create app/layout.tsx with:
1. Proper HTML structure and metadata
2. Global CSS imports
3. Font optimization
4. SEO-friendly meta tags for social sharing
5. Error boundary wrapper

Update app/page.tsx, app/analytics/page.tsx, and app/global/page.tsx to:
1. Import and use the appropriate components
2. Handle client-side rendering properly
3. Include proper page metadata
4. Implement proper TypeScript typing
```

---

## Phase 5: Polish and Documentation (Day 2 - Hours 3-4)

### Claude Code Prompt 7: Performance and Polish
```
Optimize the application for production:

1. Performance improvements:
   - Add React.memo() for expensive components
   - Implement useCallback() for event handlers
   - Add lazy loading for chart components
   - Optimize images and assets

2. Mobile responsiveness:
   - Test all components on mobile viewports
   - Ensure touch-friendly interactions
   - Optimize text sizes and spacing
   - Add mobile-specific navigation

3. Error handling:
   - Add proper error boundaries
   - Handle localStorage failures gracefully
   - Implement retry mechanisms for AI calls
   - Add user-friendly error messages

4. Accessibility improvements:
   - Add proper ARIA labels
   - Ensure keyboard navigation works
   - Add focus indicators
   - Test with screen readers

5. Loading states:
   - Add skeleton screens for data loading
   - Implement smooth transitions
   - Add progress indicators
   - Handle slow network conditions

6. Browser compatibility:
   - Test localStorage availability
   - Add polyfills if needed
   - Handle older browser gracefully
```

### Claude Code Prompt 8: Documentation
```
Create comprehensive documentation:

1. README.md with:
   - Project description and mission
   - Installation instructions
   - Development setup guide
   - Available scripts and commands
   - Technology stack overview
   - Contributing guidelines link

2. docs/CONTRIBUTING.md with:
   - Code style guidelines
   - Component architecture explanation
   - How to add new scenarios
   - Testing procedures
   - Pull request process
   - Issue reporting guidelines

3. docs/DEPLOYMENT.md with:
   - Step-by-step Netlify deployment
   - Environment variable setup
   - Custom domain configuration
   - Performance optimization tips
   - Troubleshooting common issues

4. docs/API.md with:
   - Component API documentation
   - Props interfaces
   - State management explanation
   - Event handling patterns
   - Integration guidelines

5. Code comments:
   - Add JSDoc comments to all functions
   - Document complex logic
   - Explain business logic decisions
   - Add TODO comments for future features

All documentation should be beginner-friendly and include examples.
```

---

## Phase 6: Deployment (Day 3 - Hours 1-2)

### Claude Code Prompt 9: Netlify Deployment Setup
```
Prepare the application for Netlify deployment:

1. Create netlify.toml configuration file with:
   - Build settings for Next.js
   - Redirect rules for client-side routing
   - Header configurations for security
   - Environment variable handling

2. Optimize build process:
   - Add build scripts to package.json
   - Configure Next.js for static export
   - Optimize bundle size
   - Set up proper caching headers

3. Create deployment checklist:
   - Environment variables needed
   - Build optimization steps
   - Performance testing
   - Cross-browser testing

4. Add GitHub Actions workflow (optional) for:
   - Automated testing
   - Build verification
   - Deployment automation

5. Create .env.example file showing:
   - Required environment variables
   - Optional configuration options
   - Development vs production settings

Provide step-by-step instructions for manual Netlify deployment.
```

---

## Development Timeline

### Day 1 (3-4 hours):
- **Hour 1:** Project setup and dependencies (Prompts 1)
- **Hour 2:** Type definitions and scenario data (Prompts 2-3)
- **Hour 3-4:** Core game component (Prompt 4)

### Day 2 (3-4 hours):
- **Hour 1-2:** Analytics and navigation (Prompts 5-6)
- **Hour 3-4:** Polish and documentation (Prompts 7-8)

### Day 3 (2-3 hours):
- **Hour 1-2:** Deployment setup and testing (Prompt 9)
- **Hour 3:** Final testing and open source preparation

---

## Testing Checklist

Before deployment, test:
- [ ] All game scenarios work correctly
- [ ] Analytics charts display properly
- [ ] Mobile responsiveness on various devices
- [ ] localStorage persistence works
- [ ] AI fallbacks function correctly
- [ ] Error handling works as expected
- [ ] Performance is acceptable
- [ ] Accessibility features work

---

## Post-Deployment

After successful deployment:
1. Create GitHub repository and push code
2. Add Netlify deployment badge to README
3. Test the live application thoroughly
4. Share with initial users for feedback
5. Document any deployment issues
6. Plan future feature iterations

---

## Troubleshooting

Common issues and solutions:
- **Build failures:** Check TypeScript errors and dependencies
- **Hydration errors:** Ensure client/server rendering consistency
- **Performance issues:** Optimize bundle size and implement lazy loading
- **Mobile issues:** Test responsive design thoroughly
- **Data persistence:** Handle localStorage availability gracefully

---

## Future Enhancements

After MVP deployment, consider:
- Real-time multiplayer features
- Advanced AI integration with external APIs
- User authentication and cloud data sync
- Additional scenario types and regions
- Integration with humanitarian organizations
- Multi-language support
- Advanced analytics and reporting