'use client'
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useState } from 'react';
import EmailCaptureForm from './EmailCaptureForm';

interface PillarScore {
  name: string;
  score: number;
  question: string;
  strength: 'Low' | 'Low to Average' | 'Average' | 'Average to High' | 'High';
  color: string;
}

interface AssessmentResults {
  overallScore: number;
  pillarScores: PillarScore[];
  readinessBand: string;
  email: string;
}

// Mock data - in real app, this would come from the assessment answers
const mockResults: AssessmentResults = {
  overallScore: 68,
  pillarScores: [
    {
      name: 'SOP to LMS Conversion',
      score: 8.4,
      question: 'Can you easily convert SOPs into interactive training modules?',
      strength: 'High',
      color: '#10B981'
    },
    {
      name: 'Employee LMS Training',
      score: 2.1,
      question: 'Do you have a robust LMS for employee training and development?',
      strength: 'Low',
      color: '#EF4444'
    },
    {
      name: 'Client LMS Portal',
      score: 5.7,
      question: 'Can you provide clients with engaging training content and education?',
      strength: 'Average to High',
      color: '#3B82F6'
    },
    {
      name: 'LMS Platform & Integration',
      score: 3.3,
      question: 'Do you have a scalable LMS platform that integrates with your tools?',
      strength: 'Low to Average',
      color: '#F59E0B'
    },
    {
      name: 'LMS Analytics & Reporting',
      score: 7.8,
      question: 'Can you measure and report on training effectiveness and ROI?',
      strength: 'Average to High',
      color: '#3B82F6'
    }
  ],
  readinessBand: 'Developing',
  email: 'user@example.com'
};

const strengthColors = {
  'Low': '#EF4444',
  'Low to Average': '#F59E0B',
  'Average': '#EAB308',
  'Average to High': '#3B82F6',
  'High': '#10B981'
};

const strengthLabels = {
  'Low': 'Low Strength',
  'Low to Average': 'Low to Average Strength',
  'Average': 'Average Strength',
  'Average to High': 'Average to High Strength',
  'High': 'High Strength'
};

function getReadinessBand(score: number): string {
  if (score >= 76) return 'Enablement Leader';
  if (score >= 51) return 'Developing';
  if (score >= 26) return 'Emerging';
  return 'Early Stage';
}

function getBandDescription(band: string): string {
  switch (band) {
    case 'Enablement Leader': return 'Best Practice, Scalable';
    case 'Developing': return 'Repeatable, Needs Scale';
    case 'Emerging': return 'Inconsistent, Needs Structure';
    case 'Early Stage': return 'Ad-hoc, High Risk';
    default: return '';
  }
}

function getBandColor(band: string): string {
  switch (band) {
    case 'Enablement Leader': return '#10B981';
    case 'Developing': return '#3B82F6';
    case 'Emerging': return '#F59E0B';
    case 'Early Stage': return '#EF4444';
    default: return '#6B7280';
  }
}

