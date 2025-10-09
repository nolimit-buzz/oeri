'use client'
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { AssessmentQuestion } from './AssessmentForm';

interface QuestionCardProps {
  question: AssessmentQuestion;
  onAnswer: (answer: 'Yes' | 'No') => void;
  currentAnswer?: 'Yes' | 'No';
  onPrevious: () => void;
  canGoBack: boolean;
}

export default function QuestionCard({ 
  question, 
  onAnswer, 
  currentAnswer, 
  onPrevious, 
  canGoBack 
}: QuestionCardProps) {
  return (
    <div className="text-center">
      {/* Back Button */}
      {canGoBack && (
        <button
          onClick={onPrevious}
          className="mb-8 flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm">Previous Question</span>
        </button>
      )}

      {/* Question */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-12 leading-tight max-w-4xl mx-auto"
      >
        {question.text}
      </motion.h1>

      {/* Answer Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onAnswer('Yes')}
          className={`px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-200 cursor-pointer ${
            currentAnswer === 'Yes'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          }`}
        >
          Yes
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onAnswer('No')}
          className={`px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-200 cursor-pointer ${
            currentAnswer === 'No'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          }`}
        >
          No
        </motion.button>
      </motion.div>

      {/* Progress Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-16 flex items-center justify-center gap-2"
      >
        {Array.from({ length: 25 }, (_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index < question.id
                ? 'bg-blue-600'
                : index === question.id - 1
                ? 'bg-blue-400'
                : 'bg-gray-200'
            }`}
          />
        ))}
      </motion.div>
    </div>
  );
}
