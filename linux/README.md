<p align="center">
  <img src="../logo.png" height="150">
</p>

<h1 align="center">Linux (Debian)</h1>

<p align="center">
  Linux is an open-source kernel that powers many operating systems, called distributions (or distros). This documentation mainly focuses on Debian, one of the Linux distros that is free and widely used.
</p>

<p align="right">
  <a href="../#tech-stack">Main Page ↖</a>
</p>

#### Knowledge Requirements

- Nothing.

### Contents

1. [Basics](#-basics)
   - [Commands](#-commands)
     - [Informational Commands](#-informational-commands)

<br>

> [!NOTE]
> This is not a complete guide to Linux. It's just a collection of specific concepts and commands.

<br>

<hr>

## 🔶 Basics

Basic Linux commands and concepts.

<br>

### 🔷 Commands

Definitions:

- ` `, `.`, `./`: Current directory.
- `<variable>`: A variable.
- `<variable>...`: Multiple variables.

<br>

#### 🔻 Informational Commands

- `which <command>...`: Show the path of a command.
  ```sh
  which whatis # Output: /usr/bin/whatis
  ```
- `whatis <command>...`: Briefly describe a command in one line.
  ```sh
  whatis pwd # Output: pwd - print name of current/working directory
  ```
- `wc -<option>... <file>...`: Count lines, words, and characters.
  ```sh
  wc file.txt # line, word, and character count of file.txt
  ```
- `grep -<option>... <pattern> <file>...`: Search for patterns in files and return matching lines.
  ```sh
  grep "hello" file.txt # Search for "hello"
  grep -i "HeLLo" file.txt # Case-insensitive search
  grep -r "hello" ./dir1 # Recursive search in dir1
  ```
- `less`: Open output in a controllable pager.
  - `q`: Quit.
  - `space`: Scroll down (next page).
  - `b`: Scroll up (previous page).
  - `g`: Go to the beginning.
  - `G`: Go to the end.
  - `/<pattern>`: Search forward (down).
  - `?<pattern>`: Search backward (up).
  - `n`: Repeat search in the same direction (next result).
  - `N`: Repeat search in the opposite direction (previous result).
  - `h`: Help.
  ```sh
  less file.txt # View a file in a pager
  find ./dir1 -name "*.txt" | less # View the output of find in a pager
  ```
- `cat -<option>... <file>...`: Print file contents to the standard output (terminal).
  ```sh
  cat ./file.txt # Print a file
  cat ./file1.txt ./file2.txt # Print multiple files
  ```
  ```sh
  -n # Number all lines
  -b # Number non-empty lines
  -s # Squeeze blank lines into one
  ```

<br>

<p align="right">
  <a href="#linux-debian">back to top ⬆</a>
</p>
