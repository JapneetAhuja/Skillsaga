import React, { useState } from 'react';

const topUsers = [
  { 
    rank: 1, 
    name: 'Alex Johnson', 
    level: 45, 
    xp: 24850, 
    guild: 'Coders', 
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    streak: 28,
    badges: ['🏆', '⚡', '🔥', '🚀']
  },
  { 
    rank: 2, 
    name: 'Sarah Chen', 
    level: 42, 
    xp: 23100, 
    guild: 'Data Scientists', 
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    streak: 22,
    badges: ['🚀', '⚡', '🌟']
  },
  { 
    rank: 3, 
    name: 'Miguel Rivera', 
    level: 41, 
    xp: 22750, 
    guild: 'Designers', 
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    streak: 19,
    badges: ['🌟', '🏆', '🎯']
  },
  { 
    rank: 4, 
    name: 'Emma Wilson', 
    level: 39, 
    xp: 21200, 
    guild: 'Coders', 
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    streak: 14,
    badges: ['🎯', '📚']
  },
  { 
    rank: 5, 
    name: 'Raj Patel', 
    level: 38, 
    xp: 20950, 
    guild: 'Data Scientists', 
    avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
    streak: 12,
    badges: ['📚', '⚡']
  },
];

export default function LeaderboardSection() {
  const [activeFilter, setActiveFilter] = useState('Weekly');
  
  return (
    <div id="leaderboard" className="bg-gradient-to-b from-gray-50 to-white py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-gray-100 to-transparent"></div>
      <div className="absolute -left-32 top-1/3 w-64 h-64 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute -right-32 bottom-1/3 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-50 text-indigo-600 mb-6">
            <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a4 4 0 00-4-4H8.8a4 4 0 00-4 4v12h14.2a4 4 0 004-4V8a4 4 0 00-4-4h-.2a4 4 0 00-4 4v0z" />
            </svg>
            <span>Challenge Yourself</span>
          </div>
          
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">Leaderboard</span> Champions
          </h2>
          
          <p className="mt-4 text-xl text-gray-500 leading-relaxed">
            Compete with other learners, earn badges through consistent practice, and rise to the top of our global rankings.
          </p>
        </div>
        
        <div className="mt-12">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
            <div className="px-6 py-5 flex flex-col sm:flex-row sm:justify-between sm:items-center bg-gradient-to-r from-slate-900 to-indigo-900 text-white">
              <div>
                <h3 className="text-lg md:text-xl font-bold flex items-center">
                  Global Leaderboard
                  <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-200 text-indigo-800">
                    {activeFilter}
                  </span>
                </h3>
                <p className="mt-1 text-sm text-indigo-200 max-w-2xl">
                  Rankings based on XP earned, streak days, and achievements completed
                </p>
              </div>
              
              <div className="flex space-x-2 mt-4 sm:mt-0">
                {['Weekly', 'Monthly', 'All Time'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      activeFilter === filter
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-white/10 text-gray-200 hover:bg-white/20'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              {/* Top 3 Winners Podium for larger screens */}
              <div className="hidden lg:flex justify-center items-end py-12 px-8 bg-gradient-to-b from-slate-100 to-white border-b border-gray-200">
                {topUsers.slice(0, 3).map((user, index) => {
                  const position = [1, 0, 2][index]; // Center, Left, Right
                  const height = ['h-24', 'h-16', 'h-12'][index]; // Tallest, Shortest, Medium
                  
                  return (
                    <div 
                      key={user.rank} 
                      className={`flex flex-col items-center mx-8 ${position === 0 ? 'order-2 -mt-8' : position === 1 ? 'order-1' : 'order-3'}`}
                    >
                      <div className="relative">
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-full p-1.5">
                          {user.rank === 1 ? (
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-white font-bold">1</span>
                          ) : user.rank === 2 ? (
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-300 text-white font-bold">2</span>
                          ) : (
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-600 text-white font-bold">3</span>
                          )}
                        </div>
                        <img 
                          src={user.avatar} 
                          alt={user.name} 
                          className={`h-20 w-20 rounded-full border-4 ${
                            user.rank === 1 
                              ? 'border-yellow-400 shadow-yellow-300/50' 
                              : user.rank === 2 
                              ? 'border-gray-300 shadow-gray-300/50' 
                              : 'border-amber-600 shadow-amber-600/50'
                          } shadow-lg`}
                        />
                        <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-md">
                          <div className={`flex items-center justify-center h-6 w-6 rounded-full ${
                            user.rank === 1 ? 'bg-yellow-100 text-yellow-600' : 
                            user.rank === 2 ? 'bg-gray-100 text-gray-600' : 'bg-amber-100 text-amber-600'
                          }`}>
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      <div className={`${height} w-24 mt-4 rounded-t-lg flex items-center justify-center ${
                        user.rank === 1 
                          ? 'bg-gradient-to-t from-yellow-500 to-yellow-300' 
                          : user.rank === 2 
                          ? 'bg-gradient-to-t from-gray-400 to-gray-300'
                          : 'bg-gradient-to-t from-amber-700 to-amber-500'
                      }`}>
                        <div className="text-center text-white">
                          <p className="font-bold truncate max-w-[80px]">{user.name.split(' ')[0]}</p>
                          <p className="text-xs">{user.xp.toLocaleString()} XP</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Leaderboard Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr className="bg-gray-50">
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-12">Rank</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Guild</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center">Level</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">Streak</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">XP</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">Badges</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {topUsers.map((user) => (
                      <tr key={user.rank} className={`hover:bg-gray-50 transition-colors duration-150 ${
                        user.rank <= 3 ? 'bg-opacity-50' : ''
                      }`}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center justify-center">
                            {user.rank === 1 ? (
                              <span className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-yellow-400 text-white font-bold shadow-sm">
                                {user.rank}
                              </span>
                            ) : user.rank === 2 ? (
                              <span className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-gray-300 text-white font-bold shadow-sm">
                                {user.rank}
                              </span>
                            ) : user.rank === 3 ? (
                              <span className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-amber-600 text-white font-bold shadow-sm">
                                {user.rank}
                              </span>
                            ) : (
                              <span className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 font-medium">
                                {user.rank}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 relative">
                              <img className="h-10 w-10 rounded-full object-cover ring-2 ring-white" src={user.avatar} alt="" />
                              {user.rank <= 3 && (
                                <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-white p-0.5 shadow-sm">
                                  <div className={`h-full w-full rounded-full ${
                                    user.rank === 1 ? 'bg-yellow-400' : 
                                    user.rank === 2 ? 'bg-gray-300' : 'bg-amber-600'
                                  } flex items-center justify-center text-white`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                  </div>
                                </div>
                              )}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-bold text-gray-900">{user.name}</div>
                              <div className="flex items-center mt-1">
                                <div className="w-full bg-gray-200 rounded-full h-1.5 max-w-[100px]">
                                  <div className="bg-primary h-1.5 rounded-full" style={{ width: `${user.level * 2}%` }}></div>
                                </div>
                                <span className="text-xs text-gray-500 ml-2">{user.level * 2}%</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                          <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            user.guild === 'Coders' ? 'bg-blue-100 text-blue-800' :
                            user.guild === 'Designers' ? 'bg-purple-100 text-purple-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {user.guild}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <div className="text-sm font-medium text-gray-900 inline-flex items-center bg-gray-100 px-2.5 py-0.5 rounded-full">
                            <span>{user.level}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                          <div className="inline-flex items-center text-sm text-gray-500 bg-orange-50 px-2 py-1 rounded">
                            <svg className="h-4 w-4 text-orange-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <span>{user.streak} days</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="font-medium text-gray-900 flex items-center">
                            <svg className="h-4 w-4 text-indigo-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            {user.xp.toLocaleString()}
                            <span className="ml-1 text-xs text-gray-500">XP</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden lg:table-cell">
                          <div className="flex space-x-1">
                            {user.badges.map((badge, idx) => (
                              <span key={idx} className="text-base" title={`Achievement Badge ${idx+1}`}>
                                {badge}
                              </span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-center">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-indigo-700 focus:outline-none transition-colors duration-200"
                >
                  View Full Leaderboard
                  <svg className="ml-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-12 text-center">
            <div className="inline-flex rounded-lg bg-indigo-50 p-8 max-w-3xl">
              <div className="flex flex-col items-center text-center">
                <svg className="h-12 w-12 text-indigo-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <h3 className="text-xl font-bold text-gray-900">Ready to Climb the Leaderboard?</h3>
                <p className="mt-2 text-gray-500 max-w-md">
                  Complete quests, maintain your daily streak, and participate in guild challenges to earn XP and badges.
                </p>
                <div className="mt-6">
                  <button
                    type="button"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-primary to-indigo-600 hover:from-indigo-700 hover:to-indigo-600 focus:outline-none transition duration-200"
                  >
                    Start Your Journey
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 