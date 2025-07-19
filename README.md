# Unboxing Empathy

An interactive Next.js application designed to build empathy with others and was built specifically around the Palestinians (In Gaza and the Westbank) crisis through perspective-taking scenarios.

It is also provide you with the means to support, and take action to be proactive and help!

It is open source and available under the [MIT License](LICENSE).

## 🎯 Mission

Unboxing Empathy helps users understand complex humanitarian situations by experiencing multiple perspectives within the same scenario. Through interactive storytelling and psychological insights, users develop deeper empathy and understanding of the human impact of conflicts.

## 🚀 Features

- **Interactive Scenarios**: Experience Gaza-focused situations from multiple perspectives
- **Multi-Language Support**: Available in English, Arabic (العربية), with French & Spanish coming soon
- **RTL Layout Support**: Full right-to-left reading experience for Arabic users
- **Empathy Analytics**: Track your empathy growth and insights over time
- **Personal Impact**: Track your personal empathy journey and find meaningful actions
- **Educational Content**: Learn about systemic factors and humanitarian context
- **Dark Mode**: Toggle between light and dark themes for comfortable viewing
- **Open Source**: Free and accessible to everyone

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with RTL support
- **Charts**: Recharts
- **Icons**: Lucide React
- **Internationalization**: Custom i18n system with 4 languages
- **Deployment**: Netlify / GitHub Pages

## 📁 Project Structure

```
unboxing-empathy/
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
│   ├── GlobalImpactView.tsx # Global impact view
│   └── LanguageSwitcher.tsx # Language selection component
├── lib/
│   ├── scenarios.ts         # Scenario data
│   ├── resources.ts         # Centralized resource management
│   ├── types.ts             # TypeScript definitions
│   ├── utils.ts             # Utility functions
│   └── language-context.tsx # Internationalization context
├── public/
│   ├── locales/             # Translation files
│   │   ├── en/              # English translations
│   │   ├── ar/              # Arabic translations
│   │   ├── fr/              # French translations (placeholders)
│   │   └── es/              # Spanish translations (placeholders)
│   └── ...                  # Other static assets
```

## 🚀 Quick Deploy (No Technical Knowledge Required!)

### Option 1: GitHub Pages (Recommended - 100% Free)

**Step-by-Step Visual Guide:**

#### Step 1: Fork the Repository
1. **Go to**: https://github.com/rasha-salim/unboxing-empathy
2. **Click the "Fork" button** in the top-right corner
3. **Choose your account** as the destination
4. **Wait for fork to complete** (usually takes 10-30 seconds)

#### Step 2: Enable GitHub Pages
1. **Go to your forked repository**: `https://github.com/YOURUSERNAME/unboxing-empathy`
2. **Click the "Settings" tab** (near the top of the page)
3. **Scroll down** and click "Pages" in the left sidebar
4. **Under "Source"**: Select "GitHub Actions" (NOT "Deploy from a branch")
5. **Click "Save"** if prompted

#### Step 3: Wait for Automatic Deployment
1. **Go to the "Actions" tab** in your repository
2. **You'll see a workflow running** called "Deploy Next.js to GitHub Pages"
3. **Wait 2-5 minutes** for the green checkmark ✅
4. **If it fails**: Check the error log and ensure you selected "GitHub Actions" in Step 2

#### Step 4: Access Your App
1. **Your app is now live at**: `https://YOURUSERNAME.github.io/unboxing-empathy`
2. **Bookmark this URL** - this is your personal empathy app!
3. **Share with others** - they can use your version

