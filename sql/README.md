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
