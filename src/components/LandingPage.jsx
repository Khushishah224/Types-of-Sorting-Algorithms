import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'} transition-colors duration-300`}>
      {/* Hero Section */}
      <header className={`${darkMode ? 'bg-gradient-to-r from-blue-900 to-indigo-900' : 'bg-gradient-to-r from-blue-600 to-indigo-700'} text-white`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
              <span className="font-bold text-xl">Types of Sorting Algorithms</span>
            </div>
            
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors duration-200 focus:outline-none"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Visualize Types of Sorting Algorithms</h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl">Watch algorithms in action and understand how they work through interactive visualizations.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/visualizer" className={`${darkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-blue-700 hover:bg-blue-50'} font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300`}>
                Launch Visualizer
              </Link>
              {/* <a href="#features" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:bg-opacity-10 transition duration-300">
                Learn More
              </a> */}
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md transition-colors duration-300`}>
              <div className="text-blue-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Multiple Algorithms</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
                Explore and compare various sorting algorithms including Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, and Heap Sort.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md transition-colors duration-300`}>
              <div className="text-blue-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Interactive Visualization</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
                Watch the algorithms work in real time with color-coded elements that show comparisons, swaps, and sorted sections of the array.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md transition-colors duration-300`}>
              <div className="text-blue-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Performance Metrics</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
                Track real-time statistics like comparisons, swaps, and array accesses to understand algorithm efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-colors duration-300`}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-lg">1</span>
              </div>
              <h3 className="font-bold mb-2">Generate Array</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>Create a random array of your desired size</p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-lg">2</span>
              </div>
              <h3 className="font-bold mb-2">Select Algorithm</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>Choose from various sorting algorithms</p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-lg">3</span>
              </div>
              <h3 className="font-bold mb-2">Adjust Speed</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>Set visualization speed for better understanding</p>
            </div>
            
            {/* Step 4 */}
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-lg">4</span>
              </div>
              <h3 className="font-bold mb-2">Start Sorting</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>Watch and learn as the algorithm sorts the array</p>
            </div>
          </div>
        </div>
      </section>

      {/* Algorithm Cards */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Algorithms</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Bubble Sort */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden shadow-md transition-colors duration-300`}>
              <div className="bg-blue-500 h-2"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Bubble Sort</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 transition-colors duration-300`}>A simple comparison-based algorithm that repeatedly steps through the list.</p>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                  <p className="mb-1"><span className="font-bold">Time Complexity:</span> O(n²)</p>
                  <p><span className="font-bold">Space Complexity:</span> O(1)</p>
                </div>
              </div>
            </div>
            
            {/* Selection Sort */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden shadow-md transition-colors duration-300`}>
              <div className="bg-yellow-500 h-2"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Selection Sort</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 transition-colors duration-300`}>Divides the array into a sorted and unsorted part, finding the minimum element from the unsorted part.</p>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                  <p className="mb-1"><span className="font-bold">Time Complexity:</span> O(n²)</p>
                  <p><span className="font-bold">Space Complexity:</span> O(1)</p>
                </div>
              </div>
            </div>
            
            {/* Insertion Sort */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden shadow-md transition-colors duration-300`}>
              <div className="bg-pink-500 h-2"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Insertion Sort</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 transition-colors duration-300`}>Builds the sorted array one item at a time, efficient for small data sets.</p>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                  <p className="mb-1"><span className="font-bold">Time Complexity:</span> O(n²)</p>
                  <p><span className="font-bold">Space Complexity:</span> O(1)</p>
                </div>
              </div>
            </div>
            
            {/* Merge Sort */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden shadow-md transition-colors duration-300`}>
              <div className="bg-purple-500 h-2"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Merge Sort</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 transition-colors duration-300`}>A stable, divide-and-conquer algorithm that breaks down and merges lists.</p>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                  <p className="mb-1"><span className="font-bold">Time Complexity:</span> O(n log n)</p>
                  <p><span className="font-bold">Space Complexity:</span> O(n)</p>
                </div>
              </div>
            </div>
            
            {/* Quick Sort */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden shadow-md transition-colors duration-300`}>
              <div className="bg-green-500 h-2"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Quick Sort</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 transition-colors duration-300`}>An efficient divide-and-conquer algorithm using pivots to partition the array.</p>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                  <p className="mb-1"><span className="font-bold">Time Complexity:</span> O(n log n)</p>
                  <p><span className="font-bold">Space Complexity:</span> O(log n)</p>
                </div>
              </div>
            </div>
            
            {/* Heap Sort */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden shadow-md transition-colors duration-300`}>
              <div className="bg-red-500 h-2"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Heap Sort</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 transition-colors duration-300`}>Uses a binary heap data structure to build a max-heap and extract elements one by one.</p>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                  <p className="mb-1"><span className="font-bold">Time Complexity:</span> O(n log n)</p>
                  <p><span className="font-bold">Space Complexity:</span> O(1)</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/visualizer" className={`${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300`}>
              Start Visualizing
            </Link>
          </div>
        </div>
      </section>

      {/* Educational Value */}
      <section className={`py-16 ${darkMode ? 'bg-gradient-to-r from-indigo-900 to-purple-900' : 'bg-gradient-to-r from-indigo-700 to-purple-700'} text-white transition-colors duration-300`}>
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Learn Computer Science Fundamentals</h2>
            <p className="text-xl mb-8">
              Perfect for students, educators, and anyone curious about computer science. 
              Sorting visualizer helps you understand algorithm efficiency, comparison operations, 
              and fundamental concepts in a visual, interactive way.
            </p>
            <Link to="/visualizer" className={`inline-block ${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-indigo-700 hover:bg-indigo-50'} font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300`}>
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-6 mt-8 ${darkMode ? 'bg-gray-800 text-gray-300 border-gray-700' : 'bg-white text-gray-600 border-gray-200'} border-t transition-colors duration-300`}>
        <div className="w-full px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
                <span className="font-semibold text-lg">Types of Sorting Algorithms</span>
              </div>
              <p className="mt-2 text-sm">Visual learning tool for sorting algorithms</p>
            </div>
            
            <div className="text-center mb-4 md:mb-0">
              <h3 className="font-medium mb-2">Algorithms</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                <span>Bubble Sort</span>
                <span>Selection Sort</span>
                <span>Insertion Sort</span>
                <span>Merge Sort</span>
                <span>Quick Sort</span>
                <span>Heap Sort</span>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="font-medium mb-2">Project Info</h3>
              <p className="text-sm">Design and Analysis of Algorithms</p>
              <p className="text-sm mt-1">© {new Date().getFullYear()} DAA Project</p>
            </div>
          </div>
          
          <div className={`mt-6 pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} text-center text-xs opacity-70 flex justify-center items-center gap-2 transition-colors duration-300`}>
            <span>Made with</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span>by DAA Project Team</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage; 