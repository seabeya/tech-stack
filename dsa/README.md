<p align="center">
  <img src="../logo.png" height="200">
</p>

<h1 align="center">Data Structures & Algorithms</em></h1>

<p align="center">
  Almost everything about DSA to ace a technical interview.
<p>

> "Data Structures & Algorithms" is a fundamental topic in computer science and programming. It allows you to organize and manipulate data efficiently, as well as develop algorithms to solve computational problems.

<p align="right">
    <a href="https://github.com/shaanaliyev/tech-stack#tech-stack">Main Page ↖</a>
</p>

#### Knowledge requirements

- A basic knowledge of one of the general-purpose programming languages is required!
  > I'm using JavaScript here, but you can apply the same concepts in other languages.

### Contents

1. [Complexity (Big O)](#-complexity-big-o)
   - [BigO Rules](#-bigo-rules)
2. [Data Structures](#-data-structures)
   - [Array](#-array)
   - [Hash Table](#-hash-table)

<br>

<hr>

## 🔶 Complexity (Big O)

By analyzing the complexity of an algorithm, we can understand how it will perform for larger inputs. It provides a way to describe the efficiency and scalability of algorithms in a standardized manner.

- Time Complexity: Speed
  > Amount of time or number of operations required by an algorithm to run as a function of the input size.
- Space Complexity: Memory
  > Amount of memory or space required by an algorithm to run as a function of the input size.

<br>

Overview:

- `O(1)`: Constant.
  > Algorithms take a constant amount of time regardless of the input size.
- `O(log n)`: Logarithmic. _(Example: Binary Search)_
  > This type of algorithm reduces the search space by half with each iteration, making it very efficient for large inputs.
- `O(n)`: Linear. _(Example: Linear Search)_
  > This type of algorithm iterates through each element of the input.
- `O(n log n)`: Log Linear. _(Example: Merge Sort, Quick Sort)_
  > Algorithms with a time complexity that grows logarithmically with the input size 'n' are often multiplied by a linear factor. This type of complexity often arises in algorithms that employ the Divide and Conquer approach.
- `O(n^2)`: Quadratic. _(Example: Bubble Sort)_
  > This type of algorithm compares each element of the input with every other element, resulting in nested loops and potentially slow performance for large inputs.
- `O(n^3)` - Cubic.
  > Algorithms with triple nested loops, where each element needs to be compared or operated on with every other element.
- `O(2^n)`: Exponential. _(Example: Power Set Generation)_
  > These algorithms grow exponentially with the input size, often resulting from recursive approaches that generate all possible combinations or subsets.
- `O(n!)`: - Factorial.
  > Algorithms with factorial time complexity typically involve generating permutations or combinations by iterating through all possible orderings or selections of the input elements.

<br>

<p align="center">
  <img src="./bigO.png" height="auto" width="500">
</p>

<br>

### 🔷 BigO Rules

1. Worst case.

   > Big O notation focuses on the upper bound of an algorithm's time complexity, specifically considering the worst-case scenario, independent of luck or assumptions about specific scenarios.

   > This rule allows us to account for the most time-consuming operations an algorithm may encounter and provides a guarantee that the algorithm will not exceed the specified time complexity.

2. Remove constants.

   > Constant factors are not significant in Big O notation. When analyzing the time complexity of an algorithm, we are interested in its growth rate as the input size increases. Constant factors, such as coefficients and low-order terms, become less significant as the input size grows larger.

   > We typically omit these constants when expressing the time complexity in Big O notation. For example, if an algorithm has a time complexity of O(5n), we can simplify it to O(n).

3. Different inputs different variables.

   > If an algorithm's time complexity depends on different input variables, it's important to assign distinct variables or symbols to represent each input parameter.

   - When loops one after another.

     - Same inputs: `O(a + a)` --> `O(2a)` --> `O(n)`
       ```js
       func(a) {
        a.loop1 {}
        a.loop2 {}
       }
       ```
     - Different inputs: `O(a + b)` --> `O(a + b)`
       ```js
       func(a, b) {
        a.loop1 {}
        b.loop2 {}
       }
       ```

   - When loops nested.

     - Same inputs: `O(a * a)` --> `O(a^2)`
       ```js
       func(a) {
        a.loop1 {
          a.loop2 {}
        }
       }
       ```
     - Different inputs: `O(a * b)`
       ```js
       func(a, b) {
        a.loop1 {
          b.loop2 {}
        }
       }
       ```

   > This rule helps s avoid confusion and ensures that the time complexity analysis captures the impact of each input parameter separately.

4. Drop the non-dominant terms.

   > Focus on the most significant term. In algorithms with multiple terms, only the one with the highest growth rate has a significant impact on the overall complexity. Therefore, we keep only the term with the highest growth rate and drop the rest.

   > The function has O(n) and O(n^2) terms, the overall complexity is O(n^2), as it dominates the other term.

   ```js
   func(a) {
    a.loop1 {}
    a.loop2 {
      a.loop3 {}
    }
   }
   ```

<p align="right">
    <a href="#data-structures--algorithms">back to top ⬆</a>
</p>

<br>
<br>

## 🔶 Data Structures

- [Array](#-array)
- [Hash Table](#-hash-table)

<br>

### 🔷 Array

Array is a built-in data structure that allows you to store multiple values in a single variable. Each value in an array is called an element, and elements are accessed using their index, which starts from 0 for the first element.

| Operations                 | Complexity | Why                                                                                                                           |
| -------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Access / Edit i-th element | `O(1)`     | Arrays provide direct access to elements using their index.                                                                   |
| Insert\* / Remove end      | `O(1)`     | Inserting or removing an element at the end simply requires adjusting the index of the last element.                          |
| Insert / Remove            | `O(n)`     | Inserting or removing an element at a specific index requires shifting all the subsequent elements to accommodate the change. |

<br>

#### 🔻 How arrays stored in memory

In lower-level languages like C or C++, arrays are typically implemented as contiguous memory blocks.

> This means that the elements of the array are stored in consecutive memory locations, one after another, without any gaps or padding between them.

> When an array is created, a block of memory is allocated to hold all its elements. The memory addresses of the elements are determined based on the starting address of the array. The address of the first element is the starting address, and the subsequent elements are stored at increasing memory addresses.

```c++
int myArray[5] = {3, 7, 1, 2, 3};
```

> Assuming each integer occupies 4 bytes of memory, the memory addresses of the elements would be as follows:

```c++
Address of myArray[0] = starting address
Address of myArray[1] = starting address + 4
Address of myArray[2] = starting address + 8
Address of myArray[3] = starting address + 12
Address of myArray[4] = starting address + 16
```

> By having contiguous memory storage, accessing array elements becomes efficient. Since the elements are stored consecutively, the memory address of any element can be calculated using the starting address and the size of each element. This allows for direct access to any element using simple arithmetic calculations, without the need for traversal or searching.

<br>

#### 🔻 Static and Dynamic arrays

- Static Arrays:
  - Static arrays have a fixed size that is declared in advance.
  - They occupy a predetermined amount of memory throughout the program's lifetime.
  - If you try to add more elements than the array size allows, you may encounter overflow errors or memory corruption.
- Dynamic Arrays:
  - Dynamic arrays do not require a specific size to be declared in advance.
  - They can grow or shrink as needed during runtime.
  - Some languages may have a default value for the initial capacity of a dynamic array. When the capacity is exceeded, the array needs to be resized.
  - Resizing a dynamic array typically involves creating a new, larger block of memory (often 2x or 1.5x the previous size), copying all the existing elements to the new block, and deallocating the old block.
    > The worst-case scenario for resizing a dynamic array has a time complexity of O(n), as it requires copying all the elements to a new memory block one by one.

<br>

#### 🔻 Arrays in JavaScript

```js
const myArray = [1, 2, 6, 3, "test"];
const myArray = new Array(5); // Array sized 5
```

JavaScript arrays are dynamic and can grow or shrink as needed.

> In JavaScript, an array is implemented as an object with numeric keys and are not contiguous memory blocks. It does not necessarily allocate memory for all possible indices up to the specified length. Instead, it allocates memory for the elements that are actually present in the array

> When you create an array with a specific length in JavaScript, such as `const arr = new Array(1000000)`, it sets the initial length of the array but does not allocate memory for one million entries. Instead, it creates an array object with the specified length property.

> JavaScript arrays are sparse, meaning they can have gaps between elements. In the case of an array with a length of one million but only a few elements, memory is only allocated for those existing elements, and the remaining indices are essentially empty slots.

```js
const arr = new Array(1000000);
arr[0] = "Hello";
arr[999999] = "World";
```

> In this example, the array arr has a length of one million, but memory is only allocated for two elements, one at index 0 and another at index 999999. The remaining indices between 1 and 999998 do not have any memory allocated.

> This dynamic nature of JavaScript arrays allows for flexibility in terms of memory usage and efficient handling of sparse arrays. It also means that operations like resizing or inserting elements can be more flexible compared to fixed-size arrays in languages like C.

> **Note**:
> JavaScript is not a low-level language; therefore, the JS engine performs various optimizations under the hood. The implementation of certain features may differ from other languages, as it depends on the specific approach taken by the engine.

<br>

### 🔷 Hash Table

A hash table, also known as a hash map, is a data structure that allows efficient storage and retrieval of key-value pairs.

| Operations    | Complexity |
| ------------- | ---------- |
| Access / Edit | `O(1)`     |
| Insert        | `O(1)`     |
| Remove        | `O(1)`     |

<br>

JavaScript doesn't have a built-in data structure called a "hash table". But you can implement similar functionality using objects ({}) and the built-in [Map object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).

- Using Objects as Hash Tables:
  ```js
  const hashTable = {};
  ```
- Using the Map object:

  ```js
  const hashTable = new Map();
  ```

> Hash Tables are often the best approach for optimizing time complexity with some additional space costs.
