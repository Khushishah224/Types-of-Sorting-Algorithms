/**
 * Quick Sort Algorithm
 * 
 * Time Complexity:
 * - Best: O(n log n)
 * - Average: O(n log n)
 * - Worst: O(n²) - when the array is already sorted or nearly sorted
 * 
 * Space Complexity: O(log n)
 * 
 * @param {Array} array - The array to be sorted
 * @param {Function} updateArray - Callback function to update the array state
 * @param {Function} markActive - Callback function to mark elements as active
 * @param {Function} markCompared - Callback function to mark elements being compared
 * @param {Function} markSorted - Callback function to mark elements as sorted
 * @param {Number} speed - Animation speed (delay between operations)
 */
export const quickSort = async (
  array,
  updateArray,
  markActive,
  markCompared,
  markSorted,
  speed
) => {
  // Create a copy of the array to avoid mutation
  const arrayCopy = [...array];
  
  // Function to create a delay
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  const delayTime = 101 - speed; // Convert speed (1-100) to delay (100-1)
  
  // Keep track of sorted indices
  const sortedIndices = [];
  
  // Main quick sort function
  const quickSortHelper = async (arr, low, high) => {
    if (low < high) {
      // Partition the array and get the pivot index
      const pivotIndex = await partition(arr, low, high);
      
      // Mark the pivot as sorted
      sortedIndices.push(pivotIndex);
      markSorted([...sortedIndices]);
      await delay(delayTime);
      
      // Recursively sort elements before and after the pivot
      await quickSortHelper(arr, low, pivotIndex - 1);
      await quickSortHelper(arr, pivotIndex + 1, high);
    } else if (low === high) {
      // Single element is always sorted
      sortedIndices.push(low);
      markSorted([...sortedIndices]);
      await delay(delayTime);
    }
  };
  
  // Function to partition the array
  const partition = async (arr, low, high) => {
    // Choose the rightmost element as pivot
    const pivot = arr[high];
    
    // Mark the pivot
    markActive([high]);
    await delay(delayTime);
    
    // Index of smaller element
    let i = low - 1;
    
    // Compare each element with pivot
    for (let j = low; j < high; j++) {
      // Mark elements being compared
      markCompared([j, high]);
      await delay(delayTime);
      
      // If current element is smaller than the pivot
      if (arr[j] < pivot) {
        i++;
        
        // Swap arr[i] and arr[j]
        [arr[i], arr[j]] = [arr[j], arr[i]];
        
        // Mark elements being swapped
        markActive([i, j]);
        updateArray([...arr]);
        await delay(delayTime);
        
        // Clear active marking
        markActive([]);
      }
      
      // Clear comparison marking
      markCompared([]);
    }
    
    // Swap arr[i+1] and arr[high] (put the pivot in its correct position)
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    
    // Mark elements being swapped
    markActive([i + 1, high]);
    updateArray([...arr]);
    await delay(delayTime);
    
    // Clear active marking
    markActive([]);
    
    return i + 1; // Return the pivot index
  };
  
  // Start the quick sort process
  await quickSortHelper(arrayCopy, 0, arrayCopy.length - 1);
  
  // Ensure all elements are marked as sorted
  markSorted([...Array(arrayCopy.length).keys()]);
  
  return arrayCopy;
};

export const quickSortInfo = {
  name: "Quick Sort",
  description: "Quick sort is an efficient sorting algorithm that uses a divide-and-conquer strategy. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot.",
  timeComplexity: {
    best: "O(n log n)",
    average: "O(n log n)",
    worst: "O(n²)"
  },
  spaceComplexity: "O(log n)",
  pseudocode: [
    "procedure quickSort(array, low, high)",
    "  if low < high then",
    "    pivotIndex ← partition(array, low, high)",
    "    quickSort(array, low, pivotIndex - 1)",
    "    quickSort(array, pivotIndex + 1, high)",
    "  end if",
    "end procedure",
    "",
    "procedure partition(array, low, high)",
    "  pivot ← array[high]",
    "  i ← low - 1",
    "  for j ← low to high - 1 do",
    "    if array[j] < pivot then",
    "      i ← i + 1",
    "      swap(array[i], array[j])",
    "    end if",
    "  end for",
    "  swap(array[i + 1], array[high])",
    "  return i + 1",
    "end procedure"
  ]
}; 