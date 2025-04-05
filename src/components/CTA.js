import React from 'react';
import { ArrowRightIcon, CheckIcon } from '@heroicons/react/24/outline';

export default function CTA() {
  return (
    <div className="relative">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80" 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-indigo-700/90 backdrop-blur-sm"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:30px_30px]"></div>
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-indigo-500/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <div className="max-w-md mx-auto lg:max-w-lg lg:mx-0">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white mb-6 border border-white/20">
                <span className="flex h-2 w-2 relative mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>
                <span className="text-sm font-medium tracking-wide">Limited Time Offer</span>
              </div>
              
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                <span className="block">Ready to start your learning adventure?</span>
                <span className="block mt-2 text-indigo-200 text-lg sm:text-xl font-medium">
                  Join thousands of learners transforming their skills today.
                </span>
              </h2>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <CheckIcon className="h-6 w-6 text-secondary" aria-hidden="true" />
                  </div>
                  <p className="ml-3 text-base text-indigo-100">Team-based collaboration to accelerate learning</p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <CheckIcon className="h-6 w-6 text-secondary" aria-hidden="true" />
                  </div>
                  <p className="ml-3 text-base text-indigo-100">Earn XP and unlock achievements as you progress</p>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <CheckIcon className="h-6 w-6 text-secondary" aria-hidden="true" />
                  </div>
                  <p className="ml-3 text-base text-indigo-100">AI-powered personalization for your learning journey</p>
                </div>
              </div>
              
              <div className="mt-10">
                <a
                  href="#home"
                  className="w-full inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-indigo-600 bg-white shadow-md hover:bg-gray-50 transform transition-all duration-200 hover:shadow-lg"
                >
                  <span>Get Started Free</span>
                  <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" />
                </a>
              </div>
              
              <p className="mt-8 text-sm text-indigo-200">
                By signing up, you agree to our{' '}
                <a href="#" className="font-medium text-white hover:text-indigo-100 underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="font-medium text-white hover:text-indigo-100 underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
          
          <div className="mt-16 lg:mt-0 lg:col-span-6">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl">
              <div className="flex items-center mb-8">
                <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-secondary text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-white">Success stories</h3>
                  <p className="text-indigo-200">See what users are saying about SkillSaga</p>
                </div>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    quote: "SkillSaga transformed how our team learns together. The gamification elements keep everyone engaged and motivated.",
                    author: "Sarah Johnson",
                    title: "Engineering Manager at TechCorp",
                    avatar: "https://randomuser.me/api/portraits/women/4.jpg"
                  },
                  {
                    quote: "I've tried many learning platforms, but none kept me motivated like SkillSaga. The guild system makes it social and fun.",
                    author: "Michael Chen",
                    title: "Frontend Developer",
                    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
                  }
                ].map((testimonial, index) => (
                  <div key={index} className="bg-white/5 p-4 rounded-lg">
                    <p className="text-sm text-indigo-100 italic">"{testimonial.quote}"</p>
                    <div className="mt-3 flex items-center">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author}
                        className="h-8 w-8 rounded-full"
                      />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-white">{testimonial.author}</p>
                        <p className="text-xs text-indigo-300">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="flex -space-x-1 overflow-hidden">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <img
                          key={i}
                          className="inline-block h-6 w-6 rounded-full ring-2 ring-indigo-900"
                          src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${10 + i}.jpg`}
                          alt=""
                        />
                      ))}
                    </div>
                    <p className="ml-3 text-sm text-indigo-200">
                      <span className="font-semibold text-white">10,000+</span> active learners
                    </p>
                  </div>
                  <div className="flex items-center text-amber-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 