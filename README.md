# Empathy Bridge

An interactive Next.js application designed to build empathy with others and was built specifically around the Palestinians (In Gaza and the Westbank) crisis through perspective-taking scenarios.

It is also provide you with the means to support, and take action to be proactive and help!

It is open source and available under the [MIT License](LICENSE).

## 🎯 Mission

Empathy Bridge helps users understand complex humanitarian situations by experiencing multiple perspectives within the same scenario. Through interactive storytelling and psychological insights, users develop deeper empathy and understanding of the human impact of conflicts.

## 🚀 Features

- **Interactive Scenarios**: Experience Gaza-focused situations from multiple perspectives
- **Empathy Analytics**: Track your empathy growth and insights over time
- **Personal Impact**: Track your personal empathy journey and find meaningful actions
- **Educational Content**: Learn about systemic factors and humanitarian context
- **Dark Mode**: Toggle between light and dark themes for comfortable viewing
- **Open Source**: Free and accessible to everyone

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Deployment**: Netlify

## 📁 Project Structure

```
empathy-bridge/
├── app/
│   ├── page.tsx              # Main game interface
│   ├── analytics/page.tsx    # Analytics dashboard
│   ├── global/page.tsx       # Global impact view
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── components/
│   ├── EmpathyGame.tsx      # Main game component
│   ├── NavigationBar.tsx    # Navigation component
│   ├── AnalyticsView.tsx    # Analytics dashboard
│   └── GlobalImpactView.tsx # Global impact view
├── lib/
│   ├── scenarios.ts         # Scenario data
│   ├── resources.ts         # Centralized resource management
│   ├── types.ts             # TypeScript definitions
│   └── utils.ts             # Utility functions
└── public/                  # Static assets
```

## 🚀 Quick Deploy (No Technical Knowledge Required!)

### Option 1: GitHub Pages (Recommended - 100% Free)

1. **Fork this repository** by clicking the "Fork" button at the top right
2. **Enable GitHub Pages** in your forked repository:
   - Go to your forked repository on GitHub
   - Click "Settings" tab
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"
3. **Wait for deployment** (about 2-3 minutes)
4. **Access your app** at `https://yourusername.github.io/empathy-bridge`

That's it! Your app will automatically update whenever you make changes to the repository.

### Option 2: One-Click Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/empathy-bridge)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/empathy-bridge)

## 🏃‍♂️ Local Development (For Developers)

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   Navigate to `http://localhost:3000`

## 🎮 How to Use

1. **Start Your Journey**: Begin with the intro screen and start your first scenario
2. **Experience Perspectives**: Navigate through different viewpoints in each scenario
3. **Reflect and Learn**: Consider systemic factors and complete reflections
4. **Track Growth**: Monitor your empathy development in the analytics section
5. **Personal Impact**: Reflect on your journey and find meaningful ways to take action

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Content Management

### Easy Resource Management
All news, actions, organizations, and educational content are managed from a single file: `/lib/resources.ts`

#### Adding News Items
```typescript
// Add to newsItems array in resources.ts
{
  id: 4,
  title: "Your News Title",
  source: "Source Name", 
  date: "2025-01-15",
  url: "https://example.com",
  type: "news" // or "report" or "analysis"
}
```

#### Adding Action Items
```typescript
// Add to actionItems array
{
  id: 5,
  title: "New Action",
  description: "What users will do",
  type: "donation", // petition, donation, volunteer, awareness
  difficulty: "easy", // easy, medium, high
  timeRequired: "10 minutes",
  impact: "Direct help",
  url: "https://action-link.com"
}
```

#### Adding Organizations
```typescript
// Add to organizations array
{
  name: "New Organization",
  description: "What they do",
  url: "https://org-website.com",
  type: "humanitarian", // humanitarian, medical, children, education
  focus: "Their main focus",
  urgency: "High" // Critical, High, Medium
}
```

#### Adding Educational Resources
```typescript
// Add to educationalResources array
{
  id: 4,
  title: "Resource Title",
  category: "historical", // historical, documentary, peace, mental_health
  description: "What this resource provides",
  url: "https://resource-link.com",
  icon: "BookOpen" // BookOpen, Video, Users
}
```

### Key Benefits
- ✅ **Single file management** - Edit only `/lib/resources.ts`
- ✅ **Immediate updates** - Changes appear instantly
- ✅ **Type safety** - TypeScript prevents errors
- ✅ **Clear documentation** - Built-in comments explain usage
- ✅ **Easy maintenance** - No need to hunt through component files

### Resource Categories
- **📰 News Items** - Latest news and reports
- **🎯 Action Items** - Ways users can take action
- **🏥 Organizations** - Humanitarian organizations
- **📚 Educational Resources** - Learning materials
- **💚 Mental Health Resources** - Support and self-care

## 💾 Data Storage & Privacy

### Local Storage Only
All user data is stored locally in your browser using localStorage - **no servers, no cloud, no tracking**.

#### What's Stored Locally:
- **Personal Profile**: Name, age, completed scenarios, empathy scores, achievements
- **Reflection Notes**: Your written reflections after each scenario
- **Game Progress**: Current scenario state and auto-save data

