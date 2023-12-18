<p align="center">
  <img src="../logo.png" height="200">
</p>

<h1 align="center">TypeScript</h1>

<p align="center">
  -
</p>

> TypeScript is a superset of JavaScript that adds static typing for better code reliability.

<p align="right">
    <a href="https://github.com/seabeya/tech-stack#tech-stack">Main Page ↖</a>
</p>

#### Knowledge requirements

- Knowledge of JavaScript is required.

### Contents

1. [Getting Started](#-getting-started)
   - [What is TypeScript?](#-what-is-typescript)
   - [Installation](#-installation)
2. [Types](#-types)
   - [Basic Types](#-basic-types)

<br>

<hr>

## 🔶 Getting Started

### 🔷 What is TypeScript?

- We can describe TypeScript as a development helper tool.
  > It assists developers in catching errors during the development phase and provides better tooling support.
- TypeScript is active only during development.
  > You write TypeScript during development; TypeScript helps you during development. It lets you see errors before you run your code.
- TypeScript code equals JavaScript with explanations.
  > TypeScript code is similar to JavaScript, but it includes type annotations to describe the shape of data and provide additional information to developers and tools.
- Editor and analyzing tools support us.
  > TypeScript-aware editors and other analyzing tools can understand TypeScript code and provide enhanced functionality such as autocompletion, error checking, and other suggestions.
- In the end, it's all JavaScript.
  > When we want to run our code, we compile the TypeScript code into JavaScript. We don't execute TypeScript; we execute JavaScript.

<br>

### 🔷 Installation

```
npm install typescript --save-dev
```

<p align="right">
    <a href="#typescript">back to top ⬆</a>
</p>

<br>
<br>

## 🔶 Types

In TypeScript, a type is a way to define the shape and structure of a value. It allows you to specify the data type of a variable, function parameter, or the return type of a function.

#### 🔻 Type Inference

Type inference is the ability of the TypeScript compiler to automatically deduce and assign types to variables, parameters, and return values based on the values and expressions used in the code.

If the declaration and initialization are in the same place, most of the time TypeScript figures out the type on its own.

```ts
const myNumber = 23; // TypeScript infers "myNumber" to be of type number
const myString = "Sh"; // TypeScript infers "myString" to be of type string

function add(a: number, b: number) {
  return a + b; // TypeScript infers the return type to be number
}

const now = new Date(); // TypeScript infers "now" to be of type Date
```

- When to use:
  > Always.

#### 🔻 Type Annotations

Type annotations in TypeScript involve explicitly specifying the type of a variable, function parameter, or function return value using the `:` syntax.

```ts
const myNumber: number = 23;
const myString: string = "Sh";

function add(a: number, b: number): number {
  return a + b;
}
```

- When to use:
  > If type inference is not possible or to avoid the `any` type.
  >
  > Example:
  >
  > ```ts
  > const json = '{"name": "Sh", "age": 23}';
  > const info = JSON.parse(json); // TypeScript infers "info" to be of type `any`
  > ```
  >
  > to fix it:
  >
  > ```ts
  > const info: { name: string; age: number } = JSON.parse(json);
  > ```

 <br>

### 🔷 Basic Types

- Boolean:
  > Represents a boolean value, either `true` or `false`.
  >
  > ```ts
  > const isDone: boolean = false;
  > ```
- Number:
  > Represents numeric values.
  >
  > ```ts
  > const decimal: number = 23;
  > const pi: number = 3.14;
  > const negative: number = -100;
  > ```
- String:
  > Represents textual data. (``, '', "")
  >
  > ```ts
  > const example1: string = "Sh";
  > const example2: string = "Sh 23";
  > const example3: string = "";
  > ```
- Array:
  > Represents an ordered list of elements of a specific type.
  >
  > ```ts
  > const numbers: number[] = [1, 2, 3, 4, 5];
  > const letters: string[] = ["a", "b", "c"];
  > ```
- Tuple:
  > Represents an ordered array with a fixed number of elements.
  >
  > ```ts
  > const tuple: [string, number, boolean] = ["Sh", 23, true]; // the order is important.
  > ```
- Null and Undefined:
  > Represent the absence of a value.
  >
  > ```ts
  > const nullValue: null = null;
  > const undefinedValue: undefined = undefined;
  > ```
- Void:
  > Commonly used to represent functions that DO NOT return any value.
  >
  > ```ts
  > const sayHello = (): void => {
  >   console.log("Hello");
  > };
  > ```
  >
  > It is still allowed to explicitly return `undefined` (bad practice).
  >
  > ```ts
  > const func1 = (): void => {
  >   return undefined;
  > };
  > ```
  >
  > ```ts
  > const func1 = (): void => {
  >   return;
  > };
  > ```
- Never:
  > Represents values that never occur. It is commonly used as the return type for functions that never return normally, either because they throw an exception or enter into an infinite loop.
  >
  > ```ts
  > const throwError = (): never => {
  >   throw new Error("Error");
  > };
  >
  > const infiniteLoop = (): never => {
  >   while (true) {
  >     // Code that never exits the loop
  >   }
  > };
  > ```
  >
  > Note: If there is a small chance of reaching the end of the function, perhaps because your throw case is within an "if" statement, it would be better to use `void`.
- Object:
  > Represents any non-primitive type.
  >
  > ```ts
  > const obj: object = { name: "Sh", age: 23 };
  > ```
  >
  > Represents an object with specific properties and their types.
  >
  > ```ts
  > const obj: { name: string; age: number } = { name: "Sh", age: 23 };
  > ```
- Function:
  > Represents a specified function structure.
  >
  > ```ts
  > // (name: string) => void
  > const sayHello: (name: string) => void = (name) => {
  >   console.log("Hello " + name);
  > };
  > ```
- Any:
  > Represents a dynamic or unknown type. It allows you to opt out of type checking for a particular variable.
  >
  > ```ts
  > const dynamicVar1: any = "This can be any type";
  > const dynamicVar2: any = 999;
  > const dynamicVar3: any = ["Sh", 23];
  > ```
  >
  > Avoid using `any`; its use is discouraged. If something infers `any`, there is a problem; try to fix it.

> Note: Here, I explicitly specified the types just to show, but most of them can be inferred automatically.

<br>

#### 🔻 More with Basic Types

- Union Types:
  > A union type allows the assignment of two or more types using the `|` operator.
  ```ts
  const myVar: number | string; // myVar can be either a string or a number.
  ```
- Functions:
  - Return Types:
    > To specify the return type for a function, use `:` after the function parameter section.
    >
    > ```ts
    > const getHello = (): string => {
    >   return "Hello";
    > };
    > ```
    >
    > ```ts
    > function getHello(): string {
    >   return "Hello";
    > }
    > ```
  - Parameter Types:
    > To specify the parameter types for a function, use `:` after each parameter name.
    >
    > ```ts
    > const greetWithNameAndAge = (name: string, age: number) => {
    >   return `Hello ${name}! You are ${age} years old.`;
    > };
    > ```
    >
    > ```ts
    > function greetWithNameAndAge(name: string, age: number) {
    >   return `Hello ${name}! You are ${age} years old.`;
    > }
    > ```
    >
    > Note: TypeScript can infer the return type automatically.
- Arrays:
  - 2D Arrays:
    > ```ts
    > const myArr: string[][] = [["Hello"], ["Merhaba"], ["Здравствуйте"]];
    > ```
  - Array with Different Types:
    > Union types can be used to allow an array to hold elements of different types.
    >
    > ```ts
    > const myArr: (string | number)[] = ["Sh", 23, "tech-stack"];
    > ```

 <br>
