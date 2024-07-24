<p align="center">
  <img src="../logo.png" height="200">
</p>

<h1 align="center">Go</h1>

<p align="center">
  Go is good.
</p>

<p align="right">
    <a href="https://github.com/seabeya/tech-stack#tech-stack">Main Page ↖</a>
</p>

#### Knowledge requirements

- Knowledge of any other programming language is a plus but not a requirement.

### Contents

1. [Basics](#-basics)
   - [Basic Data Types](#-basic-data-types)
   - [Declaring Variables](#-declaring-variables)
   - [String Formatting](#-string-formatting)
2. [Functions](#-functions)
   - [Pass-by-Value](#-pass-by-value)
   - [Pass-by-Reference with Pointers](#-pass-by-reference-with-pointers)
3. [Data Structures](#-data-structures)
   - [Structs](#-structs)
     - [Structs Methods](#-structs-methods)

<br>

<hr>

## 🔶 Basics

### 🔷 Basic Data Types

- Boolean:

  | Keyword | Values         |
  | ------- | -------------- |
  | `bool`  | `true`/`false` |

  > Zero value (default): `false`

- Integer:

  | Keyword                    | Size              | Values                                      |
  | -------------------------- | ----------------- | ------------------------------------------- |
  | `int`                      | 32 bits / 64 bits | int32 / int64                               |
  | `int8`                     | 8 bits            | -128 to 127                                 |
  | `int16`                    | 16 bits           | -32768 to 32767                             |
  | `int32`                    | 32 bits           | -2147483648 to 2147483647                   |
  | `int64`                    | 64 bits           | -9223372036854775808 to 9223372036854775807 |
  |                            |                   |                                             |
  | `uint`                     | 32 bits / 64 bits | uint32 / uint64                             |
  | `uint8` (alias for `byte`) | 8 bits            | 0 to 255                                    |
  | `uint16`                   | 16 bits           | 0 to 65535                                  |
  | `uint32`                   | 32 bits           | 0 to 4294967295                             |
  | `uint64`                   | 64 bits           | 0 to 18446744073709551615                   |

  > Zero value (default): `0`

- Float:

  | Keyword   | Size    | Values                 |
  | --------- | ------- | ---------------------- |
  | `float32` | 32 bits | -3.4e+38 to 3.4e+38    |
  | `float64` | 64 bits | -1.7e+308 to +1.7e+308 |

  > Zero value (default): `0`

- String:

  | Keyword  | Value                                  |
  | -------- | -------------------------------------- |
  | `string` | "anything surrounded by double quotes" |

  > Zero value (default): `""`

<br>

### 🔷 Declaring Variables

1.  Using the `var` keyword:

    ```go
    var varName type = value
    ```

    > - You always have to specify either `type` or `value` (or both):
    >   ```go
    >   var name string = "John"
    >   var surname = "Doe" // Go can infer the type of the variable from the initial value.
    >   var age int // zero value: 0
    >   ```

    > - Declaring multiple variables of the same or different types in a single line:
    >   ```go
    >   var name, age = "John", 30
    >   var a, b, c int = 1, 2, 3 // If the type keyword is used, it is only possible to declare one type of variable per line.
    >   ```

    > - Using grouped declaration syntax to declare variables together:
    >   ```go
    >   var (
    >   	name    string = "John"
    >   	surname        = "Doe"
    >   	age     int
    >   )
    >   ```

2.  Using the `:=` syntax:

    ```go
    varName := value
    ```

    > - You always have to follow the syntax above:
    >   ```go
    >   name := "John"
    >   ```

    > - This syntax is only available inside functions.

    > - Declaring multiple variables in a single line:
    >   ```go
    >   name, age := "John", 30
    >   ```

<br>

> [!NOTE]
> Variables declared without an explicit initial value are given their zero value.

<br>

3.  Constants:

    > Constants are fixed values that cannot be changed once they are set. They are read-only.

    ```go
    const varName type = value
    ```

    > - Constants can be declared without explicit types, but they must be declared with values:
    >   ```go
    >   const daysInWeek int = 7
    >   const hoursInDay = 24
    >   ```

    > - Declaring multiple constants in a single block:
    >   ```go
    >   const (
    >   	daysInWeek = 7
    >   	hoursInDay = 24
    >   )
    >   ```

    > - Computations on constants are done at compile time, not at runtime.

<br>

### 🔷 String Formatting

| Placeholders | Description                                                         | Usage                                    | Output               |
| ------------ | ------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| `%v`         | Default placeholder for everything.                                 | `("%v", 123)`                            | `123`                |
|              |                                                                     |                                          |                      |
| `%s`         | Plain string.                                                       | `("%s", "hello")`                        | `hello`              |
| `%q`         | String with double quotes.                                          | `("%q", "hello")`                        | `"hello"`            |
|              |                                                                     |                                          |                      |
| `%d`         | Integer in base 10.                                                 | `("%d", 123)`                            | `123`                |
| `%b`         | Integer in base 2.                                                  | `("%b", 123)`                            | `1111011`            |
| `%o`         | Integer in base 8.                                                  | `("%o", 123)`                            | `173`                |
| `%x`         | Integer in base 16 with lowercase letters.                          | `("%x", 123)`                            | `7b`                 |
| `%X`         | Integer in base 16 with uppercase letters.                          | `("%X", 123)`                            | `7B`                 |
|              |                                                                     |                                          |                      |
| `%f`         | Floating-point number in decimal format.                            | `("%f", 123.456)`                        | `123.456000`         |
| `%e`         | Floating-point number in scientific notation with a lowercase 'e'   | `("%e", 123.456)`                        | `1.234560e+02`       |
| `%E`         | Floating-point number in scientific notation with an uppercase 'E'. | `("%E", 123.456)`                        | `1.234560E+02`       |
|              |                                                                     |                                          |                      |
| `%t`         | Boolean value.                                                      | `("%t", true)`                           | `true`               |
|              |                                                                     |                                          |                      |
| `%T`         | Prints the type of the value.                                       | `("%T", 123)`                            | `int`                |
| `%+v`        | Prints struct fields with their names.                              | `("%+v", Person{Name: "John", Age: 35})` | `{Name:John Age:35}` |
| `%%`         | Prints a literal `%` sign.                                          | `("%%")`                                 | `%`                  |

> Examples:
>
> - Printing a string and an integer:
>   ```go
>   func main() {
>     name := "John"
>     age := 35
>     fmt.Printf("Name: %s, Age: %d", name, age) // Name: John, Age: 35
>   }
>   ```
> - Formatting a floating-point number:
>   ```go
>   func main() {
>     pi := 3.14159
>     fmt.Printf("Pi: %.2f", pi) // Pi: 3.14
>   }
>   ```

<p align="right">
    <a href="#go">back to top ⬆</a>
</p>

<br>
<br>

## 🔶 Functions

- Declaring a function:
  ```go
  func add(a int, b int) int {
    return a + b
  }
  ```
- Calling a function:
  ```go
  result := add(2, 3) // result = 5
  ```
- Functions can have multiple return values:
  ```go
  func swap(a, b int) (int, int) {
    return b, a
  }
  ```
  ```go
  x, y := 1, 2
  x, y = swap(x, y) // x = 2, y = 1
  ```
- Ignoring return values:
  > Ignoring return values is useful when you don't need to use the return values of a function.
  ```go
  x, _ = getCoords()
  ```
- Named return values:
  > When you have named return values, you can use the return keyword without specifying the values. It will automatically return the named return values. However, using the return keyword without specifying the values can hurt readability, so it is not recommended.
  ```go
  func calculate(x int) (result int) {
    result = x * x
    return
  }
  ```
- Variadic functions:
  > Variadic functions are functions that can accept a variable number of arguments.
  ```go
  func sum(numbers ...int) int {
    total := 0
    for _, number := range numbers {
  	  total += number
    }
    return total
  }
  ```
- Anonymous functions:
  > Anonymous functions are functions that don't have a name.
  ```go
  greet := func(name string) {
    fmt.Println("Hello, " + name)
  }
  greet("John") // Output: Hello, John
  ```

<br>

### 🔷 Pass-by-Value

In Go, functions use `pass-by-value` for arguments. This means that when you pass a value to a function, Go creates a copy of that value and passes the copy to the function. The function works with this copy, so changes made to the parameter inside the function do not affect the original value.

```go
func main() {
  num := 5
  increment(num)
  fmt.Println("Outside function:", num) // Outside function: 5
}

func increment(num int) {
  num++
  fmt.Println("Inside function:", num) // Inside function: 6
}
```

<br>

### 🔷 Pass-by-Reference with Pointers

If you need to modify the original value, you can use pointers. A pointer holds the memory address of a value. When you pass a pointer to a function, you’re passing the address of the value, not a copy of it. This allows the function to modify the original value.

```go
func main() {
  num := 5
  increment(&num)
  fmt.Println("Outside function:", num) // Outside function: 6
}

func increment(num *int) {
  *num++
  fmt.Println("Inside function:", *num) // Inside function: 6
}
```

<p align="right">
    <a href="#go">back to top ⬆</a>
</p>

<br>
<br>

## 🔶 Data Structures

### 🔷 Structs

Structs in Go are a way to group related variables under a single name.

- Defining a struct:
  ```go
  type person struct {
      name string
      age  int
  }
  ```
- Creating a struct instance:
  ```go
  user := person{name: "John", age: 35}
  ```
  or zero valued:
  ```go
  var user person
  ```
- Accessing and modifying struct fields:
  ```go
  fmt.Println(user.name) // John
  user.age = 30
  ```
- Embedded and nested structs:

  ```go
  type address struct {
  	city    string
  	state   string
  	zipCode string
  }

  type contact struct {
  	phone string
  	email string
  }

  type person struct {
  	name    string
  	age     int
  	address         // Embedded struct
  	contact contact // Nested struct

  }

  func main() {
  	user := person{
  		name: "John",
  		age:  35,
  		address: address{
  			city:    "Los Angeles",
  			state:   "California",
  			zipCode: "00000",
  		},
  		contact: contact{
  			phone: "(000) 000-0000",
  			email: "john@example.com",
  		},
  	}

  	fmt.Println(user)               // {John 35 {Los Angeles California 00000}}
  	fmt.Println(user.city)          // Los Angeles
  	fmt.Println(user.contact.phone) // (000) 000-0000
  }
  ```

<br>

#### 🔻 Structs Methods

- Defining a method:
  ```go
  func (p person) sayHello() {
    fmt.Println("Hello, my name is " + p.name)
  }
  ```
- Calling a method:
  ```go
  user := person{name: "John", age: 35}
  user.sayHello() // Hello, my name is John
  ```
- Manipulating using methods:

  > Here, we need to use pointers to manipulate the struct through the method because of the pass-by-value rule.

  ```go
  func main() {
    user := person{name: "John", age: 35}

    user.sayHello() // Hello, my name is John

    user.changeName("Sha'an")

    user.sayHello() // Hello, my name is Sha'an
  }

  func (p *person) changeName(name string) {
    p.name = name
  }
  ```

<br>
