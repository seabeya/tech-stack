<p align="center">
  <img src="./logo.png" height="150">
</p>

<h1 align="center">Go</h1>

<p align="center">
  Go is good.
</p>

<p align="right">
  <a href="../#tech-stack">Main Page ↖</a>
</p>

#### Knowledge requirements

- Knowledge of any other programming language is a plus but not a requirement.

### Contents

1. [Understanding Go](#-understanding-go)
   - [Essentials](#-essentials)
     - [Packages](#-packages)
     - [Modules](#-modules)
   - [Go CLI](#-go-cli)
     - [Module and Dependency Management](#-module-and-dependency-management)
     - [Running & Building](#-running--building)
   - [Project Structure Examples](#-project-structure-examples)
     - [#1. An executable Go project with no extra packages.](#-1-an-executable-go-project-with-no-extra-packages)
     - [#2. An executable Go project with extra nested packages.](#-2-an-executable-go-project-with-extra-nested-packages)
     - [#3. A separate non-executable Go library project.](#-3-a-separate-non-executable-go-library-project)
2. [Basics](#-basics)
   - [Basic Data Types](#-basic-data-types)
   - [Declaring Variables](#-declaring-variables)
   - [String Formatting](#-string-formatting)
3. [Functions](#-functions)
   - [The `defer` Keyword](#-the-defer-keyword)
   - [Closures](#-closures)
   - [Pass-by Value/Reference](#-pass-by-valuereference)
4. [Pointers](#-pointers)
5. [Data Structures](#-data-structures)
   - [Structs](#-structs)
     - [Structs Methods](#-structs-methods)
   - [Arrays](#-arrays)
   - [Slices](#-slices)
   - [Maps](#-maps)
6. [Generics](#-generics)
7. [Concurrency](#-concurrency)
   - [Goroutines](#-goroutines)
   - [Channels](#-channels)
     - [Channel Status](#-channel-status)
     - [The `select` Statement](#-the-select-statement)
     - [Read-Only and Write-Only Channels](#-read-only-and-write-only-channels)

<br>

---

## 🔶 Understanding Go

### 🔷 Essentials

#### 🔻 Packages

In Go, code is organized into packages. A package is a collection of Go files in the same directory that are compiled together. Each Go file starts with a package statement that defines the package it belongs to.

There are two types of packages:

- Main package:
  > Files with the `package main` statement define a main package. The main package must contain a `main()` function, which is the starting point of the application.
- Library package:
  > Files with a package statement other than `main` define a library package. Library packages can be imported and used by other packages. These packages are used to organize code into reusable components.

> [!NOTE]
> Only the main package can be executed directly as a standalone program. Library packages can not run on their own. They are meant to be imported and used by other packages.

<br>

#### 🔻 Modules

A module is a collection of related Go packages. It is defined by a go.mod file, which specifies the module's name/path and its dependencies.

<br>

### 🔷 Go CLI

#### 🔻 Module and Dependency Management

- `go mod init <module-name>`: Initialize a new Go module.
  > Creates a `go.mod` file to manage dependencies.
  >
  > The module name should match the intended import path. Usually, it is the URL of the repository where the module is being hosted (`go mod init github.com/user/repo`).
- `go mod tidy`: Clean and verify dependencies.
  > Adds missing dependencies required by the code and removes unused ones.
  >
  > Updates `go.mod` and `go.sum` to accurately reflect the actual imports in use.
- `go get <module>@version`: Update a dependency.
  > Downloads a module and updates it to the specified version.
  >
  > Updates `go.mod` and `go.sum` accordingly.
- `go clean -modcache`: Clear the local module cache.
  > Deletes all downloaded modules from the module cache directory (`$GOPATH/pkg/mod`).

<br>

#### 🔻 Running & Building

- `go run <file>...`: Compile and execute code directly.
  > Compiles and runs the specified Go files.
- `go build`: Compile code into a binary.
  > Builds the Go source files in the current directory and produces an executable.
  >
  > If the package does not include a `main()` function, no binary will be created.
- `go install <module>`: Install a binary.
  > Installs the specified module as a binary in the `$GOPATH/bin` directory.

<br>

### 🔷 Project Structure Examples

#### 🔻 #1. An executable Go project with no extra packages.

1. Create a directory called `myapp`.
2. Initialize a project (module):
   ```sh
   go mod init github.com/username/myapp
   ```
3. Create a `main.go` file:

   ```go
   package main

   import "fmt"

   func main() {
   	fmt.Println("Hello, World!")
   }
   ```

4. Create a different Go file (called `calculate.go`) under the same package:

   ```go
   package main

   func add(a, b int) int {
   	return a + b
   }

   func subtract(a, b int) int {
   	return a - b
   }
   ```

5. Update the `main.go` file to use the functions defined in `calculate.go`:

   > You don't need to import the functions if they are defined in the same package. They are already part of the package.

   ```go
   package main

   import "fmt"

   func main() {
   	fmt.Println(add(1, 2))      // 3
   	fmt.Println(subtract(5, 3)) // 2
   }
   ```

> Overall directory structure:
>
> ```sh
> myapp/
>   ├── go.mod
>   ├── main.go
>   └── calculate.go
> ```

> [!NOTE]
> A folder can only have files that belong to the same package.

> [!NOTE]
> You cannot have multiple functions with the same name under a single package, even if they are in different files.

<br>

#### 🔻 #2. An executable Go project with extra nested packages.

> Overall directory structure:
>
> ```sh
> myapp/
>   ├── go.mod
>   ├── main.go
>   └── calculate/
>           ├── basic.go
>           └── advanced.go
> ```
>
> The `go.mod` file remains in the root directory and handles the dependencies for the entire project. You don't need separate `go.mod` files for nested packages.

1. main.go:

   > You need to import the nested packages because they are not part of the importing package (`main` in this case).

   > When you import nested packages, you need to use their full paths relative to the module path. `github.com/username/myapp` -> `/calculate` = `github.com/username/myapp/calculate`.

   ```go
   package main

   import (
   	"fmt"

   	"github.com/username/myapp/calculate"
   )

   func main() {
   	fmt.Println(calculate.Add(1, 2))      // 3
   	fmt.Println(calculate.Subtract(5, 3)) // 2

   	fmt.Println(calculate.Square(5))      // 25
   	fmt.Println(calculate.SquareRoot(25)) // 5
   }
   ```

2. calculate/

   - basic.go:

     ```go
     package calculate

     func Add(a, b int) int {
     	return a + b
     }

     func Subtract(a, b int) int {
     	return a - b
     }
     ```

   - advanced.go:

     ```go
     package calculate

     import "math"

     func Square(x int) int {
     	return x * x
     }

     func SquareRoot(x int) float64 {
     	return math.Sqrt(float64(x))
     }
     ```

> [!IMPORTANT]
> In Go, only identifiers (variables, functions, types, etc.) that start with an uppercase letter are exported and can be accessed from other packages.

<br>

#### 🔻 #3. A separate non-executable Go library project.

> Overall directory structure:
>
> ```sh
> mylib/
>   ├── go.mod
>   ├── mylib.go
>   └── generate/
>           ├── name.go
>           └── surname.go
> ```

1. Create a directory called `mylib` for the library project.
2. Initializing a library module:
   ```sh
   go mod init github.com/username/mylib
   ```
3. mylib.go:

   ```go
   package mylib

   import (
   	"fmt"

   	"github.com/username/mylib/generate"
   )

   func SayHi() {
   	fmt.Printf("Hi %s!\n", generate.Name())
   }

   func SayBye() {
   	fmt.Printf("Bye %s!\n", generate.Surname())
   }

   func GetFullName() string {
   	return fmt.Sprintf("%s %s", generate.Name(), generate.Surname())
   }
   ```

4. generate/:

   - name.go:

     ```go
     package generate

     func Name() string {
     	return "John"
     }
     ```

   - surname.go:

     ```go
     package generate

     func Surname() string {
     	return "Doe"
     }
     ```

<br>

---

Todo:

> #4. Using an external library/package in a Go project.

<p align="right">
    <a href="#go">back to top ⬆</a>
</p>

<br>
<br>

## 🔶 Basics

### 🔷 Basic Data Types

- Boolean:

  | Keyword | Values         |
  | ------- | -------------- |
  | `bool`  | `true`/`false` |

  > Zero value (default): `false`

- Numeric:

  | Keyword        | Size            | Values                                      |
  | -------------- | --------------- | ------------------------------------------- |
  | `uint8`/`byte` | 8-bit           | 0 to 255                                    |
  | `uint16`       | 16-bit          | 0 to 65535                                  |
  | `uint32`       | 32-bit          | 0 to 4294967295                             |
  | `uint64`       | 64-bit          | 0 to 18446744073709551615                   |
  |                |                 |                                             |
  | `int8`         | 8-bit           | -128 to 127                                 |
  | `in16`         | 16-bit          | -32768 to 32767                             |
  | `int32`/`rune` | 32-bit          | -2147483648 to 2147483647                   |
  | `int64`        | 64-bit          | -9223372036854775808 to 9223372036854775807 |
  |                |                 |                                             |
  | `float32`      | 32-bit          | -3.4e+38 to 3.4e+38                         |
  | `float64`      | 64-bit          | -1.7e+308 to +1.7e+308                      |
  |                |                 |                                             |
  | `uint`         | 32 bit / 64 bit | uint32 / uint64                             |
  | `int`          | 32 bit / 64 bit | int32 / int64                               |

  > Zero value (default): `0`

- String:

  > A string value is a sequence of bytes.
  >
  > Strings are immutable: once created, it is impossible to change the contents of a string.

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

    > Variables declared without an explicit initial value are given their zero value.

    - You always have to specify either `type` or `value` (or both):
      > ```go
      > var name string = "John"  // explicit type and value
      > var surname = "Doe"       // type is inferred as string
      > var age int               // declared with explicit type, initialized to zero value (0)
      > ```
    - Declaring multiple variables of the same or different types in a single line:
      > ```go
      > var name, age = "John", 30  // mixed types, types inferred
      > var a, b, c int = 1, 2, 3   // all must be of the declared type
      > var x, y int                // both initialized to zero (0)
      > ```
    - Using grouped declaration syntax to declare variables together:
      > ```go
      > var (
      > 	name    string = "John"
      > 	surname        = "Doe"  // type is inferred
      > 	age     int             // zero value: 0
      > )
      > ```

2.  Using the `:=` syntax:

    ```go
    varName := value
    ```

    > When you use this syntax to declare a variable, you must provide a value for it.
    >
    > `:=` can only be used inside functions (not outside, at the package level).

    - Declaring multiple variables in a single line:
      > ```go
      > name, age := "John", 30
      > ```

3.  Constants:

    > Constants are fixed values that cannot be changed once they are set. They are read-only.

    ```go
    const varName type = value
    ```

    - Constants can be declared without explicit types, but they must be declared with values:
      > ```go
      > const daysInWeek int = 7
      > const hoursInDay = 24
      > ```
    - Declaring multiple constants in a single block:
      > ```go
      > const (
      > 	daysInWeek = 7
      > 	hoursInDay = 24
      > )
      > ```

    > Computations on constants are done at compile time, not at runtime.

<br>

> [!NOTE]
> You can not re-declare a variable that has already been declared in the same scope.

<br>

### 🔷 String Formatting

| Placeholder | Description                                                         | Usage                                    | Output               |
| ----------- | ------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| `%v`        | Default placeholder for everything.                                 | `("%v", 123)`                            | `123`                |
|             |                                                                     |                                          |                      |
| `%s`        | Plain string.                                                       | `("%s", "hello")`                        | `hello`              |
| `%q`        | String with double quotes.                                          | `("%q", "hello")`                        | `"hello"`            |
|             |                                                                     |                                          |                      |
| `%d`        | Integer in base 10.                                                 | `("%d", 123)`                            | `123`                |
| `%b`        | Integer in base 2.                                                  | `("%b", 123)`                            | `1111011`            |
| `%o`        | Integer in base 8.                                                  | `("%o", 123)`                            | `173`                |
| `%x`        | Integer in base 16 with lowercase letters.                          | `("%x", 123)`                            | `7b`                 |
| `%X`        | Integer in base 16 with uppercase letters.                          | `("%X", 123)`                            | `7B`                 |
| `%c`        | Integer in Unicode code point.                                      | `("%c", 65)`                             | `A`                  |
|             |                                                                     |                                          |                      |
| `%f`        | Floating-point number in decimal format.                            | `("%f", 123.456)`                        | `123.456000`         |
| `%e`        | Floating-point number in scientific notation with a lowercase 'e'   | `("%e", 123.456)`                        | `1.234560e+02`       |
| `%E`        | Floating-point number in scientific notation with an uppercase 'E'. | `("%E", 123.456)`                        | `1.234560E+02`       |
|             |                                                                     |                                          |                      |
| `%t`        | Boolean value.                                                      | `("%t", true)`                           | `true`               |
|             |                                                                     |                                          |                      |
| `%T`        | Prints the type of the value.                                       | `("%T", 123)`                            | `int`                |
| `%+v`       | Prints struct fields with their names.                              | `("%+v", Person{Name: "John", Age: 35})` | `{Name:John Age:35}` |
| `%%`        | Prints a literal `%` sign.                                          | `("%%")`                                 | `%`                  |

> Examples:
>
> - Printing a string, an integer and a char:
>   ```go
>   func main() {
>   	name := "John"
>   	age := 35
>   	char := 97
>   	fmt.Printf("Name: %s, Age: %d, Char: %c ", name, age, char) // Name: John, Age: 35, Char: a
>   }
>   ```
> - Formatting a floating-point number:
>   ```go
>   func main() {
>   	pi := 3.14159
>   	fmt.Printf("Pi: %.2f", pi) // Pi: 3.14
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

Extra:

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
- First-class functions:

  > First-class functions are functions that can be assigned to variables, passed as arguments to other functions, and returned as values from other functions.

  ```go
  func main() {
  	price := 100.00

  	fmt.Printf("Regular user price: $%.2f\n", applyDiscount(price, regularDiscount)) //  Regular user price: $90.00
  	fmt.Printf("VIP user price: $%.2f\n", applyDiscount(price, vipDiscount))         //  VIP user price: $80.00
  }

  func vipDiscount(price float64) float64 {
  	return price * 0.8 // discount 20%
  }

  func regularDiscount(price float64) float64 {
  	return price * 0.9 // discount 10%
  }

  func applyDiscount(price float64, strategy func(float64) float64) float64 {
  	return strategy(price)
  }
  ```

- Anonymous functions:
  > Anonymous functions are functions that don't have a name.
  ```go
  func main() {
  	func() {
  		fmt.Println("Hello, world!")
  	}() // <-- Immediately invoking the anonymous function
  }
  ```
  - Assigning the anonymous function to a variable:
    ```go
    add := func(a, b int) {
    	fmt.Println(a + b)
    }
    add(1, 2) // 3
    ```

<br>

### 🔷 The `defer` Keyword

The `defer` keyword allows us to execute a function or line of code at the end of the current function's execution. This is useful for cleaning up resources, such as closing files or connections.

```go
func main() {
	defer sayBye()

	fmt.Println("1")

	defer fmt.Println("2")

	fmt.Println("3")

	fmt.Println(myFunc())
}

func myFunc() string {
	defer fmt.Println("4")
	return "5"
}

func sayBye() {
	fmt.Println("bye")
}
```

> Output:
>
> ```sh
> 1
> 3
> 4
> 5
> 2
> bye
> ```
>
> Multiple deferred statements are executed in last-in-first-out (LIFO) order. This means that the most recently deferred function is executed first.

<br>

### 🔷 Closures

Closures are functions that can access and manipulate variables from their outer scope, even after the outer function has finished executing.

```go
func add() func(int) int {
	sum := 0

	return func(number int) int {
		sum += number
		return sum
	}
}

func main() {
	count1 := add()
	count2 := add()

	fmt.Println(count1(1)) // 1
	fmt.Println(count1(2)) // 3
	fmt.Println(count1(3)) // 6

	fmt.Println(count2(2)) // 2
	fmt.Println(count2(4)) // 6
	fmt.Println(count2(6)) // 12
}
```

> Each call to `add()` returns a new closure with its own independent `sum` variable, allowing `count1` and `count2` to maintain separate internal states.

<br>

### 🔷 Pass-by Value/Reference

- Pass-by-Value

  > In Go, functions use `pass-by-value` for arguments. This means that when you pass a value to a function, Go creates a copy of that value and passes the copy to the function. The function works with this copy, so changes made to the parameter inside the function do not affect the original value.

  ```go
  func main() {
  	num := 5
  	increment(num)
  	fmt.Println("Outside:", num) // Outside: 5
  }

  func increment(num int) {
  	num++
  	fmt.Println("Inside:", num) // Inside: 6
  }
  ```

- Pass-by-Reference with Pointers

  > If you need to modify the original value, you can use pointers. A pointer holds the memory address of a value. When you pass a pointer to a function, you're passing the address of the value, not a copy of it. This allows the function to modify the original value.

  ```go
  func main() {
  	num := 5
  	increment(&num)
  	fmt.Println("Outside:", num) // Outside: 6
  }

  func increment(num *int) {
  	*num++
  	fmt.Println("Inside:", *num) // Inside: 6
  }
  ```

<p align="right">
    <a href="#go">back to top ⬆</a>
</p>

<br>
<br>

## 🔶 Pointers

Pointers in Go allow you to directly reference the memory address of a variable. This allows you to directly access and modify the value stored in that memory location.

- `&`: To get the memory address of a variable.
- `*`: To access or modify the value at the memory address.

```go
func main() {
	// Declaring a variable:
	a := 10

	// Declaring a pointer and assigning it the address of 'a':
	ptr := &a

	fmt.Println(a)        // 10
	fmt.Printf("%T\n", a) // int (type of 'a')

	fmt.Println(ptr)        // 0xc0000a4010 (memory address of 'a')
	fmt.Printf("%T\n", ptr) // *int (type of 'ptr')
	fmt.Println(*ptr)       // 10 (value at the memory address)

	// Changing the value at the memory address:
	*ptr = 20

	fmt.Println(a) // 20
}
```

Passing pointers to functions allows you to modify the original value:

```go
func main() {
	num := 10
	fmt.Println(num) // 10

	resetVal(num)
	fmt.Println(num) // 10

	resetPtr(&num)
	fmt.Println(num) // 0
}

func resetVal(val int) {
	val = 0
}

func resetPtr(val *int) {
	*val = 0
}
```

> [!WARNING]
> When a pointer does not point to a valid memory address, it is called a `nil` pointer. If you try to dereference a `nil` pointer, you will get a `panic: runtime error: invalid memory address or nil pointer dereference` error.
>
> - Bad: (this code will panic)
>   > ```go
>   > func main() {
>   > 	// Declaring a pointer (zero valued):
>   > 	var ptr *int
>   >
>   > 	fmt.Println(ptr) // <nil>
>   >
>   > 	reset(ptr)
>   > }
>   >
>   > func reset(val *int) {
>   > 	*val = 0 // panic: runtime error: invalid memory address or nil pointer dereference
>   > }
>   > ```
> - Good. Handling `nil` pointers: (this code will return an error instead of panicking)
>   > ```go
>   > func main() {
>   > 	var ptr *int
>   > 	fmt.Println(ptr) // <nil>
>   >
>   > 	fmt.Printf("reset(ptr): %v\n", reset(ptr)) // reset(ptr): invalid pointer
>   > }
>   >
>   > func reset(val *int) error {
>   > 	if val == nil {
>   > 		return errors.New("invalid pointer")
>   > 	}
>   >
>   > 	*val = 0
>   >
>   > 	return nil
>   > }
>   > ```

> [!NOTE]
> Using pointers in Go can greatly improve performance by reducing memory usage and increasing speed, as they allow large data structures to be passed to functions without being copied.

<p align="right">
    <a href="#go">back to top ⬆</a>
</p>

<br>
<br>

## 🔶 Data Structures

### 🔷 Structs

A struct is a sequence of uniquely named elements, called fields, each of which has a name and a type.

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

Extra:

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

  	fmt.Println(user)               // {John 35 {Los Angeles California 00000} {(000) 000-0000 john@example.com}}
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

Extra:

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

### 🔷 Arrays

In Go, array is a fixed-size sequence of elements of a single type.

- Declaring an array:
  ```go
  var arr [5]int // zero valued
  ```
  - Initializing at the time of declaration:
    ```go
    arr := [5]int{1, 2, 3, 4, 5}
    ```
- Accessing array elements:
  ```go
  fmt.Println(arr[0]) // 1
  ```
- Modifying array elements:
  ```go
  arr[0] = 100
  fmt.Println(arr[0]) // 100
  ```

Extra:

- Letting the compiler decide the size of the array:
  ```go
  arr := [...]int{1, 5: 2, 3, 4, 5}
  ```
- Initializing specific indexes of an array:
  > When you use the `index: value` syntax, you specify the value for a particular index in the array. This allows you to skip some indices (with zero values) and directly assign values to others.
  ```go
  arr := [...]int{10, 20, 5: 1, 30, 8: 2, 40}
  fmt.Println(arr) // [10 20 0 0 0 1 30 0 2 40]
  ```
- Multi-dimensional arrays:
  ```go
  arr2d := [3][2]int{
  	{1, 2},
  	{3, 4},
  	{5, 6},
  }
  fmt.Println(arr2d) // [[1 2] [3 4] [5 6]]
  ```
- Slicing an array:
  > Slicing allows you to create a slice from an array or an existing slice.
  ```go
  arr := [5]int{0, 10, 20, 30, 40}
  fmt.Println(arr[1:3]) // [10 20]
  ```
  Syntax:
  > ```go
  > slice1 := arr[2:4] // From index 2 to index 3
  > slice2 := arr[:4]  // From the start to index 3
  > slice3 := arr[4:]  // From index 4 to the end
  > slice4 := arr[:]   // The entire array
  > ```

<br>

### 🔷 Slices

In Go, a slice is a dynamically-sized, flexible view into the elements of an array. Unlike arrays, slices can grow and shrink the length during execution.

- Declaring a slice:
  ```go
  var slice []int // zero length
  ```
  - Using the make function:
    > non-zero length & zero valued
    ```go
    slice := make([]int, 5)
    ```
  - Initializing at the time of declaration:
    ```go
    slice := []int{1, 2, 3, 4, 5}
    ```

Extra:

- Appending to a slice:
  ```go
  slice := []int{1, 2, 3}
  slice = append(slice, 4, 5, 6)
  fmt.Println(slice) // [1 2 3 4 5 6]
  ```
- Removing elements from a slice:
  - Removing the `index 2` element:
    > The `...` syntax is known as the **"variadic"** operator. When you use it after a slice, it "unpacks" the slice so that its elements can be passed as individual arguments.
    ```go
    slice = append(slice[:2], slice[3:]...)
    ```
  - Removing the last element:
    ```go
    slice = slice[:len(slice)-1]
    ```
  - Removing all elements expect the first two:
    ```go
    slice = slice[:2]
    ```

<br>

> [!NOTE]
> When you pass a slice to a function, you are passing a reference to the underlying array, not a copy of the array's elements. Any modifications to the elements of the slice within the function will affect the original array.
>
> ```go
> func main() {
> 	slice := []int{1, 2, 3}
>
> 	fmt.Println("Before:", slice) // Before: [1 2 3]
>
> 	modifySlice(slice)
>
> 	fmt.Println("After:", slice) // After: [99 2 3]
> }
>
> func modifySlice(s []int) {
> 	s[0] = 99
> }
> ```
>
> While slices behave like pass-by-reference for the data they point to, the slice itself is passed by value. This means if you reassign the slice variable inside the function, it won't affect the original slice variable outside the function.
>
> ```go
> func main() {
> 	slice := []int{1, 2, 3}
>
> 	fmt.Println("Before:", slice) // Before: [1 2 3]
>
> 	reassignSlice(slice)
>
> 	fmt.Println("After:", slice) // After: [1 2 3]
> }
>
> func reassignSlice(s []int) {
> 	s = []int{100, 200, 300}
> 	s[0] = 999
> }
> ```

> [!IMPORTANT]
> Slices have a length, which is the number of elements they contain, and a capacity, which is the size of the underlying array they reference.
>
> If you append elements to a slice beyond its current capacity, Go will handle this automatically by allocating a (2x) larger array and copying the existing elements to it (to the new address). This can be an expensive operation in terms of performance.
>
> ```go
> var slice []int // slice is initially nil, with a length and capacity of 0.
> fmt.Println(len(slice)) // 0
> fmt.Println(cap(slice)) // 0
>
> slice = append(slice, 1, 2, 3, 4)
>
> fmt.Println(len(slice)) // len: 4
> fmt.Println(cap(slice)) // cap: 4
>
> slice = append(slice, 5, 6)
>
> fmt.Println(len(slice)) // len: 6
> fmt.Println(cap(slice)) // cap: 8
> ```
>
> We can also predefine the capacity of a slice when we declare it:
>
> ```go
> slice := make([]int, 0, 10)
>
> fmt.Println(slice)      // []
> fmt.Println(len(slice)) // len: 0
> fmt.Println(cap(slice)) // cap: 10
> ```

> [!CAUTION]
> Never use `append` on anything other than itself.
>
> ```go
> func main() {
> 	a := make([]int, 5, 7) // 3rd argument is the capacity.
> 	fmt.Println("a:", a) // a: [0 0 0 0 0]
>
> 	b := append(a, 1)
> 	fmt.Println("b:", b) // b: [0 0 0 0 0 1]
>
> 	c := append(a, 2)
>
> 	fmt.Println("a:", a) // a: [0 0 0 0 0]
> 	fmt.Println("b:", b) // b: [0 0 0 0 0 2] <-- b got updated because of c
> 	fmt.Println("c:", c) // c: [0 0 0 0 0 2]
> }
> ```
>
> Here, when creating the `b` slice, the `a` slice has a capacity of `7` and a length of `5`, which means it can add a new element without allocating a new array. So, `b` now references the same array as `a`. The same thing happens when creating `c`. It also references the same array as `a`. At this point, because both `b` and `c` share the same underlying array, appending `2` through `c` updates the `1` that was appended through `b`.
>
> This unexpected behavior would not occur if there were not enough capacity for the new element. In that case, Go would allocate a new array and copy the existing elements to it, resulting in new addresses. But still, it is prone to go unexpected.

<br>

### 🔷 Maps

Maps in Go are used to store unordered collections of key-value pairs.

- Declaring & initializing a map:
  > You can't just declare a map with `var m map[string]int` and then assign values to it. If you try to do this, you'll get a `panic: assignment to entry in nil map` error. To make the map ready to use, you need to initialize it (either empty or with values) using the `make` function as shown below.
  ```go
  m := make(map[string]int)
  ```
  - Initializing with values:
    ```go
    m := map[string]int{
    	"one":   1,
    	"two":   2,
    	"three": 3,
    }
    ```
- Accessing map elements:
  ```go
  fmt.Println(m["one"]) // 1
  ```
- Adding elements to a map:
  ```go
  m["four"] = 4
  fmt.Println(m) // map[one:1 two:2 three:3 four:4]
  ```
- Deleting elements from a map:
  ```go
  delete(m, "two")
  fmt.Println(m) // map[one:1 three:3]
  ```
- Modifying map elements:
  ```go
  m["one"] = 100
  fmt.Println(m["one"]) // 100
  ```

Extra:

- Checking if a key exists in a map:
  > The optional second return value is a boolean indicating whether the key was found in the map.
  ```go
  _, ok := m["one"]
  fmt.Println(ok) // true
  ```
- Clearing all elements from a map:
  ```go
  clear(m)
  ```
- Nested maps:

  ```go
  m2d := make(map[string]map[string]int)

  m2d["a"] = map[string]int{"first": 1}

  fmt.Println(m2d) // map[a:map[first:1]]

  fmt.Println(m2d["a"]["first"]) // 1
  ```

> [!CAUTION]
> In Go, maps need to be initialized before you can use them.
>
> ```go
> func main() {
> 	m2d := make(map[string]map[string]int)
>
> 	m2d["a"]["b"] = 1 // <-- panic: assignment to entry in nil map
>
> 	m2d["a"] = make(map[string]int)
>
> 	m2d["a"]["b"] = 1 // <- ok
>
> 	fmt.Println(m2d["a"]["b"]) // 1
> }
> ```

<p align="right">
    <a href="#go">back to top ⬆</a>
</p>

<br>
<br>

## 🔶 Generics

Generics in Go are a way to write reusable code that can work with different types. Instead of writing multiple versions of a function for different data types, you can write one generic function that works with any type.

> Generics maintain type safety by allowing the compiler to check types at compile-time. This prevents many types of runtime errors.

Syntax:

> ```go
> func myFunc[T any](input T) T {
> 	return input
> }
> ```
>
> The type parameters are enclosed in square brackets `[]` and come after the function name.
>
> - Type Parameter:
>   > `T` is a type parameter that can represent any type. You can name it anything, but `T` is commonly used.
> - Constraint:
>   > The `any` constraint means that `T` can be any type (`any` is a shorthand for `interface{}`).

<br>

Example 1:

- Without Generics:

  ```go
  func main() {
  	fmt.Println(addInts(1, 2))       // 3
  	fmt.Println(addFloats(1.5, 2.3)) // 3.8

  }

  func addInts(a, b int) int {
  	return a + b
  }

  func addFloats(a, b float64) float64 {
  	return a + b
  }
  ```

- With Generics:

  ```go
  func main() {
  	fmt.Println(add(1, 2))     // 3
  	fmt.Println(add(1.5, 2.3)) // 3.8

  }

  // Using | specifies a union of the two types, meaning that this constraint allows either type.
  func add[T int | float64](a T, b T) T {
  	return a + b
  }
  ```

Example 2:

```go
func main() {
	fmt.Println(swap(5, 10))            // 10, 5
	fmt.Println(swap(2.5, 5.2))         // 5.2, 2.5
	fmt.Println(swap("Hello", "World")) // "World", "Hello"
}

func swap[T any](a, b T) (T, T) {
	return b, a
}
```

<br>

Example 3:

```go
func main() {
	fmt.Println(swap(2.5, 5))      // 5, 2.5
	fmt.Println(swap("Hello", 99)) // 99, "Hello"
}

func swap[T any, U any](a T, b U) (U, T) {
	return b, a
}
```

<br>

Example 4:

```go
type Number interface {
	int | float64
}

func multiply[T Number](a, b T) T {
	return a * b
}

func main() {
	fmt.Println(multiply(5, 6))             // 30
	fmt.Println(multiply(3.2, 4.1))         // 13.12
	fmt.Println(multiply("Hello", "World")) // string does not satisfy Number (string missing in int | float64) compiler(InvalidTypeArg)
}
```

> [!NOTE]
> Go does not support direct union types. you cannot do something like:
>
> ```go
> type Number int | float64
> ```
>
> Instead, you can use an interface to define a set of types that satisfy a certain behavior:
>
> ```go
> type Number interface {
> 	int | float64
> }
> ```

<p align="right">
    <a href="#go">back to top ⬆</a>
</p>

<br>
<br>

## 🔶 Concurrency

### 🔷 Goroutines

Goroutines are a feature in Go that allows you to run functions concurrently.

In general, we can split the execution of a program into two types of routines:

- Main Routine:
  > The main routine is the initial goroutine that starts when a Go program begins execution. It's the entry point of the program, defined by the main function in the main package. When the main function exits, the program terminates, so any running goroutines will also be stopped.
- Child Routines:
  > A child routine is any goroutine that is spawned by the main routine or other goroutines. These are created using the `go` keyword followed by a function call. Child routines run concurrently with the main routine and each other.

<br>

Example:

```go
func main() {
	go expensiveFunc("Hello")

	fmt.Println("Main")

	time.Sleep(1700 * time.Millisecond)
}

func expensiveFunc(text string) {
	for i := 0; i < 4; i++ {
		time.Sleep(500 * time.Millisecond)
		fmt.Println(text, i)
	}
}
```

> Output:
>
> ```sh
> Main
> Hello 0
> Hello 1
> Hello 2
> ```

> The `time.Sleep` inside the main function is used to give enough time for the goroutines to finish before the main function exits. Without this, the program would exit immediately after the main routine has done its job.
>
> The output shows results for only 3 iterations, not 4 as specified in the for loop. This is because we have a `time.Sleep` of 1.7 seconds (1700 milliseconds), which is less than the minimum of 2 seconds (2000 milliseconds) needed for 4 iterations (4 \* 500 ms = 2000 ms) in the `expensiveFunc` function.

<br>

### 🔷 Channels

Channels in Go are a way to communicate between goroutines. They are used to send and receive values between goroutines.

- Declaring a channel:
  > The type of a channel specifies what kind of data it can carry.
  ```go
  ch := make(chan int)
  ```
- Sending values to a channel:
  ```go
  ch <- 10
  ```
- Receiving values from a channel:
  ```go
  myVar := <-ch
  ```
- Closing a channel:
  > Closing a channel is a way to signal to the receiving goroutine that it should stop waiting for values to be sent to it. It's important to close a channel when you're done sending values to avoid a `deadlock`.
  ```go
  close(ch)
  ```

> [!NOTE]
> Channel synchronization ensures that communication between goroutines is properly coordinated. It guarantees that data sent between goroutines is not lost and that goroutines wait for each other when necessary, maintaining the correct order and timing of operations.
>
> - Send Operation: `ch <- value`
>   > When a goroutine sends a value to a channel, it blocks/waits until another goroutine receives that value from the channel.
> - Receive Operation: `value := <-ch`
>   > When a goroutine receives a value from a channel, it blocks until there is a value available to receive.

<br>

Example:

```go
func main() {
	ch := make(chan string)

	go expensiveFunc("Hello", ch)

	fmt.Println("Main")

	for i := 0; i < 4; i++ {
		fmt.Println(<-ch)
	}

  fmt.Println("End")
}

func expensiveFunc(text string, ch chan string) {
	for i := 0; i < 4; i++ {
		time.Sleep(500 * time.Millisecond)
		ch <- text + " " + fmt.Sprint(i)
	}
}
```

> Output:
>
> ```sh
> Main
> Hello 0
> Hello 1
> Hello 2
> Hello 3
> End
> ```

> Here, we don't need any additional mechanism in the main function to wait for the goroutines to finish. The `<-ch` operation in the main function blocks until there is a value to receive from the channel. This blocking behavior synchronizes the main function with the `expensiveFunc` goroutine. Each iteration of the loop in the main function waits for a corresponding send operation from `expensiveFunc`. Btw, we are not forced to use a loop here. We can use `fmt.Println(<-ch)` directly 4 times, one after the other, it does the same thing.
>
> In this specific example, we don't strictly need to close the channel because the main function will only receive a fixed number of messages (4 in this case) and then it stops.
>
> Here is the modified version of it that needs to be closed explicitly:
>
> ```go
> func main() {
> 	ch := make(chan string)
>
> 	go expensiveFunc("Hello", ch)
>
> 	fmt.Println("Main")
>
> 	for msg := range ch {
> 		fmt.Println(msg)
> 	}
>
> 	fmt.Println("Done.")
> }
>
> func expensiveFunc(text string, ch chan string) {
> 	for i := 0; i < 4; i++ {
> 		time.Sleep(500 * time.Millisecond)
> 		ch <- text + " " + fmt.Sprint(i)
> 	}
>
> 	close(ch)
> }
> ```
>
> > The `for msg := range ch { ... }` syntax essentially performs a `msg := <-ch` operation under the hood, which is where the blocking behavior occurs.

<br>

#### 🔻 Channel Status

The receiver of a channel can check the status of the channel using the second return value of the receive operation.

```go
val, ok := <-ch
```

The second return value (`ok` here) is a boolean that indicates whether the channel is closed or not.

- `true`: The channel is closed and no more values can be sent to it.
- `false`: The channel is open and values can be sent to it.

```go
func main() {
	ch := make(chan int)

	go func() {
		ch <- 1
		ch <- 2
		close(ch)
	}()

	for {
		val, ok := <-ch
		if !ok {
			fmt.Println("Channel is closed.")
			break
		}
		fmt.Println("Received:", val)
	}
}
```

> When you `range` over a channel, the loop will automatically break when the channel is closed. But if you're using a manual receive loop, checking `ok` helps you know when to stop receiving.

<br>

#### 🔻 The `select` Statement

The `select` statement in Go is a control structure that allows you to work with multiple channels simultaneously. It's similar to a `switch` statement but is specifically designed for channel operations.

- The `select` statement listens to several channels.
- It runs the first case that's ready to proceed.
- If multiple cases are ready, Go randomly picks one to execute.
- If there's no `default` case, it will block and wait until a case becomes ready.
- If a `default` case is present and no other cases are ready, it executes the `default` case immediately without blocking.

```go
func main() {
  // Preparation:
	ch1 := make(chan int)
	ch2 := make(chan int)
	ch3 := make(chan int)

	go func() {
		time.Sleep(time.Second)
		ch1 <- 1
	}()

	go func() {
		time.Sleep(time.Second * 3)
		ch2 <- 2
	}()

	go func() {
		time.Sleep(time.Second * 2)
		ch3 <- 3
	}()

	time.Sleep(time.Second * 5)

  // Usage:
	select {
	case val1 := <-ch1:
		fmt.Println(val1)
	case val2 := <-ch2:
		fmt.Println(val2)
	case val3 := <-ch3:
		fmt.Println(val3)
	default:
		fmt.Println("No channels are ready.")
	}

	fmt.Println("Done.")
}
```

> [!NOTE]
> The `select` statement is not a loop. It executes only one case even if multiple are ready, or it is a `default` case. And then breaks the `select` statement.

<br>

#### 🔻 Read-Only and Write-Only Channels

In Go, channels can be restricted to be either `read-only` or `write-only`. This is useful for defining clear communication patterns between goroutines and helps in maintaining code safety and clarity.

- Read-only channels:
  > A read-only channel can only be used to receive values. You cannot send values into a read-only channel.
- Write-only channels:
  > A write-only channel can only be used to send values. You cannot receive values from a write-only channel.

```go
func sendData(ch chan<- int) { // ch is write-only
	ch <- 42
	close(ch)
}

func receiveData(ch <-chan int) { // ch is read-only
	fmt.Println(<-ch)
}

func main() {
	ch := make(chan int)

	go sendData(ch)
	receiveData(ch)
}
```

<p align="right">
    <a href="#go">back to top ⬆</a>
</p>

<br>
<br>
