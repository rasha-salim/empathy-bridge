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
      },
      {
        role: 'School Administrator',
        background: 'Principal who has dedicated 15 years to this educational community',
        thoughts: 'I need to find a way to continue education for 500+ students. Every day lost is crucial.',
        feelings: 'Overwhelmed by responsibility, determined to rebuild, frustrated by bureaucratic delays',
        needs: 'Temporary facilities, community support, government assistance, counseling services',
        physiological: 'Constant tension headaches, elevated blood pressure, insomnia',
        longTermImpact: 'Motivation to create more resilient educational systems, potential career burnout'
      }
    ],
    systemicFactors: [
      'Infrastructure targeting affects civilian facilities',
      'Limited resources for rebuilding educational facilities',
      'Psychological trauma impacts learning capacity',
      'Economic constraints limit educational alternatives',
      'International education aid distribution challenges',
      'Community displacement disrupts student populations'
    ],
    empathyQuestions: {
      beforeReflection: [
        "What emotions did you experience while reading these different perspectives?",
        "Which perspective challenged your initial assumptions about education in conflict zones?",
        "How do the different needs of each person create a complex web of challenges?",
        "What common hopes do you see shared across all these perspectives?"
      ],
      betweenPerspectives: [
        "How might this person's experience connect to the previous perspective you read?",
        "What do you think this person needs most right now to feel supported?",
        "If you were in this situation, what would be your biggest concern?"
      ],
      perspectiveSpecific: {
        0: ["How might a 10-year-old process this disruption to their routine?"],
        1: ["What drives teachers to continue their mission despite these challenges?"],
        2: ["How do parents balance protecting their children while maintaining hope?"],
        3: ["What leadership qualities emerge when communities face educational crises?"]
      }
    }
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
      },
      {
        role: 'Nurse',
        background: 'Local nurse who has worked at this hospital for 8 years',
        thoughts: 'I know these patients and their families. How can I comfort them when I\'m scared too?',
        feelings: 'Emotionally drained, protective of patients, struggling with personal fear',
        needs: 'Emotional support, adequate staff coverage, basic medical supplies',
        physiological: 'Chronic back pain from long shifts, dehydration, stress-induced migraines',
        longTermImpact: 'Deepened empathy for community, potential secondary trauma'
      }
    ],
    systemicFactors: [
      'Healthcare infrastructure strain',
      'Limited medical supply access',
      'Economic sanctions affecting healthcare',
      'International aid coordination challenges',
      'Power grid instability affecting medical equipment',
      'Medical staff brain drain due to unsafe conditions'
    ],
    empathyQuestions: {
      beforeReflection: [
        "How did reading about healthcare challenges affect your understanding of medical care in crisis zones?",
        "What trade-offs and impossible decisions did you notice across these perspectives?",
        "Which perspective helped you understand the human cost of medical resource shortages?",
        "What resilience and dedication did you observe in each person's response?"
      ],
      betweenPerspectives: [
        "How does this person's role create unique pressures in this medical crisis?",
        "What support would make the biggest difference for this person right now?",
        "How might this person's stress affect others around them?"
      ],
      perspectiveSpecific: {
        0: ["What keeps healthcare workers motivated in impossible situations?"],
        1: ["How do patients maintain hope when medical help is uncertain?"],
        2: ["How do families cope when their loved one's health is at risk?"]
      }
    }
  },
  {
    id: 3,
    title: "The Displaced Family's Shelter",
    complexity: 'medium',
    region: 'Gaza',
    context: 'Housing crisis and displacement',
    situation: 'A family of six has been staying in a temporary shelter for three weeks after their home was destroyed, sharing space with multiple other families.',
    perspectives: [
      {
        role: 'Mother of Three',
        background: 'Former office worker now caring for children in displacement',
        thoughts: 'How do I maintain dignity and hope for my children in these conditions?',
        feelings: 'Exhausted, protective, grieving loss of home, worried about children\'s wellbeing',
        needs: 'Privacy, safety, permanent housing, children\'s education, basic hygiene facilities',
        physiological: 'Sleep deprivation, stress eating or loss of appetite, tension in shoulders and neck',
        longTermImpact: 'Trauma from displacement, potential depression, strengthened family bonds'
      },
      {
        role: 'Teenage Daughter (Age 16)',
        background: 'High school student who lost her private study space and personal belongings',
        thoughts: 'I want my room back, my books, my normal life. How can I study for exams here?',
        feelings: 'Angry, embarrassed, mourning loss of independence, anxious about future',
        needs: 'Privacy, educational resources, peer support, hope for return to normalcy',
        physiological: 'Disrupted sleep patterns, headaches from crowded conditions, stress-related skin issues',
        longTermImpact: 'Educational delays, increased resilience, changed life priorities'
      },
      {
        role: 'Elderly Grandfather',
        background: 'Retired shopkeeper with diabetes who needs regular medical care',
        thoughts: 'I lived through wars before, but this feels different. Will I see my grandchildren grow up?',
        feelings: 'Resigned, worried about burdening family, nostalgic for lost home',
        needs: 'Medical care, comfortable seating, respect from younger generations, familiar routines',
        physiological: 'Difficulty managing diabetes, joint pain from sleeping conditions, memory affected by stress',
        longTermImpact: 'Accelerated health decline, deeper appreciation for family, wisdom sharing'
      },
      {
        role: 'Shelter Coordinator',
        background: 'Local community leader organizing aid distribution and shelter management',
        thoughts: 'How do I balance fairness with urgent needs when resources are so limited?',
        feelings: 'Overwhelmed by responsibility, empathetic to all families, frustrated by resource constraints',
        needs: 'More supplies, volunteer help, coordination with aid agencies, conflict resolution skills',
        physiological: 'Constant fatigue, stress-induced headaches, irregular meals',
        longTermImpact: 'Leadership skills development, community network building, emotional resilience'
      }
    ],
    systemicFactors: [
      'Housing shortage creates overcrowding',
      'Limited reconstruction materials available',
      'Economic instability affects rebuilding capacity',
      'Psychological trauma impacts family dynamics',
      'Aid distribution challenges create inequality',
      'Social services overwhelmed by demand'
    ],
    empathyQuestions: {
      beforeReflection: [
        "How did experiencing these perspectives change your understanding of displacement?",
        "What different coping strategies did you notice across the family members?",
        "Which perspective helped you understand the complexity of maintaining family bonds during crisis?",
        "What sources of strength and resilience did you observe in this family?"
      ],
      betweenPerspectives: [
        "How might this family member's age or role affect their experience of displacement?",
        "What would this person need most to feel some sense of normalcy?",
        "How does this person contribute to the family's survival and emotional wellbeing?"
      ],
      perspectiveSpecific: {
        0: ["How do parents maintain hope and dignity for their children during displacement?"],
        1: ["How do teenagers process losing their home and normal social connections?"],
        2: ["What drives community members to help others even when they're struggling themselves?"]
      }
    }
  },
  {
    id: 4,
    title: "The Journalist's Dilemma",
    complexity: 'high',
    region: 'Gaza',
    context: 'Media coverage and truth-telling under pressure',
    situation: 'A local journalist must decide how to report on a tragic incident while balancing safety, truth, and the need to inform the world.',
    perspectives: [
      {
        role: 'Local Journalist',
        background: 'Independent reporter committed to documenting truth for international audience',
        thoughts: 'People need to know what\'s happening here, but reporting puts my family at risk.',
        feelings: 'Conflicted between duty and safety, passionate about truth, fearful of consequences',
        needs: 'Safety for family, press freedom, reliable communication tools, international support',
        physiological: 'Adrenaline spikes during reporting, insomnia from hypervigilance, stomach issues from stress',
        longTermImpact: 'Potential trauma exposure, legacy of truth-telling, family safety concerns'
      },
      {
        role: 'International Editor',
        background: 'News editor at global media outlet managing Gaza coverage from abroad',
        thoughts: 'How do I balance newsworthiness with reporter safety and audience fatigue?',
        feelings: 'Protective of field reporters, pressured by editorial demands, troubled by distant decision-making',
        needs: 'Accurate information, reporter safety confirmation, audience engagement metrics',
        physiological: 'Tension from long hours monitoring, eye strain from screens, irregular sleep',
        longTermImpact: 'Career advancement through crisis coverage, moral weight of editorial decisions'
      },
      {
        role: 'Subject of News Story',
        background: 'Community member whose tragedy became part of the journalist\'s report',
        thoughts: 'Will telling my story help others, or just be consumed as entertainment?',
        feelings: 'Vulnerable, hopeful for change, concerned about privacy, grateful for attention',
        needs: 'Respectful representation, potential aid from exposure, dignity in storytelling',
        physiological: 'Emotional exhaustion from retelling trauma, anxiety about public exposure',
        longTermImpact: 'Healing through story sharing, advocacy skills development, public recognition'
      },
      {
        role: 'Local Community Elder',
        background: 'Respected community leader concerned about representation and consequences',
        thoughts: 'How will this coverage affect our community\'s safety and international perception?',
        feelings: 'Protective of community, skeptical of media motives, worried about oversimplification',
        needs: 'Community input on coverage, long-term support beyond news cycle, nuanced representation',
        physiological: 'Stress from media attention, fatigue from community consultation meetings',
        longTermImpact: 'Media literacy development, community advocacy experience, international connections'
      }
    ],
    systemicFactors: [
      'Press freedom restrictions limit reporting',
      'International media attention cycles create urgency',
      'Digital communication vulnerabilities affect safety',
      'Global audience fatigue impacts story reception',
      'Economic pressures influence editorial decisions',
      'Cultural barriers affect story understanding'
    ],
    empathyQuestions: {
      beforeReflection: [
        "How did these perspectives change your understanding of journalism in conflict zones?",
        "What ethical dilemmas did you notice that journalists and communities face?",
        "Which perspective helped you understand the complexity of truth-telling in crisis?",
        "What different types of courage did you observe across these perspectives?"
      ],
      betweenPerspectives: [
        "How does this person's role affect their relationship with information and media?",
        "What risks or responsibilities does this person carry that others might not see?",
        "How might this person's actions impact the broader conversation about this crisis?"
      ],
      perspectiveSpecific: {
        0: ["What motivates journalists to risk their safety to document truth?"],
        1: ["How do families balance supporting journalists while protecting themselves?"],
        2: ["What role do communities play in shaping how their stories are told?"]
      }
    }
  },
  {
    id: 5,
    title: "The Aid Worker's Arrival",
    complexity: 'low',
    region: 'Gaza',
    context: 'International humanitarian response',
    situation: 'A newly arrived international aid worker experiences their first day distributing food supplies in a Gaza neighborhood.',
    perspectives: [
      {
        role: 'International Aid Worker',
        background: 'Recent graduate on first humanitarian mission, motivated by desire to help',
        thoughts: 'I studied this in textbooks, but the reality is so much more complex and overwhelming.',
        feelings: 'Enthusiastic yet overwhelmed, culturally uncertain, determined to make a difference',
        needs: 'Cultural guidance, practical training, emotional support, effective communication tools',
        physiological: 'Nervous energy, adaptation to climate, digestive adjustment to new environment',
        longTermImpact: 'Career direction clarification, cultural competency development, lifelong advocacy'
      },
      {
        role: 'Local Community Liaison',
        background: 'Gaza resident who coordinates between international aid and local community',
        thoughts: 'Another new face who will learn and leave. How do I help them understand our reality?',
        feelings: 'Patient but tired of explaining, hopeful for effective aid, protective of community dignity',
        needs: 'Respectful collaboration, consistent aid worker presence, community input recognition',
        physiological: 'Fatigue from cultural translation work, stress from miscommunication incidents',
        longTermImpact: 'Bridge-building skills, international network development, community leadership'
      },
      {
        role: 'Elderly Recipient',
        background: 'Grandmother who has received aid from multiple organizations over the years',
        thoughts: 'Will this young person understand what we truly need, or just follow their organization\'s plan?',
        feelings: 'Grateful for help, weary of temporary solutions, wise about aid effectiveness',
        needs: 'Consistent food security, respect for experience, community-led development',
        physiological: 'Nutritional deficiencies managed by aid, physical weakness from chronic stress',
        longTermImpact: 'Accumulated wisdom about crisis survival, family support role, community memory keeping'
      },
      {
        role: 'Local Volunteer',
        background: 'University student helping with aid distribution while managing own family needs',
        thoughts: 'I want to help my community, but this work reminds me daily of our vulnerability.',
        feelings: 'Proud to contribute, frustrated by dependency on aid, hopeful for better future',
        needs: 'Education continuation, family support, leadership development opportunities',
        physiological: 'Energy from meaningful work, stress from balancing multiple responsibilities',
        longTermImpact: 'Leadership skills building, international connections, community development expertise'
      }
    ],
    systemicFactors: [
      'Aid dependency creates complex community dynamics',
      'Cultural differences affect aid effectiveness',
      'Short-term aid worker rotations limit relationship building',
      'Local capacity building often underfunded',
      'International funding priorities may not match local needs',
      'Coordination between aid agencies requires ongoing effort'
    ],
    empathyQuestions: {
      beforeReflection: [
        "How did experiencing the perspectives of both aid workers and recipients change your understanding of humanitarian work?",
        "What challenges did you notice that affect the effectiveness of international aid?",
        "Which perspective helped you understand the complexity of maintaining dignity while receiving help?",
        "What different forms of strength and resilience did you observe across these perspectives?"
      ],
      betweenPerspectives: [
        "How might this person's cultural background shape their approach to giving or receiving help?",
        "What would help this person feel more empowered in this situation?",
        "How does this person's experience contribute to the broader aid ecosystem?"
      ],
      perspectiveSpecific: {
        0: ["What motivates people to leave their comfort zones to help others in crisis?"],
        1: ["How do local community members balance gratitude with the desire for self-sufficiency?"],
        2: ["What wisdom do long-term crisis survivors offer about effective aid?"],
        3: ["How do young people contribute to their communities during humanitarian crises?"]
      }
    }
  }
]

export function getScenarioById(id: number): Scenario | undefined {
  return scenarios.find(scenario => scenario.id === id)
}

export function getScenariosByComplexity(complexity: 'low' | 'medium' | 'high'): Scenario[] {
  return scenarios.filter(scenario => scenario.complexity === complexity)
}