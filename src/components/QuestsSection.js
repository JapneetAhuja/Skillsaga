import React, { useState } from 'react';
import { ClockIcon, AcademicCapIcon, FireIcon, SparklesIcon, BeakerIcon, ArrowRightIcon, UserGroupIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const quests = [
  {
    id: 1,
    name: 'Web Development Basics',
    description: 'Master HTML, CSS, and JavaScript fundamentals through interactive challenges.',
    difficulty: 'Beginner',
    timeCommitment: '2 weeks',
    xpReward: 500,
    icon: AcademicCapIcon,
    color: 'blue',
    progress: 0,
    skills: ['HTML', 'CSS', 'JavaScript'],
    participants: 1258,
    completionRate: 78
  },
  {
    id: 2,
    name: 'Data Visualization Challenge',
    description: 'Create compelling visualizations using real-world datasets.',
    difficulty: 'Intermediate',
    timeCommitment: '3 weeks',
    xpReward: 750,
    icon: BeakerIcon,
    color: 'purple',
    progress: 0,
    skills: ['D3.js', 'SVG', 'Data Analysis'],
    participants: 842,
    completionRate: 65
  },
  {
    id: 3,
    name: 'Full-Stack App Development',
    description: 'Build a complete application with frontend, backend, and database integration.',
    difficulty: 'Advanced',
    timeCommitment: '4 weeks',
    xpReward: 1000,
    icon: FireIcon,
    color: 'orange',
    progress: 0,
    skills: ['React', 'Node.js', 'MongoDB'],
    participants: 560,
    completionRate: 42
  },
];

const difficultyColors = {
  Beginner: {
    badge: 'bg-blue-100 text-blue-800',
    ribbon: 'from-blue-500 to-blue-600',
    progress: 'bg-blue-500',
    button: 'from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600',
    shadow: 'shadow-blue-500/20',
    hoverBorder: 'hover:border-blue-200',
    icon: 'text-blue-500'
  },
  Intermediate: {
    badge: 'bg-purple-100 text-purple-800',
    ribbon: 'from-purple-500 to-purple-600',
    progress: 'bg-purple-500',
    button: 'from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600',
    shadow: 'shadow-purple-500/20',
    hoverBorder: 'hover:border-purple-200',
    icon: 'text-purple-500'
  },
  Advanced: {
    badge: 'bg-orange-100 text-orange-800',
    ribbon: 'from-orange-500 to-orange-600',
    progress: 'bg-orange-500',
    button: 'from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600',
    shadow: 'shadow-orange-500/20',
    hoverBorder: 'hover:border-orange-200',
    icon: 'text-orange-500'
  }
};

export default function QuestsSection() {
  const [hoveredQuest, setHoveredQuest] = useState(null);
  
  return (
    <div id="quests" className="bg-gradient-to-b from-white to-gray-50 py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-50 to-blue-50 text-indigo-600 mb-6">
            <SparklesIcon className="h-4 w-4 mr-2" />
            <span>Level Up Your Skills</span>
          </div>
          
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            <span className="block">Complete Challenges,</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">Earn Rewards</span>
          </h2>
          
          <p className="mt-4 text-xl text-gray-500 leading-relaxed">
            Embark on skill-building quests, track your progress, and unlock achievements
            through our interactive learning challenges.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {quests.map((quest) => {
            const colors = difficultyColors[quest.difficulty];
            const isHovered = hoveredQuest === quest.id;
            
            return (
              <div
                key={quest.id}
                className={`relative bg-white rounded-2xl transition-all duration-300 ${colors.shadow} hover:shadow-xl border border-gray-100 ${colors.hoverBorder}`}
                onMouseEnter={() => setHoveredQuest(quest.id)}
                onMouseLeave={() => setHoveredQuest(null)}
              >
                {/* Ribbon */}
                <div className="absolute top-0 right-0 overflow-hidden w-24 h-24 z-10">
                  <div className={`absolute top-0 right-0 transform rotate-45 translate-y-4 translate-x-4 w-24 h-8 bg-gradient-to-r ${colors.ribbon} text-white text-xs font-medium flex items-center justify-center shadow-md`}>
                    {quest.difficulty}
                  </div>
                </div>
                
                {/* Card top color bar */}
                <div className={`h-2 w-full bg-gradient-to-r ${colors.ribbon} rounded-t-2xl`}></div>
                
                <div className="p-6">
                  <div className="flex items-center">
                    <div className={`flex-shrink-0 h-12 w-12 rounded-lg ${colors.badge} bg-opacity-30 flex items-center justify-center`}>
                      <quest.icon className={`h-6 w-6 ${colors.icon}`} aria-hidden="true" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-900">{quest.name}</h3>
                      <div className="mt-1 flex flex-wrap gap-1">
                        {quest.skills.map((skill, index) => (
                          <span key={index} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-gray-500 text-sm">{quest.description}</p>
                  </div>
                  
                  {/* Quest details */}
                  <div className="mt-5 grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <ClockIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      <span className="ml-2 text-sm text-gray-500">{quest.timeCommitment}</span>
                    </div>
                    <div className="flex items-center">
                      <UserGroupIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      <span className="ml-2 text-sm text-gray-500">{quest.participants.toLocaleString()} learners</span>
                    </div>
                    <div className="flex items-center">
                      <ShieldCheckIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      <span className="ml-2 text-sm text-gray-500">{quest.completionRate}% completion</span>
                    </div>
                    <div className="flex items-center">
                      <SparklesIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      <span className="ml-2 text-sm font-medium text-gray-900">{quest.xpReward.toLocaleString()} XP</span>
                    </div>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="mt-5">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-medium text-gray-500">Quest Progress</span>
                      <span className="text-xs font-medium text-gray-500">{quest.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div 
                        className={`${colors.progress} h-1.5 rounded-full transition-all duration-500`} 
                        style={{ width: `${quest.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <button
                      type="button"
                      className={`w-full inline-flex justify-center items-center px-4 py-3 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-gradient-to-r ${colors.button} transition-all duration-200 transform ${isHovered ? 'translate-y-0' : 'translate-y-0'}`}
                    >
                      <span>Start Quest</span>
                      <ArrowRightIcon className={`ml-2 h-4 w-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : 'translate-x-0'}`} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* CTA section */}
        <div className="mt-20 text-center">
          <div className="inline-block rounded-2xl bg-gradient-to-r from-indigo-50 to-blue-50 p-8 max-w-3xl">
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-xl bg-gradient-to-r from-primary to-indigo-600 flex items-center justify-center text-white shadow-lg mb-6">
                <SparklesIcon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Ready to start a quest?</h3>
              <p className="mt-3 text-gray-500 max-w-xl">
                Join thousands of learners who are building their skills, earning XP, and climbing the leaderboard through our quest system.
              </p>
              <div className="mt-6 inline-flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  className="px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-primary to-indigo-600 hover:from-indigo-700 hover:to-indigo-600 focus:outline-none transition-all duration-200"
                >
                  Browse All Quests
                </button>
                <button
                  type="button"
                  className="px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none transition-all duration-200"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 