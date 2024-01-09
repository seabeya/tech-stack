<p align="center">
  <img src="../logo.png" height="200">
</p>

<h1 align="center">TypeScript</h1>

<p align="center">
  Almost everything about TypeScript.
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
   - [Complex Types](#-complex-types)
     - [Type Aliases](#-type-aliases)
     - [Union Types](#-union-types)
     - [Intersection Types](#-intersection-types)
     - [Literal Types](#-literal-types)
     - [Indexed Access Types](#-indexed-access-types)
     - [Enums](#-enums)
     - [Interface](#-interface)
   - [Generics](#-generics)
3. [Working with Classes](#-working-with-classes)
   - [Access Modifiers](#-access-modifiers)
   - [Implementing Interfaces](#-implementing-interfaces)
   - [Interface of a Class](#-interface-of-a-class)
   - [Abstract Classes](#-abstract-classes)
4. [More...](#-more)
   - [Optional Properties](#-optional-properties)
   - [Conditional Types](#-conditional-types)
   - [Type Assertions](#-type-assertions)
     - [`as const`](#-as-const)
   - [Type Guards](#-type-guards)
     - [Discriminated Unions](#-discriminated-unions)
     - [Type Predicates](#-type-predicates)
     - [`satisfies`](#-satisfies)
   - [Built-in Utility Types](#-built-in-utility-types)

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

<br>

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

<br>

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

### 🔷 Complex Types

#### 🔻 Type Aliases

Type aliases are a way to create a name for a type.

> You use the `type` keyword to create type aliases.

```ts
type Point = {
  x: number;
  y: number;
};

const myPoint: Point = { x: 10, y: 20 };
```

```ts
type NumOrString = number | string;

function add(a: NumOrString, b: NumOrString) {
  ...
}
```

> They are especially useful in scenarios where you need to reuse a specific combination of types in multiple places in your code.

<br>

#### 🔻 Union Types

A union type allows the assignment of two or more types using the `|` operator.

```ts
const myVar: number | string; // myVar can be either a string or a number.
```

- Union-typed object:

  > TypeScript only allows you to access properties that are common to all types in the union.
  >
  > ```ts
  > type Company = {
  >   name: string;
  >   location: string;
  > };
  >
  > type Person = {
  >   name: string;
  >   age: number;
  > };
  >
  > function example(obj: Company | Person) {
  >   console.log(obj.name); // Ok
  >   console.log(obj.location); // Error
  >   console.log(obj.age); // Error
  > }
  > ```
  >
  > However, if you want to access a property that is specific to one of the types, you need to use type guards:
  >
  > ```ts
  > function example(obj: Company | Person) {
  >   console.log(obj.name); // Ok
  >
  >   if ("location" in obj) {
  >     // obj is Company type
  >     console.log(obj.location); // Ok
  >     console.log(obj.age); // Error
  >   } else {
  >     // obj is Person type
  >     console.log(obj.age); // Ok
  >     console.log(obj.location); // Error
  >   }
  > }
  > ```

  <br>

#### 🔻 Intersection Types

Intersection types involve combining multiple types into a single type that has all the features of each individual type.

> You use `&` to bring different types together.

```ts
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeID: string;
  role: string;
};

type EmployeePerson = Person & Employee;
```

<br>

#### 🔻 Literal Types

Literal types involve using specific, literal values as types. Instead of just using general types like `number` or `string`, you specify exact values that a variable can have.

```ts
type Options = "up" | "down" | "left" | "right";

let direction: Options;
direction = "up"; // Ok
direction = "diagonal"; // Error
```

<br>

#### 🔻 Indexed Access Types

Indexed access types allow you to create a new type by indexing into an existing type.

```ts
// Example 1:
type Car = {
  brand: string;
  model: string;
  year: number;
};

type CarProperty = Car["brand"]; // CarProperty = string
```

```ts
// Example 2:
type Person = {
  name: string;
  age: number;
};

type PersonKey = Person[keyof Person]; // PersonKey = string | number
```

```ts
// Example 3:
type Letters = ["a", "b", "c"];
type Letter = Letters[number]; // Letter = "a" | "b" | "c"
```

```ts
// Example 4:
const Users = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];
type Person = (typeof Users)[number]; // Person = { name: string, age: number }
```

```ts
// Example 5:
interface RoleConfig {
  user: ["view", "edit"];
  admin: ["view", "edit", "delete", "create"];
}

type Role = RoleConfig[keyof RoleConfig][number];
// Role = "view" | "edit" | "delete" | "create"
```

<br>

#### 🔻 Enums

Enums allow you to define a set of named constants. Enums are useful when you have a fixed set of values that a variable can take, and you want to make your code more readable and self-explanatory.

> We use the `enum` keyword to define an enum.

```ts
enum Direction {
  North,
  South,
  East,
  West,
}
```

By default enums takes the value of 0, 1, 2, 3, ... :

```ts
let myDirection = Direction.North;
console.log(myDirection); // 0
```

We can also explicitly assign values to enums:

```ts
enum MixedEnum {
  First = 1,
  Second = "SECOND",
  Third = 3,
}

let value = MixedEnum.Second;
console.log(value); // "SECOND"
```

You can also use enums as you would normal types:

```ts
enum Direction {
  North,
  South,
  East,
  West,
}

function move(direction: Direction) {
  console.log(direction);
}

move(Direction.North); // 0
```

- Reverse Mapping:

  Enums in TypeScript also support reverse mapping, which means you can convert a value to its corresponding enum name.

  > ```ts
  > enum Direction {
  >   North,
  >   South,
  >   East,
  >   West,
  > }
  >
  > let directionNumber: number = Direction.South;
  > let directionName: string = Direction[directionNumber];
  >
  > console.log(directionName); // South
  > ```

  This is possible because, for example, this TypeScript code:

  > ```ts
  > enum MixedEnum {
  >   First = 1,
  >   SECOND = "SECOND",
  >   Third = "3rd",
  > }
  > ```
  >
  > transpiles to this JS code:
  >
  > ```js
  > const MixedEnum = {
  >   First: 1,
  >   1: "First",
  >   SECOND: "SECOND",
  >   Third: "3rd",
  >   "3rd": "Third",
  > };
  > ```

Also, take a look at [`as const`](#-as-const).

<br>

#### 🔻 Interface

An interface is like a plan or blueprint for how something should look. It helps you define the structure of an object, specifying the properties an object should have and their types. It saves us from using the inline object type and adds reusability.

> To create an interface in TypeScript, you use the keyword `interface`.

```ts
interface User {
  name: string;
  age: number;
  getBirthYear(currYear: number): number;
}

const logUserInfo = (user: User) => {
  const currYear = new Date().getFullYear();
  console.log(user.name, user.age, user.getBirthYear(currYear));
};

const user1 = {
  name: "Sh",
  age: 23,
  getBirthYear(currYear: number) {
    return currYear - this.age;
  },
};

logUserInfo(user1); // Ok.

const user2 = {
  name: "John",
};

logUserInfo(user2); // Error! Missing the 'age' and 'getBirthYear' properties.
```

- Interface inheritance:
  > Allows you to create a new interface that inherits properties and methods from existing interfaces. Interface extension is a way to build on top of existing definitions and compose larger, more specialized interfaces.
  >
  > To inherit an interface, use the keyword `extends`.
  >
  > ```ts
  > interface User {
  >   name: string;
  >   age: number;
  > }
  >
  > interface Employee extends User {
  >   eID: number;
  >   salary: number;
  > }
  >
  > const p1: User = {
  >   name: "Sh",
  >   age: 23,
  > };
  >
  > const p2: Employee = {
  >   name: "John",
  >   age: 27,
  >   eID: 123456789,
  >   salary: 2300,
  > };
  > ```
  >
  > You can inherit from multiple interfaces: `interface Manager extends User, Employee {`.
- Interface merging:
  > Interface merging is a mechanism that allows you to define multiple interfaces with the same name, and TypeScript will automatically merge them into a single interface.
  >
  > ```ts
  > interface Car {
  >   brand: string;
  >   model: string;
  > }
  >
  > interface Car {
  >   year: number;
  > }
  >
  > const myCar: Car = {
  >   brand: "Toyota",
  >   model: "Camry",
  >   year: 2022,
  > };
  >
  > // interface Car {
  > //   brand: string;
  > //   model: string;
  > //   year: number;
  > // }
  > ```

<br>

### 🔷 Generics

Generics in TypeScript provide a way to write flexible and reusable code that can work with different data types while maintaining type safety. They allow you to define functions, classes, and data structures in a way that is independent of the specific data types they operate on.

- Declaration:
  > To define generics, you specify placeholder type parameters within angle brackets (`<>`) after the function or class name. These placeholders represent the types that will be specified when the generics are being used.
- Usage:
  > When using a generics-typed function or class, you provide the actual type arguments inside the angle brackets.
  >
  > TypeScript can also automatically infer the type from the value if you don't specify it inside the angle brackets. However, it is good practice to use them to ensure the correctness of inputs.

<br>

#### 🔻 Examples

- Generic Function:
  > ```ts
  > function exampleFn<T>(param: T): T {
  >   return param;
  > }
  >
  > exampleFn<number>(10); // exampleFn<number>(param: number): number
  > exampleFn<string>("hello"); // exampleFn<string>(param: string): string
  >
  > // TypeScript automatically infers the types:
  > exampleFn(10); // exampleFn<10>(param: 10): 10
  > exampleFn("hello"); // exampleFn<"hello">(param: "hello"): "hello"
  > ```
- Generic Interface:
  > ```ts
  > interface KeyValuePair<T, U> {
  >   key: T;
  >   value: U;
  > }
  >
  > let pair1: KeyValuePair<number, string> = { key: 1, value: "one" };
  > let pair2: KeyValuePair<string, boolean> = { key: "isTrue", value: true };
  >
  > let pair3 = { key: 1, value: "one" }; // KeyValuePair<number, string>
  > let pair4 = { key: "isTrue", value: true }; // KeyValuePair<string, boolean>
  > ```
- Generic Class:
  > ```ts
  > class Box<T> {
  >   private value: T;
  >
  >   constructor(value: T) {
  >     this.value = value;
  >   }
  >
  >   getValue(): T {
  >     return this.value;
  >   }
  > }
  >
  > let numberBox = new Box<number>(42);
  > numberBox.getValue(); // (method) Box<number>.getValue(): number
  >
  > let stringBox = new Box<string>("Hello");
  > stringBox.getValue(); // (method) Box<string>.getValue(): string
  >
  > let boolBox = new Box(true); // constructor Box<boolean>(value: boolean): Box<boolean>
  > boolBox.getValue(); // (method) Box<boolean>.getValue(): boolean
  > ```
- Multiple Type Parameters:
  > ```ts
  > function pair<T, U>(first: T, second: U): [T, U] {
  >   return [first, second];
  > }
  >
  > const p1 = pair(10, "hello"); // pair<number, string>(first: number, second: string): [number, string]
  > const p2 = pair("world", 20); // pair<string, number>(first: string, second: number): [string, number]
  > const p3 = pair(10, 20); // pair<number, number>(first: number, second: number): [number, number]
  > const p4 = pair(true, "hello"); // pair<boolean, string>(first: boolean, second: string): [boolean, string]
  > ```

With or Without Generics:

- Without:
  > ```ts
  > function swapNumbers(a: number, b: number): [number, number] {
  >   return [b, a];
  > }
  >
  > function swapStrings(a: string, b: string): [string, string] {
  >   return [b, a];
  > }
  >
  > let swappedNumbers = swapNumbers(10, 20); // [20, 10]
  > let swappedStrings = swapStrings("Hello", "World"); // ['World', 'Hello']
  > ```
- With:
  > ```ts
  > function swap<T>(a: T, b: T): [T, T] {
  >   return [b, a];
  > }
  >
  > let swappedNumbers = swap(10, 20); // [20, 10]
  > let swappedStrings = swap("hello", "world"); // ['world', 'hello']
  > ```
  - > To work with mixed values:
    >
    > ```ts
    > function swap<T1, T2>(a: T1, b: T2): [T2, T1] {
    >   return [b, a];
    > }
    >
    > let swappedNumbers = swap(10, 20); // [20, 10]
    > let swappedStrings = swap("hello", "world"); // ["world", "hello"]
    > let swappedMix = swap(10, "world"); // ["world", 10]
    > ```

> You can use type guards to gain more power when working with generic-typed parameters.

<br>

#### 🔻 Generic Constraints

Generic constraints help you define more specific requirements for the types that can be used as arguments in generic functions or classes. By adding constraints, you can ensure that the generic type meets certain criteria.

```ts
// Example 1:
interface Measurable {
  length: number;
}

// function printLength<T extends { length: number }>(input: T): void {
function printLength<T extends Measurable>(input: T): void {
  console.log(`Length: ${input.length}`);
}

printLength("Hello World"); // Length: 11
printLength([1, 2, 3]); // Length: 3
printLength({ length: 2 }); // Length: 2

printLength({}); // Error: Property 'length' is missing in type '{}' but required in type 'Measurable'
printLength(23); // Error: Argument of type '23' is not assignable to parameter of type 'Measurable'
```

```ts
// Example 2:
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "Sh", age: 23 }, "age");
// JS also helps us to auto-complete the key (second argument).
```

<p align="right">
    <a href="#typescript">back to top ⬆</a>
</p>

<br>
<br>

## 🔶 Working with Classes

#### 🔻 Access Modifiers

In TypeScript, just like in many object-oriented programming languages, the `public`, `private`, and `protected` keywords are used to control the access levels of class members (properties and methods).

> These access modifiers help define the visibility and accessibility of class members both within and outside of the class.

- Public:
  > Members are accessible from any part of the program, both within and outside the class.
  >
  > ```ts
  > class Example {
  >   public name: string;
  >
  >   constructor(name: string) {
  >     this.name = name;
  >   }
  > }
  >
  > const instance = new Example("John");
  > console.log(instance.name); // Accessing a public property
  > ```
  >
  > This is the default access level if no modifier is specified.
- Private:
  > Members are only accessible within the class where they are defined.
  >
  > ```ts
  > class Example {
  >   private secret: string;
  >
  >   constructor(secret: string) {
  >     this.secret = secret;
  >   }
  >
  >   getSecret() {
  >     console.log(this.secret); // Accessing a private property within the class
  >   }
  > }
  >
  > const instance = new Example("Hidden");
  > instance.getSecret(); // Ok
  > console.log(instance.secret); // Error
  > ```
- Protected:
  > Members are similar to private, but they are also accessible within subclasses.
  >
  > ```ts
  > class Animal {
  >   protected sound: string;
  >
  >   constructor(sound: string) {
  >     this.sound = sound;
  >   }
  > }
  >
  > class Dog extends Animal {
  >   bark() {
  >     console.log(this.sound); // Accessing a protected property in a subclass
  >   }
  > }
  >
  > const dog = new Dog("Woof");
  > dog.bark(); // Ok
  > console.log(dog.sound); // Error
  > ```

When you prefix a constructor parameter with an access modifier (such as `public`, `private`, or `protected`), TypeScript automatically generates a corresponding property with that access level.

```ts
class Testing {
  constructor(public a: string, public b: string) {}
}

const xd = new Testing("aaa", "bbb");

console.log(xd.a, xd.b);
```

and

```ts
class Testing {
  public a: string;
  public b: string;

  constructor(a: string, b: string) {
    this.a = a;
    this.b = b;
  }
}

const xd = new Testing("aaa", "bbb");

console.log(xd.a, xd.b);
```

are the same.

> [!NOTE]
> TypeScript's `private` modifier doesn't prevent access at runtime; instead, use JavaScript's `#` symbol for runtime prevention ([Classes in JS > Private properties](https://github.com/seabeya/tech-stack/blob/main/js/README.md#-private-properties)).

<br>

#### 🔻 Implementing Interfaces

When a class uses the `implements` keyword to implement an interface, it promises to provide implementations for all the members (properties and methods) declared by that interface, ensuring that the class satisfies the requirements of the particular interface.

> The interface defines how the class should be.

```ts
interface Reportable {
  generateReport(): string;
}

class SystemStatus implements Reportable {
  systemName: string;
  status: string;

  constructor(systemName: string, initialStatus: string) {
    this.systemName = systemName;
    this.status = initialStatus;
  }

  getStatus(): string {
    return this.status;
  }

  setStatus(newStatus: string): void {
    this.status = newStatus;
  }

  generateReport(): string {
    return `Generating report for ${this.systemName}... Status: ${this.status}`;
  }
}

const mySystem = new SystemStatus("MySystem", "Online");
```

> Classes may also implement multiple interfaces: `class MyClass implements Interface1, Interface2, Interface3 {`.

<br>

#### 🔻 Interface of a Class

In TypeScript, you can use interfaces to define what you need to provide to be able to use the class. This is particularly useful when you want to establish clear eligibility requirements for users of your class.

> The interface defines what you need to provide in order to use the class.

```ts
interface Sortable {
  swap(i: number, j: number): void;
  compare(i: number, j: number): boolean;
  length: number;
}

class Sort {
  constructor(private collection: Sortable) {}

  public bubbleSort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 1; j < length - i; j++) {
        if (this.collection.compare(j - 1, j)) {
          this.collection.swap(j - 1, j);
        }
      }
    }
  }
}

// The NumbersCollection class should have swap, compare and length.
const numbersCollection = new NumbersCollection([10, 0, 100, 12, -23]);

const sort = new Sort(numbersCollection);
sort.bubbleSort();

console.log(numbersCollection.data); // [-23, 0, 10, 12, 100]
```

> So, we can use this class with any type of data structure that implements the `Sortable` interface.
>
> Example:
>
> ```ts
> class NumbersCollection implements Sortable {
>   constructor(public data: number[]) {}
>
>   public get length(): number {
>     return this.data.length;
>   }
>
>   public compare(i: number, j: number): boolean {
>     return this.data[i] > this.data[j];
>   }
>
>   public swap(i: number, j: number): void {
>     const temp = this.data[i];
>     this.data[i] = this.data[j];
>     this.data[j] = temp;
>   }
> }
> ```
>
> If you wish to sort characters, the character collection object must also implement these methods in its own way: `class CharactersCollection implements Sortable { ...`.

<br>

#### 🔻 Abstract Classes

- Cannot Be Instantiated Directly:
  > You cannot create objects directly from an abstract class.
- Blueprint for Other Classes:
  > Abstract classes provide a common structure or interface for a group of related classes. It defines common methods (including abstract methods) and attributes that must be implemented by its subclasses.
- Abstract Methods:
  > Abstract classes often include abstract methods, which are methods without a body. Subclasses must provide concrete implementations for these abstract methods.
- May Contain Concrete Methods:
  > Abstract classes can also contain concrete (fully implemented) methods. Subclasses inherit these methods along with the abstract ones.

> This allows for more flexibility in designing and using class hierarchies because we can implement the methods in subclasses to fulfill their own specific needs.

> To create abstract classes or define abstract methods, you use the `abstract` keyword.

```ts
abstract class Sort {
  abstract compare(i: number, j: number): boolean;
  abstract swap(i: number, j: number): void;
  abstract length: number;

  public bubbleSort(): void {
    for (let i = 0; i < this.length; i++) {
      for (let j = 1; j < this.length - i; j++) {
        if (this.compare(j - 1, j)) {
          this.swap(j - 1, j);
        }
      }
    }
  }
}
```

```ts
class NumbersCollection extends Sort {
  constructor(public data: number[]) {
    super();
  }

  public get length(): number {
    return this.data.length;
  }

  public compare(i: number, j: number): boolean {
    return this.data[i] > this.data[j];
  }

  public swap(i: number, j: number): void {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }
}
```

```ts
class CharactersCollection extends Sort {
  constructor(public data: string) {
    super();
  }

  public get length(): number {
    return this.data.length;
  }

  public compare(i: number, j: number): boolean {
    return this.data[i].toLowerCase() > this.data[j].toLowerCase();
  }

  public swap(i: number, j: number): void {
    const characters = this.data.split("");

    const temp = characters[i];
    characters[i] = characters[j];
    characters[j] = temp;

    this.data = characters.join("");
  }
}
```

```ts
const numbersCollection = new NumbersCollection([10, 0, 100, 12, -23]);
numbersCollection.bubbleSort();
console.log(numbersCollection.data); // [-23, 0, 10, 12, 100]

const charactersCollection = new CharactersCollection("hellohowareyou");
charactersCollection.bubbleSort();
console.log(charactersCollection.data); // aeehhlloorwyy
```

<p align="right">
    <a href="#typescript">back to top ⬆</a>
</p>

<br>
<br>

## 🔶 More...

### 🔷 Optional Properties

In TypeScript, optional properties allow you to specify that a property may or may not be present in an object.

> You can mark certain properties as optional by appending a question mark (`?`) to the property name.

```ts
const person: { name: string; age?: number } = { name: "Sh" };
```

<br>

### 🔷 Conditional Types

Conditional types in TypeScript are a way to define types based on conditions.

Syntax:

```ts
type myType = SomeType extends OtherType ? TypeA : TypeB;
```

> Here, `myType` either is `TypeA` or `TypeB`, depending on the condition.

<br>

### 🔷 Type Assertions

In TypeScript, type assertions are a way to tell the compiler to treat a value as a specific type, regardless of its inferred or declared type.

> They are a way to inform the compiler about the developer's knowledge of the type at a particular point in the code. In other words, they are a developer's way of saying, "Trust me, I know the type better than you do."

> Only use type assertions when necessary, such as during data transformation or when working with external data sources.

There are two syntaxes for type assertions in TypeScript:

- Angle Bracket (`<>`) Syntax:
  > ```ts
  > let someValue: any = "Hello World!";
  > let strLength: number = (<string>someValue).length;
  > ```
- `as` Keyword Syntax:
  > ```ts
  > let someValue: any = "Hello World!";
  > let strLength: number = (someValue as string).length;
  > ```

Examples:

```ts
const configJson = `{
  "server": {
    "port": 3000,
    "host": "localhost"
  },
  app: {
    "name": "test"
    "version": "1.0.0"
  }
}`;

const config = JSON.parse(configJson); // config: any

const serverConf = config.server as { port: number; host: string };
const appConf = config.app as { name: string };
```

<br>

#### 🔻 `as const`

In TypeScript, `as const` is a type assertion that helps narrow down the type of a value to its literal type. When you use as const on a value, TypeScript treats the value as read-only and infers the most specific literal type for that value.

- Without `as const`:
  > TypeScript infers colors as `{ red: string, blue: string, green: string }`
  >
  > ```ts
  > const colors = {
  >   red: "red",
  >   blue: "blue",
  >   green: "green",
  > };
  > ```
- With `as const`:
  > TypeScript infers colors as `{ readonly red: "red", readonly blue: "blue", readonly green: "green" }`
  >
  > ```ts
  > const colors = {
  >   red: "red",
  >   blue: "blue",
  >   green: "green",
  > } as const;
  >
  > colors.red = "hello"; // Error: Cannot assign to 'red' because it is a read-only property.
  > // This is not only top level, but also nested.
  > ```

Using as an Enum:

```ts
const routes = {
  home: "/",
  login: "/auth/login",
  register: "/auth/register",
  dashboard: "/dashboard",
} as const;

type RoutePath = (typeof routes)[keyof typeof routes];
// type RoutePath = "/" | "/auth/login" | "/auth/register" | "/dashboard"

function navigateTo(path: RoutePath) {
  // ...
}

navigateTo("/auth/login");
navigateTo(routes.register);
```

> What is going on: [Indexed Access Types](#-indexed-access-types).
>
> ```ts
> type R = typeof routes;
> // type R = {
> //   readonly home: "/";
> //   readonly login: "/auth/login";
> //   readonly register: "/auth/register";
> //   readonly dashboard: "/dashboard";
> // }
>
> type Route = keyof typeof routes;
> // type Route = "home" | "login" | "register" | "dashboard"
>
> type RoutePath2 = R[Route];
> // type RoutePath2 = "/" | "/auth/login" | "/auth/register" | "/dashboard"
> ```

<br>

### 🔷 Type Guards

In TypeScript, a type guard is a mechanism that enables you to narrow down the type of a variable within a specific code block.

Type guards are often used in situations where TypeScript cannot automatically determine the type of a variable due to union types or other complex type scenarios that can have multiple shapes.

This mechanism allows us to utilize the specific functionalities of the particular type in a guarded code block.

```ts
// Example 1:
function printLength(value: string | number): void {
  if (typeof value === "string") {
    // 'value' is now recognized as type 'string' within this block
    console.log(value.length);
  } else {
    // 'value' is now recognized as type 'number' within this block
    console.log(value);
  }
}
```

```ts
// Example 2:
class Car {
  drive() {
    console.log("Driving a car");
  }
}

class Bicycle {
  ride() {
    console.log("Riding a bicycle");
  }
}

function moveVehicle(vehicle: Car | Bicycle): void {
  if (vehicle instanceof Car) {
    // 'vehicle' is now recognized as type 'Car' within this block
    vehicle.drive();
  } else {
    // 'vehicle' is now recognized as type 'Bicycle' within this block
    vehicle.ride();
  }
}
```

<br>

#### 🔻 Discriminated Unions

Discriminated Unions are a powerful and flexible way to work with different variations of a type in a type-safe manner. A discriminated union is a pattern where a type can have multiple shapes, but each shape is uniquely identified by a common property.

```ts
interface Bird {
  type: "bird";
  flySpeed: number;
}

interface Horse {
  type: "horse";
  runSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed: number;
  switch (animal.type) {
    case "bird":
      speed = animal.flySpeed;
      break;
    case "horse":
      speed = animal.runSpeed;
      break;
  }
  console.log("Moving at speed: " + speed);
}

moveAnimal({ type: "horse", runSpeed: 75 });
```

<br>

#### 🔻 Type Predicates

A user-defined type guard is a function whose return type is a type predicate. A type predicate is a special kind of return type that narrows the type of a variable within a certain block of code.

Syntax:

```ts
function isType(value: any): value is DesiredType {
  // Type checking logic
  // Should return a boolean indicating whether 'value' is of type 'DesiredType'
}
```

Examples:

```ts
// Example 1:
function isString(value: any): value is string {
  return typeof value === "string";
}

function processValue(input: any): void {
  if (isString(input)) {
    // 'input' is now recognized as type 'string' within this block
    console.log(input.toUpperCase());
  } else {
    console.log("Not a string");
  }
}

processValue("Hello"); // HELLO
processValue(123); // Not a string
```

```ts
// Example 2:
interface Bird {
  fly(): void;
}

interface Fish {
  swim(): void;
}

function isBird(pet: Bird | Fish): pet is Bird {
  return "fly" in pet; // return true if 'fly' is in 'pet'
}

function move(pet: Bird | Fish): void {
  if (isBird(pet)) {
    pet.fly(); // Bird-specific operation
  } else {
    pet.swim(); // Fish-specific operation
  }
}
```

<br>

#### 🔻 `satisfies`

In TypeScript, the `satisfies` keyword is used to check if a specific type fulfills a certain condition or interface. It essentially acts as a type guard, ensuring that a variable holds all the necessary properties and methods defined in the condition or interface.

> Unlike standard type assertions, `satisfies` preserves the original type information of the value.

What is it & usage:

```ts
type CityCoordinates = { longitude: number; latitude: number };

type City = string | CityCoordinates;

type User = {
  birthLocation: City;
  currentLocation: City;
};
```

- Normal Type Annotation:
  > TypeScript checks types but restricts the use of specific methods.
  >
  > ```ts
  > const user: User = {
  >   birthLocation: { latitude: 0, longitude: 0 },
  >   currentLocation: "London",
  >   hello: "t3", // Error: 'hello' does not exist in type 'User'.
  > };
  >
  > user.currentLocation.toUpperCase(); // Property 'toUpperCase' does not exist on type 'CityCoordinates'.
  > // currentLocation: City
  > ```
- Type Assertions:
  > Type assertions allow flexibility and give us complete control over the value, but they still restrict the use of specific methods.
  >
  > ```ts
  > const user = {
  >   birthLocation: { latitude: 0, longitude: 0 },
  >   currentLocation: "London",
  >   hello: "t3", // Ok
  > } as User;
  >
  > user.currentLocation.toUpperCase(); // Property 'toUpperCase' does not exist on type 'CityCoordinates'.
  > // currentLocation: City
  > ```
- `satisfies`:
  > The `satisfies` keyword checks types and allows the use of specific methods.
  >
  > ```ts
  > const user = {
  >   birthLocation: { latitude: 0, longitude: 0 },
  >   currentLocation: "London",
  >   hello: "t3", // Error: 'hello' does not exist in type 'User'.
  > } satisfies User;
  >
  > user.currentLocation.toUpperCase(); // OK
  > // currentLocation: string
  >
  > user.birthLocation.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type '{ latitude: number; longitude: number; }'.
  > ```

Also, watch these YouTube videos:

- [The `satisfies` operator ↗](https://youtu.be/49gHWuepxxE?si=rPn33iQkwbpoiEcU).
- [Most TS devs don't understand `satisfies` ↗](https://youtu.be/r1L35zxZQPE?si=oRsy1kQxr4yzy_jI).

<br>

### 🔷 Built-in Utility Types

Utility types are predefined generic types that provide helpful transformations and operations on other types. These utility types are built into the language and can be used to manipulate and work with existing types more conveniently.

- `Partial<Type>`:
  > Makes all properties of a type optional.
  >
  > ```ts
  > interface User {
  >   name: string;
  >   age: number;
  >   job: string;
  > }
  >
  > const partialUser: Partial<User> = {};
  > const partialUser2: Partial<User> = { name: "John" };
  >
  > console.log(partialUser); // {}
  > console.log(partialUser2); // { name: "John" }
  > ```
- `Required<Type>`:
  > Makes specific properties of a type required.
  >
  > ```ts
  > interface PartialUser {
  >   name?: string;
  >   age?: number;
  > }
  >
  > const requiredUser: Required<PartialUser> = { name: "John", age: 25 };
  > const requiredUser2: Required<PartialUser> = { name: "Sh" }; // Error: age is missing.
  > ```
- `Readonly<Type>`:
  > Prevents modification of properties after initial assignment. Protects data integrity.
  >
  > ```ts
  > interface MutableUser {
  >   name: string;
  >   age: number;
  > }
  >
  > const readOnlyUser: Readonly<MutableUser> = { name: "John", age: 25 };
  >
  > readOnlyUser.name = "Jane"; // Error: Cannot assign to 'name' because it is a read-only property.
  > ```
- `Pick<Type, Keys>`:
  > Creates a new type containing only specified properties from an object type.
  >
  > ```ts
  > interface User {
  >   name: string;
  >   age: number;
  >   job: string;
  > }
  >
  > const pickedUser: Pick<User, "name" | "age"> = { name: "John", age: 20 };
  > ```
- `Omit<Type, Keys>`:
  > Creates a new type excluding specified properties from an object type.
  >
  > ```ts
  > interface User {
  >   name: string;
  >   age: number;
  >   job: string;
  > }
  >
  > const omittedUser: Omit<User, "job"> = { name: "John", age: 20 };
  > ```
- `Exclude<UnionType, ExcludedMembers>`:
  > Excludes types from a union type.
  >
  > ```ts
  > type TypeUnion = "name" | "age" | "job";
  >
  > type ExcludedVersion = Exclude<TypeUnion, "age">;
  > // type ExcludedVersion = "name" | "job"
  > ```
- `ReturnType<Type>`:
  > Extracts the return type of a function type.
  >
  > ```ts
  > function greet() {
  >   return "Hello!";
  > }
  >
  > type TheType = ReturnType<typeof greet>;
  > // type TheType = string
  > ```
- `Parameters<Type>`:
  > Extracts the parameter types of a function type as an tuple.
  >
  > ```ts
  > function myFunction(name: string, age: number) {
  >   console.log(`Name: ${name}, Age: ${age}`);
  > }
  >
  > type TheType = Parameters<typeof myFunction>;
  > // type TheType = [name: string, age: number]
  > ```

For the full list, please visit the official [TypeScript Utility Types ↗](https://www.typescriptlang.org/docs/handbook/utility-types.html) documentation.

<p align="right">
    <a href="#typescript">back to top ⬆</a>
</p>

<br>
<br>
