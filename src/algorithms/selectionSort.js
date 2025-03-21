/**
 * Selection Sort Algorithm
 * 
 * Time Complexity:
 * - Best: O(n²)
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
export const selectionSort = async (
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
  
  for (let i = 0; i < n - 1; i++) {
    // Assume the current position has the minimum value
    let minIndex = i;
    
    // Mark the current position
    markActive([i]);
    await delay(delayTime);
    
    // Find the minimum element in the unsorted part of the array
    for (let j = i + 1; j < n; j++) {
      // Mark elements being compared
      markCompared([minIndex, j]);
      await delay(delayTime);
      
      if (arrayCopy[j] < arrayCopy[minIndex]) {
        // Clear previous minimum marking
        markCompared([]);
        
        // Update minimum index
        minIndex = j;
        
        // Mark the new minimum
        markCompared([minIndex]);
        await delay(delayTime);
      }
    }
    
    // Clear comparison highlights
    markCompared([]);
    
    // If the minimum element is not at the current position, swap them
    if (minIndex !== i) {
      // Mark elements being swapped
      markActive([i, minIndex]);
      await delay(delayTime);
      
      // Swap elements
      [arrayCopy[i], arrayCopy[minIndex]] = [arrayCopy[minIndex], arrayCopy[i]];
      
      // Update array in the UI
      updateArray([...arrayCopy]);
      await delay(delayTime);
    }
    
    // Mark the current position as sorted
    markSorted([...Array(i + 1).keys()]);
    await delay(delayTime);
  }
  
  // Mark all elements as sorted
  markSorted([...Array(n).keys()]);
  
  return arrayCopy;
};

export const selectionSortInfo = {
  name: "Selection Sort",
  description: `Selection Sort is a simple comparison-based sorting algorithm. The algorithm divides the input 
  list into two parts: a sorted sublist of items which is built up from left to right, and a sublist of the 
  remaining unsorted items. Initially, the sorted sublist is empty and the unsorted sublist is the entire 
  input list. The algorithm proceeds by finding the smallest element in the unsorted sublist, swapping it with 
  the leftmost unsorted element, and moving the sublist boundaries one element to the right.`,
  timeComplexity: {
    best: "O(n²)",
    average: "O(n²)",
    worst: "O(n²)"
  },
  spaceComplexity: "O(1)",
  pseudocode: [
    "procedure selectionSort(array)",
    "  n ← length(array)",
    "  for i ← 0 to n-2 do",
    "    minIndex ← i",
    "    for j ← i+1 to n-1 do",
    "      if array[j] < array[minIndex] then",
    "        minIndex ← j",
    "      end if",
    "    end for",
    "    if minIndex ≠ i then",
    "      swap(array[i], array[minIndex])",
    "    end if",
    "  end for",
    "end procedure"
  ]
}; 