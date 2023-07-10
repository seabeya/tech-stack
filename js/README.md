<p align="center">
  <img src="../logo.png" height="200">
</p>

<h1 align="center">JavaScript</h1>

<p align="center">
  -
<p>

> Pain.

<p align="right">
    <a href="https://github.com/shaanaliyev/tech-stack#tech-stack">Main Page ↖</a>
</p>

#### Knowledge requirements

- No previous knowledge is required!
  > But it would be good to know that it will be painful if you are new to the JS world.

### Contents

1. [How JS Works?](#-how-js-works)
   - [Code Execution](#-code-execution)

<br>

<hr>

## 🔶 How JS Works?

JavaScript (JS) is a programming language that runs on a combination of a JavaScript engine and a runtime environment.

- JS Engine: is a program or a virtual machine that interprets and executes JavaScript code.
  > It takes in the JavaScript source code, parses it, and converts it into executable instructions that can be understood by the computer's hardware. The engine handles tasks such as lexical analysis, syntax parsing, bytecode generation or just-in-time (JIT) compilation, and execution of the JavaScript code. V8 is the most popular JavaScript engine, used in Google Chrome and Node.js.
- Runtime Environment: provides the necessary libraries, APIs, and tools for executing JavaScript code.
  > It provides a set of pre-defined objects and functions that JavaScript code can use to interact with the environment it's running on.

<br>

### 🔷 Code Execution

A JavaScript engine typically has two important components when it comes to code execution:

- `Memory Heap`: This is where dynamic memory allocation occurs.
  > It is responsible for allocating and managing memory for objects and variables created during the execution of a JS program. Objects and variables are stored in the memory heap until they are no longer needed or explicitly deallocated.
- `Call Stack`: The call stack keeps track of the execution context of a program.

  > The call stack operates on a last-in, first-out (LIFO) principle, meaning that the most recently pushed execution context is the first one to be popped off and executed.

  > When a function is called, its execution context is pushed onto the call stack.

  > As functions are nested within each other, their execution contexts are stacked on top of each other in the call stack.

When you run a JavaScript program, the JavaScript Engine creates an environment called the **Global Execution Context**, which manages the entire code execution.

Global Execution Context (GEC) has two phases:

1. Creation Phase.

   > JavaScript reads the entire program line by line and allocates memory to all variables and functions.

   > In this phase, variables are allocated memory space and assigned the initial value of `undefined`, and functions are allocated memory space as their entire function reference.

2. Code Execution Phase.
   > JavaScript runs through the entire program once again, line by line, and executes the code. This phase is where all variable assignments, logical functions, and calculations are performed.

<br>

**Example:**

```js
const n = 10;
function square(num) {
  const result = num * num;
  return result;
}

let myVar1 = square(n);
let myVar2 = square(4);
```

- Creation Phase:
  1. `n: undefined`
  2. `square: { ... }`
  3. `myVar1: undefined`
  4. `myVar2: undefined`
- Code Execution Phase:
  1.  `n: 10`
  2.  We jump over this function declaration part since there is nothing to execute.
  3.  We invoke/execute the function `square(10)`.
      > When we invoke a function, a brand-new Execution Context is created under the GEC, and the following phases are applied again for it:
      - Creation Phase:
        1. `num: undefined` (the parameter)
        2. `result: undefined`
        3. There is no action required for the Return statement in the Creation Phase, so we skip over it.
      - Code Execution Phase:
        1. `num: 10` (the parameter)
        2. `result: 100` (100 comes from `num * num` --> `10*10`)
        3. The Return statement indicates that the function has completed and returns control to the point where the function was invoked. When the function returns, it assigns the returned value: `myVar1: 100`.
  4.  The same invocation/execution process is repeated for `square(4)`, which returns 16 to `myVar2`.

The Call Stack view of the process:

1. The program starts.
2. A Global Execution Context (GEC) is created.
3. The code starts running step by step, from top to bottom.
4. A function call `square(10)` is encountered, and a new Execution Context (E1) is created for executing the function.
5. Execution of `square(10)` is completed, and E1 is deleted.
6. Another function call `square(4)` is encountered, and a new Execution Context (E2) is created for executing the function.
7. Execution of `square(4)` is completed, and E2 is deleted.
8. The GEC is deleted from the Call Stack since there is nothing else to execute.
9. The program stops.

> When a function is called, its execution context is pushed onto the call stack. The call stack operates on a last-in, first-out (LIFO) principle, which implies that JavaScript executes code sequentially, following a specific order of execution. While the function is being executed, no other code can be executed until the function completes and its execution context is popped off the call stack. This behavior indicates that **JavaScript processes code in a single-threaded manner**, as it can only handle one task at a time.
