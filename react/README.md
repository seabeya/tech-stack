<p align="center">
  <img src="../logo.png" height="200">
</p>

<h1 align="center">React.js</h1>

<p align="center">
  -
</p>

> ReactJS.

<p align="right">
    <a href="https://github.com/seabeya/tech-stack#tech-stack">Main Page ↖</a>
</p>

#### Knowledge requirements

- Knowledge of [JavaScript](../js/README.md) is required.

### Contents

1. [JSX](#-jsx)
   - [File Structure](#-jsx-file-structure)
   - [Syntax & Rules](#-jsx-syntax--rules)
     - [Naming Components](#-naming-components)
     - [One Top Level Element](#-one-top-level-element)
     - [Returning JSX](#-returning-jsx)
     - [Expressions Inside Curly Braces](#-expressions-inside-curly-braces)
     - [Self-Closing Tags](#-self-closing-tags)
     - [JSX Value Displaying Limitations](#-jsx-value-displaying-limitations)
     - [Conditional Rendering](#-conditional-rendering)
     - [Inline Styles](#-inline-styles)
     - [Element Props](#-element-props)
2. [Props](#-props)
   - [The `children` prop](#-the-children-prop)
   - [Passing Props Through](#-passing-props-through)
3. [Handler Functions](#-handler-functions)
   - [Passing Data Up](#-passing-data-up)
   - [Handling Text Inputs](#-handling-text-inputs)
4. [React Hooks](#-react-hooks)
   - [useState](#-usestate)
     - [Working with Objects & Arrays](#-working-with-objects--arrays)
     - [The new value depends on the old value](#-the-new-value-depends-on-the-old-value)
   - [useEffect](#-useeffect)
     - [Cleanup Functions (optional)](#-cleanup-functions-optional)
   - [useReducer](#-usereducer)
   - [useRef](#-useref)
     - [forwardRef](#-forwardref)
   - [useCallback](#-usecallback)
5. [More...](#-more)
   - [Working with Lists](#-working-with-lists)
   - [Portals](#-portals)

<br>

<hr>

## 🔶 JSX

JSX (JavaScript XML) is an extension syntax used in React, a popular JavaScript library for building user interfaces. It allows developers to write HTML-like code within JavaScript, enabling the creation of dynamic and interactive components. With JSX, you can combine JavaScript expressions and HTML-like tags to describe the structure and appearance of UI components.

JSX allows the embedding of JavaScript expressions within curly braces (`{}`). This enables dynamic content and the use of variables, functions, and other JavaScript features within the JSX code.

```jsx
const name = "John Doe";
const element = <h1>Hello, {name}!</h1>;
```

The JSX expression is transformed into JavaScript code by a transpiler (such as Babel) before being executed in the browser.

<br>

### 🔷 JSX File Structure

1. Imports:
   > ```jsx
   > import React from "react";
   > import SomeComponent from "./SomeComponent.jsx";
   > import "./styles.css";
   > import css from "./some.module.css";
   > ```
2. Components:
   > One file can have multiple components.
   >
   > ```jsx
   > function MyComponent() {
   >   // Component logic
   >   const name = "John";
   >
   >   return (
   >     // JSX markup representing the structure of the component
   >     <div className={css.left}>
   >       <h1 className="right">Hello!</h1>
   >       <SomeComponent />
   >       <div>
   >         <h1>Hello {name}</h1>
   >       </div>
   >     </div>
   >   );
   > }
   > ```
3. Exports
   > ```jsx
   > export default MyComponent;
   > // or
   > export { MyComponent };
   > ```

<br>

### 🔷 JSX Syntax & Rules

#### 🔻 Naming Components

It is recommended to start component names with a capital letter.

> Examples: `MyComponent`, `Component1`, etc.

<br>

#### 🔻 One Top Level Element

This means that you must wrap multiple elements in a single parent element.

> You cannot directly render two adjacent elements side by side. If you need to return multiple elements, wrap them with a containing element, like a `div` or `<> </>`.

- Invalid:
  > ```jsx
  > return (
  >  <p>Element 1</p>
  >  <span>Element 2</span>
  > );
  > ```
- Valid:
  > ```jsx
  > // Using an HTML element just because of this reason is not recommended.
  > return (
  >   <div>
  >     <p>Element 1</p>
  >     <span>Element 2</span>
  >   </div>
  > );
  > ```
  >
  > ```jsx
  > return (
  >   <>
  >     <p>Element 1</p>
  >     <span>Element 2</span>
  >   </>
  > );
  > ```
  >
  > ```jsx
  > // If we have some required props, for example, "key" for list items, but we don't want a specific element as a wrapper.
  > return (
  >   <React.Fragment>
  >     <p>Element 1</p>
  >     <span>Element 2</span>
  >   </React.Fragment>
  > );
  > ```

<br>

#### 🔻 Returning JSX

- Single line JSX:
  > ```jsx
  > return <h1>Line 1</h1>;
  > ```
- Multi line JSX:
  > ```jsx
  > return (
  >   <div>
  >     <h3>Line 1</h3>
  >     <p>Line 2</p>
  >   </div>
  > );
  > ```

<br>

#### 🔻 Expressions Inside Curly Braces

To embed JavaScript expressions within JSX, you need to wrap them in curly braces `{}`. This allows you to dynamically compute values, access variables, or execute functions.

```jsx
function MyComponent() {

  const name = "sha'an";
  const randomText = 'THE END';

  return (
    <>
      <h2>My name is {name}.</h1>
      <p>I am {2023 - 2000} years old.</p>
      <p>{randomText.toLowerCase()}</p>
      <p>Summary: {name}, {2023 - 2000}, {randomText}</p>
    </>
  );
}
```

<br>

#### 🔻 Self-Closing Tags

For tags without children, you should use self-closing syntax.

- Invalid:
  > ```jsx
  > <img src="image.jpg" alt="An image">
  >
  > <MyComponent>
  > ```
- Valid:
  > ```jsx
  > <img src="image.jpg" alt="An image" />\
  >
  > <MyComponent />
  > ```

<br>

#### 🔻 JSX Value Displaying Limitations

JSX can display `numbers` and `strings`. However, when you try to display other types of values like `arrays`, `booleans`, etc., they are not displayed or may exhibit unexpected behavior.

> This limitation only applies when you attempt to display something. You can still use them inside props, etc.

<br>

#### 🔻 Conditional Rendering

In React, conditional rendering is a way to display different components or content based on certain conditions.

> There are several ways to achieve conditional rendering. Here, I'll be showing only a few of them.

- Using Ternary Operator:
  > ```jsx
  > const MyComponent = ({ isLoggedIn }) => {
  >   return (
  >     <div>
  >       {isLoggedIn ? (
  >         <p>Welcome, User!</p>
  >       ) : (
  >         <p>Please log in to access the content.</p>
  >       )}
  >     </div>
  >   );
  > };
  > ```
- Using an External Function:
  > ```jsx
  > function MyComponent({ isLoggedIn }) {
  >   const renderProfile = () => {
  >     if (!isLoggedIn) {
  >       return <p>Please log in to access the content.</p>;
  >     } else {
  >       return <p>Welcome, User!</p>;
  >     }
  >   };
  >
  >   return <div>{renderProfile()}</div>;
  > }
  > ```
- Using Logical `&&` Operator:
  > ```jsx
  > const MyComponent = ({ isLoggedIn }) => {
  >   return (
  >     <div>
  >       {isLoggedIn && <p>Welcome, User!</p>}
  >       {!isLoggedIn && <p>Please log in to access the content.</p>}
  >     </div>
  >   );
  > };
  > ```
  - Risks of this approach:
    > Everything is okay when your conditionals are `boolean` values. If the value is `false`, it will try to display the boolean value itself, and as we know from "Displaying Limitations" it will show nothing.
    >
    > But what if our conditionals are numbers, and we pass `0` as a falsey value? It will render the `0` itself, which is a problem.
    >
    > You can fix it using the Double Logical NOT `!!` operator.
    >
    > ```js
    > let a = 0;
    > console.log(!!a); // false
    >
    > let b = 1;
    > console.log(!!b); // true
    > ```
    >
    > Or, you can use other approaches to conditional rendering.

Take a look: [JS > Expressions and Operators](https://github.com/seabeya/tech-stack/blob/main/js/README.md#-expressions-and-operators).

<br>

#### 🔻 Inline Styles

Inline styles are provided as objects. If the style name has a dash in it, we remove the dash and capitalize the next letter (camelCase).

```jsx
return (
  <p
    style={{
      backgroundColor: "black",
      color: "red",
      width: "50px",
    }}
  >
    Hello!
  </p>
);
```

<br>

#### 🔻 Element Props

We can assign just about any prop to a JSX element as we would to an HTML element.

- All prop names follow camelCase.
- The class attribute is written as `className`.
- Use curly braces `{}` when assigning props to refer to a JavaScript variable/expressions or a number.
  > ```jsx
  > <MyComponent data={items}></MyComponent>
  >
  > <MyComponent data={[1, 2, 3]}></MyComponent>
  >
  > <MyComponent data={10}></MyComponent>
  > ```
- Props that expect a string should be written with double quotes `""`.
  > ```jsx
  > <span className="btn btn-primary"></span>
  > ```
- If a prop is a Boolean and its value is `true`, it can be written as just the property name without a value. If `false`, it should be written with curly braces `{}`.
  > ```jsx
  > // isActive={true}
  > <MyComponent isActive></MyComponent>
  >
  > <MyComponent isActive={false}></MyComponent>
  > ```

<p align="right">
    <a href="#reactjs">back to top ⬆</a>
</p>

<br>
<br>

## 🔶 Props

In React, "props" is a shorthand for "properties" and it refers to the data that is passed from a parent component to a child component.

```jsx
import ChildComponent from "./ChildComponent.jsx";

// Sending myVar data down:
function ParentComponent() {
  return <ChildComponent myVar="hello" />;
}
```

```jsx
// Receiving myVar data from the top:
function ChildComponent(props) {
  return <div>{props.myVar}</div>;
  // We can also use the function `ChildComponent({ myVar }) { ... }` syntax.
}
```

> The name `props` is not important; we can name it whatever we want.

<br>

#### 🔻 The `children` prop

In React, the `children` prop is a special prop used to pass components or content to another component as its children.

```jsx
function FirstComponent({ children }) {
  return <div>{children}</div>;
}
```

```jsx
import FirstComponent from "./FirstComponent.jsx";

function SecondComponent() {
  return (
    <FirstComponent>
      <p>Hi.</p>
      <button>Click me</button>
      <OtherComponent />
    </FirstComponent>
  );
}
```

> Here, anything between the `FirstComponent` tags will automatically get passed to that component as a special `children` prop.

<br>

#### 🔻 Passing Props Through

We can pass props down using the rest operator syntax. This way, we achieve passing unlimited props.

```jsx
import Button from "./Button.jsx";

function App() {
  return (
    <Button
      isActive
      id={9}
      type="button"
      data={[1, 2, 3]}
      className="font-light text-white"
    >
      A Button
    </Button>
  );
}
```

```jsx
function Button({ isActive, data, ...rest }) {
  console.log(rest); // {id: 9, className: 'font-light text-white', children: 'A Button'}

  console.log(data, isActive); // [1, 2, 3] true

  return <button {...rest}>{rest.children}</button>;
  // <button id="9" type="button" class="font-light text-white">A Button</button>
}
```

> By using this syntax, we can now add whatever extra props we want to pass through. For example, if we pass something different from the known arguments (`isActive`, `data`), it will be handled by `...rest`.

Additionally, if a prop that already exists in the `rest` object is specified later in the component, it overwrites the previous value.

```jsx
import DisplayVars from "./DisplayVars.jsx";

function App() {
  const data = {
    a: 1,
    b: 2,
    c: 3,
  };

  return <DisplayVars a={99} {...data} b={99} />;
}
```

```jsx
function DisplayVars(props) {
  console.log(props.a); // 1
  console.log(props.b); // 99
  console.log(props.c); // 3

  ...
}
```

<p align="right">
    <a href="#reactjs">back to top ⬆</a>
</p>

<br>
<br>

## 🔶 Handler Functions

In React, a handler function refers to a function used for handling events triggered by user interactions or other actions in a React application.

> When naming handler functions, it is common practice to use the `handle + EventName` or `handle + identifier + EventName` pattern.

```jsx
function App() {
  // event handler function:
  const handleClick = () => {
    console.log("Clicked");
  };

  return <button onClick={handleClick}>Click</button>;
}
```

> [!NOTE]
> Functions passed to event handlers must be passed, not called.
>
> - Incorrect: `<button onClick={handleClick()}>`
> - Correct: `<button onClick={handleClick}>`

If the function uses arguments, you use it this way:

```jsx
return <button onClick={() => handleClick("Hello")}>Click</button>;
```

The handler functions can also be passed as props to child components, enabling them to communicate with their parent components.

Here is the full list of supported [HTML events ↗](https://react.dev/reference/react-dom/components/common#common-props).

<br>

#### 🔻 The Event Object

When you pass a function to an event handler in React, React automatically provides the event object as the first argument to the function.

This way, you have access to the event object if it's necessary for your functionality.

```jsx
function App() {
  const handleClick = (e) => {
    e.preventDefault();

    console.log("Clicked");
  };

  return (
    <a href="#" onClick={handleClick}>
      Click!
    </a>
  );
}
```

<br>

### 🔷 Passing Data Up

We can communicate directly down to child components, but there is no way to communicate directly with the parent component. To achieve that, we use handler functions.

```jsx
import ChildComponent from "./ChildComponent.jsx";

function ParentComponent() {
  const handleSubmit = (dataFromDown) => {
    console.log("button clicked, ", dataFromDown);
  };

  return <ChildComponent onSubmit={handleSubmit} />;
}
```

```jsx
function ChildComponent({ onSubmit }) {
  const handleClick = () => {
    onSubmit("data from child component");
  };

  return <button onClick={handleClick}>Submit</button>;
}
```

> You can also pass that to the sibling components. So the structure will be like: `ChildComponent > ParentComponent > TheOtherChildComponent`.

<br>

### 🔷 Handling Text Inputs

Handling text inputs involves managing the state of the input component and updating it based on user input.

The steps:

1. Create a new piece of state.
2. Create a handler function to watch for the `onChange` event.
3. When the `onChange` event fires, get the target value from the event object in the handler function.
4. Update the state with the value.
5. Update the input element with the new state value.

```jsx
function App() {
  const [inputValue, setInputValue] = useState("");

  // Event handler for input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <p className="text-white">You typed: {inputValue}</p>
    </div>
  );
}
```

But why?

> Handling text inputs in this way, where we manage the input value in the component's state, offers several benefits:
>
> - Reactivity:
>   > By updating the component state on each input change, React will automatically re-render the component with the updated value. This ensures that the UI stays in sync with the user's input.
> - Single Source of Truth:
>   > The state becomes the single source of truth for the input value. This makes it easier to manage and manipulate the data because you have a clear and centralized location to access and update it.
> - Controlled Components:
>   > The approach used is known as creating a controlled component. The component's state "controls" the value of the input, allowing you to intercept and modify user input as needed before updating the state.

<p align="right">
    <a href="#reactjs">back to top ⬆</a>
</p>

<br>
<br>

# 🟪 React Hooks

<p align="center">
  <a href="#-usestate">useState</a> • 
  <a href="#-useeffect">useEffect</a> • 
  <a href="#-usereducer">useReducer</a> • 
  <a href="#-useref">useRef</a> • 
  <a href="#-usecallback">useCallback</a>
</p>

<br>

## 🔶 useState

State refers to the data that changes as the user interacts with our app.

It is the only method through which we can modify what content React displays. If you wish to alter what is visible on the screen, `useState` is the exclusive way to achieve this.

Syntax:

```jsx
const [myVar, setMyVar] = useState(defaultValue);
```

- `myVar`: The current value.
- `setMyVar`: The setter function. The only way we use to update the value.
- `defaultValue`: The default value (can be anything).

Example:

```jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // the handler function:
  const handleClick = () => {
    console.log("Clicked");
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={handleClick}>Click</button>
      <div>Value: {count}</div>
    </>
  );
}
```

> We can use `useState` multiple times. Calling `useState` defines a new piece of state:
>
> ```jsx
> const [value, setValue] = useState(0);
> const [lastMessage, setLastMessage] = useState("");
> const [age, setAge] = useState(23);
> ```

How it works:

- React invokes the function component (in our example, `App()`) with the updated state every time we modify the state value using the setter function.
- When a component re-renders, all its children also re-render.

<br>

#### 🔻 Where to Define State?

Does any component beside the current one need to know what the current state is?

- Yes: Define it in a common parent.
- No: Define it where it should belong (current component).

> [!WARNING]
> Don't forget! `useState` re-renders the entire component where it is defined and its child components again and again when it gets updated. Therefore, the defining place and structuring of components are crucial when it comes to performance.

> Example:
>
> ```jsx
> function ExpensiveComponent() {
>   console.log("ExpensiveComponent rendered");
>   return <div>This is an expensive component.</div>;
> }
> ```
>
> ```jsx
> function AnotherExpensiveComponent() {
>   console.log("AnotherExpensiveComponent rendered");
>   return <div>This is another expensive component.</div>;
> }
> ```
>
> ```jsx
> import AnotherExpensiveComponent from "./AnotherExpensiveComponent.jsx";
>
> function AnotherComponent() {
>   console.log("AnotherComponent rendered");
>
>   return (
>     <>
>       <div>This is another component.</div>
>       <AnotherExpensiveComponent />
>     </>
>   );
> }
> ```
>
> ```jsx
> import AnotherComponent from "./AnotherComponent.jsx";
>
> // State defined in this component.
> function MyComponent({ children }) {
>   console.log("MyComponent rendered");
>
>   const [count, setCount] = useState(0);
>
>   function handleClick() {
>     setCount(count + 1);
>   }
>
>   return (
>     <div>
>       <button onClick={handleClick}>Click to count!</button>
>       {children}
>       <h1>{count}</h1>
>       <AnotherComponent />
>     </div>
>   );
> }
> ```
>
> ```jsx
> function ADifferentComponent() {
>   console.log("ADifferentComponent rendered");
>   return <div>This is a different component.</div>;
> }
> ```
>
> ```jsx
> import ExpensiveComponent from "./ExpensiveComponent.jsx";
> import MyComponent from "./MyComponent.jsx";
> import ADifferentComponent from "./ADifferentComponent.jsx";
>
> function App() {
>   console.log("App rendered");
>
>   return (
>     <div>
>       <MyComponent>
>         <ExpensiveComponent />
>       </MyComponent>
>       <ADifferentComponent />
>     </div>
>   );
> }
> ```
>
> In this example, when we click the 'Click to count!' button, `MyComponent`, its child component `AnotherComponent`, and its child component `AnotherExpensiveComponent` will re-render. However, `ExpensiveComponent` will not re-render because it is not a child of `MyComponent` and does not depend on any state or props that change when the button is clicked. Similarly, `ADifferentComponent` will not re-render either; it does not depend on any state or props that change when the button is clicked.
>
> Here's a breakdown of the component hierarchy:
>
> - `App`
>   - `MyComponent`
>     - `AnotherComponent`
>       - `AnotherExpensiveComponent`
>   - `ExpensiveComponent`
>   - `ADifferentComponent`

<br>

#### 🔻 State vs Handler Functions

- When the user sees something on the screen change:
  > We need state to implement this.
- When the user commits some action:
  > We need an event handler to implement this.

Where to define handler functions?

> They are usually defined in the same component as the state it modifies. However, they might be used in different components.

<br>

### 🔷 Working with Objects & Arrays

Do not directly mutate/update arrays or objects.

- Wrong:
  > ```jsx
  > // Array:
  > const [colors, setColors] = useState([]);
  >
  > colors.push("red");
  > colors.push("green");
  > colors[0] = "blue";
  > ```
  >
  > ```jsx
  > // Object:
  > const [user, setUser] = useState({
  >   name: "Sh",
  >   age: 23,
  > });
  >
  > user.age = 24;
  > ```
- Correct:
  > Use the current value to create a new value, then use the setter function to update the value entirely with the newly created value.
  >
  > ```jsx
  > // Array:
  > const [colors, setColors] = useState([]);
  >
  > // add elements to the start:
  > const addColor = (colorToAdd) => {
  >   const updatedColors = [colorToAdd, ...colors];
  >   setColors(updatedColors);
  > };
  >
  > // add elements to the end:
  > const addColor = (colorToAdd) => {
  >   const updatedColors = [...colors, colorToAdd];
  >   setColors(updatedColors);
  > };
  >
  > // add an element to any index:
  > const addColorAtIndex = (colorToAdd, index) => {
  >   const updatedColors = [
  >     ...colors.slice(0, index),
  >     colorToAdd,
  >     ...colors.slice(index),
  >   ];
  >   setColors(updatedColors);
  > };
  >
  > // remove by index
  > const removeByIndex = (indexToRemove) => {
  >   const updatedColors = colors.filter((color, index) => {
  >     return index !== indexToRemove;
  >   });
  >   setColors(updatedColors);
  > };
  > ```
  >
  > ```jsx
  > // Object:
  > const [fruit, setFruit] = useState({
  >   name: "apple",
  >   color: "red",
  > });
  >
  > // update the value:
  > const changeColor = (newColor) => {
  >   const updatedFruit = {
  >     ...fruit,
  >     color: newColor,
  >   };
  >   setFruit(updatedFruit);
  > };
  >
  > // remove a property (color):
  > const removeProperty = () => {
  >   const { color, ...rest } = fruit;
  >   setFruit(rest);
  > };
  > ```

<br>

### 🔷 The new value depends on the old value

The state value is not always the up-to-date value.

> This is because React batches state updates for performance reasons. So, it doesn't guarantee that the state has been updated immediately after calling `setState`.

> This batching mechanism helps reduce the number of re-renders and improves overall performance.

> If you have a series of state updates happening quickly, using the regular form may lead to unexpected behavior.

- The usual way:
  > ```jsx
  > const [counter, setCounter] = useState(0);
  >
  > const handleClick = () => {
  >   setCounter(counter + 1);
  >
  >   setCounter(counter + 1);
  > };
  > ```
  >
  > No matter what, this updates the state by `+1` every time you click, not `+2`. In `handleClick`, the `counter` isn't updated immediately, causing both `setCounter` calls to see the same `counter` value.
  >
  > `useState` doesn't trigger a component re-render if it detects that the new value is the same as the old value (applies to primitive values only). Hence, it will re-render the component only once.
- The guaranteed way:
  > ```jsx
  > const [counter, setCounter] = useState(0);
  >
  > const handleClick = () => {
  >   setCounter((currVal) => {
  >     // `currVal` is the most up-to-date version of `counter`.
  >     return currVal + 1;
  >   });
  >
  >   setCounter((currVal) => currVal + 1);
  > };
  > ```
  >
  > Here, you provide a callback function that takes the current state as an argument. React ensures that this callback function is invoked with the most up-to-date state, even if multiple state updates are queued. Consequently, the component will re-render twice.

<p align="right">
    <a href="#reactjs">back to top ⬆</a>
</p>

<br>
<br>

## 🔶 useEffect

In simpler terms, `useEffect` is a tool in React that helps you handle additional tasks, known as side effects, in your components.

> Its purpose is to let you control when and how these side effects occur, making your code more organized and easier to maintain.

> When you use the `useEffect` hook, the code inside it runs after the component has been added/mounted to the DOM, making it a convenient place to handle side effects after the initial component render.

Syntax:

> `useEffect` takes two arguments:
>
> - A function containing the code to run.
> - An optional array of dependencies.

```jsx
import { useEffect } from "react";

function App() {
  // ...

  // Called only after the 1st (initial) render and never again:
  useEffect(() => {
    // your code
  }, []); // empty array

  // Called after the 1st (initial) render and every (subsequent) render.
  useEffect(() => {
    // your code
  }); // no second argument

  // Called after the 1st (initial) render and every subsequent render when the 'count' state changes.
  useEffect(() => {
    // your code
  }, [count]); // has dependencies

  // ...
}
```

<br>

#### 🔻 Cleanup Functions (optional)

The first argument of `useEffect`, which contains the code to run, can also return a function, and we use the returned function for cleanup purposes.

```jsx
function App() {
  useEffect(() => {
    const listener = () => {
      console.log("listener");
    };

    document.body.addEventListener("click", listener);

    // Cleanup function: Remove the event listener
    return () => {
      document.body.removeEventListener("click", listener);
    };
  }, [count]);
}
```

Purpose of Cleanup Functions:

> Let's say we have one event listener. Without cleanup, every time `useEffect` runs, it will register a new listener. So, if the `useEffect` function is rendered for example 10 times, and after that, we click the body element, the listener function will run 10 times.
>
> With cleanup, we clean up the previous event listener and register a new one. This prevents the occurrence of weird behavior.

Variations:

- Second argument is an empty array:
  > ```jsx
  > function App() {
  >   useEffect(() => {
  >     console.log("hello");
  >
  >     // Cleanup function: Runs only when the component is unmounted
  >     return () => {
  >       console.log("hi");
  >     };
  >   }, []);
  > }
  > ```
  >
  > What happens:
  >
  > 1. First render:
  >    - Run the main function.
  >    - Return the cleanup function.
  >      > The cleanup function doesn't run on the first render.
  > 2. If we remove the component from the screen:
  >    - Run the previously returned cleanup function.
- Second argument is not an empty array:
  > ```jsx
  > function App() {
  >   useEffect(() => {
  >     console.log("hello");
  >
  >     // Cleanup function: Runs on component unmount or when 'count' changes
  >     return () => {
  >       console.log("hi");
  >     };
  >   }, [count]);
  > }
  > ```
  >
  > What happens:
  >
  > 1. First render:
  >    - Run the main function.
  >    - Return the cleanup function.
  >      > The cleanup function doesn't run on the first render.
  > 2. Second render:
  >    - Run the previously returned cleanup function.
  >    - Run the main function.
  >    - Return a new cleanup function.
  > 3. Subsequent renders:
  >    - Run the previously returned cleanup function.
  >    - Run the main function.
  >    - Return a new cleanup function.
  > 4. If we remove the component from the screen:
  >    - Run the previously returned cleanup function.

<p align="right">
    <a href="#reactjs">back to top ⬆</a>
</p>

<br>
<br>

## 🔶 useReducer

`useReducer` is a React hook used for state management in React applications, offering an alternative to the more commonly used `useState` hook.

It is useful when your state logic becomes more complex or when you have multiple actions that can affect the same state. In such cases, it can make your code more organized and maintainable.

How it works:

1. Reducer Function:

   > This function should be a pure function, meaning it should only depend on its inputs/parameters and should not produce any side effects.

   > The reducer function takes two arguments: the current `state` and an `action` object. It then returns a new state based on the action.

   > The `action` object typically has a `type` property that describes the type of action being performed and can also include additional `payload` data as needed.

   > All business logic related to your state should be handled here to return a new state. Ensure you never break the existing structure; do not edit the object directly, always create a new one based on the old one.

   > It is also recommended to use the default case and return the current state back if there is no action matching to avoid breaking the state. Or you can throw an error.

2. Hook Usage:

   > Use `useReducer` in your component, passing in the `reducer` function and the initial `state` object (all state for the whole component defined in a single object) as an argument.

   > It returns an array with two elements: the current `state` and a `dispatch` function (which is used to update the state).

3. Dispatching Actions:

   > To update the state, call the `dispatch` function with an `action` object that describes what should happen. Subsequently, the `reducer` function will be invoked with the current `state` and the provided `action` object, resulting in the generation of a new state.

   > An `action` is typically an object with:
   >
   > - A `type` property that describes the action (communicates to the reducer how the state is supposed to change).
   > - A `payload` property that contains some data.
   >
   > You can also call `dispatch` without an `action` object, but in this case, there will be no logic to separate or describe the actions in the `reducer` function.

   > The component re-renders whenever you dispatch using the `dispatch` function.

```jsx
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      // Note: we do not edit the object directly, we do it like this:
      return { ...state, count: state.count + state.boost };
    case "DECREMENT":
      return { ...state, count: state.count - state.boost };
    case "SET_BOOST":
      return { ...state, boost: +action.payload.boost };
    case "RESET":
      return { count: 0, boost: 1 };
    default:
      return state;
  }
};

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, { count: 0, boost: 1 });

  return (
    <div>
      <div>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
      </div>
      <div>
        <p>Default Boost: {state.boost}</p>
        <input
          type="number"
          value={state.boost}
          onChange={(event) =>
            dispatch({
              type: "SET_BOOST",
              payload: { boost: event.target.value },
            })
          }
        />
      </div>
      <br />
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}

export default MyComponent;
```

<p align="right">
    <a href="#reactjs">back to top ⬆</a>
</p>

<br>
<br>

## 🔶 useRef

Refs are a way to access and interact with DOM elements directly or to store a mutable reference to a value that persists across renders without causing re-renders when the `ref` value changes.

How it works:

1. Creating a Ref:
   > ```jsx
   > const myRef = useRef(initialValue);
   > ```
   >
   > `initialValue` is an optional argument that initializes the ref with a specific value. So, `myRef.current` will be the `initialValue` initially or `undefined` if not specified.
2. Accessing the Ref's Current Value:
   > ```jsx
   > console.log(myRef.current);
   > ```
   >
   > The primary use of a `ref` is to access its `current` property, which holds the current value.
   >
   > You can also assign values to the current property directly: `myRef.current = newValue;`.

Use Cases:

- Accessing DOM Elements:
  > Create a ref using `useRef`, attach it to an HTML element, and then access the corresponding DOM element using the `current` property of the `ref` object.
  >
  > ```jsx
  > import { useRef, useEffect } from "react";
  >
  > function MyComponent() {
  >   const myInputRef = useRef(null);
  >
  >   useEffect(() => {
  >     console.log(myInputRef.current); // <input type="text" />
  >
  >     // Focus on the input element when the component mounts
  >     myInputRef.current.focus();
  >   }, []);
  >
  >   return <input ref={myInputRef} type="text" />;
  > }
  >
  > export default MyComponent;
  > ```
- Storing Mutable Data:
  > You can use `useRef` to store data that should not trigger a re-render when it changes. This is useful when:
  >
  > - Keeping track of values between renders.
  > - Caching the result of expensive computations, preventing the need to recalculate the value on each render.
  > - Wanting to control the workflow of the current component when working with other state-related tasks.
  >
  > Here is a video explanation: https://youtu.be/42BkpGe8oxg

<br>

### 🔷 forwardRef

Useful when you need to access the DOM element of the child component from the parent component.

Example:

```jsx
import { forwardRef } from "react";

const ChildComponent = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});
```

```jsx
import { useRef } from "react";

import ChildComponent from "./ChildComponent.jsx";

function ParentComponent() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <ChildComponent ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

<p align="right">
    <a href="#reactjs">back to top ⬆</a>
</p>

<br>
<br>

## 🔶 useCallback

In React, `useCallback` is a hook used to memoize functions, especially callback functions, to prevent unnecessary re-renders of child components.

When you create a function inside a functional component, it gets recreated on each render.

`useCallback` helps by memoizing the function, ensuring it remains the same between renders unless its dependencies change.

Syntax:

> ```jsx
> const memoizedCallback = useCallback(callback, dependenciesArray);
> ```
>
> `useCallback` returns a memoized version of the callback function you provide, but it doesn't execute the callback function itself.

How it works:

- First render:
  > During the first render, it creates and returns the memoized callback function provided as the first argument. The callback doesn't run at this stage.
- Next renders:
  - When the second argument is an empty array:
    > Returns the same memoized original callback from early renders. This is useful when you want to ensure the callback function remains the same, effectively preventing it from being recreated.
  - When the second argument contains elements that have changed since the last render:
    > Recreates the callback function and returns the new version.

Example:

```jsx
import { useState, useCallback } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);

  // Without useCallback
  const handleClickWithoutCallback = () => {
    console.log("Button clicked!", count);
  };

  // With useCallback
  const handleClickWithCallback = useCallback(() => {
    console.log("Button clicked!", count);
  }, [count]);

  return (
    <div className="text-white">
      <button onClick={handleClickWithoutCallback}>
        Click without useCallback
      </button>
      <button onClick={handleClickWithCallback}>Click with useCallback</button>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount((curCount) => curCount + 1);
        }}
      >
        Click to increment count!
      </button>
    </div>
  );
};
```

> `useCallback` is generally more beneficial when dealing with complex components or when optimizing performance becomes crucial.

<p align="right">
    <a href="#reactjs">back to top ⬆</a>
</p>

<br>
<br>

# 🟪 More...

## 🔶 Working with Lists

In React, when you render a list of elements using a loop or map function, you are required to assign a special attribute called `key` to each rendered element. The `key` attribute is a unique identifier that helps React keep track of each element's identity within the list.

```js
const MyList = () => {
  const items = ["Item 1", "Item 2", "Item 3"];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
```

This is for:

- Reconciliation and Performance:
  > React uses the `key` attribute to efficiently update and reconcile the Virtual DOM. When items in a list change, React can quickly identify which items have been added, removed, or updated based on their keys.
- Preventing Unnecessary Re-renders:
  > Without proper keys, React might not accurately determine which items have changed, leading to unnecessary re-renders of components. This can impact performance and cause unexpected behavior in your application.
- Stable Identity:
  > Keys provide a stable identity for elements across renders. This is crucial when elements are reordered or their positions change. React uses keys to differentiate between elements and maintain consistent behavior during updates.

Rules:

- Add the key to the top-most element in the list.
- Keys must be unique within the list.
- Keys should be stable, meaning that they should not change if the list is reordered or updated.
  > For example, using array indices as keys is generally not recommended. However, it can be okay if you are not updating the list at all. In that case, they will be stable enough to use as keys.
- The key must be a string or number.

<br>

Example:

> Each item has an event handler attached to it.

```jsx
function App() {
  const items = [
    { id: 10001, name: "item1" },
    { id: 10002, name: "item2" },
  ];

  const [currentItem, setCurrentItem] = useState(null);

  const renderedItems = items.map((item) => {
    return (
      <div key={item.id} className="text-red-600">
        {item.name}
        <button className="text-green-600" onClick={() => setCurrentItem(item)}>
          Select
        </button>
      </div>
    );
  });

  return (
    <div>
      {renderedItems}
      <div className="text-blue-600">
        <h1>Current Item</h1>
        {currentItem && <div>{currentItem.name}</div>}
      </div>
    </div>
  );
}
```

<p align="right">
    <a href="#reactjs">back to top ⬆</a>
</p>

<br>
<br>

## 🔶 Portals

In React, portals provide a way to render components outside the normal DOM hierarchy of the parent component.

> Portals can be useful for scenarios like modals, tooltips, and other overlay UI elements.

Syntax:

```jsx
const MyPortal = ({ children }) => {
  const portalRoot = document.getElementById("portal-root");
  return ReactDOM.createPortal(children, portalRoot);
};
```

- `children`: React components or tree of elements that you want to render.
- `portalRoot`: A reference to a DOM element where the child will be rendered.

Example:

```jsx
import ReactDOM from "react-dom";

const MyComponent = () => {
  return ReactDOM.createPortal(
    <div>
      <h1>Hello!</h1>
      <p>This content is rendered outside the normal component hierarchy.</p>
    </div>,
    document.getElementById("portal-root")
  );
};

export default MyComponent;
```

> Don't forget that you need to create a new root element for the new portal, like:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    ...
  </head>
  <body>
    <!-- The main root element -->
    <div id="root"></div>
    <!-- Root element for our portal content -->
    <div id="portal-root"></div>
  </body>
</html>
```

<p align="right">
    <a href="#reactjs">back to top ⬆</a>
</p>

<br>
<br>
