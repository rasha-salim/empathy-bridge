# Contributing to Unboxing Empathy

Thank you for your interest in contributing to Unboxing Empathy! <d This project aims to build empathy and understanding around humanitarian crises, and we welcome contributions from people of all backgrounds and skill levels.

## <� Our Mission

Unboxing Empathy helps people understand complex humanitarian situations by experiencing multiple perspectives. Every contribution helps make empathy education more accessible worldwide.

## > How to Contribute

### For Everyone (No Coding Required!)

#### =� Content Contributions
- **Add new scenarios**: Share stories and perspectives from Gaza or other humanitarian situations
- **Improve existing content**: Enhance scenario descriptions, add cultural context
- **Translate content**: Help make the app accessible in multiple languages
- **Add resources**: Suggest news sources, organizations, or educational materials
- **Share action opportunities**: Add ways people can help humanitarian causes

#### = Community Contributions
- **Test the app**: Use it and report bugs or usability issues
- **Share feedback**: Suggest improvements for better empathy building
- **Educational use**: Use in classrooms and share teaching experiences
- **Documentation**: Improve guides, add examples, fix typos

### For Developers

#### =� Technical Contributions
- **Bug fixes**: Help resolve issues and improve stability
- **New features**: Add functionality that enhances empathy building
- **Performance improvements**: Optimize for better user experience
- **Accessibility**: Ensure the app works for users with disabilities
- **Mobile optimization**: Improve mobile and tablet experience

## =� Getting Started

### 1. Fork and Deploy Your Own Version

**Anyone can create their own version of Unboxing Empathy:**

1. **Fork this repository** to your GitHub account
2. **Deploy automatically** using GitHub Pages (see README for instructions)
3. **Customize for your needs** - add local content, translate, or adapt for specific audiences
4. **Share your version** while referencing the original project

**Your custom version URL will be:** `https://yourusername.github.io/unboxing-empathy`

### 2. Set Up Development Environment