export default function ResultsPage() {
  const [userEmail, setUserEmail] = useState<string>('');
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [emailInput, setEmailInput] = useState<string>('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  
  const results = mockResults;
  const band = getReadinessBand(results.overallScore);
  const bandDescription = getBandDescription(band);
  const bandColor = getBandColor(band);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setEmailInput(email);
    setIsEmailValid(email.length > 0 && validateEmail(email));
  };

  const handleEmailSubmit = (email: string) => {
    setUserEmail(email);
    setIsEmailSubmitted(true);
  };

  // Pie chart data for overall score
  const pieData = [
    { value: results.overallScore, color: '#3B82F6' },
    { value: 100 - results.overallScore, color: '#E0F2FE' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="px-6 py-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">OERI</span>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Thank You Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Thank you for taking the OERI Assessment
            </h1>
          </motion.div>

          {/* Results Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Side - Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-4 text-gray-700">
                <p>We've scored your answers against these five LMS readiness pillars giving you a score out of 10.</p>
                <p>A score of 8-10 is high, 4-7 is moderate and 1-4 is low.</p>
                <p>Additionally we've given you an overall LMS readiness score which takes into consideration your ability to convert SOPs into engaging training content. A score above 76% is high, 51-76% is moderate, and below 51% indicates areas for improvement.</p>
              </div>

              {/* Strength Legend */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Strength Levels:</h3>
                <div className="grid grid-cols-1 gap-2">
                  {Object.entries(strengthLabels).map(([key, label]) => (
                    <div key={key} className="flex items-center gap-3">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: strengthColors[key as keyof typeof strengthColors] }}
                      ></div>
                      <span className="text-sm text-gray-700">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side - Pie Chart with Small Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center justify-center"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Your LMS Readiness Score</h3>
              <div className="relative w-64 h-64 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      startAngle={90}
                      endAngle={450}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-4xl font-bold text-gray-900">{results.overallScore}%</div>
                  <div className="text-sm text-gray-600 text-center">
                    <div className="font-medium">{band}</div>
                    <div className="text-xs">{bandDescription}</div>
                  </div>
                </div>
              </div>

              {/* Small Email Form */}
              {!isEmailSubmitted ? (
                <div className="w-full max-w-sm">
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    const email = (e.target as HTMLFormElement).email.value;
                    if (email) {
                      handleEmailSubmit(email);
                    }
                  }} className="space-y-3">
                    <input
                      type="email"
                      name="email"
                      value={emailInput}
                      onChange={handleEmailChange}
                      placeholder="Enter your email address"
                      className="w-3/4 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors mx-auto block placeholder:text-gray-400"
                      required
                    />
                    <button
                      type="submit"
                      disabled={!isEmailValid}
                      className={`w-3/4 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 mx-auto ${
                        isEmailValid 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer' 
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Send My Report
                    </button>
                  </form>
                  <p className="text-xs text-gray-400 mt-2 text-center w-3/4 mx-auto">
                    We respect your privacy. Your email will only be used to send your report and relevant LMS insights.
                  </p>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-center"
                >
                  <p className="text-sm text-gray-600">
                    Report sent to <strong>{userEmail}</strong>
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Individual Pillar Scores */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.pillarScores.map((pillar, index) => (
                <motion.div
                  key={pillar.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{pillar.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{pillar.question}</p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">Score {pillar.score}</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${(pillar.score / 10) * 100}%`,
                          backgroundColor: pillar.color 
                        }}
                      ></div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: pillar.color }}
                      ></div>
                      <span className="text-sm text-gray-600">{strengthLabels[pillar.strength]}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mid-Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-32 mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              LMS Implementation & Training Excellence
            </h2>
          </motion.div>

          {/* LMS Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-center mb-12"
          >
            <div className="relative max-w-5xl mx-auto">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lms.webp" 
                  alt="LMS Implementation and Training Excellence" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Call to Action Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center bg-gray-50 rounded-2xl p-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transform Your SOPs into an LMS - Live Workshop
            </h3>
            <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto">
              Discover how to convert your Standard Operating Procedures into engaging training modules that boost employee productivity and client satisfaction
            </p>
            
            <div className="max-w-3xl mx-auto text-gray-600 space-y-4 mb-8">
              <p>In today's competitive landscape, static SOPs aren't enough—you need engaging training experiences that employees actually complete and clients can easily follow. Most companies struggle with boring documentation, poor training completion rates, and lack of measurable learning outcomes.</p>
              <p>Our expert team can transform your existing SOPs into an interactive LMS platform, complete with employee training modules, client education portals, and automated workflows. We can have your LMS fully set up and running within just 3 hours.</p>
              <p>This comprehensive solution includes interactive quizzes, progress tracking, certification programs, and detailed analytics dashboards. Your employees will have access to role-specific learning paths, while your clients can self-serve through branded training content that reduces support tickets and improves satisfaction.</p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg hover:shadow-xl cursor-pointer"
            >
              CONTACT US
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-sm">Share with Friends</span>
            <div className="flex gap-3">
              <button className="hover:text-blue-400 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="hover:text-blue-400 transition-colors cursor-pointer">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="hover:text-blue-400 transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span>Powered by</span>
            <span className="font-semibold">OERI Assessment</span>
          </div>
        </div>
      </div>
    </div>
  );
}
