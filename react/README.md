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
2. [Props](#-props)
   - [The `children` prop](#-the-children-prop)
   - [Passing Props Through](#-passing-props-through)
3. [useState](#-usestate)

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

#### 🔻 Expressions Inside Curly Braces `{}`

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

<br>

#### 🔻 State vs Handler Functions

- When the user sees something on the screen change:
  > We need state to implement this.
- When the user commits some action:
  > We need an event handler to implement this.

Where to define handler functions?

> They are usually defined in the same component as the state it modifies. However, they might be used in different components.

<br>
