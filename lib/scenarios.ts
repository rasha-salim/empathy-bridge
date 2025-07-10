import { Scenario } from './types'

export const scenarios: Scenario[] = [
  {
    id: 1,
    title: "The School Day That Never Came",
    complexity: 'medium',
    region: 'Gaza',
    context: 'Educational disruption during conflict',
    situation: 'A 10-year-old child in Gaza wakes up expecting to go to school, but discovers their school has been damaged overnight.',
    perspectives: [
      {
        role: 'Child (Age 10)',
        background: 'Third-grade student who loves learning and playing with friends at school',
        thoughts: 'I prepared my backpack last night and was excited to see my teacher today. Where will I learn now?',
        feelings: 'Confused, scared, disappointed, and worried about falling behind',
        needs: 'Safety, routine, education, normalcy, and reassurance from adults',
        physiological: 'Increased heart rate, trouble sleeping, loss of appetite, heightened alertness',
        longTermImpact: 'Disrupted education may affect future opportunities and development'
      },
      {
        role: 'Teacher',
        background: 'Dedicated educator who has taught at this school for 8 years',
        thoughts: 'How can I continue teaching my students? They need education now more than ever.',
        feelings: 'Devastated, responsible for students, determined to find alternatives',
        needs: 'Safe teaching space, resources, support from community',
        physiological: 'Stress-induced headaches, fatigue, difficulty concentrating',
        longTermImpact: 'Career uncertainty, trauma from loss of workplace, drive to rebuild'
      },
      {
        role: 'Parent',
        background: 'Working parent trying to provide stability for their family',
        thoughts: 'My child needs education and normalcy. How do I explain this situation?',
        feelings: 'Worried about child\'s future, frustrated by circumstances beyond control',
        needs: 'Alternative education options, emotional support for child',
        physiological: 'Chronic stress, sleep disruption, digestive issues',
        longTermImpact: 'Long-term concern about child\'s educational and emotional development'
      }
    ],
    systemicFactors: [
      'Infrastructure targeting affects civilian facilities',
      'Limited resources for rebuilding educational facilities',
      'Psychological trauma impacts learning capacity',
      'Economic constraints limit educational alternatives'
    ]
  },
  {
    id: 2,
    title: "The Medical Emergency",
    complexity: 'high',
    region: 'Gaza',
    context: 'Healthcare access during crisis',
    situation: 'A hospital in Gaza receives an influx of patients during a medical emergency while facing severe resource shortages.',
    perspectives: [
      {
        role: 'Doctor',
        background: 'Emergency physician with 12 years of experience',
        thoughts: 'I have to make impossible decisions about who to treat first with limited supplies.',
        feelings: 'Overwhelmed, morally distressed, determined to save lives',
        needs: 'Medical supplies, power, support staff, psychological support',
        physiological: 'Extreme fatigue, dehydration, stress-related physical symptoms',
        longTermImpact: 'Burnout, moral injury, long-term psychological effects'
      },
      {
        role: 'Patient\'s Family Member',
        background: 'Person whose loved one needs urgent medical care',
        thoughts: 'Will my family member receive the treatment they need?',
        feelings: 'Terrified, helpless, desperately hoping for good news',
        needs: 'Information about loved one\'s condition, hope, emotional support',
        physiological: 'Anxiety symptoms, rapid heartbeat, trembling',
        longTermImpact: 'Potential grief, trauma, changed family dynamics'
      },
      {
        role: 'Humanitarian Aid Worker',
        background: 'International volunteer working to provide medical assistance',
        thoughts: 'How can we get more supplies in and help more people?',
        feelings: 'Compassionate, frustrated by limitations, driven to help',
        needs: 'Safe access, medical supplies, coordination with local staff',
        physiological: 'Physical exhaustion, stress from working in dangerous conditions',
        longTermImpact: 'Commitment to humanitarian work, potential trauma exposure'
      }
    ],
    systemicFactors: [
      'Healthcare infrastructure strain',
      'Limited medical supply access',
      'Economic sanctions affecting healthcare',
      'International aid coordination challenges'
    ]
  }
]

export function getScenarioById(id: number): Scenario | undefined {
  return scenarios.find(scenario => scenario.id === id)
}

export function getScenariosByComplexity(complexity: 'low' | 'medium' | 'high'): Scenario[] {
  return scenarios.filter(scenario => scenario.complexity === complexity)
}