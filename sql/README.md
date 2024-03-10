<p align="center">
  <img src="../logo.png" height="200">
</p>

<h1 align="center">SQL <em>(PostgreSQL)</em></h1>

<p align="center">
  SQL (Structured Query Language) is a programming language used for managing relational databases. PostgreSQL is a powerful, open-source relational database management system that supports SQL queries and provides advanced features.
</p>

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
   - [Constraints](#-constraints)
     - [`NOT NULL`](#-not-null)
     - [`DEFAULT`](#-default)
     - [`UNIQUE`](#-unique)
     - [`CHECK`](#-check)
     - [`PRIMARY KEY`](#-primary-key)
     - [`FOREIGN KEY`](#-foreign-key)
3. [Data](#-data)
   - [Data Basics](#-data-basics)
     - [`INSERT`](#-insert)
     - [`SELECT`](#-select)
     - [`WHERE`](#-where)
     - [`UPDATE`](#-update)
     - [`DELETE`](#-delete)
     - [Result Control](#-result-control)
       - [`ORDER BY`](#order-by)
       - [`LIMIT`](#limit)
       - [`OFFSET`](#offset)
   - [Operators & Functions](#-operators--functions)
     - [Operators](#-operators)
     - [Functions](#-functions)
   - [Aggregation of Records (`GROUP BY`)](#-aggregation-of-records-group-by)
     - [Aggregate Functions](#-aggregate-functions)
     - [`HAVING`](#-having)
   - [Joins](#-joins)
     - [Inner Join](#-inner-join)
     - [Left Join](#-left-join)
     - [Right Join](#-right-join)
     - [Full Join](#-full-join)
     - [Self Join](#-self-join)

<br>

The official PostgreSQL documentation: https://www.postgresql.org/docs/current/sql.html

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
- Rename an existing table:
  ```sql
  ALTER TABLE current_table_name RENAME TO new_table_name;
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

<br>

### 🔷 Constraints

In SQL, constraints are rules or restrictions applied to columns in a table. They enforce data integrity by defining certain conditions that must be met for the data in the table to be valid.

<br>

#### 🔻 `NOT NULL`

Ensures that a column does not accept null values.

Syntax:

- When creating a table:
  ```sql
  CREATE TABLE table_name (
      column_1 datatype NOT NULL,
      ...
  );
  ```
- When adding to an existing table:
  ```sql
  ALTER TABLE table_name
  ALTER COLUMN column_1 SET NOT NULL;
  ```
  > When adding `NOT NULL` by altering, the column cannot have null values.
  >
  > To fix:
  >
  > - We need to delete each row that contains a null value for that column.
  > - We need to update each row to something other than null.
  >   > `UPDATE table_name SET column_1 = 'some valid value' WHERE column_1 IS NULL;`

Unset/Drop:

```sql
ALTER TABLE table_name
ALTER COLUMN column_1 DROP NOT NULL;
```

<br>

#### 🔻 `DEFAULT`

Defines the default value to use when no value is provided.

Syntax:

- When creating a table:
  ```sql
  CREATE TABLE table_name (
  column_1 datatype DEFAULT 'any value'
  ...
  );
  ```
- When adding to an existing table:
  ```sql
  ALTER TABLE table_name
  ALTER COLUMN column_1 SET DEFAULT 'any value';
  ```

> When `DEFAULT` is set on a `NOT NULL` column and you insert a null value, the default value kicks in instead of throwing a `NOT NULL` error.

Unset/Drop:

```sql
ALTER TABLE table_name
ALTER COLUMN column_1 DROP DEFAULT;
```

<br>

#### 🔻 `UNIQUE`

Ensures that all values in a column (or combination of columns) are unique, except for `null` values.

Syntax:

- When creating a table:
  - Single column uniqueness:
    ```sql
    CREATE TABLE table_name (
        column_1 datatype UNIQUE,
        column_2 datatype UNIQUE,
        ...
    );
    ```
  - Group column uniqueness:
    > The combination of column values must be unique (not each column independently).
    ```sql
    CREATE TABLE table_name (
        column_1 datatype,
        column_2 datatype,
        ...
        UNIQUE(column_1, column_2)
    );
    ```
    > Example: (each row represents subsequent values entered)
    >
    > - `column_1: 5` and `column_2: 10`
    > - `column_1: 5` and `column_2: 11` (okay)
    > - `column_1: 5` and `column_2: 10` (not okay, as we already have this `5:10` combination)
- When adding to an existing table:
  - Single column uniqueness:
    ```sql
    ALTER TABLE table_name
    ADD CONSTRAINT constraint_name UNIQUE (column_1);
    ```
  - Group column uniqueness:
    ```sql
    ALTER TABLE table_name
    ADD CONSTRAINT constraint_name UNIQUE (column_1, column_2);
    ```
    > When adding `UNIQUE` by altering, ensure that the column already contains unique values.
    >
    > To resolve duplicates:
    >
    > - Delete all repeated rows for those columns.
    > - Update all repeated rows for those columns to make them unique.

Unset/Drop:

> Default constraint name format: `<table>_<column>_key` or `<table>_<column_1>_<column_2>_key` (group)

```sql
ALTER TABLE table_name
DROP CONSTRAINT constraint_name;
```

<br>

#### 🔻 `CHECK`

Allows you to specify a condition to check the value before inserting or updating data, except for null values.

Syntax:

- When creating a table:
  ```sql
  CREATE TABLE table_name (
    column_1 datatype CHECK (condition)
    ...
  );
  ```
- When adding to an existing table:
  ```sql
  ALTER TABLE table_name
  ADD CONSTRAINT constraint_name CHECK (condition);
  ```
  > When adding `CHECK` by altering, ensure that the column values already satisfy the check condition.
  >
  > To resolve duplicates: Update or Delete those rows.

Unset/Drop:

> Default constraint name format: `<table>_<column>_check`

```sql
ALTER TABLE table_name
DROP CONSTRAINT constraint_name;
```

<br>

#### 🔻 `PRIMARY KEY`

A primary key indicates that a column uniquely identifies each row in a table.

- Primary keys must have unique values and cannot contain NULL values.
- A table can have only one primary key.
- Adding a primary key will automatically create an index on the column.

Syntax:

```sql
CREATE TABLE table_name (
    column_1 datatype PRIMARY KEY,
    ...
);
```

Unset/Drop:

> Default constraint name format: `<table>_pkey`

```sql
ALTER TABLE table_name
DROP CONSTRAINT constraint_name;
```

<br>

#### 🔻 `FOREIGN KEY`

A foreign key enforces referential integrity between two database tables, preventing actions that would break their relationship.

- It's a field in one table referencing the primary key in another.
- A table can have more than one foreign key constraint.
- The table with the foreign key is the child table, while the one with the primary key is the parent table.

Syntax:

- When creating a table:
  ```sql
  CREATE TABLE child_table (
      ...
      child_column datatype REFERENCES parent_table (parent_column) <Rule (optional)>,
      ...
  );
  ```
- When adding to an existing table:
  ```sql
  ALTER TABLE child_table
  ADD CONSTRAINT constraint_name
  FOREIGN KEY (child_column)
  REFERENCES parent_table (parent_column)
  <Rule (optional)>;
  ```

Unset/Drop:

> Default constraint name format: `<table>_<column>_fkey`

```sql
ALTER TABLE table_name
DROP CONSTRAINT constraint_name;
```

<br>

**Rules:**

- ON DELETE:

  > This optional component defines the action to be taken when a referenced row in the parent table is deleted.

  | Rule                  | Result                                                                              |
  | --------------------- | ----------------------------------------------------------------------------------- |
  | `ON DELETE CASCADE`   | Deletes all dependent child rows automatically when a parent row is deleted.        |
  | `ON DELETE SET NULL`  | Sets foreign key columns in the child table to `NULL` when a parent row is deleted. |
  | `ON DELETE RESTRICT`  | Prevents parent row deletion if dependent child rows exist.                         |
  | `ON DELETE NO ACTION` | Default behavior, similar to `ON DELETE RESTRICT`.                                  |

  > Additionally, you cannot drop the parent table while you have dependent child table(s).

- ON UPDATE:
  > Similar to ON DELETE rules, but this time no deletion occurs. For example, if you update a primary key value in the parent table while having `ON UPDATE CASCADE`, all corresponding foreign key values in the child table are automatically updated to match the new values.

<br>

Insertion Scenarios:

> What happens when we insert into the child table.

| Scenarios                                                 | Result                     |
| --------------------------------------------------------- | -------------------------- |
| Inserting a new row with a valid foreign key value        | Ok                         |
| Inserting a new row with a `NULL` foreign key             | Ok (optional relationship) |
| Inserting a new row with a non-existent foreign key value | Error                      |

<p align="right">
    <a href="#sql-postgresql">back to top ⬆</a>
</p>

<br>
<br>

## 🔶 Data

### 🔷 Data Basics

#### 🔻 `INSERT`

The `INSERT` statement is used to add new rows (data) into a table.

Syntax:

```sql
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
```

> The `column`-`value` order is important.

Some other variants:

- > If you're inserting data into all columns and the values you're inserting correspond to the columns in the same order, you don't need to explicitly specify the column names:
  >
  > ```sql
  > INSERT INTO table_name VALUES (value1, value2, ...);
  > ```

- > If you want to insert multiple rows in a single statement:
  >
  > ```sql
  > INSERT INTO table_name (column1, column2, ...)
  > VALUES
  >    (value1_1, value1_2, ...),
  >    (value2_1, value2_2, ...),
  >    ...
  >    (valueN_1, valueN_2, ...);
  > ```

<br>

#### 🔻 `SELECT`

The `SELECT` statement is used to retrieve data from one or more tables in a database.

- Select all columns from a table:

  > Note: Using `*` to select all columns is generally considered bad practice. It's recommended to explicitly specify the columns you need whenever possible.

  ```sql
  SELECT * FROM table_name;
  ```

- Select specific columns from a table:
  ```sql
  SELECT column1, column2 FROM table_name;
  ```
- Select unique values from a specific column in a table:
  ```sql
  SELECT DISTINCT column1 FROM table_name;
  ```

<br>

#### 🔻 `WHERE`

The `WHERE` clause is used to filter rows from a table based on specified conditions.

> It allows you to selectively retrieve, update, or delete rows that meet certain criteria.

> You can filter rows based on various conditions such as equality, comparison operators, pattern matching, and logical operators.

Syntax:

```sql
SELECT * FROM table_name
WHERE <condition>;
```

Example:

```sql
SELECT *
FROM employees
WHERE department = 'Sales';
```

<br>

#### 🔻 `UPDATE`

The `UPDATE` statement is used to modify existing records (data) in a table.

Syntax:

```sql
UPDATE table_name
SET column1 = new_value1, column2 = new_value2, ...
WHERE <condition>;
```

> This statement updates the values of specified columns in existing rows that meet the specified condition.

> [!WARNING]
> If you omit the condition, it will update all rows.

<br>

#### 🔻 `DELETE`

The `DELETE` statement is used to remove existing records (data) from a table.

Syntax:

```sql
DELETE FROM table_name
WHERE <condition>;
```

> This statement removes rows from the specified table that meet the specified condition.

> [!WARNING]
> If you omit the WHERE clause, it will delete all rows from the table.

> Deleting rows may also trigger cascading deletes if foreign key constraints are set up with cascading delete actions.

<br>

#### 🔻 Result Control

- ##### `ORDER BY`

  Sorts the rows returned by a query based on one or more columns.

  ```sql
  SELECT * FROM employees ORDER BY salary ASC;
  ```

  - `ASC`: for ascending.
  - `DESC`: for descending.

- ##### `LIMIT`

  Limits the number of rows returned by a query.

  > This query will retrieve the top 3 highest-paid employees:
  >
  > ```sql
  > SELECT * FROM employees ORDER BY salary DESC LIMIT 3;
  > ```
  >
  > To select one random row from a table:
  >
  > ```sql
  > SELECT * FROM employees ORDER BY RANDOM() LIMIT 1;
  > ```

- ##### `OFFSET`

  Specifies how many rows to skip from the beginning of the result set before starting to return rows.

  > This query will skip the youngest 3 employees:
  >
  > ```sql
  > SELECT * FROM employees ORDER BY age OFFSET 3;
  > ```

> [!IMPORTANT]
> It's important to use `ORDER BY` when using `LIMIT` and `OFFSET` to ensure consistent results, as the database engine may not guarantee a specific order otherwise.

<br>

### 🔷 Operators & Functions

Operators and functions are used with the `SELECT` statement and the `WHERE` clause to filter and manipulate the data.

<br>

#### 🔻 Operators

- Logical Operators:

  | Operator | Description                                                                                                                                         |
  | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `AND`    | Returns `true` if both conditions separated by `AND` are true. Otherwise, it returns `false`.                                                       |
  | `OR`     | Returns `true` if at least one of the conditions separated by `OR` is true. Otherwise, it returns `false`.                                          |
  | `NOT`    | Returns `true` if the following condition is false, and returns `false` if the following condition is true. It negates the result of the condition. |

<br>

- Mathematical Operators:

  | Operator | Description     | Example      |
  | -------- | --------------- | ------------ |
  | `+`      | Addition.       | 2 + 3 → 5    |
  | `-`      | Subtraction.    | 2 - 3 → -1   |
  | `*`      | Multiplication. | 2 \* 3 → 6   |
  | `/`      | Division.       | 10 / 2 → 5   |
  | `%`      | Remainder.      | 5 % 4 → 1    |
  | `^`      | Exponentiation. | 2 ^ 3 → 8    |
  | `\|/`    | Square root.    | \|/ 25 → 5   |
  | `\|\|/`  | Cube root.      | \|\|/ 64 → 4 |
  | `@`      | Absolute value. | @ -5 → 5     |

  ```sql
  SELECT title, price * units_sold AS revenue FROM books;
  ```

<br>

- Comparison Operators:

  | Operator | Description               |
  | -------- | ------------------------- |
  | `=`      | Equal.                    |
  | `!=`     | Not equal.                |
  | `<>`     | Not equal.                |
  | `<`      | Less than.                |
  | `<=`     | Less than or equal to.    |
  | `>`      | Greater than.             |
  | `>=`     | Greater than or equal to. |

  ```sql
  SELECT name, salary FROM employees WHERE age >= 30;
  ```

  - Comparison Predicates: [Docs ↗](https://www.postgresql.org/docs/14/functions-comparison.html#FUNCTIONS-COMPARISON-PRED-TABLE)

    - `BETWEEN`: Simplifies range tests.
      > `a BETWEEN x AND y` is equivalent to `a >= x AND a <= y`
      >
      > ```sql
      > SELECT * FROM employees WHERE salary BETWEEN 1100 AND 1700;
      > ```
    - `IS`: Used for making specific comparisons.
      > `IS NULL`, `IS NOT NULL`, `IS TRUE`, `IS FALSE`, `IS NOT TRUE`, `IS NOT FALSE`;
      >
      > ```sql
      > SELECT * FROM employees WHERE bonus_salary IS NULL;
      > ```

  - Array Comparisons: [Docs ↗](https://www.postgresql.org/docs/14/functions-comparisons.html)

    - `IN`: Checks if a value matches any value in a specified list or subquery.
      > > `expression IN (value1, value2, ...)` is equivalent to
      > >
      > > ```sql
      > > expression = value1
      > > OR
      > > expression = value2
      > > OR
      > > ...
      > > ```
      >
      > ```sql
      > SELECT * FROM employees WHERE name IN ('John', 'Jane', ...);
      > ```
    - `ANY`/`SOME`: Compares a single value to any value in an array, returning `true` if the value matches any element in the array.
      > Syntax: `expression operator SOME (array expression)`
      >
      > ```sql
      > SELECT * FROM employees WHERE 350 > ANY (salary_history);
      > ```
    - `ALL`: Compares a single value to all values in an array, returning `true` if the value matches every element in the array.
      > ```sql
      > SELECT * FROM employees WHERE 500 < ALL (salary_history);
      > ```

  > They all return a Boolean (`true`/`false`) value.

<br>

- `LIKE` (pattern matching):

  Pattern matching allows you to search for patterns in strings, similar to regular expressions but with a simpler syntax.

  Syntax:

  ```sql
  SELECT * FROM table_name WHERE column_name LIKE '<pattern>';
  ```

  - Pattern:

    - `%`: Matches any sequence of characters, including none.
    - `_`: Matches any single character.

  Examples:

  > - `'abc%'`: Any string that starts with `abc`.
  > - `'%xyz'`: Any string that ends with `xyz`
  > - `'_a%'`: Any string where the second character is `a`.

<br>

#### 🔻 Functions

- Mathematical Functions. [Docs ↗](https://www.postgresql.org/docs/14/functions-math.html#FUNCTIONS-MATH-FUNC-TABLE)
- String Functions. [Docs ↗](https://www.postgresql.org/docs/14/functions-string.html)
- Conditional Expressions. [Docs ↗](https://www.postgresql.org/docs/current/functions-conditional.html)
  - `CASE`: Allows you to perform conditional logic within SQL queries.
    > It evaluates a list of conditions and returns a result based on the first condition that is `true`.
    >
    > ```sql
    > SELECT name, age, salary,
    >     CASE lvl
    >         WHEN 'A' THEN 'Manager'
    >         WHEN 'B' THEN 'Senior Dev'
    >         WHEN 'C' THEN 'Dev'
    >         ELSE 'Intern'
    >     END AS seniority
    > FROM employees;
    > ```
    >
    > or
    >
    > ```sql
    > SELECT name, age, salary,
    >     CASE
    >         WHEN salary >= 5000 THEN 'Rich'
    >         WHEN salary >= 2500 THEN 'Average'
    >         ELSE 'Poor'
    >     END AS wealth
    > FROM employees;
    > ```
  - `COALESCE`: Returns the first non-null expression from a list of expressions.
    > It is often used to provide a default value when the input value is `null`.
    >
    > ```sql
    > SELECT COALESCE(bonus_salary, 0) AS bonus_salary FROM employees;
    > ```
  - `GREATEST`: Takes multiple input values and returns the largest one among them.
    > ```sql
    > SELECT GREATEST(23, 4, 128, 2000) AS max_value;
    > ```
  - `LEAST`: Takes multiple input values and returns the smallest one among them.
    > ```sql
    > SELECT LEAST(23, 4, 128, 2000) AS min_value;
    > ```

<br>

### 🔷 Aggregation of Records (`GROUP BY`)

The `GROUP BY` clause is used to group rows that have the same values into summary rows.

- You can only select columns that are being grouped.
  ```sql
  SELECT age FROM employees GROUP BY age;
  ```
- To select columns that are not being grouped, you have to use [aggregate functions](#-aggregate-functions).

<br>

#### 🔻 Aggregate Functions

Aggregate functions are functions that perform a calculation on a set of values and return a single value.

> These functions are typically used with the `GROUP BY` clause to perform operations across multiple rows and generate summary results.

| Function             | Description                                |
| -------------------- | ------------------------------------------ |
| `COUNT(column_name)` | Counts the number of rows in a group.      |
| `SUM(column_name)`   | Calculates the sum of values in a group.   |
| `AVG(column_name)`   | Computes the average of values in a group. |
| `MIN(column_name)`   | Finds the minimum value in a group.        |
| `MAX(column_name)`   | Finds the maximum value in a group.        |

Examples:

- > Selects the maximum salary for each distinct age:
  >
  > ```sql
  > SELECT  MAX(salary), age FROM employees GROUP BY age;
  > ```

> [!NOTE]
> We can also call the functions directly. For example, to select the overall maximum salary:
>
> ```sql
> SELECT  MAX(salary) FROM employees;
> ```
>
> However, we still can't select other ungrouped columns because when using aggregate functions, SQL requires that all selected columns either be included in the `GROUP BY` clause or be part of an aggregate function.

- > Counts the total number of rows in the "employees" table:
  >
  > ```sql
  > SELECT  COUNT(*) FROM employees;
  > ```
  >
  > We are using `*` here because if we have chosen a specific column and it contains a `NULL` value, the aggregation function will ignore it, potentially resulting in an incorrect count.

- > To see how many employees share the same age:
  >
  > ```sql
  > SELECT  COUNT(*), age FROM employees GROUP BY age;
  > ```

<br>

#### 🔻 `HAVING`

The `HAVING` clause is used to filter the results of a GROUP BY clause based on specified conditions.

> While the `WHERE` clause filters **individual rows** before they are grouped, the `HAVING` clause filters **group rows** after they have been formed by the `GROUP BY` operation.

Examples:

- > This query selects the departments where the average salary is greater than $2,500
  >
  > ```sql
  > SELECT department, AVG(salary) as avg_salary
  > FROM employees
  > GROUP BY department
  > HAVING AVG(salary) > 2500;
  > ```

- > This query first filters the employees who were hired after `January 1, 2023`, and then selects the departments where the average salary of these employees is greater than $2,500.
  >
  > ```sql
  > SELECT department, AVG(salary) as avg_salary
  > FROM employees
  > WHERE hire_date >= '2023-01-01'
  > GROUP BY department
  > HAVING AVG(salary) > 2500;
  > ```

- > This query selects the departments with fewer than 5 employees.
  >
  > ```sql
  > SELECT department, COUNT(*) as num_employees
  > FROM employees
  > GROUP BY department
  > HAVING COUNT(*) < 5;
  > ```

<br>

### 🔷 Joins

Joins in SQL are operations used to combine rows from two or more tables based on a related column.

Syntax:

```sql
SELECT *
FROM table1
JOIN table2 ON table1.column_name = table2.column_name;
```

- If you specifically want to select column names but they are colliding, use **Table Aliases** to differentiate them.

  ```sql
  SELECT url, photos.id, employees.id FROM photos JOIN employees ON photos.employee_id = employees.id;
  ```

  > To prettify the output:
  >
  > ```sql
  > SELECT url, photos.id AS photos_id, employees.id AS employees_id FROM photos JOIN employees ON photos.employee_id = employees.id;
  > ```

- If you don't specify a join type explicitly, the default join type is an `INNER JOIN`.

<br>

#### 🔻 Inner Join

Returns rows when there is at least one match in both tables.

```sql
SELECT * FROM photos INNER JOIN employees ON photos.employee_id = employees.id;
```

<p align="center">
  <img src="./innerJoin.png" height="auto" width="250">
</p>

<br>

#### 🔻 Left Join

Returns all rows from the left table (table1), and the matched rows from the right table (table2).

> If there is no match, the result is `NULL` on the right side.

```sql
SELECT * FROM photos LEFT JOIN employees ON photos.employee_id = employees.id;
```

<p align="center">
  <img src="./leftJoin.png" height="auto" width="250">
</p>

<br>

#### 🔻 Right Join

Returns all rows from the right table (table2), and the matched rows from the left table (table1).

> If there is no match, the result is NULL on the left side.

```sql
SELECT * FROM photos RIGHT JOIN employees ON photos.employee_id = employees.id;
```

<p align="center">
  <img src="./rightJoin.png" height="auto" width="250">
</p>

<br>

#### 🔻 Full Join

Returns all rows when there is a match in either left or right table.

> The result is NULL on the side where there is no match.

```sql
SELECT * FROM photos FULL JOIN employees ON photos.employee_id = employees.id;
```

<p align="center">
  <img src="./fullJoin.png" height="auto" width="250">
</p>

<br>

#### 🔻 Self Join

Self-join is a special type of join operation where a table is joined with itself.

This can be useful when you have a table with hierarchical data or when you need to compare rows within the same table.

Example:

- > To find all dates' `id` with higher temperatures compared to its previous dates (yesterday). [Leetcode ↗](https://leetcode.com/problems/rising-temperature/description/)
  >
  > ```
  > +---------------+---------+
  > | Column Name   | Type    |
  > +---------------+---------+
  > | id            | int     |
  > | recordDate    | date    |
  > | temperature   | int     |
  > +---------------+---------+
  > ```
  >
  > ```sql
  > SELECT w1.id
  > FROM Weather AS w1, Weather AS w2
  > WHERE w1.Temperature > w2.Temperature AND w1.recordDate - w2.recordDate = 1
  > ```
