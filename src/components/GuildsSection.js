import React, { useState } from 'react';
import { UserGroupIcon, UsersIcon, StarIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const guilds = [
  {
    name: 'Coders Guild',
    description: 'For passionate programmers who love solving problems with code. Collaborate on projects, share knowledge, and grow your engineering skills.',
    members: '2,500+',
    activeProjects: 38,
    skillLevel: 'All Levels',
    primaryColor: 'from-blue-500 to-indigo-600',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',
  },
  {
    name: 'Designers Guild',
    description: 'For creative minds that shape user experiences and interfaces. Learn design principles, review each other\'s work, and build a stunning portfolio.',
    members: '1,800+',
    activeProjects: 24,
    skillLevel: 'Beginner to Advanced',
    primaryColor: 'from-purple-500 to-fuchsia-600',
    lightColor: 'bg-purple-50',
    textColor: 'text-purple-600',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'Data Scientists Guild',
    description: 'For analytical thinkers who extract insights from data. Master statistical analysis, machine learning, and data visualization techniques.',
    members: '1,200+',
    activeProjects: 15,
    skillLevel: 'Intermediate & Advanced',
    primaryColor: 'from-emerald-500 to-teal-600',
    lightColor: 'bg-emerald-50',
    textColor: 'text-emerald-600',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  },
  {
    name: 'Cloud Architects Guild',
    description: 'For builders of scalable, resilient infrastructure. Learn cloud platforms, DevOps practices, and modern infrastructure as code techniques.',
    members: '950+',
    activeProjects: 12,
    skillLevel: 'Intermediate & Advanced',
    primaryColor: 'from-amber-500 to-orange-600',
    lightColor: 'bg-amber-50',
    textColor: 'text-amber-600',
    image: 'https://images.unsplash.com/photo-1638742385167-96fc60e12f59?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  },
];

export default function GuildsSection() {
  const [activeGuild, setActiveGuild] = useState(null);
  
  return (
    <div id="guilds" className="bg-gradient-to-b from-gray-50 to-white py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute -left-64 -top-64 w-96 h-96 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute -right-64 -bottom-64 w-96 h-96 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-full opacity-70 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-500/10 to-blue-500/10 text-indigo-600 mb-6">
            <UserGroupIcon className="h-4 w-4 mr-2 text-secondary" />
            <span>Join a Community</span>
          </div>
          
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Learn and Grow with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">Guilds</span>
          </h2>
          
          <p className="mt-4 text-xl text-gray-500 leading-relaxed">
            Collaborate with peers, work on team projects, and accelerate your learning journey
            in specialized communities led by industry experts.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {guilds.map((guild) => (
            <div
              key={guild.name}
              className="group relative"
              onMouseEnter={() => setActiveGuild(guild.name)}
              onMouseLeave={() => setActiveGuild(null)}
            >
              <div 
                className={`bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden h-full border border-gray-100 transform ${activeGuild === guild.name ? 'scale-[1.02]' : 'scale-100'}`}
              >
                {/* Card header with gradient and image */}
                <div className="relative">
                  <div className={`h-2 w-full bg-gradient-to-r ${guild.primaryColor}`}></div>
                  <div className="relative h-48">
                    <img
                      src={guild.image}
                      alt={guild.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80"></div>
                    
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                      <h3 className="text-xl font-bold mb-1">{guild.name}</h3>
                      <div className="flex items-center text-xs text-white/80 space-x-3">
                        <div className="flex items-center">
                          <UsersIcon className="h-3.5 w-3.5 mr-1" />
                          <span>{guild.members} members</span>
                        </div>
                        <div className="flex items-center">
                          <svg className="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                          <span>{guild.activeProjects} projects</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Card body */}
                <div className="p-6">
                  <div className={`${guild.lightColor} ${guild.textColor} text-xs font-medium inline-block py-1 px-2 rounded-full mb-3`}>
                    {guild.skillLevel}
                  </div>
                  
                  <p className="text-gray-600 text-sm">{guild.description}</p>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <button
                      type="button"
                      className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${guild.lightColor} ${guild.textColor} hover:bg-opacity-80`}
                    >
                      Learn More
                    </button>
                    
                    <button
                      type="button"
                      className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg text-white shadow-sm hover:shadow-md transition-all duration-200 bg-gradient-to-r ${guild.primaryColor}`}
                    >
                      Join Guild
                      <ArrowRightIcon className="ml-2 -mr-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* 3D hover effect with gradient backdrop */}
              <div 
                className={`absolute -inset-1 bg-gradient-to-r ${guild.primaryColor} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} 
                style={{ zIndex: -1 }}
              ></div>
            </div>
          ))}
        </div>
        
        {/* Stats section */}
        <div className="mt-20 lg:mt-24">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="rounded-2xl bg-white shadow-xl overflow-hidden">
                  <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
                    {[
                      { label: 'Active Guilds', value: '20+', icon: UserGroupIcon, color: 'text-indigo-500' },
                      { label: 'Total Members', value: '25,000+', icon: UsersIcon, color: 'text-blue-500' },
                      { label: 'Completed Projects', value: '1,240+', icon: StarIcon, color: 'text-emerald-500' },
                      { label: 'Member Satisfaction', value: '98%', icon: StarIcon, color: 'text-amber-500' },
                    ].map((stat, index) => (
                      <div key={index} className="p-6 md:p-8 flex flex-col items-center text-center">
                        <div className={`${stat.color} mb-3`}>
                          <stat.icon className="h-7 w-7" />
                        </div>
                        <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                        <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA banner */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900">Ready to join a guild?</h3>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500">
            Get started today and connect with like-minded learners in your field.
          </p>
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-primary to-indigo-600 hover:from-indigo-700 hover:to-indigo-600 transition-all duration-200 hover:shadow-lg"
            >
              Browse All Guilds
              <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 