# Sorting Algorithms in JavaScript

## Bubble Sort

**Introduction:**  
Bubble sort is the simplest sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The algorithm gets its name because smaller elements "bubble" to the top of the list with each iteration.

**Time Complexity:**
- Best case: O(n) - when array is already sorted
- Average case: O(n²)
- Worst case: O(n²)

**Space Complexity:**  
O(1) - In-place sorting that requires only a constant amount of additional memory space.

**Code:**
```javascript
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
```

## Selection Sort

**Introduction:**  
Selection sort divides the array into a sorted and unsorted region. It repeatedly finds the minimum element from the unsorted region and moves it to the beginning of the unsorted region, expanding the sorted region.

**Time Complexity:**
- Best case: O(n²)
- Average case: O(n²)
- Worst case: O(n²)

**Space Complexity:**  
O(1) - In-place sorting with constant extra space.

**Code:**
```javascript
function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}
```

## Insertion Sort

**Introduction:**  
Insertion sort builds the final sorted array one element at a time. It takes each element from the unsorted part and inserts it into its correct position within the sorted part, similar to how we sort playing cards in our hands.

**Time Complexity:**
- Best case: O(n) - when array is already sorted
- Average case: O(n²)
- Worst case: O(n²)

**Space Complexity:**  
O(1) - In-place algorithm with constant extra space.

**Code:**
```javascript
function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let currentElement = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentElement;
  }
  return arr;
}
```

## Merge Sort

**Introduction:**  
Merge sort uses the divide-and-conquer strategy. It divides the array into two halves, recursively sorts them, and then merges the sorted halves to produce the final sorted array.

**Time Complexity:**
- Best case: O(n log n)
- Average case: O(n log n)
- Worst case: O(n log n)

**Space Complexity:**  
O(n) - Requires additional space proportional to the size of the input array.

**Code:**
```javascript
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const middle = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middle);
  const rightHalf = arr.slice(middle);
  
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);
  
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  
  return result.concat(
    left.slice(leftIndex),
    right.slice(rightIndex)
  );
}
```

## Quick Sort

**Introduction:**  
Quick sort is another divide-and-conquer algorithm. It works by selecting a 'pivot' element and partitioning the array around the pivot so that elements smaller than the pivot are on the left, and elements greater than the pivot are on the right.

**Time Complexity:**
- Best case: O(n log n)
- Average case: O(n log n)
- Worst case: O(n²) - when poorest pivot choices are made

**Space Complexity:**  
O(log n) - Requires additional space for the recursion stack.

**Code:**
```javascript
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  const pivot = arr[right];  // Select rightmost element as pivot
  let i = left - 1;          // Initialize boundary for elements <= pivot
  
  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      i++;                   // Expand boundary of smaller elements
      [arr[i], arr[j]] = [arr[j], arr[i]];  // Move current element to left side
    }
  }
  
  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];  // Place pivot in final position
  return i + 1;              // Return pivot's index
}
```
## Heap Sort

## Radix Sort

## Tim Sort
