import React from 'react';
import { ArrowRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <div id="home" className="relative bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-800 pt-16 pb-32 px-4 sm:px-6 lg:pt-28 lg:pb-40 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated particles */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-40 w-72 h-72 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:30px_30px]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-800/40 text-indigo-200 mb-6 backdrop-blur-sm border border-indigo-700/50">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="ml-2 text-sm font-medium tracking-wide">AI-Powered Learning Platform</span>
            </div>
            
            {/* Heading with gradient text */}
            <h1 className="relative">
              <span className="mt-1 block text-5xl tracking-tight font-extrabold sm:text-6xl xl:text-7xl">
                <span className="block text-white mb-2">Transform Learning</span>
                <span className="block bg-gradient-to-r from-secondary to-green-400 bg-clip-text text-transparent">
                  Into Adventure
                </span>
              </span>
            </h1>
            
            {/* Stats badges */}
            <div className="flex flex-wrap gap-3 mt-6 lg:justify-start justify-center">
              <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/10 flex items-center">
                <div className="h-2 w-2 rounded-full bg-emerald-400 mr-2"></div>
                <span className="text-xs font-medium text-white">10k+ Active Users</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/10 flex items-center">
                <div className="h-2 w-2 rounded-full bg-amber-400 mr-2"></div>
                <span className="text-xs font-medium text-white">500+ Quests</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/10 flex items-center">
                <div className="h-2 w-2 rounded-full bg-blue-400 mr-2"></div>
                <span className="text-xs font-medium text-white">20+ Guilds</span>
              </div>
            </div>
            
            {/* Description */}
            <p className="mt-6 text-base text-indigo-100/90 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl leading-relaxed">
              SkillSaga transforms education into an exciting adventure through team-based collaboration, 
              interactive quests, leaderboards, and rewards—making learning engaging, social, and effective.
            </p>
            
            {/* CTA Buttons */}
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
              <a
                href="#home"
                className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-primary to-indigo-600 hover:from-indigo-700 hover:to-indigo-800 shadow-lg shadow-indigo-700/30 transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-900 focus:ring-indigo-500 sm:w-auto"
              >
                Get Started Free
                <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" />
              </a>
              <a
                href="#features"
                className="mt-4 sm:mt-0 w-full flex items-center justify-center px-8 py-4 border border-indigo-600 text-base font-medium rounded-lg text-indigo-200 bg-transparent hover:bg-indigo-800/30 backdrop-blur-sm transition duration-300 sm:w-auto"
              >
                Explore Features
              </a>
            </div>
            
            {/* Social proof */}
            <div className="mt-12 flex flex-col lg:flex-row items-center lg:items-start gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img
                    key={i}
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-indigo-900"
                    src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${20 + i}.jpg`}
                    alt=""
                  />
                ))}
              </div>
              <div className="text-indigo-200 text-sm">
                <span className="font-semibold text-white">500+</span> learners joined this week
              </div>
            </div>
          </div>
          
          {/* Right side with image and 3D elements */}
          <div className="mt-16 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            {/* Main image */}
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glowing background effect */}
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              
              {/* Featured image */}
              <div className="relative">
                {/* Card effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-sm opacity-75"></div>
                <div className="relative bg-black rounded-2xl overflow-hidden border border-indigo-700/50 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-black/20 z-10"></div>
                  
                  <img
                    className="w-full"
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                    alt="People collaborating"
                  />
                  
                  {/* Video play button */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <button className="group flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-primary to-indigo-600 shadow-lg text-white focus:outline-none transform transition duration-300 hover:scale-110 hover:shadow-indigo-500/50">
                      <svg className="h-6 w-6 ml-1 transition duration-300 group-hover:scale-125" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Card overlay details */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/20">
                      <h3 className="text-white font-bold">Interactive Learning Experience</h3>
                      <p className="text-white/80 text-sm mt-1">See how SkillSaga transforms traditional learning</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-10 -right-10 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center shadow-lg text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-medium text-sm">Enterprise Security</p>
                    <p className="text-white/70 text-xs">ISO 27001 Certified</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center shadow-lg text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-medium text-sm">Lightning Fast</p>
                    <p className="text-white/70 text-xs">AI-Powered Learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 items-center flex-col">
          <span className="text-indigo-200 text-sm mb-2">Scroll to explore</span>
          <ChevronDownIcon className="h-6 w-6 text-indigo-200 animate-bounce" />
        </div>
      </div>
    </div>
  );
} 