export interface Perspective {
  role: string;
  background: string;
  thoughts: string;
  feelings: string;
  needs: string;
  physiological: string;
  longTermImpact: string;
}

export interface Scenario {
  id: number;
  title: string;
  complexity: 'low' | 'medium' | 'high';
  region: string;
  context: string;
  situation: string;
  perspectives: Perspective[];
  systemicFactors: string[];
}

export interface EmpathyGrowthPoint {
  date: string;
  score: number;
  scenario: string;
  perspective: string;
  scenarioId: number;
}

export interface UserProfile {
  name: string;
  age: string;
  completedScenarios: number[];
  empathyGrowth: EmpathyGrowthPoint[];
  achievements: string[];
}

export interface GameState {
  currentScenario: Scenario | null;
  currentPerspectiveIndex: number;
  userProfile: UserProfile;
  gamePhase: 'intro' | 'scenario' | 'perspective' | 'reflection' | 'complete';
}

export interface AnalyticsData {
  totalScenarios: number;
  completedScenarios: number;
  averageEmpathyScore: number;
  growthOverTime: EmpathyGrowthPoint[];
  achievements: string[];
  timeSpent: number;
}