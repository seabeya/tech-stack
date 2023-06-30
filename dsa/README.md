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
   - [Linked List](#-linked-list)
   - [Stack](#-stack)

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

<p align="center">
  <a href="#-array">Array</a> • <a href="#-hash-table">Hash Table</a> • <a href="#-linked-list">Linked List</a> • <a href="#-stack">Stack</a>
</p>

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

<br>

### 🔷 Linked List

A linked list is a linear data structure that consists of a sequence of elements called nodes.

| Operations                 | Complexity | Why                                                                                                                                                                                                                                   |
| -------------------------- | :--------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Access / Edit first & last |   `O(1)`   | Because a linked list maintains references to the first and last elements.                                                                                                                                                            |
| Insert front & end         |   `O(1)`   | We have references to the first and last elements, so we can easily insert an item at the front or end of the linked list and update the appropriate references.                                                                      |
| Delete first & (\*last)    |   `O(1)`   | Since we have reference to the first element, we can easily update the reference of the first element to point to the second element. \*Deleting the last element in O(1) time is only possible if we are using a Doubly Linked List. |
| Access / Edit              |   `O(n)`   | Requires traversing the list to reach the desired position.                                                                                                                                                                           |
| Insert                     |   `O(n)`   | Requires traversing the list to reach the desired position.                                                                                                                                                                           |
| Delete                     |   `O(n)`   | Requires traversing the list to reach the desired position.                                                                                                                                                                           |

<br>

#### 🔻 Structure

Linked lists are made up of list nodes.

> Each node in a linked list can be located anywhere in memory; it does not require contiguous blocks of memory. The order of nodes is maintained through the use of pointers.

- Singly Linked List

  <img src="./singlyLL.png" height="auto" width="600">

  <img src="./singlyLLN.png" height="auto" width="200">

  - **Value**: The data that a list node holds. It can be anything.
  - **Next**: A pointer/reference that indicates the next list node in the linked list. `ListNode1.next = ListNode2`

- Doubly Lined List

  <img src="./doublyLL.png" height="auto" width="600">

  <img src="./doublyLLN.png" height="auto" width="200">

  - **Value**: The data that list node holds. It can be anything.
  - **Next**: A pointer/reference that says what is the next list node in th linked list. `ListNode1.next = ListNode2`
  - **Prev**: A pointer/reference that indicates the previous list node in the linked list. `ListNode2.prev = ListNode1`

<br>

#### 🔻 Implementation

There is no Linked List data structure in JavaScript by default, but we can build it.

Singly Linked List:

```js
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null; // First Node
    this.tail = null; // Last Node
    this.size = 0;
  }

  // Access any (by index)
  get(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Invalid index");
    }

    let currNode = this.head;
    for (let i = 0; i < index; i++) {
      currNode = currNode.next;
    }

    return currNode;
  }

  // Insert end
  append(value) {
    const newNode = new ListNode(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  // Insert front
  prepend(value) {
    const newNode = new ListNode(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
  }

  // Insert any
  insertAt(index, value) {
    if (index <= 0) {
      this.prepend(value);
    } else if (index >= this.size) {
      this.append(value);
    } else {
      const newNode = new ListNode(value);
      const parent = this.get(index - 1);
      newNode.next = parent.next;
      parent.next = newNode;
      this.size++;
    }
  }

  // Delete any (by index)
  deleteAt(index) {
    if (this.head === null) {
      throw new Error("List is empty!");
    }

    if (index < 0 || index >= this.size) {
      throw new Error("Invalid index");
    } else if (index === 0) {
      this.head = this.head.next;

      if (this.head === null) {
        this.tail = null;
      }
    } else {
      const parent = this.get(index - 1);
      parent.next = parent.next.next;

      if (index === this.size - 1) {
        this.tail = parent;
      }

      this.size--;
    }
  }

  // Just a random extra method
  toArray() {
    const list = [];
    let currNode = this.head;

    while (currNode !== null) {
      list.push(currNode.value);
      currNode = currNode.next;
    }

    return list;
  }
}

const myList = new LinkedList();

myList.append("000");
myList.append(1);
myList.append("string 2");
myList.insertAt(2, "new 2");
console.log(myList.toArray()); // Array(4) ['000', 1, 'new 2', 'string 2']
myList.prepend({ test: "object data" });
myList.deleteAt(2);
console.log(myList.get(3)); // ListNode {value: 'string 2', next: null}
console.log(myList.toArray()); // Array(4) [{…}, '000', 'new 2', 'string 2']
```

<br>

### 🔷 Stack

> Last-In-First-Out

The term "stack" refers to a data structure that follows the Last-In-First-Out (LIFO) principle. It is a collection of elements that supports two main operations: push and pop.

| Operations           | Complexity |
| -------------------- | ---------- |
| Push (insert end)    | `O(1)`     |
| Pop (delete end)     | `O(1)`     |
| Peek (view last/top) | `O(1)`     |

<br>

#### 🔻 Implementation

There is no built-in Stacks data structure in JavaScript by default, but we can build one using two main options: using an array or using a linked list.

Array-based stacks:

- Good: `Random access`, `Easy to implement`;
- Bad: `Inset/Delete start & middle`, `When stack size is unknown in advance`;

```js
class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    if (this.stack.length === 0) {
      throw new Error("Cannot pop from an empty stack");
    }

    return this.stack.pop();
  }

  peek() {
    if (this.stack.length === 0) {
      throw new Error("Stack is empty");
    }

    return this.stack.at(-1);
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek()); // 3
console.log(stack.pop()); // 3
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1
console.log(stack.peek()); // Error: Stack is empty
```

<br>

Linked list-based stacks:

> As we know, it is not efficient to delete an item at the end of a Singly Linked List. But, instead of adding to the end and removing from the end, we can add to the front and remove from the front. This way, we can achieve our goals efficiently.

- Good: `Can grow/shrink as needed`;
- Bad: `Random access`;

```js
class StackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  // Add item to the beginning of the list:
  push(value) {
    const newNode = new StackNode(value);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  // Delete item from the beginning of the list:
  pop() {
    if (this.top === null) {
      throw new Error("Cannot pop from an empty stack");
    }

    const node = this.top;
    this.top = node.next;
    this.size--;
    return node.value;
  }

  peek() {
    if (this.top === null) {
      throw new Error("Cannot peek an empty stack");
    }

    return this.top.value;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek()); // 3
console.log(stack.pop()); // 3
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1
console.log(stack.peek()); // Error: Cannot peek an empty stack
```
