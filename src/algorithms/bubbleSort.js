/**
 * Bubble Sort Algorithm
 * 
 * Time Complexity:
 * - Best: O(n) - when array is already sorted
 * - Average: O(n²)
 * - Worst: O(n²)
 * 
 * Space Complexity: O(1)
 * 
 * @param {Array} array - The array to be sorted
 * @param {Function} updateArray - Callback function to update the array state
 * @param {Function} markActive - Callback function to mark elements as active
 * @param {Function} markCompared - Callback function to mark elements being compared
 * @param {Function} markSorted - Callback function to mark elements as sorted
 * @param {Number} speed - Animation speed (delay between operations)
 */
export const bubbleSort = async (
  array,
  updateArray,
  markActive,
  markCompared,
  markSorted,
  speed
) => {
  // Create a copy of the array to avoid mutation
  const arrayCopy = [...array];
  const n = arrayCopy.length;
  
  // Function to create a delay
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  const delayTime = 101 - speed; // Convert speed (1-100) to delay (100-1)
  
  let swapped;
  let lastSorted = n;
  
  do {
    swapped = false;
    for (let i = 0; i < lastSorted - 1; i++) {
      // Mark elements being compared
      markCompared([i, i + 1]);
      await delay(delayTime);
      
      if (arrayCopy[i] > arrayCopy[i + 1]) {
        // Mark elements being swapped
        markActive([i, i + 1]);
        await delay(delayTime);
        
        // Swap elements
        [arrayCopy[i], arrayCopy[i + 1]] = [arrayCopy[i + 1], arrayCopy[i]];
        swapped = true;
        
        // Update array in the UI
        updateArray([...arrayCopy]);
        await delay(delayTime);
      }
      
      // Clear comparison highlighting
      markCompared([]);
    }
    
    // Mark the last element as sorted
    lastSorted--;
    markSorted([lastSorted]);
    
  } while (swapped);
  
  // Mark all elements as sorted
  const sortedIndices = Array.from({ length: n }, (_, i) => i);
  markSorted(sortedIndices);
  
  return arrayCopy;
};

export const bubbleSortInfo = {
  name: "Bubble Sort",
  description: `Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, 
  compares adjacent elements and swaps them if they are in the wrong order. The pass through the list 
  is repeated until the list is sorted. The algorithm gets its name because smaller elements "bubble" 
  to the top of the list.`,
  timeComplexity: {
    best: "O(n)",
    average: "O(n²)",
    worst: "O(n²)"
  },
  spaceComplexity: "O(1)",
  pseudocode: [
    "procedure bubbleSort(array)",
    "  n ← length(array)",
    "  repeat",
    "    swapped ← false",
    "    for i ← 0 to n-2 do",
    "      if array[i] > array[i+1] then",
    "        swap(array[i], array[i+1])",
    "        swapped ← true",
    "      end if",
    "    end for",
    "    n ← n-1",
    "  until not swapped",
    "end procedure"
  ]
}; 