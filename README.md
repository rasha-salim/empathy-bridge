# Empathy Bridge

An interactive Next.js application designed to build empathy around the Gaza crisis through perspective-taking scenarios.

## 🎯 Mission

Empathy Bridge helps users understand complex humanitarian situations by experiencing multiple perspectives within the same scenario. Through interactive storytelling and psychological insights, users develop deeper empathy and understanding of the human impact of conflicts.

## 🚀 Features

- **Interactive Scenarios**: Experience Gaza-focused situations from multiple perspectives
- **Empathy Analytics**: Track your empathy growth and insights over time
- **Global Impact**: See how the global community is building empathy together
- **Educational Content**: Learn about systemic factors and humanitarian context
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
│   ├── types.ts             # TypeScript definitions
│   └── utils.ts             # Utility functions
└── public/                  # Static assets
```

## 🏃‍♂️ Getting Started

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
5. **Global Impact**: See how you're contributing to global understanding

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

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

### Global Impact View
- Community statistics and achievements
- Humanitarian organization links
- Real-world impact information
- Calls to action for support

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
- [GitHub Repository](https://github.com/empathy-bridge/empathy-bridge)
- [Documentation](docs/)

## 💡 Support

If you find this project helpful, consider:
- Sharing it with others
- Contributing to the codebase
- Supporting humanitarian organizations
- Providing feedback for improvements

---

Built with ❤️ for building empathy and understanding in our world.