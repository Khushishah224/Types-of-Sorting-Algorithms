/**
 * Heap Sort Algorithm
 * 
 * Time Complexity:
 * - Best: O(n log n)
 * - Average: O(n log n)
 * - Worst: O(n log n)
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
export const heapSort = async (
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
  
  // Keep track of sorted indices
  const sortedIndices = [];
  
  // Function to heapify a subtree rooted at index i
  const heapify = async (arr, heapSize, rootIndex) => {
    // Initialize largest as root
    let largest = rootIndex;
    
    // Calculate indices of left and right children
    const leftChild = 2 * rootIndex + 1;
    const rightChild = 2 * rootIndex + 2;
    
    // Mark the root node
    markActive([rootIndex]);
    await delay(delayTime);
    
    // If left child is larger than root
    if (leftChild < heapSize) {
      // Mark elements being compared
      markCompared([largest, leftChild]);
      await delay(delayTime);
      
      if (arr[leftChild] > arr[largest]) {
        largest = leftChild;
      }
      
      // Clear comparison marks
      markCompared([]);
    }
    
    // If right child is larger than the largest so far
    if (rightChild < heapSize) {
      // Mark elements being compared
      markCompared([largest, rightChild]);
      await delay(delayTime);
      
      if (arr[rightChild] > arr[largest]) {
        largest = rightChild;
      }
      
      // Clear comparison marks
      markCompared([]);
    }
    
    // If largest is not root, swap and heapify the affected subtree
    if (largest !== rootIndex) {
      // Mark elements being swapped
      markActive([rootIndex, largest]);
      await delay(delayTime);
      
      // Swap elements
      [arr[rootIndex], arr[largest]] = [arr[largest], arr[rootIndex]];
      
      // Update array in the UI
      updateArray([...arr]);
      await delay(delayTime);
      
      // Clear active marks
      markActive([]);
      
      // Recursively heapify the affected subtree
      await heapify(arr, heapSize, largest);
    } else {
      // Clear active marks
      markActive([]);
    }
  };
  
  // Build max heap (rearrange array)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    await heapify(arrayCopy, n, i);
  }
  
  // Extract elements from heap one by one
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end
    markActive([0, i]);
    await delay(delayTime);
    
    // Swap elements
    [arrayCopy[0], arrayCopy[i]] = [arrayCopy[i], arrayCopy[0]];
    
    // Update array in the UI
    updateArray([...arrayCopy]);
    await delay(delayTime);
    
    // Clear active marks
    markActive([]);
    
    // Mark the element as sorted
    sortedIndices.push(i);
    markSorted([...sortedIndices]);
    await delay(delayTime);
    
    // Call heapify on the reduced heap
    await heapify(arrayCopy, i, 0);
  }
  
  // Mark the last element as sorted (index 0)
  sortedIndices.push(0);
  markSorted([...sortedIndices]);
  
  // Ensure all elements are marked as sorted
  markSorted([...Array(n).keys()]);
  
  return arrayCopy;
};

export const heapSortInfo = {
  name: "Heap Sort",
  description: "Heap sort is a comparison-based sorting algorithm that uses a binary heap data structure. It divides the input into a sorted and an unsorted region, and iteratively shrinks the unsorted region by extracting the largest element and moving it to the sorted region.",
  timeComplexity: {
    best: "O(n log n)",
    average: "O(n log n)",
    worst: "O(n log n)"
  },
  spaceComplexity: "O(1)",
  pseudocode: [
    "procedure heapSort(array)",
    "  n ← length(array)",
    "  // Build a max heap",
    "  for i ← floor(n/2)-1 down to 0 do",
    "    heapify(array, n, i)",
    "  end for",
    "",
    "  // Extract elements from the heap one by one",
    "  for i ← n-1 down to 1 do",
    "    swap(array[0], array[i])",
    "    heapify(array, i, 0)",
    "  end for",
    "end procedure",
    "",
    "procedure heapify(array, heapSize, rootIndex)",
    "  largest ← rootIndex",
    "  leftChild ← 2 * rootIndex + 1",
    "  rightChild ← 2 * rootIndex + 2",
    "",
    "  if leftChild < heapSize and array[leftChild] > array[largest] then",
    "    largest ← leftChild",
    "  end if",
    "",
    "  if rightChild < heapSize and array[rightChild] > array[largest] then",
    "    largest ← rightChild",
    "  end if",
    "",
    "  if largest ≠ rootIndex then",
    "    swap(array[rootIndex], array[largest])",
    "    heapify(array, heapSize, largest)",
    "  end if",
    "end procedure"
  ]
}; 