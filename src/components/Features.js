import React from 'react';
import { UserGroupIcon, AcademicCapIcon, TrophyIcon, ChartBarIcon, SparklesIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Guilds (Teams)',
    description: 'Join specialized teams of like-minded learners to collaborate on projects, compete in challenges, and grow your skills together.',
    icon: UserGroupIcon,
    color: 'from-indigo-500 to-blue-600',
    textColor: 'text-indigo-600',
    lightColor: 'bg-indigo-50',
    stats: '20+ active guilds',
  },
  {
    name: 'Quests (Challenges)',
    description: 'Complete daily, weekly and monthly skill-building challenges to earn XP, unlock achievements, and master new concepts.',
    icon: AcademicCapIcon,
    color: 'from-emerald-500 to-teal-600',
    textColor: 'text-emerald-600',
    lightColor: 'bg-emerald-50',
    stats: '500+ learning quests',
  },
  {
    name: 'Leaderboards & Badges',
    description: 'Compete with peers, earn recognition for your achievements, and showcase your expertise with customizable profile badges.',
    icon: TrophyIcon,
    color: 'from-amber-500 to-orange-600',
    textColor: 'text-amber-600',
    lightColor: 'bg-amber-50',
    stats: '50+ achievement badges',
  },
  {
    name: 'Personalized Growth',
    description: 'Track your progress with interactive dashboards, personalized learning paths, and AI-powered recommendations.',
    icon: ChartBarIcon,
    color: 'from-blue-500 to-cyan-600',
    textColor: 'text-blue-600',
    lightColor: 'bg-blue-50',
    stats: 'Tailored to your goals',
  },
];

export default function Features() {
  return (
    <div id="features" className="py-24 bg-white overflow-hidden relative">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-50 to-white"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background decorative dots */}
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
            <svg
              className="absolute top-12 left-full transform translate-x-32 opacity-25"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect x="0" y="0" width="4" height="4" className="text-indigo-100" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32 opacity-25"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect x="0" y="0" width="4" height="4" className="text-emerald-100" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
            </svg>
          </div>
        </div>
        
        <div className="relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-500/10 to-emerald-500/10 text-indigo-600 mb-6">
              <SparklesIcon className="h-4 w-4 mr-2 text-secondary" />
              <span>Key Platform Features</span>
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Learn Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">Play</span>
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500 leading-relaxed">
              SkillSaga combines education with gamification to create an engaging learning experience
              that keeps you motivated and makes skill acquisition fun.
            </p>
          </div>

          <div className="mt-20">
            <div className="grid gap-12 lg:grid-cols-2">
              {features.map((feature) => (
                <div 
                  key={feature.name} 
                  className="relative group"
                >
                  {/* Card with hover effect */}
                  <div className="relative overflow-hidden rounded-2xl transition-all duration-300 shadow-sm hover:shadow-xl bg-white border border-gray-100 group-hover:border-gray-200">
                    {/* Card header with gradient */}
                    <div className={`h-2 w-full bg-gradient-to-r ${feature.color}`}></div>
                    
                    <div className="p-8">
                      <div className="flex items-center">
                        <div className={`flex-shrink-0 inline-flex items-center justify-center h-12 w-12 rounded-xl ${feature.lightColor} ${feature.textColor}`}>
                          <feature.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-xl font-bold text-gray-900">{feature.name}</h3>
                          <p className="text-sm font-medium text-gray-500">{feature.stats}</p>
                        </div>
                      </div>
                      
                      <p className="mt-4 text-base text-gray-600 leading-relaxed">{feature.description}</p>
                      
                      {/* Interactive button */}
                      <div className="mt-6">
                        <a 
                          href={`#${feature.name.toLowerCase().replace(/[\s()&]+/g, '-')}`}
                          className={`inline-flex items-center text-sm font-medium ${feature.textColor} transition-all duration-200 hover:opacity-80`}
                        >
                          Learn more
                          <svg 
                            className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" 
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                          >
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    
                    {/* Bottom feature accent decoration */}
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                  
                  {/* Decorative gradient backdrop */}
                  <div 
                    className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`} 
                    style={{ zIndex: -1 }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Additional benefits section */}
          <div className="mt-24 text-center">
            <div className="inline-flex items-center px-6 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              <span>Over 10,000 learners have improved their skills with SkillSaga</span>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="bg-white p-4 rounded-lg">
                <div className="text-4xl font-bold text-indigo-600">500+</div>
                <div className="text-sm text-gray-500 mt-1">Learning Quests</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-4xl font-bold text-emerald-600">20+</div>
                <div className="text-sm text-gray-500 mt-1">Skill Guilds</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-4xl font-bold text-amber-600">98%</div>
                <div className="text-sm text-gray-500 mt-1">Satisfaction Rate</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-4xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-500 mt-1">Learning Access</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 