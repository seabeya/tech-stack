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

  | Keyword   | Size     | Values                 |
  | --------- | -------- | ---------------------- |
  | `float32` | 32 bitss | -3.4e+38 to 3.4e+38    |
  | `float64` | 64 bits  | -1.7e+308 to +1.7e+308 |

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