```bash
# Clone your fork
git clone https://github.com/yourusername/unboxing-empathy.git
cd unboxing-empathy

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### 3. Make Your Contribution

#### Easy Content Edits (No coding required)
1. **Edit through GitHub web interface:**
   - Go to `/lib/resources.ts` in your fork
   - Click the pencil icon to edit
   - Add your content following existing patterns
   - Commit your changes

#### Code Contributions
1. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following our coding standards

3. **Test your changes:**
   ```bash
   npm run build  # Ensure it builds successfully
   npm run dev    # Test locally
   ```

4. **Commit with clear messages:**
   ```bash
   git commit -m "Add new Gaza family perspective scenario"
   ```

## =� Contribution Guidelines

### Content Standards

####  What We Welcome
- **Authentic perspectives** from affected communities
- **Educational content** that builds understanding
- **Factual information** from reliable sources
- **Respectful language** that honors human dignity
- **Diverse viewpoints** that show complexity of situations
- **Actionable resources** that help people make a difference

#### L What We Don't Accept
- **Propaganda** or one-sided political messaging
- **Hate speech** or content that dehumanizes any group
- **Graphic violence** or content inappropriate for educational settings
- **Misinformation** or unverified claims
- **Copyright violations** - only use content you have rights to share

### Technical Standards

#### Code Quality
- **TypeScript** - Use proper typing for all new code
- **Accessibility** - Ensure features work with screen readers
- **Responsive Design** - Test on mobile, tablet, and desktop
- **Performance** - Keep bundle size reasonable
- **Documentation** - Comment complex logic

#### File Organization
- **Components** go in `/components/`
- **Scenarios** are managed in `/lib/scenarios.ts`
- **Resources** (news, actions, orgs) go in `/lib/resources.ts`
- **Types** are defined in `/lib/types.ts`

### Privacy and Data Protection

**Critical Requirements:**
- **No server-side data collection** - maintain local-only storage
- **No tracking or analytics** - respect user privacy completely
- **No third-party data sharing** - all data stays on user's device
- **Export/import functionality** - users must own their data

## < Creating Your Own Version

### Custom Versions are Encouraged!

We **actively encourage** creating specialized versions of Unboxing Empathy:

#### <� Educational Institutions
- Adapt content for specific grade levels
- Add curriculum-specific scenarios
- Include assessment tools for educators

#### <� Humanitarian Organizations
- Feature your organization's work
- Add region-specific content
- Include your donation and volunteer opportunities

#### < Regional Adaptations
- Translate to local languages
- Add scenarios relevant to your region
- Include local humanitarian organizations

#### =e Community Groups
- Customize for your community's interests
- Add local action opportunities
- Include culturally relevant perspectives

### Attribution Requirements

**When creating your own version, please:**

1. **Keep the attribution** in your README:
   ```markdown
   # My Custom Unboxing Empathy
   
   Based on [Unboxing Empathy](https://github.com/rasha-salim/unboxing-empathy) 
   by [Original Repository](https://github.com/rasha-salim/unboxing-empathy)
   
   ## Changes Made
   - [List your customizations]
   ```

2. **Reference in your app footer:**
   ```
   Powered by Unboxing Empathy | Original: github.com/rasha-salim/unboxing-empathy
   ```

3. **Share your improvements** - if you create something that could benefit the main project, please contribute it back!

## = Reporting Issues

### Bug Reports
**Before submitting:**
1. Check if the issue already exists in [GitHub Issues](https://github.com/rasha-salim/unboxing-empathy/issues)
2. Try to reproduce the bug in a clean browser session
3. Check if it happens on multiple devices/browsers

**Include in your report:**
- Clear description of what happened vs. what you expected
- Steps to reproduce the issue
- Browser/device information
- Screenshots if relevant
- Any error messages from the browser console

### Feature Requests
**Great feature requests include:**
- Clear description of the problem you're trying to solve
- How it would improve empathy building or user experience
- Examples of how it might work
- Whether you're willing to help implement it

## =� Content Addition Examples

### Adding a New Scenario

Edit `/lib/scenarios.ts`:

```typescript
{
  id: 6,
  title: "School Day Disrupted",
  context: "A child's education interrupted by conflict",
  situation: "8-year-old Layla was preparing for her math test when sirens began...",
  complexity: "low",
  region: "Gaza",
  perspectives: [
    {
      role: "Layla (8-year-old student)",
      background: "Third-grade student who loves math and dreams of becoming a teacher",
      thoughts: "I was so excited about my test. Will school be open tomorrow?",
      feelings: "Scared but trying to be brave like mama says",
      needs: "Safety, education, normalcy",
      physiological: "Heart racing, holding tight to her school bag",
      longTermImpact: "Education disruption affects future dreams and stability"
    },
    // Add more perspectives...
  ],
  systemicFactors: [
    "Education infrastructure vulnerability",
    "Psychological impact on children",
    "Teacher and student safety concerns"
  ]
}
```

### Adding a News Item

Edit `/lib/resources.ts`:

```typescript
{
  id: 4,
  title: "UNICEF Report on Education Impact",
  source: "UNICEF",
  date: "2025-01-15",
  url: "https://www.unicef.org/reports/education-gaza",
  type: "report"
}
```

### Adding an Organization

```typescript
{
  name: "Local Education Support",
  description: "Provides educational materials for displaced children",
  url: "https://education-support.org",
  type: "education",
  focus: "Emergency education services",
  urgency: "High"
}
```

## < Recognition

### Contributors

All contributors will be recognized in:
- Repository contributors list
- App credits (for significant contributions)
- Annual community report
- Social media shout-outs for major contributions

### Hall of Fame

Special recognition for:
- **First-time contributors** who help improve accessibility
- **Educators** who provide teaching feedback
- **Community members** who share authentic perspectives
- **Developers** who implement requested features
- **Translators** who make content accessible in new languages

## =� Getting Help

### Questions?
- **GitHub Discussions**: For general questions and ideas
- **GitHub Issues**: For bugs and specific feature requests
- **Email**: [Contact information if you want to provide it]

### Want to Collaborate?
We're especially interested in collaborating with:
- **Educational institutions** using empathy-building curricula
- **Humanitarian organizations** working in conflict zones
- **Mental health professionals** specializing in trauma and empathy
- **UX researchers** studying empathy and perspective-taking
- **Translators** who can help reach more communities

## = Development Workflow

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Make** your changes
4. **Test** thoroughly
5. **Commit** with clear messages (`git commit -m 'Add amazing feature'`)
6. **Push** to your branch (`git push origin feature/amazing-feature`)
7. **Open** a Pull Request with detailed description

## � Code of Conduct

### Our Standards

**We are committed to:**
- **Respect** for all contributors regardless of background
- **Empathy** in all interactions (it's our core mission!)
- **Constructive feedback** that helps everyone learn
- **Inclusion** of diverse perspectives and experiences
- **Educational focus** that prioritizes learning over politics

**We do not tolerate:**
- Harassment, discrimination, or hate speech
- Political arguments that detract from educational goals
- Disrespectful behavior toward any community or individual
- Sharing of unverified information as fact

### Enforcement

Issues will be addressed by project maintainers through:
1. **Direct communication** for minor issues
2. **Temporary restrictions** for repeated problems
3. **Permanent bans** for serious violations

We believe in education and growth, so we'll always try to help people understand our standards rather than immediately excluding them.

## <� Project Roadmap

### Interactive Empathy Experience - Phase 1 ✅ COMPLETED
We've successfully implemented foundational interactive features that make the empathy experience more engaging and proactive:

- **Progressive Revelation System**: Content reveals thoughtfully to encourage deeper reflection
- **Interactive Empathy Questions**: Questions integrated throughout the experience, not just at the end
- **Centralized Color Management**: Easy-to-edit emotion-based color schemes for better visual experience
- **Dual View Options**: Users can choose between interactive and classic perspective views
- **Subtle Animations**: Respectful timing and animations that enhance rather than distract

### Current Development Priorities

#### Phase 2: Adaptive Empathy System (Next 3-6 months)
- **Dynamic Content Adaptation**: Scenarios that adapt based on user's empathy growth patterns
- **Enhanced Analytics**: Heat maps and insights into empathy development
- **Personalized Experience**: AI-driven content ordering based on user background
- **Quality Assessment**: Analysis of reflection depth and empathy insights

#### Phase 3: Community Empathy Building (6-12 months)
- **Collaborative Features**: Small group discussions and empathy circles
- **Social Impact Integration**: Real-world action tracking and impact visualization
- **Content Expansion**: User-generated scenarios and community-created content
- **Regional Adaptation**: Localized content for different communities

#### Phase 4: Immersive Experience (1-2 years)
- **Advanced Interaction**: Voice integration, gesture-based interaction
- **Accessibility Expansion**: Enhanced support for users with disabilities
- **Multi-Modal Experience**: Integration of audio, visual, and tactile elements
- **Platform Expansion**: Mobile apps and cross-platform synchronization

### Complete Development Roadmap
For detailed information about all development phases, contribution opportunities, and technical implementation plans, see our comprehensive **[ROADMAP.md](ROADMAP.md)**.

### How You Can Help Shape This
Your contributions directly influence our roadmap! The most requested features and the areas where we receive the most help naturally become our priorities.

#### Current Contribution Opportunities
- **Phase 1 Testing**: Test the new interactive features and provide feedback
- **Content Enhancement**: Improve empathy questions and scenario content
- **Accessibility Testing**: Ensure the interface works with assistive technologies
- **Performance Optimization**: Help optimize the interactive animations and transitions

---

## =O Thank You

Every contribution makes Empathy Bridge more powerful as a tool for building understanding in our world. Whether you fix a typo, add a perspective, translate content, or build an entirely new version for your community, you're helping create a more empathetic world.

**Together, we're building bridges of understanding, one perspective at a time.** <	d

---

*This project is open source under the MIT License. See [LICENSE](LICENSE) for details.*