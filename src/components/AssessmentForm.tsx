'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import QuestionCard from './QuestionCard';

export interface AssessmentQuestion {
  id: number;
  pillar: string;
  pillarNumber: number;
  text: string;
  answer?: 'Yes' | 'No';
}

const assessmentQuestions: AssessmentQuestion[] = [
  // Pillar 1: SOP to LMS Conversion
  { id: 1, pillar: 'SOP to LMS Conversion', pillarNumber: 1, text: 'Our SOPs are structured in a way that can easily be converted into interactive training modules.' },
  { id: 2, pillar: 'SOP to LMS Conversion', pillarNumber: 1, text: 'We have clear learning objectives and assessment criteria for each SOP.' },
  { id: 3, pillar: 'SOP to LMS Conversion', pillarNumber: 1, text: 'Our SOPs include multimedia elements (videos, images, interactive elements) that enhance learning.' },
  { id: 4, pillar: 'SOP to LMS Conversion', pillarNumber: 1, text: 'We can track completion rates and knowledge retention for SOP training.' },
  { id: 5, pillar: 'SOP to LMS Conversion', pillarNumber: 1, text: 'Our SOPs are designed with learner engagement in mind, not just documentation.' },
  
  // Pillar 2: Employee LMS Training
  { id: 6, pillar: 'Employee LMS Training', pillarNumber: 2, text: 'We use an LMS to deliver structured training modules to our employees.' },
  { id: 7, pillar: 'Employee LMS Training', pillarNumber: 2, text: 'Our LMS tracks employee progress, completion rates, and learning outcomes.' },
  { id: 8, pillar: 'Employee LMS Training', pillarNumber: 2, text: 'We can create custom learning paths and certifications for different roles.' },
  { id: 9, pillar: 'Employee LMS Training', pillarNumber: 2, text: 'Our LMS integrates with our HR systems for automated enrollment and reporting.' },
  { id: 10, pillar: 'Employee LMS Training', pillarNumber: 2, text: 'Employees can access training content on mobile devices and complete it at their own pace.' },
  
  // Pillar 3: Client LMS Portal
  { id: 11, pillar: 'Client LMS Portal', pillarNumber: 3, text: 'We provide clients with access to a learning portal where they can access our processes and best practices.' },
  { id: 12, pillar: 'Client LMS Portal', pillarNumber: 3, text: 'Our client portal includes interactive training modules, not just static documentation.' },
  { id: 13, pillar: 'Client LMS Portal', pillarNumber: 3, text: 'We can track client engagement with our training content and measure their learning progress.' },
  { id: 14, pillar: 'Client LMS Portal', pillarNumber: 3, text: 'Our client training content is mobile-friendly and accessible 24/7.' },
  { id: 15, pillar: 'Client LMS Portal', pillarNumber: 3, text: 'We can create personalized learning paths for different client segments and use cases.' },
  
  // Pillar 4: LMS Platform & Integration
  { id: 16, pillar: 'LMS Platform & Integration', pillarNumber: 4, text: 'Our LMS platform can handle both employee training and client education in one system.' },
  { id: 17, pillar: 'LMS Platform & Integration', pillarNumber: 4, text: 'We can easily create and update training content without technical expertise.' },
  { id: 18, pillar: 'LMS Platform & Integration', pillarNumber: 4, text: 'Our LMS automates training assignments, progress tracking, and completion notifications.' },
  { id: 19, pillar: 'LMS Platform & Integration', pillarNumber: 4, text: 'The LMS integrates with our existing tools (CRM, HRIS, email, Slack) for seamless workflows.' },
  { id: 20, pillar: 'LMS Platform & Integration', pillarNumber: 4, text: 'We can white-label the LMS to match our brand and provide a professional client experience.' },
  
  // Pillar 5: LMS Analytics & Reporting
  { id: 21, pillar: 'LMS Analytics & Reporting', pillarNumber: 5, text: 'We have dedicated resources and budget for LMS management and content development.' },
  { id: 22, pillar: 'LMS Analytics & Reporting', pillarNumber: 5, text: 'Our LMS has built-in analytics to track learning effectiveness and ROI.' },
  { id: 23, pillar: 'LMS Analytics & Reporting', pillarNumber: 5, text: 'We regularly collect feedback from learners and use it to improve our training content.' },
  { id: 24, pillar: 'LMS Analytics & Reporting', pillarNumber: 5, text: 'Management receives regular reports on training completion, engagement, and business impact.' },
  { id: 25, pillar: 'LMS Analytics & Reporting', pillarNumber: 5, text: 'We can demonstrate measurable business outcomes from our training investments.' }
];

export default function AssessmentForm() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: 'Yes' | 'No' }>({});
  const [isGoingBackward, setIsGoingBackward] = useState(false);

  const currentQuestion = assessmentQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / assessmentQuestions.length) * 100;

  const handleAnswer = (answer: 'Yes' | 'No') => {
    const newAnswers = { ...answers, [currentQuestion.id]: answer };
    setAnswers(newAnswers);

    // Move to next question or complete assessment
    if (currentQuestionIndex < assessmentQuestions.length - 1) {
      setIsGoingBackward(false);
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setIsGoingBackward(false); // Reset after animation
      }, 300);
    } else {
      // Redirect to results page after completion
      setTimeout(() => {
        window.location.href = '/results';
      }, 500);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setIsGoingBackward(true);
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
        // Reset the direction state after animation completes
        setTimeout(() => {
          setIsGoingBackward(false);
        }, 300);
      }, 100);
    }
  };


  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="border-b border-gray-200 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">OERI</span>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          </div>
          <button 
            onClick={() => window.location.href = '/'}
            className="text-gray-500 hover:text-gray-700 text-sm cursor-pointer"
          >
            Exit Assessment
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="px-6 py-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Question {currentQuestionIndex + 1} of {assessmentQuestions.length}</span>
            <span className="text-sm text-gray-600">{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-blue-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>

      {/* Question Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: isGoingBackward ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isGoingBackward ? 50 : -50 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl w-full"
          >
            <QuestionCard
              question={currentQuestion}
              onAnswer={handleAnswer}
              currentAnswer={answers[currentQuestion.id]}
              onPrevious={handlePrevious}
              canGoBack={currentQuestionIndex > 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Powered by <span className="font-semibold text-gray-700">OERI Assessment</span>
          </div>
          <div className="text-sm text-gray-500">
            Pillar {currentQuestion.pillarNumber}: {currentQuestion.pillar}
          </div>
        </div>
      </div>
    </div>
  );
}