#### Step 5: Automatic Updates
- **Every time you edit files** in your repository (through GitHub's web interface)
- **Your app automatically updates** in 2-3 minutes
- **No technical knowledge needed** - just edit and commit!

### Option 2: Netlify (Alternative - Also Free)

**Step-by-Step Netlify Deployment:**

#### Step 1: Fork the Repository (Same as GitHub Pages)
1. **Go to**: https://github.com/rasha-salim/unboxing-empathy
2. **Click "Fork"** and choose your account

#### Step 2: Deploy to Netlify
1. **Go to**: https://app.netlify.com/start
2. **Click "Import from Git"**
3. **Choose "GitHub"** and authorize Netlify to access your repositories
4. **Select your forked repository**: `YOURUSERNAME/unboxing-empathy`
5. **Deploy settings** (Netlify will auto-detect):
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
   - **Leave other settings as default**
6. **Click "Deploy site"**

#### Step 3: Get Your URL
1. **Wait 2-5 minutes** for deployment to complete
2. **Your app will be live** at a URL like: `https://magical-name-123456.netlify.app`
3. **You can customize this URL** in site settings if you want

#### Step 4: Automatic Updates
- **Every commit to your GitHub repository** triggers automatic redeployment
- **No additional configuration needed**
- **Check deploy status** in your Netlify dashboard

### Option 3: Vercel (Another Alternative)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/rasha-salim/unboxing-empathy)

**Quick Vercel Steps:**
1. **Click the button above**
2. **Connect your GitHub account**
3. **Choose your forked repository**
4. **Click "Deploy"**
5. **Get your unique URL** ending in `.vercel.app`

### 🤔 Which Deployment Option Should I Choose?

| Feature | GitHub Pages | Netlify | Vercel |
|---------|-------------|---------|--------|
| **Cost** | 100% Free | Free tier available | Free tier available |
| **Custom Domain** | ✅ Free | ✅ Free on paid plans | ✅ Free on paid plans |
| **Automatic Updates** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Setup Difficulty** | Easy | Easy | Easiest |
| **URL Format** | `username.github.io/unboxing-empathy` | `sitename.netlify.app` | `sitename.vercel.app` |
| **Best For** | Open source projects | General websites | Developer projects |

**🏆 Recommendation**: Start with **GitHub Pages** if you want everything in one place, or **Netlify** if you prefer a dedicated hosting platform.

### 📱 After Deployment - What's Next?

#### ✅ Test Your Deployment
1. **Visit your URL** and make sure the app loads
2. **Try the empathy scenarios** to ensure everything works
3. **Test on mobile** - open the URL on your phone
4. **Check dark mode toggle** works properly

#### 🔧 Customize Your Version
1. **Edit content**: Go to `lib/resources.ts` in your GitHub repository
2. **Add scenarios**: Edit `lib/scenarios.ts` to add new perspectives
3. **Update branding**: Modify the app title and description
4. **Add your organization**: Include your humanitarian group in the resources

#### 📢 Share Your Version
- **Educational use**: Share with teachers and students
- **Community outreach**: Use in workshops and training
- **Social media**: Spread awareness about empathy building
- **Humanitarian work**: Integrate into organizational training

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

## 🌍 Multi-Language Support

### Available Languages
- **🇺🇸 English** - Complete translation
- **🇸🇦 Arabic (العربية)** - Complete translation with RTL support
- **🇫🇷 French (Français)** - Coming soon (framework ready)
- **🇪🇸 Spanish (Español)** - Coming soon (framework ready)

### Features
- **Language Switcher**: Click the globe icon in the navigation to change languages
- **RTL Support**: Full right-to-left layout for Arabic users
- **Persistent Preferences**: Your language choice is saved across sessions
- **Culturally Sensitive**: Translations respect cultural context and sensitivity
- **Seamless Switching**: Change languages instantly without page reload

### Translation Status
| Component | English | Arabic | French | Spanish |
|-----------|---------|---------|---------|---------|
| **Navigation** | ✅ Complete | ✅ Complete | ⏳ Pending | ⏳ Pending |
| **Game Interface** | ✅ Complete | ✅ Complete | ⏳ Pending | ⏳ Pending |
| **Analytics Dashboard** | ✅ Complete | ✅ Complete | ⏳ Pending | ⏳ Pending |
| **Impact View** | ✅ Complete | ✅ Complete | ⏳ Pending | ⏳ Pending |
| **Scenario Content** | ✅ Complete | ⏳ Pending | ⏳ Pending | ⏳ Pending |

### Contributing Translations
We welcome native speakers to help complete translations:
1. **Fork the repository**
2. **Navigate to** `/public/locales/[language]/`
3. **Edit JSON files** with accurate translations
4. **Submit a pull request**

**Priority areas for translation:**
- Complete scenario content in `scenarios.json`
- Finish French and Spanish UI translations
- Review Arabic translations for accuracy

## 🎮 How to Use

1. **Choose Your Language**: Click the globe icon to select your preferred language
2. **Start Your Journey**: Begin with the intro screen and start your first scenario
3. **Experience Perspectives**: Navigate through different viewpoints in each scenario
4. **Reflect and Learn**: Consider systemic factors and complete reflections
5. **Track Growth**: Monitor your empathy development in the analytics section
6. **Personal Impact**: Reflect on your journey and find meaningful ways to take action

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
unboxing-empathy-profile          // Main user profile data
unboxing-empathy-reflection-{scenarioId} // Individual reflection notes (e.g., unboxing-empathy-reflection-1)
unboxing-empathy-game-state       // Current game state for auto-save
unboxing-empathy-donations        // Personal donation/campaign links
unboxing-empathy-theme            // Dark/light mode preference
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
3. Find your domain → Look for `unboxing-empathy-` keys

### Backing Up Your Data
**Export Your Progress**: Click "Export My Data" in the app to download a complete backup of your empathy journey, including all reflections, progress, and personal donations.

**Import Your Progress**: Use "Import Data" to restore your backup on a new device or browser. Your entire empathy journey will be restored exactly as it was.

This approach ensures your empathy journey remains completely personal and private. 🔐

## 🆘 Deployment Troubleshooting

### GitHub Pages Issues

**Problem**: App shows 404 or blank page after deployment
- **GitHub Pages**: Make sure you selected "GitHub Actions" as the source in Pages settings, not "Deploy from a branch"
- **Netlify/Vercel**: Check that the build completed successfully in your dashboard

**Problem**: CSS/styling not loading properly
- **All platforms**: Wait 5-10 minutes after first deployment for CDN to update
- **GitHub Pages**: Check that the workflow completed successfully in the Actions tab

**Problem**: App works locally but not on GitHub Pages
- **Solution**: Check that all file paths are relative and you haven't used any server-side features
- **GitHub Pages specific**: Ensure the repository is public (required for free GitHub Pages)

**Problem**: Build fails during deployment
- **GitHub Actions**: Check the Actions tab for detailed error logs
- **Netlify**: Check the deploy log in your Netlify dashboard  
- **Vercel**: Check the deployment logs in your Vercel dashboard
- **Common fix**: Make sure all dependencies are properly listed in package.json

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

## 🚧 Areas That Need Work

### High Priority
- **🌍 Complete Arabic Scenario Translation**: Full scenario content translation to Arabic
- **🇫🇷 French Translation**: Complete UI and scenario translations
- **🇪🇸 Spanish Translation**: Complete UI and scenario translations
- **🧪 Multi-language Testing**: Test language switching across all components

### Medium Priority  
- **🎯 Component Translation Integration**: Update remaining components to use translation hooks
- **📱 Mobile RTL Optimization**: Improve mobile RTL layout for Arabic
- **🔄 Language URL Routing**: Implement proper URL-based language routing
- **🎨 RTL UI Polish**: Fine-tune RTL spacing and alignment

### Low Priority
- **🌐 Additional Languages**: Add more languages (Hebrew, Persian, etc.)
- **🗣️ Language Detection**: Auto-detect user's preferred language
- **📊 Translation Analytics**: Track language usage and preferences
- **🎬 Multi-language Media**: Localized images and media content

### Technical Debt
- **⚡ Performance**: Optimize translation bundle loading
- **🔧 Build Process**: Improve static export with i18n
- **📦 Bundle Size**: Reduce translation file sizes
- **🧹 Code Cleanup**: Refactor translation system for better maintainability

## 🤝 Contributing

**We welcome contributions from everyone!** 🌍❤️

Whether you're an educator, humanitarian worker, developer, or simply someone who wants to help build empathy - there's a place for you in this project.

### Ways to Contribute
- **📝 Add Content**: Share scenarios, perspectives, and resources
- **🌐 Create Your Own Version**: Fork and customize for your community  
- **🛠️ Code**: Improve features, fix bugs, enhance accessibility
- **🌍 Translation**: Help complete multi-language support
- **📚 Documentation**: Help others understand and use the project
- **🔍 Testing**: Report issues and suggest improvements

**👉 See our [Contributing Guide](CONTRIBUTING.md) for detailed instructions.**

### Quick Start for Contributors
1. **Fork this repository** to your GitHub account
2. **Follow setup instructions** in the Contributing Guide  
3. **Make your changes** - no contribution is too small!
4. **Reference the original repo** in your custom versions

We especially encourage educators and humanitarian organizations to create specialized versions for their communities while maintaining attribution to the original project.

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

- [Live Demo](https://rasha-salim.github.io/unboxing-empathy/)
- [GitHub Repository](https://github.com/rasha-salim/unboxing-empathy)

## 💡 Support

If you find this project helpful, consider:
- Sharing it with others
- Contributing to the codebase
- Supporting humanitarian organizations
- Providing feedback for improvements

---

Built with ❤️ for building empathy and understanding in our world.