'use client'

import { useState, useEffect } from 'react'
import { Perspective, EmpathyQuestions } from '@/lib/types'
import { getPerspectiveColors, getPerspectiveSectionStyle, animationTiming, getRevealDelay } from '@/lib/perspectiveColors'
import { ChevronDown, ChevronUp, Heart, Clock, Lightbulb } from 'lucide-react'

interface InteractivePerspectiveCardProps {
  perspective: Perspective
  perspectiveIndex: number
  empathyQuestions: EmpathyQuestions
  isDarkMode: boolean
  onSectionReveal?: (sectionType: string) => void
  onEmpathyResponse?: (questionIndex: number, response: string) => void
}

interface RevealedSection {
  background: boolean
  thoughts: boolean
  feelings: boolean
  needs: boolean
  physiological: boolean
  longTermImpact: boolean
  empathyQuestions: boolean
}

export function InteractivePerspectiveCard({ 
  perspective, 
  perspectiveIndex, 
  empathyQuestions, 
  isDarkMode,
  onSectionReveal,
  onEmpathyResponse 
}: InteractivePerspectiveCardProps) {
  const [revealedSections, setRevealedSections] = useState<RevealedSection>({
    background: false,
    thoughts: false,
    feelings: false,
    needs: false,
    physiological: false,
    longTermImpact: false,
    empathyQuestions: false
  })

  const [currentEmpathyQuestion, setCurrentEmpathyQuestion] = useState(0)
  const [empathyResponses, setEmpathyResponses] = useState<string[]>([])
  const [showReflectionHint, setShowReflectionHint] = useState(false)
  const [isAutoRevealing, setIsAutoRevealing] = useState(false)

  const colors = getPerspectiveColors(isDarkMode)
  const sectionOrder: (keyof RevealedSection)[] = [
    'background', 'thoughts', 'feelings', 'needs', 'physiological', 'longTermImpact', 'empathyQuestions'
  ]

  // Auto-reveal sections with staggered timing
  useEffect(() => {
    if (isAutoRevealing) return

    const revealSection = (sectionIndex: number) => {
      if (sectionIndex >= sectionOrder.length) return

      const sectionKey = sectionOrder[sectionIndex]
      const delay = getRevealDelay(sectionIndex)

      setTimeout(() => {
        setRevealedSections(prev => ({
          ...prev,
          [sectionKey]: true
        }))
        
        onSectionReveal?.(sectionKey)
        
        // Continue to next section
        revealSection(sectionIndex + 1)
      }, delay)
    }

    // Start auto-reveal after component mounts
    const startDelay = setTimeout(() => {
      setIsAutoRevealing(true)
      revealSection(0)
    }, 1000)

    return () => clearTimeout(startDelay)
  }, [isAutoRevealing, onSectionReveal])

  // Show reflection hint after reading pace time
  useEffect(() => {
    if (revealedSections.longTermImpact) {
      const hintTimer = setTimeout(() => {
        setShowReflectionHint(true)
      }, animationTiming.readingPaceHint)

      return () => clearTimeout(hintTimer)
    }
  }, [revealedSections.longTermImpact])

  const handleEmpathyResponse = (questionIndex: number, response: string) => {
    const newResponses = [...empathyResponses]
    newResponses[questionIndex] = response
    setEmpathyResponses(newResponses)
    onEmpathyResponse?.(questionIndex, response)
  }

  const manualReveal = (sectionKey: keyof RevealedSection) => {
    setRevealedSections(prev => ({
      ...prev,
      [sectionKey]: true
    }))
    onSectionReveal?.(sectionKey)
  }

  const getSpecificQuestions = () => {
    return empathyQuestions.perspectiveSpecific?.[perspectiveIndex] || []
  }

  const AnimatedSection = ({ 
    sectionKey, 
    title, 
    content, 
    isRevealed,
    delay = 0
  }: {
    sectionKey: keyof RevealedSection
    title: string
    content: string
    isRevealed: boolean
    delay?: number
  }) => {
    const sectionStyle = sectionKey === 'background' ? 
      { backgroundColor: colors.cardBackground, color: isDarkMode ? '#90CAF9' : '#1565C0', borderColor: isDarkMode ? '#303F9F' : '#BBDEFB' } :
      getPerspectiveSectionStyle(sectionKey as keyof Omit<typeof colors, 'cardBackground' | 'cardBorder'>, colors)

    return (
      <div
        className={`
          transition-all duration-${animationTiming.sectionFadeIn} ease-out
          ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div 
          className="p-4 rounded-lg border mb-4 relative"
          style={sectionStyle}
        >
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold flex items-center gap-2">
              {sectionKey === 'thoughts' && <Lightbulb className="w-4 h-4" />}
              {sectionKey === 'feelings' && <Heart className="w-4 h-4" />}
              {sectionKey === 'physiological' && <Clock className="w-4 h-4" />}
              {title}
            </h4>
            {!isRevealed && (
              <button
                onClick={() => manualReveal(sectionKey)}
                className="text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                Reveal
              </button>
            )}
          </div>
          
          {isRevealed && (
            <div className="animate-fade-in">
              <p className="leading-relaxed">{content}</p>
              {showReflectionHint && sectionKey === 'longTermImpact' && (
                <div className="mt-3 p-2 bg-black bg-opacity-10 rounded text-sm opacity-70">
                  💭 Take a moment to reflect on this perspective before continuing
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div 
        className="rounded-lg border p-6 mb-6"
        style={{ 
          backgroundColor: colors.cardBackground, 
          borderColor: colors.cardBorder 
        }}
      >
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Perspective: {perspective.role}
          </h2>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Take your time to understand this person's experience
          </div>
        </div>

        {/* Background Section */}
        <AnimatedSection
          sectionKey="background"
          title="Background"
          content={perspective.background}
          isRevealed={revealedSections.background}
          delay={0}
        />

        {/* Progressive Revelation Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <AnimatedSection
              sectionKey="thoughts"
              title="Thoughts"
              content={perspective.thoughts}
              isRevealed={revealedSections.thoughts}
              delay={100}
            />
            
            <AnimatedSection
              sectionKey="feelings"
              title="Feelings"
              content={perspective.feelings}
              isRevealed={revealedSections.feelings}
              delay={200}
            />
            
            <AnimatedSection
              sectionKey="needs"
              title="Needs"
              content={perspective.needs}
              isRevealed={revealedSections.needs}
              delay={300}
            />
          </div>

          <div className="space-y-4">
            <AnimatedSection
              sectionKey="physiological"
              title="Physical Response"
              content={perspective.physiological}
              isRevealed={revealedSections.physiological}
              delay={400}
            />
            
            <AnimatedSection
              sectionKey="longTermImpact"
              title="Long-term Impact"
              content={perspective.longTermImpact}
              isRevealed={revealedSections.longTermImpact}
              delay={500}
            />
          </div>
        </div>

        {/* Empathy Questions Section */}
        {revealedSections.empathyQuestions && (
          <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 rounded-lg border border-purple-200 dark:border-purple-700">
            <h3 className="text-lg font-semibold mb-4 text-purple-800 dark:text-purple-200 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Empathy Reflection
            </h3>
            
            {getSpecificQuestions().map((question, index) => (
              <div key={index} className="mb-4">
                <p className="text-purple-700 dark:text-purple-300 mb-2">{question}</p>
                <textarea
                  value={empathyResponses[index] || ''}
                  onChange={(e) => handleEmpathyResponse(index, e.target.value)}
                  placeholder="Share your thoughts and feelings..."
                  className="w-full p-3 border border-purple-300 dark:border-purple-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                  rows={3}
                />
              </div>
            ))}
          </div>
        )}

        {/* Reveal All Button */}
        {!revealedSections.empathyQuestions && (
          <div className="mt-6 text-center">
            <button
              onClick={() => {
                setRevealedSections({
                  background: true,
                  thoughts: true,
                  feelings: true,
                  needs: true,
                  physiological: true,
                  longTermImpact: true,
                  empathyQuestions: true
                })
                setIsAutoRevealing(true)
              }}
              className="btn btn-secondary flex items-center gap-2 mx-auto"
            >
              <ChevronDown className="w-4 h-4" />
              Reveal All Sections
            </button>
          </div>
        )}
      </div>
    </div>
  )
}