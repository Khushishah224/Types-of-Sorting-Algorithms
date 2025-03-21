import { bubbleSort, bubbleSortInfo } from './bubbleSort';
import { selectionSort, selectionSortInfo } from './selectionSort';
import { insertionSort, insertionSortInfo } from './insertionSort';
import { mergeSort, mergeSortInfo } from './mergeSort';
import { quickSort, quickSortInfo } from './quickSort';
import { heapSort, heapSortInfo } from './heapSort';

// Export all sorting algorithms
export const sortingAlgorithms = {
  bubble: {
    sort: bubbleSort,
    info: bubbleSortInfo
  },
  selection: {
    sort: selectionSort,
    info: selectionSortInfo
  },
  insertion: {
    sort: insertionSort,
    info: insertionSortInfo
  },
  merge: {
    sort: mergeSort,
    info: mergeSortInfo
  },
  quick: {
    sort: quickSort,
    info: quickSortInfo
  },
  heap: {
    sort: heapSort,
    info: heapSortInfo
  }
}; 