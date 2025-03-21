/**
 * Insertion Sort Algorithm
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
export const insertionSort = async (
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
  
  // Mark first element as sorted initially
  markSorted([0]);
  await delay(delayTime);
  
  for (let i = 1; i < n; i++) {
    // Element to be inserted
    const key = arrayCopy[i];
    
    // Mark the current element we're trying to insert
    markActive([i]);
    await delay(delayTime);
    
    // Index of the last sorted element
    let j = i - 1;
    
    // Compare key with each element on the left until a smaller element is found
    while (j >= 0 && arrayCopy[j] > key) {
      // Mark elements being compared
      markCompared([j, i]);
      await delay(delayTime);
      
      // Shift elements to the right
      arrayCopy[j + 1] = arrayCopy[j];
      
      // Mark element being shifted
      markActive([j]);
      updateArray([...arrayCopy]);
      await delay(delayTime);
      
      // Move to the left
      j--;
    }
    
    // Insert the key at the correct position
    arrayCopy[j + 1] = key;
    updateArray([...arrayCopy]);
    
    // Clear comparison highlighting
    markCompared([]);
    markActive([]);
    
    // Update sorted part
    markSorted([...Array(i + 1).keys()]);
    await delay(delayTime);
  }
  
  // Mark all elements as sorted
  markSorted([...Array(n).keys()]);
  
  return arrayCopy;
};

export const insertionSortInfo = {
  name: "Insertion Sort",
  description: "Insertion sort builds the final sorted array one item at a time. It iterates through an input array and removes one element per iteration, finds the location the element belongs within the sorted list, and inserts it there.",
  timeComplexity: {
    best: "O(n)",
    average: "O(n²)",
    worst: "O(n²)"
  },
  spaceComplexity: "O(1)",
  pseudocode: [
    "procedure insertionSort(array)",
    "  n ← length(array)",
    "  for i ← 1 to n-1 do",
    "    key ← array[i]",
    "    j ← i-1",
    "    while j ≥ 0 and array[j] > key do",
    "      array[j+1] ← array[j]",
    "      j ← j-1",
    "    end while",
    "    array[j+1] ← key",
    "  end for",
    "end procedure"
  ]
}; 