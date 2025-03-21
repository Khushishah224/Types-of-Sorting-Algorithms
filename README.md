# Types of Sorting Algorithms

An interactive web application that visualizes various sorting algorithms in real-time. This educational tool helps users understand how different sorting algorithms work, compare their performance, and learn about their time and space complexities.

## 🌟 Features

- **Visual Representation**: See sorting algorithms in action with animated visualizations
- **Multiple Algorithms**: Implementations of 6 popular sorting algorithms
- **Real-time Stats**: Track comparisons, swaps, and array accesses during algorithm execution
- **Interactive Controls**: Adjust array size and sorting speed
- **Algorithm Information**: View detailed information about each algorithm including time complexity, space complexity, and pseudocode
- **Dark/Light Mode**: Toggle between dark and light themes for comfortable viewing
- **Responsive Design**: Works on desktop and mobile devices
- **Educational Tool**: Perfect for students learning about algorithms and data structures

## 🔍 Algorithms Implemented

- **Bubble Sort**: O(n²) time complexity, O(1) space complexity
- **Selection Sort**: O(n²) time complexity, O(1) space complexity
- **Insertion Sort**: O(n²) time complexity, O(1) space complexity
- **Merge Sort**: O(n log n) time complexity, O(n) space complexity
- **Quick Sort**: O(n log n) time complexity, O(log n) space complexity
- **Heap Sort**: O(n log n) time complexity, O(1) space complexity

## 💻 Technologies Used

- **React**: Frontend library for building the user interface
- **Vite**: Next generation frontend tooling for faster development
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Router**: For navigation between pages

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Khushishah224/Types-of-Sorting-Algorithms.git
   cd sorting-visualizer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## 📖 How to Use

1. **Generate Array**: Click the "New Array" button to create a random array
2. **Select Algorithm**: Choose a sorting algorithm from the dropdown menu
3. **Adjust Size**: Use the slider to change the array size (10-100 elements)
4. **Adjust Speed**: Use the slider to change the visualization speed
5. **Start Sorting**: Click the "Start" button to begin the visualization
6. **Learn**: Observe the sorting process and review the algorithm's pseudocode and complexity information

## 📊 Algorithm Performance

| Algorithm      | Best Time  | Average Time | Worst Time | Space      |
|----------------|------------|--------------|------------|------------|
| Bubble Sort    | O(n)       | O(n²)        | O(n²)      | O(1)       |
| Selection Sort | O(n²)      | O(n²)        | O(n²)      | O(1)       |
| Insertion Sort | O(n)       | O(n²)        | O(n²)      | O(1)       |
| Merge Sort     | O(n log n) | O(n log n)   | O(n log n) | O(n)       |
| Quick Sort     | O(n log n) | O(n log n)   | O(n²)      | O(log n)   |
| Heap Sort      | O(n log n) | O(n log n)   | O(n log n) | O(1)       |

## 🎓 Educational Value

This project is designed as a learning tool for:
- Computer Science students studying algorithms
- Developers looking to understand sorting algorithms
- Educators teaching algorithm concepts
- Anyone curious about how sorting works

The visualizations make abstract concepts concrete and easier to understand.

## 🛠️ Project Structure

```
sorting-visualizer/
├── public/
├── src/
│   ├── algorithms/     # Sorting algorithm implementations
│   ├── components/     # React components
│   ├── App.jsx         # Main application component
│   ├── App.css         # Application styles
│   ├── index.css       # Global styles
│   └── main.jsx        # Entry point
└── index.html          # HTML template
```

