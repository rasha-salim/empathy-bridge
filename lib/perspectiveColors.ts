// Centralized color management for perspective sections
// Edit these colors to customize the visual theme of perspective cards

export interface PerspectiveColorScheme {
  background: string
  text: string
  accent: string
  border: string
}

export interface PerspectiveColors {
  thoughts: PerspectiveColorScheme
  feelings: PerspectiveColorScheme
  needs: PerspectiveColorScheme
  physiological: PerspectiveColorScheme
  longTermImpact: PerspectiveColorScheme
  systemicFactors: PerspectiveColorScheme
  cardBackground: string
  cardBorder: string
}

// Light mode colors - subtle and respectful
export const lightPerspectiveColors: PerspectiveColors = {
  thoughts: {
    background: '#E3F2FD', // Soft blue
    text: '#1565C0',
    accent: '#2196F3',
    border: '#BBDEFB'
  },
  feelings: {
    background: '#E8F5E8', // Warm green
    text: '#2E7D32',
    accent: '#4CAF50',
    border: '#C8E6C9'
  },
  needs: {
    background: '#F3E5F5', // Gentle purple
    text: '#7B1FA2',
    accent: '#9C27B0',
    border: '#E1BEE7'
  },
  physiological: {
    background: '#FFF3E0', // Soft orange
    text: '#EF6C00',
    accent: '#FF9800',
    border: '#FFE0B2'
  },
  longTermImpact: {
    background: '#FFEBEE', // Muted red
    text: '#C62828',
    accent: '#F44336',
    border: '#FFCDD2'
  },
  systemicFactors: {
    background: '#F3E5F5', // Light purple for context
    text: '#512DA8',
    accent: '#673AB7',
    border: '#D1C4E9'
  },
  cardBackground: '#FFFFFF',
  cardBorder: '#E0E0E0'
}

// Dark mode colors - adjusted for dark theme
export const darkPerspectiveColors: PerspectiveColors = {
  thoughts: {
    background: '#1A237E', // Deep blue
    text: '#90CAF9',
    accent: '#64B5F6',
    border: '#303F9F'
  },
  feelings: {
    background: '#1B5E20', // Deep green
    text: '#A5D6A7',
    accent: '#81C784',
    border: '#388E3C'
  },
  needs: {
    background: '#4A148C', // Deep purple
    text: '#CE93D8',
    accent: '#BA68C8',
    border: '#7B1FA2'
  },
  physiological: {
    background: '#E65100', // Deep orange
    text: '#FFCC02',
    accent: '#FFB74D',
    border: '#F57C00'
  },
  longTermImpact: {
    background: '#B71C1C', // Deep red
    text: '#FFCDD2',
    accent: '#E57373',
    border: '#D32F2F'
  },
  systemicFactors: {
    background: '#311B92', // Deep purple for context
    text: '#B39DDB',
    accent: '#9575CD',
    border: '#512DA8'
  },
  cardBackground: '#2D2D2D',
  cardBorder: '#424242'
}

// Animation timing constants for consistent feel
export const animationTiming = {
  staggerDelay: 500, // ms between each section reveal
  sectionFadeIn: 300, // ms for each section to fade in
  perspectiveTransition: 600, // ms for transitioning between perspectives
  gentlePause: 1000, // ms for reflection moments
  readingPaceHint: 2000 // ms before showing "take time to reflect" hints
}

// Helper function to get colors based on theme
export const getPerspectiveColors = (isDarkMode: boolean): PerspectiveColors => {
  return isDarkMode ? darkPerspectiveColors : lightPerspectiveColors
}

// CSS-in-JS helper for consistent styling
export const getPerspectiveSectionStyle = (
  sectionType: keyof Omit<PerspectiveColors, 'cardBackground' | 'cardBorder'>,
  colors: PerspectiveColors
) => ({
  backgroundColor: colors[sectionType].background,
  color: colors[sectionType].text,
  borderColor: colors[sectionType].border,
  borderWidth: '1px',
  borderStyle: 'solid'
})

// Animation helper for staggered reveals
export const getRevealDelay = (sectionIndex: number): number => {
  return sectionIndex * animationTiming.staggerDelay
}