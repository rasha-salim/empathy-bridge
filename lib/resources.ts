// Centralized resource management for Empathy Bridge
// Edit this file to add, remove, or modify resources

export interface NewsItem {
  id: number
  title: string
  source: string
  date: string
  url: string
  type: 'news' | 'report' | 'analysis'
}

export interface ActionItem {
  id: number
  title: string
  description: string
  type: 'petition' | 'donation' | 'volunteer' | 'awareness'
  difficulty: 'easy' | 'medium' | 'high'
  timeRequired: string
  impact: string
  url: string
}

export interface Organization {
  name: string
  description: string
  url: string
  type: 'humanitarian' | 'medical' | 'children' | 'education'
  focus: string
  urgency: 'Critical' | 'High' | 'Medium'
}

export interface PersonalDonation {
  id: string
  recipientName: string
  category: 'individual' | 'family' | 'community' | 'organization'
  url: string
  notes?: string
  dateAdded: string
  lastVisited?: string
}

export interface EducationalResource {
  id: number
  title: string
  category: 'historical' | 'documentary' | 'peace' | 'mental_health'
  description: string
  url: string
  icon: string
}

export interface ActionApp {
  id: number
  title: string
  description: string
  category: 'boycott' | 'ethical_consumption' | 'activism' | 'awareness'
  features: string[]
  platforms: {
    web?: string
    android?: string
    ios?: string
  }
  icon: string
}

// =============================================================================
// NEWS ITEMS - Edit this section to manage news content
// =============================================================================
export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "UN Reports on Gaza Humanitarian Situation",
    source: "United Nations",
    date: "2025-01-12",
    url: "https://www.un.org/news",
    type: "report"
  },
  {
    id: 2,
    title: "New Aid Corridor Opens for Gaza Relief",
    source: "UNRWA",
    date: "2025-01-11",
    url: "https://www.unrwa.org/newsroom",
    type: "news"
  },
  {
    id: 3,
    title: "Analysis: Long-term Impact of Conflict on Children",
    source: "UNICEF",
    date: "2025-01-10",
    url: "https://www.unicef.org/reports",
    type: "analysis"
  }
]

// =============================================================================
// ACTION ITEMS - Edit this section to manage action opportunities
// =============================================================================
export const actionItems: ActionItem[] = [
  {
    id: 1,
    title: "Contact Your Representatives",
    description: "Call or email your elected officials about humanitarian aid for Gaza",
    type: "petition",
    difficulty: "easy",
    timeRequired: "10 minutes",
    impact: "Policy influence",
    url: "https://www.house.gov/representatives/find-your-representative"
  },
  {
    id: 2,
    title: "Donate to UNRWA",
    description: "Support direct humanitarian aid for Palestine refugees",
    type: "donation",
    difficulty: "easy",
    timeRequired: "5 minutes",
    impact: "Direct relief",
    url: "https://www.unrwa.org/donate"
  },
  {
    id: 3,
    title: "Volunteer with Local Organizations",
    description: "Join local groups supporting Middle East peace and humanitarian causes",
    type: "volunteer",
    difficulty: "medium",
    timeRequired: "2-4 hours/week",
    impact: "Community building",
    url: "https://www.justiceforpalestine.org/take-action"
  },
  {
    id: 4,
    title: "Code Pink Palestine",
    description: "Join us in demanding justice and liberation for Palestinians",
    type: "awareness",
    difficulty: "medium",
    timeRequired: "2-4 hours/weeks",
    impact: "Taking Action",
    url: "https://www.codepink.org/palestine"
  }
]

