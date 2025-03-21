import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import { sortingAlgorithms } from './algorithms'

function App() {
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [sortingAlgorithm, setSortingAlgorithm] = useState('bubble');
  const [arraySize, setArraySize] = useState(50);
  const [speed, setSpeed] = useState(50);
  const [activeIndices, setActiveIndices] = useState([]);
  const [comparedIndices, setComparedIndices] = useState([]);
  const [sortedIndices, setSortedIndices] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [comparisonCount, setComparisonCount] = useState(0);
  const [swapCount, setSwapCount] = useState(0);
  const [arrayAccessCount, setArrayAccessCount] = useState(0);
  const [currentStep, setCurrentStep] = useState(-1);

  // Generate random array
  const generateArray = () => {
    const newArray = [];
    for (let i = 0; i < arraySize; i++) {
      newArray.push(Math.floor(Math.random() * 500) + 10);
    }
    setArray(newArray);
    setSortedIndices([]);
    setActiveIndices([]);
    setComparedIndices([]);
    setComparisonCount(0);
    setSwapCount(0);
    setArrayAccessCount(0);
  };

  // Initialize array on component mount and when array size changes
  useEffect(() => {
    generateArray();
  }, [arraySize]);

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Start sorting visualization
  const startSorting = async () => {
    setSorting(true);
    setActiveIndices([]);
    setComparedIndices([]);
    setSortedIndices([]);
    setComparisonCount(0);
    setSwapCount(0);
    setArrayAccessCount(0);
    setCurrentStep(-1);
    
    const selectedAlgorithm = sortingAlgorithms[sortingAlgorithm];
    
    if (selectedAlgorithm.sort) {
      try {
        await selectedAlgorithm.sort(
          array,
          (updatedArray) => {
            setArray([...updatedArray]);
            setArrayAccessCount(prev => prev + 1);
          },
          (indices) => {
            setActiveIndices(indices);
            if (indices.length === 2) setSwapCount(prev => prev + 1);
            // Update current step based on operation
            if (indices.length > 0) {
              const pseudocodeSteps = selectedAlgorithm.info.pseudocode;
              const step = sortingAlgorithm === 'bubble' ? 6 : 
                          sortingAlgorithm === 'selection' ? 10 :
                          sortingAlgorithm === 'insertion' ? 6 :
                          sortingAlgorithm === 'merge' ? 16 :
                          sortingAlgorithm === 'quick' ? 14 :
                          sortingAlgorithm === 'heap' ? 9 : -1;
              setCurrentStep(step);
            } else {
              setCurrentStep(-1);
            }
          },
          (indices) => {
            setComparedIndices(indices);
            if (indices.length === 2) setComparisonCount(prev => prev + 1);
            // Update current step based on operation
            if (indices.length > 0) {
              const pseudocodeSteps = selectedAlgorithm.info.pseudocode;
              const step = sortingAlgorithm === 'bubble' ? 5 : 
                          sortingAlgorithm === 'selection' ? 5 :
                          sortingAlgorithm === 'insertion' ? 5 :
                          sortingAlgorithm === 'merge' ? 15 :
                          sortingAlgorithm === 'quick' ? 12 :
                          sortingAlgorithm === 'heap' ? 20 : -1;
              setCurrentStep(step);
            } else {
              setCurrentStep(-1);
            }
          },
          (indices) => {
            setSortedIndices(indices);
            if (indices.length > 0 && indices.length === array.length) {
              setCurrentStep(-1); // Reset step when sorting is complete
            }
          },
          speed
        );
      } catch (error) {
        console.error('Error during sorting:', error);
      }
    } else {
      // If algorithm not implemented, show temporary message
      alert('This algorithm is not implemented yet!');
    }
    
    setSorting(false);
    setCurrentStep(-1);
  };

  // Get current algorithm info
  const currentAlgorithmInfo = sortingAlgorithms[sortingAlgorithm].info;

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-slate-50 text-gray-800'} transition-colors duration-300`}>
      {/* Header */}
      <header className={`sticky top-0 z-10 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md transition-colors duration-300`}>
        <div className="w-full px-4 md:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Link 
              to="/" 
              className={`flex items-center mr-6 px-3 py-1.5 rounded-md ${
                darkMode 
                  ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              } transition-colors duration-300`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back
            </Link>
            <h1 className="text-2xl font-bold">
              Types of<span className="text-blue-500"> Sorting Algorithms </span> 
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-100 text-gray-700'} transition-colors duration-300`}
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
      </header>

      <main className="w-full px-4 md:px-6 py-6">
        {/* Controls Section */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6 transition-colors duration-300`}>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            {/* Left side controls */}
            <div className="flex flex-wrap gap-2">
              <button 
                className={`px-4 py-2 rounded-md font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                  darkMode 
                    ? 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 text-white' 
                    : 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-400 text-white'
                } ${sorting ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={generateArray}
                disabled={sorting}
              >
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  New Array
                </span>
              </button>
              <button 
                className={`px-4 py-2 rounded-md font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                  darkMode 
                    ? 'bg-green-600 hover:bg-green-700 focus:ring-green-500 text-white' 
                    : 'bg-green-500 hover:bg-green-600 focus:ring-green-400 text-white'
                } ${sorting ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={startSorting}
                disabled={sorting}
              >
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Start
                </span>
              </button>
            </div>
            
            {/* Right side controls */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Algorithm</label>
                <div className="relative">
                  <select 
                    className={`w-full px-3 py-2 rounded-md appearance-none ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500' 
                        : 'bg-gray-100 border-gray-300 text-gray-800 focus:ring-blue-400'
                    } border focus:outline-none focus:ring-2 focus:ring-opacity-50 pr-10`}
                    value={sortingAlgorithm}
                    onChange={(e) => setSortingAlgorithm(e.target.value)}
                    disabled={sorting}
                  >
                    <option value="bubble">Bubble Sort</option>
                    <option value="selection">Selection Sort</option>
                    <option value="insertion">Insertion Sort</option>
                    <option value="merge">Merge Sort</option>
                    <option value="quick">Quick Sort</option>
                    <option value="heap">Heap Sort</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                    <svg className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Array Size: {arraySize}
                </label>
                <div className="flex items-center space-x-2">
                  <span className="text-xs">10</span>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={arraySize}
                    onChange={(e) => setArraySize(parseInt(e.target.value))}
                    disabled={sorting}
                    className={`w-full h-2 rounded-lg appearance-none cursor-pointer ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-200'
                    }`}
                  />
                  <span className="text-xs">100</span>
                </div>
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Speed: {speed}
                </label>
                <div className="flex items-center space-x-2">
                  <span className="text-xs">Slow</span>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={speed}
                    onChange={(e) => setSpeed(parseInt(e.target.value))}
                    disabled={sorting}
                    className={`w-full h-2 rounded-lg appearance-none cursor-pointer ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-200'
                    }`}
                  />
                  <span className="text-xs">Fast</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Color Legend */}
          <div className="mt-4 pt-4 border-t">
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Unsorted</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-500 rounded mr-2"></div>
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Comparing</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-500 rounded mr-2"></div>
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Swapping</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Sorted</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Visualization Section */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6 transition-colors duration-300`}>
          <div className="flex items-end justify-center h-64 md:h-96">
            {array.map((value, idx) => (
              <div
                key={idx}
                className={`mx-[1px] rounded-t-sm transition-all duration-300 ${
                  sortedIndices.includes(idx) 
                    ? 'bg-green-500' 
                    : activeIndices.includes(idx) 
                      ? 'bg-red-500' 
                      : comparedIndices.includes(idx) 
                        ? 'bg-yellow-500' 
                        : darkMode ? 'bg-blue-600' : 'bg-blue-500'
                }`}
                style={{
                  height: `${value / 5}%`,
                  width: `${100 / arraySize}%`,
                  minWidth: '2px',
                  transition: 'height 0.3s ease'
                }}
              ></div>
            ))}
          </div>
          
          {/* Array Statistics */}
          <div className={`flex justify-between mt-4 pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex items-center">
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Comparisons: <span className="font-medium">{comparisonCount}</span>
              </span>
            </div>
            <div className="flex items-center">
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Swaps: <span className="font-medium">{swapCount}</span>
              </span>
            </div>
            <div className="flex items-center">
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Array Access: <span className="font-medium">{arrayAccessCount}</span>
              </span>
            </div>
          </div>
        </div>
        
        {/* Algorithm Information & Pseudocode Combined Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Pseudocode Section - Left Side */}
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 transition-colors duration-300`}>
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              {currentAlgorithmInfo.name} Pseudocode
            </h2>
            
            <div className={`p-4 rounded-md font-mono text-sm max-h-[400px] overflow-y-auto
              scrollbar-thin ${darkMode ? 
                'scrollbar-thumb-gray-500 scrollbar-track-gray-800 bg-gray-700' : 
                'scrollbar-thumb-gray-400 scrollbar-track-gray-200 bg-gray-100'
              } 
              hover:scrollbar-thumb-gray-500 
              active:scrollbar-thumb-gray-400
              transition-colors duration-300`}>
              <pre>
                {currentAlgorithmInfo.pseudocode?.map((line, index) => (
                  <div 
                    key={index} 
                    className={`py-1 px-2 rounded ${
                      currentStep === index 
                        ? darkMode 
                          ? 'bg-blue-800 text-white' 
                          : 'bg-blue-200 text-blue-900' 
                        : ''
                    }`}
                  >
                    {line}
                  </div>
                ))}
              </pre>
            </div>
          </div>
          
          {/* Algorithm Information Section - Right Side */}
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 transition-colors duration-300`}>
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {currentAlgorithmInfo.name} Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Time Complexity
                </h3>
                <div className={`p-4 rounded-md ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="flex justify-between mb-1">
                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Best:</span>
                    <span className="font-mono">{currentAlgorithmInfo.timeComplexity.best}</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Average:</span>
                    <span className="font-mono">{currentAlgorithmInfo.timeComplexity.average}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Worst:</span>
                    <span className="font-mono">{currentAlgorithmInfo.timeComplexity.worst}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Space Complexity
                </h3>
                <div className={`p-4 rounded-md ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="flex justify-between">
                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Auxiliary Space:</span>
                    <span className="font-mono">{currentAlgorithmInfo.spaceComplexity}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="font-semibold mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Description
              </h3>
              <div className={`p-4 rounded-md ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {currentAlgorithmInfo.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className={`py-4 mt-8 ${darkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-500'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="w-full px-4 md:px-6 text-center text-sm">
          <p>Types of Sorting Algorithm | Design and Analysis of Algorithms Project</p>
        </div>
      </footer>
    </div>
  )
}

export default App
