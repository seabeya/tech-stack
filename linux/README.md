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
     - [File & Directory Commands](#-file--directory-commands)

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
- `grep -<option>... <pattern> <file>...`: Search for patterns in a file and return matching lines.
  ```sh
  grep "hello" file.txt # Search for "hello"
  grep -i "HeLLo" file.txt # Case-insensitive search
  grep -r "hello" ./dir1 # Recursive search in dir1
  ```
- `less`: Open output in a controllable pager.
  > - `q`: Quit.
  > - `space`: Scroll down (next page).
  > - `b`: Scroll up (previous page).
  > - `g`: Go to the beginning.
  > - `G`: Go to the end.
  > - `/<pattern>`: Search forward (down).
  > - `?<pattern>`: Search backward (up).
  > - `n`: Repeat search in the same direction (next result).
  > - `N`: Repeat search in the opposite direction (previous result).
  > - `h`: Help.
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
- `find <directory>... -name <pattern> -<option>`: Search for files and directories.
  ```sh
  find ./dir1 -name file.txt # Find specific file in dir1 and its subdirectories
  find ./dir1 -name "*.txt" # Find all .txt files in dir1 and its subdirectories
  find ./dir1 -name file.txt -delete # Find and delete a specific file in dir1 and its subdirectories
  ```

<br>

#### 🔻 File & Directory Commands

- `OUTPUT > <file>...`: Redirect output to a file.
  > - `>`: Overwrite.
  > - `>>`: Append.
  ```sh
  > file.txt # Create/empty a file and start writing in it
  pwd > file.txt # Save the command (pwd) output to file
  cat file1.txt > file2.txt # Copy contents of file1.txt to file2.txt
  cat file1.txt file2.txt >> file3.txt # Append contents of file1.txt and file2.txt to file3.txt
  ```
- `mkdir -<option>... <directory>...`: Create a directory.
  ```sh
  mkdir new_directory # Create a directory called new_directory
  mkdir -p ./new_directory/sub_directory # Create a nested directory structure
  mkdir -p ./new_dir/{dir1,dir2,dir3} # Create a directory with multiple subdirectories in it
  ```
- `rm -<option>... <file/directory>...`: Delete a file/directory.
  ```sh
  rm file.txt # Remove a file
  rm -r ./dir1 # Recursively remove a directory and its contents
  rm -ri ./dir1 # Prompt before each removal
  rm -rf ./dir1 # Force delete without prompt
  ```
- `cp -<option>... <source>... <destination>`: Copy files and directories (`mv` to move).
  ```sh
  cp file.txt ./dir1 # Copy a file to dir (overwrite if exists)
  cp -i file.txt ./dir1 # Prompt before overwrite
  cp file.txt ./dir1/file2.txt # Copy and rename in destination
  cp -r ./dir1 ./dir2 # Copy entire directory with its contents to another directory
  ```
- `touch <file>...`: Create an empty file.
  ```sh
  touch file.txt # Create a file called file.txt
  ```

<br>

<p align="right">
  <a href="#linux-debian">back to top ⬆</a>
</p>
