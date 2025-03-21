/**
 * Merge Sort Algorithm
 * 
 * Time Complexity:
 * - Best: O(n log n)
 * - Average: O(n log n)
 * - Worst: O(n log n)
 * 
 * Space Complexity: O(n)
 * 
 * @param {Array} array - The array to be sorted
 * @param {Function} updateArray - Callback function to update the array state
 * @param {Function} markActive - Callback function to mark elements as active
 * @param {Function} markCompared - Callback function to mark elements being compared
 * @param {Function} markSorted - Callback function to mark elements as sorted
 * @param {Number} speed - Animation speed (delay between operations)
 */
export const mergeSort = async (
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
  
  // The sorted indices list
  const sortedIndices = [];
  
  // Main merge sort function
  const mergeSortHelper = async (arr, start, end) => {
    // Base case: array with 1 element is already sorted
    if (start >= end) {
      return;
    }
    
    // Find middle point
    const mid = Math.floor((start + end) / 2);
    
    // Sort first and second halves
    await mergeSortHelper(arr, start, mid);
    await mergeSortHelper(arr, mid + 1, end);
    
    // Merge the sorted halves
    await merge(arr, start, mid, end);
  };
  
  // Function to merge two sorted subarrays
  const merge = async (arr, start, mid, end) => {
    // Create temporary arrays
    const leftArray = arr.slice(start, mid + 1);
    const rightArray = arr.slice(mid + 1, end + 1);
    
    let i = 0; // Index for left subarray
    let j = 0; // Index for right subarray
    let k = start; // Index for merged array
    
    // Merge the two arrays
    while (i < leftArray.length && j < rightArray.length) {
      // Mark elements being compared
      markCompared([start + i, mid + 1 + j]);
      await delay(delayTime);
      
      if (leftArray[i] <= rightArray[j]) {
        // Mark element being placed
        markActive([k]);
        
        arr[k] = leftArray[i];
        i++;
      } else {
        // Mark element being placed
        markActive([k]);
        
        arr[k] = rightArray[j];
        j++;
      }
      
      // Update the array in the UI
      updateArray([...arr]);
      await delay(delayTime);
      
      // Clear active/compared markings
      markActive([]);
      markCompared([]);
      
      k++;
    }
    
    // Copy remaining elements of left array, if any
    while (i < leftArray.length) {
      markActive([k]);
      
      arr[k] = leftArray[i];
      i++;
      k++;
      
      updateArray([...arr]);
      await delay(delayTime);
      
      markActive([]);
    }
    
    // Copy remaining elements of right array, if any
    while (j < rightArray.length) {
      markActive([k]);
      
      arr[k] = rightArray[j];
      j++;
      k++;
      
      updateArray([...arr]);
      await delay(delayTime);
      
      markActive([]);
    }
    
    // Mark the merged segment as sorted
    for (let idx = start; idx <= end; idx++) {
      if (!sortedIndices.includes(idx)) {
        sortedIndices.push(idx);
      }
    }
    
    markSorted([...sortedIndices]);
    await delay(delayTime);
  };
  
  // Start the merge sort process
  await mergeSortHelper(arrayCopy, 0, arrayCopy.length - 1);
  
  // Mark all elements as sorted
  markSorted([...Array(arrayCopy.length).keys()]);
  
  return arrayCopy;
};

export const mergeSortInfo = {
  name: "Merge Sort",
  description: "Merge sort is an efficient, stable sorting algorithm that makes use of the divide and conquer strategy. Conceptually, it divides the unsorted list into n sublists, each containing one element, then repeatedly merges sublists to produce new sorted sublists until there is only one sublist remaining.",
  timeComplexity: {
    best: "O(n log n)",
    average: "O(n log n)",
    worst: "O(n log n)"
  },
  spaceComplexity: "O(n)",
  pseudocode: [
    "procedure mergeSort(array, start, end)",
    "  if start < end then",
    "    middle ← floor((start + end) / 2)",
    "    mergeSort(array, start, middle)",
    "    mergeSort(array, middle + 1, end)",
    "    merge(array, start, middle, end)",
    "  end if",
    "end procedure",
    "",
    "procedure merge(array, start, middle, end)",
    "  create leftArray and rightArray",
    "  copy array[start...middle] to leftArray",
    "  copy array[middle+1...end] to rightArray",
    "  i ← 0, j ← 0, k ← start",
    "  while i < leftArray.length and j < rightArray.length do",
    "    if leftArray[i] ≤ rightArray[j] then",
    "      array[k] ← leftArray[i]",
    "      i ← i+1",
    "    else",
    "      array[k] ← rightArray[j]",
    "      j ← j+1",
    "    end if",
    "    k ← k+1",
    "  end while",
    "  copy remaining elements of leftArray and rightArray to array",
    "end procedure"
  ]
}; 