// =============================================================================
// HUMANITARIAN ORGANIZATIONS - Edit this section to manage organizations
// =============================================================================
export const organizations: Organization[] = [
  {
    name: "UNRWA",
    description: "United Nations Relief and Works Agency for Palestine Refugees",
    url: "https://www.unrwa.org/",
    type: "humanitarian",
    focus: "Direct aid to Palestine refugees",
    urgency: "Critical"
  },
  {
    name: "Doctors Without Borders",
    description: "Providing medical assistance in Gaza",
    url: "https://www.doctorswithoutborders.org/",
    type: "medical",
    focus: "Emergency medical care",
    urgency: "High"
  },
  {
    name: "World Food Programme",
    description: "Fighting hunger and providing food assistance",
    url: "https://www.wfp.org/",
    type: "humanitarian",
    focus: "Food security and nutrition",
    urgency: "Critical"
  },
  {
    name: "UNICEF",
    description: "Protecting children's rights and providing humanitarian aid",
    url: "https://www.unicef.org/",
    type: "children",
    focus: "Child protection and education",
    urgency: "High"
  },
  {
    name: "Save the Children",
    description: "Emergency response for children in Gaza",
    url: "https://www.savethechildren.org/",
    type: "children",
    focus: "Child welfare and protection",
    urgency: "Critical"
  },
  {
    name: "Islamic Relief",
    description: "Humanitarian aid and development work",
    url: "https://www.islamic-relief.org/",
    type: "humanitarian",
    focus: "Community development",
    urgency: "Medium"
  }
]

// =============================================================================
// ACTION APPS & TOOLS - Edit this section to manage action apps
// =============================================================================
export const actionApps: ActionApp[] = [
  {
    id: 1,
    title: "Boycott (Boycat)",
    description: "Scan barcodes to avoid products from companies supporting Israeli occupation",
    category: "boycott",
    features: [
      "Barcode scanner for product verification",
      "Real-time boycott database",
      "Alternative product suggestions",
      "Community-driven updates"
    ],
    platforms: {
      web: "https://www.boycat.io/",
      android: "https://play.google.com/store/apps/details?id=com.bashsoftware.boycott&hl=en",
      ios: "https://apps.apple.com/us/app/no-thanks-app/id6476206516"
    },
    icon: "Smartphone"
  }
]

// =============================================================================
// EDUCATIONAL RESOURCES - Edit this section to manage educational content
// =============================================================================
export const educationalResources: EducationalResource[] = [
  {
    id: 1,
    title: "UNRWA Educational Videos",
    category: "documentary",
    description: "Educational documentaries and video content for deeper understanding",
    url: "https://www.youtube.com/c/UNRWAfilm",
    icon: "Video"
  },
  {
    id: 2,
    title: "US Institute of Peace",
    category: "peace",
    description: "Resources for educators teaching about conflict resolution and peace",
    url: "https://www.usip.org/publications",
    icon: "Users"
  }
]

// =============================================================================
// MENTAL HEALTH RESOURCES - Edit this section to manage support resources
// =============================================================================
export const mentalHealthResources = [
  {
    title: "Processing Difficult Content",
    description: "Learning about human suffering can be emotionally challenging. Take breaks, practice self-care, and seek support when needed.",
    type: "warning"
  },
  {
    title: "Crisis Support Resources",
    description: "If you need immediate support:",
    type: "crisis",
    resources: [
      { text: "Crisis Text Line: Text HOME to 741741", icon: "Phone" },
      { text: "National Suicide Prevention Lifeline: 988", icon: "Phone" }
    ]
  },
  {
    title: "Constructive Action",
    description: "Channel your empathy into positive action. Small acts of kindness and advocacy can create meaningful change.",
    type: "action"
  }
]

// =============================================================================
// QUICK REFERENCE GUIDES
// =============================================================================

// How to add a new news item:
// 1. Add a new object to the newsItems array with a unique id
// 2. Fill in title, source, date, url, and type
// 3. Save this file - changes will appear immediately

// How to add a new action item:
// 1. Add a new object to the actionItems array with a unique id
// 2. Fill in all required fields
// 3. Choose appropriate type, difficulty, and impact level

// How to add a new organization:
// 1. Add a new object to the organizations array
// 2. Fill in name, description, url, type, focus, and urgency
// 3. Choose appropriate type and urgency level

// How to add educational resources:
// 1. Add a new object to the educationalResources array
// 2. Choose appropriate category and icon
// 3. Provide clear title and description

// How to add action apps:
// 1. Add a new object to the actionApps array with unique id
// 2. Choose category: boycott, ethical_consumption, activism, awareness
// 3. Fill in features array with key app capabilities
// 4. Add platform URLs (web, android, ios) as available
// 5. Choose appropriate icon: Smartphone, Globe, Users, Target