#### Storage Keys:
```
empathy-bridge-profile          // Main user profile data
empathy-reflection-{scenarioId} // Individual reflection notes (e.g., empathy-reflection-1)
empathy-bridge-game-state       // Current game state for auto-save
empathy-bridge-donations        // Personal donation/campaign links
empathy-bridge-theme            // Dark/light mode preference
```

#### Data Persistence:
- ✅ **Survives browser restarts** - Your progress is saved
- ✅ **Survives computer restarts** - Data persists across sessions
- ✅ **Works offline** - No internet required after initial load
- ❌ **Clearing browser data will delete progress** - Back up important reflections
- ❌ **Different browsers have separate storage** - Chrome ≠ Firefox data
- ❌ **Incognito/private mode doesn't persist** - Use normal browsing

#### Privacy Benefits:
- **🔒 100% Private** - Your data never leaves your device
- **🚫 No Tracking** - No analytics, cookies, or data collection
- **🛡️ No Account Required** - Anonymous usage
- **⚡ Fast Performance** - No server requests needed
- **🌐 Works Anywhere** - No regional restrictions
- **💾 Data Backup** - Export/import your data for backup or transfer

#### Data Size:
- **Storage Usage**: ~2-5KB per user (very minimal)
- **Browser Limit**: 5-10MB per domain (plenty of room)
- **No Quotas** - Use as much as you need

### Viewing Your Data
Access your stored data through browser developer tools:
1. Open **Developer Tools** (F12)
2. Go to **Application** tab → **Local Storage**
3. Find your domain → Look for `empathy-bridge-` keys

### Backing Up Your Data
**Export Your Progress**: Click "Export My Data" in the app to download a complete backup of your empathy journey, including all reflections, progress, and personal donations.

**Import Your Progress**: Use "Import Data" to restore your backup on a new device or browser. Your entire empathy journey will be restored exactly as it was.

This approach ensures your empathy journey remains completely personal and private. 🔐

## 🆘 Deployment Troubleshooting

### GitHub Pages Issues

**Problem**: App shows 404 or blank page after deployment
- **Solution**: Make sure you selected "GitHub Actions" as the source in Pages settings, not "Deploy from a branch"

**Problem**: CSS/styling not loading properly
- **Solution**: Wait 5-10 minutes after first deployment for CDN to update

**Problem**: App works locally but not on GitHub Pages
- **Solution**: Check that all file paths are relative and you haven't used any server-side features

### General Issues

**Problem**: Deployment failed in GitHub Actions
- **Solution**: Check the Actions tab in your repository for error details. Most common issue is Node.js version - the workflow uses Node 18.

**Problem**: Want to use a custom domain
- **Solution**: In your repository settings under Pages, add your custom domain in the "Custom domain" field

### Getting Help

If you encounter issues:
1. Check the [GitHub Actions log](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs) for specific error messages
2. Ensure your repository is public (GitHub Pages requires public repos on free plan)
3. Verify that GitHub Pages is enabled in your repository settings

## 🔄 Updating Your Deployed App

To update your deployed app with new content or features:

### Via GitHub Web Interface (No technical knowledge needed)
1. Go to your forked repository on GitHub
2. Navigate to `/lib/resources.ts` 
3. Click the pencil icon to edit
4. Make your changes (add news, actions, organizations, etc.)
5. Scroll down and click "Commit changes"
6. Your app will automatically update in 2-3 minutes!

### Adding New Scenarios
1. Edit `/lib/scenarios.ts` through GitHub's web interface
2. Follow the existing format to add new perspectives and scenarios
3. Commit your changes and the app updates automatically

## 📊 Features in Detail

### Empathy Game
- Multiple Gaza-focused scenarios
- Psychological, physiological, and systemic perspectives
- Progress tracking and completion states
- Responsive design for all devices

### Analytics Dashboard
- Personal empathy growth tracking
- Visual charts and progress indicators
- Achievement system
- Historical data visualization

### Personal Impact View
- Personal empathy growth tracking
- Individual journey statistics
- Humanitarian organization links
- Personalized action recommendations
- Self-reflection and growth insights

## 🎨 Design System

### Colors
- Primary: Blue (#3B82F6)
- Secondary: Purple (#8B5CF6)
- Accent: Red (#EF4444)
- Success: Green (#10B981)
- Warning: Orange (#F59E0B)

### Components
- Responsive card layouts
- Consistent button styling
- Accessible navigation
- Mobile-first design

## 🚀 Deployment

The application is configured for static export and optimized for Netlify deployment:

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: 18.x

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](docs/CONTRIBUTING.md) for details.

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain accessibility standards
- Test on multiple devices
- Keep components modular

## 📚 Educational Use

Empathy Bridge is designed for:
- Educational institutions teaching empathy
- Humanitarian organizations for awareness
- Individual learning and growth
- Community building and understanding

## 🌍 Impact Goals

- Increase empathy and understanding of Gaza crisis
- Provide educational resources about humanitarian issues
- Connect users with humanitarian organizations
- Build a global community of empathy advocates

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- [Live Demo](https://empathy-bridge.netlify.app) (when deployed)
- [GitHub Repository](https://github.com/rasha-salim/empathy-bridge)

## 💡 Support

If you find this project helpful, consider:
- Sharing it with others
- Contributing to the codebase
- Supporting humanitarian organizations
- Providing feedback for improvements

---

Built with ❤️ for building empathy and understanding in our world.