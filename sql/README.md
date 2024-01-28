<p align="center">
  <img src="../logo.png" height="200">
</p>

<h1 align="center">SQL <em>(PostgreSQL)</em></h1>

<p align="center">
  -
</p>

> sql.

<p align="right">
    <a href="https://github.com/seabeya/tech-stack#tech-stack">Main Page ↖</a>
</p>

#### Knowledge requirements

- No previous knowledge is required!

### Contents

1. [Database](#-database)
2. [Table](#-table)
   - [Table Basics](#-table-basics)
   - [Data Types](#-data-types)
     - [Numeric](#-numeric)
     - [String](#-string)
     - [Boolean](#-boolean)

<br>

<hr>

## 🔶 Database

- Create a new database:
  ```sql
  CREATE DATABASE db_name;
  ```
- Drop/remove an existing database:
  ```sql
  DROP DATABASE db_name; -- Can throw an error if it does not exist.
  ```
  ```sql
  DROP DATABASE IF EXISTS db_name; -- Only drops if it exists (safer version).
  ```
  ```sql
  DROP DATABASE db_name WITH (FORCE); -- Forces the drop.
  ```

<p align="right">
    <a href="#sql-postgresql">back to top ⬆</a>
</p>

<br>
<br>

## 🔶 Table

### 🔷 Table Basics

- Create a new table:
  ```sql
  CREATE TABLE table_name (
    column_1 datatype,
    column_2 datatype,
    column_3 datatype,
    ....
  );
  ```
- Drop/remove an existing table:
  ```sql
  DROP TABLE table_name;
  ```
- Add, delete, or modify columns in an existing table:
  - Add Column:
    ```sql
    ALTER TABLE table_name
    ADD column_name datatype;
    ```
  - Drop Column:
    ```sql
    ALTER TABLE table_name
    DROP COLUMN column_name;
    ```
  - Rename Column:
    ```sql
    ALTER TABLE table_name
    RENAME COLUMN old_name TO new_name;
    ```
  - Change Datatype:
    ```sql
    ALTER TABLE table_name
    ALTER COLUMN column_name TYPE newDatatype;
    ```

<br>

### 🔷 Data Types

Official Docs: https://www.postgresql.org/docs/current/datatype.html

#### 🔻 Numeric

- No Decimal:
  > Numbers without fractional components.
  > | Type | Size | Range |
  > | ---------- | ------- | -------------------------------------------- |
  > | `smallint` | 2 bytes | -32768 to +32767 |
  > | `integer` | 4 bytes | -2147483648 to +2147483647 |
  > | `bigint` | 8 bytes | -9223372036854775808 to +9223372036854775807 |
- Decimal:
  > Numbers with fractional components.
  > | Type | Size (max) | Range |
  > | --------- | ------------ | ----------------------------------------------------- |
  > | `decimal()` | variable (131072 bytes) | Up to 131072 digits before `.` and 16383 digits after |
  > | `numeric()` | variable (131072 bytes) | Up to 131072 digits before `.` and 16383 digits after |
  >
  > They are the exact same; there's no difference between these two.
  >
  > - Useful:
  >   > Where precision is critical, such as financial calculations (e.g., currency amounts, interest rates), scientific calculations requiring exact precision, and data that must maintain accuracy through extensive calculations.
  > - Performance:
  >   > Calculations on `decimal`/`numeric` values are generally slower compared to other numeric types, depending on their size and the complexity of the arithmetic operations involved.
  > - Syntax:
  >   > - `NUMERIC(precision, scale)`: Defines a NUMERIC data type with specified precision and scale.
  >   >   > Example: `NUMERIC(3,2)` equals to [-999.99 to 999.99]
  >   > - `NUMERIC(precision)`: Defines a NUMERIC data type with specified precision and default scale of 0.
  >   >   > Example: `NUMERIC(3)` equals to [-999 to 999]
  >   > - `NUMERIC`:
  >   >   > Any length can be stored, up to the implementation limits of PostgreSQL.
- Approximate Numeric:
  > Approximate numeric data types with precision limits.
  > | Type | Size | Range |
  > | ------------------ | ------- | ----------------------------------------------- |
  > | `real` | 4 bytes | 1E-37 to 1E37 before `.` with 6 digits after |
  > | `double precision` | 8 bytes | 1E-307 to 1E308 before `.` with 15 digits after |
- Auto Increment:
  > Commonly used for defining auto-incrementing primary key columns.
  > | Type | Size | Range |
  > | ------------- | ------- | ------------------------ |
  > | `smallserial` | 2 bytes | 1 to 32767 |
  > | `serial` | 4 bytes | 1 to 2147483647 |
  > | `bigserial` | 8 bytes | 1 to 9223372036854775807 |

<br>

#### 🔻 String

> `n` is a positive integer representing the length limit.

| Type         | Description                                                                                                 |
| ------------ | ----------------------------------------------------------------------------------------------------------- |
| `varchar(n)` | Variable-length character strings with a maximum length of `n` characters.                                  |
| `char(n)`    | Fixed-length character strings with a length of `n` characters (blank-padded).                              |
| `text`       | Character strings with no specified maximum length, allowing for the storage of large amounts of text data. |

More details:

> If `varchar` lacks a specifier, it accepts strings of any length (simply becomes `text`).

> If `char` lacks a specifier, it defaults to `char(1)`.

> blank-padded: If you have a `char(10)` field and you store the string "hello" in it, since "hello" is only 5 characters long, the remaining 5 characters will be filled with blank spaces, so the stored value will be "hello " (with five additional spaces at the end). This ensures that the total length of the stored string is always `n`.

> If your string data length exceeds the specified length `n` in a `varchar` field, it will only save the first `n` characters and ignore the rest.

<br>

#### 🔻 Boolean

| Type      | Size   | Description   |
| --------- | ------ | ------------- |
| `boolean` | 1 byte | true or false |

The input function for type boolean accepts these values:

- True: `true`, `yes`, `on`, `1`;
- False: `false`, `no`, `off`, `0`;
- Null: `null`;
  > Indicates no value.
