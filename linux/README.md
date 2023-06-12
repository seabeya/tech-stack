<p align="center">
  <img src="../logo.png" height="200">
</p>

<h1 align="center">Linux <em>(debian based)</em></h1>

<p align="center">
  A compilation of the OS commands and concepts that I think a developer should know about.
<p>

<p align="right">
    <a href="https://github.com/shaanaliyev/tech-stack#tech-stack">Main Page ↖</a>
</p>

#### Knowledge requirements

- No previous knowledge is required!

### Contents

- [🔶 Basic commands](#-basic-commands)

<br>

<hr>

## 🔶 Basic commands

> `.`, `./` or ` ` is shorthand for the current directory.

- `which [Command]`: Prints the location path for a program file.
  - > `vim` > /usr/bin/vim
- `whatis [Command]`: Provides a brief description about a command.
  - > `pwd` > pwd - print name of current/working directory
- `pwd`: Prints current/working directory.
  - > ` ` > /srv/www/github/tech-stack
- `cd [Directory]`: Changes the current working directory to a specific Folder.
  - > `/srv/www` - Change current directory to /srv/www
  - > `..` - Move up one folder. /svv/www to /srv
  - > `~` - Change current directory to the home directory (/home/shaan).
- `ls [Directory]... [-Options]...`: Lists directory contents.
  - > ` ` - List all files and directories of the current directory.
  - > `/srw/www` - List all contents of the given directory.
  - > `-l` - List detailed information about files and directories.
  - > `-t` - Sort the listed items by modification time.
  - > `-r` - Reverse the sorting order.
  - > `-a` - List all contents, including hidden ones.
  - > `-A` - List all contents, including hidden ones except for . and ..
  - > `-R` - List subdirectories recursively fully expanded form.
  - > `*.conf` - List only files that have the .conf extension.
  - > `/srv/www/*.txt` - List all .txt files of the given directory.
  - > `*.*` - List only files.
  - > `-d */` - List only directories.
- `cat [File]... [-Options]...`: Prints the content of files to the terminal.
  - > `./file.txt` - Print the contents of the text file.
  - > `./file1.txt ./file2.txt` - Concatenate the files in sequential order and print.
  - > `-b` - Print the content with line numbers (ignores blank lines).
  - > `-n` - Print the content with line numbers (including blank lines).
  - > `-s` - Print the content in a form that multiple blank lines replaced with a single blank line.
- `OUTPUT > [File]`: Writes the output to a file.
  > `>` overwrites, `>>` not overwrites (appends).
  - > `> ./new-file.txt` - Create an empty file.
  - > `pwd > ./file.txt` - Write current working directory (pwd output) to the file.txt file.
  - > `cat ./file1.txt ./file2.md >> ./file.txt` - Concatenate two files and write (append) the output to the file.txt file.
    > If there is no file like ./file.txt, it will be created.
- `mkdir [-Options] [Directory]...`: Creates new folder(s).
  - > `my-new-folder` - Create a new folder with the given name if it does not already exist.
  - > `-p ./dir1/sub1/sub2/sub3` - Create a nested directory structure (creates missing directories if needed).
  - > `-p ./dir1/{dir1,dir2,dir3}` - Create a directory and put directories with the given names inside it.
- `rmdir [-Options] [Directory]...`: Removes folder(s).
  - > `./dir1 ./dir2` - Delete folders if they exist and are empty.
  - > `-p ./dir1/sub1/sub2/sub3` - Delete the specified directory structure. If a file exists in the middle of the structure, it deletes the lower directories and stops.
- `rm [-Options]... [File]...`: Removes file(s).
  - > `./file.txt`: Delete file if it exists.
  - > `-r` - Remove directories and their contents recursively.
  - > `-ri` - Prompt before every removal. _y/n_
- `cp [-Options]... [Source]... [Dest]`: Copy folder(s) and file(s) to another location.
  - > `./file.txt ./dir1`: Copy the file file.txt into the dir1 folder. If a file with the same name exists in that folder, it will be overwritten.
  - > `./file.txt ./dir1/new-file.txt`: Copy the file file.txt into the dir1 folder with a new name.
  - > `-i` - Prompt before overwrite. _y/n_
  - > `-r ./dir1 ./dir2` - Copy dir1 to dir2 recursively. If dir2 exists, dir1 (folder itself) and its contents will be copied into it. If dir2 does not exist, it will be created and only the contents of dir1 will be copied into it.
- `mv [-Options]... [Source]... [Dest]`: Move or rename file(s) or folder(s).
  > Same as copy, but this time the original file will be deleted.
- `touch [File]...`: Creates empty file(s).
  - > `./file.ts` - Create a new empty file with the given name.
- `head [-Options]... [File]...`: Displays the beginning of file(s).
  - > `-5` - Display the first 5 lines.
- `tail [-Options]... [File]...`: Displays the end of file(s).
  - > `-5` - Display the last 5 lines.
  - > `-f` - Display the last 10 lines.
  - > `-f ./file1.txt ./file2.txt` - Display the last 10 lines of both files.
- `find [Directory] -name [Directory/File]`: Search for file(s) / folder(s) in the given directory.
  - > `/srv/www/github -name dir1` > srv/www/github/file-repo/dir1
  - > `/srv/www -name test*` - Search for all files and folders starting with 'test'.
- `wc [-Options]... [File]...`: Prints line, word, char counts and file name.
  - > `./file.txt` > 11 14 54 ./file.txt
- `grep [-Options] PATTERN [File]...`: Searches file(s) for lines that match a given pattern.
  - > `"a word" ./file.txt ./file2.txt` - Search for 'a word' in file ./file.txt and ./file2.txt.
  - > `-n` - Print output with line numbers.
  - > `-v` - Print all lines that do not contain the pattern.
- `less [Control]`: Opens large output in a formatted manner, similar to an editor.
  - > `q` - Exit.
  - > `space` - Next page.
  - > `b` - Previous page.
  - > `/PATTERN` - Search forward (down).
  - > `?PATTERN` - Search backward (up).
  - > `h` - Help.
- `tar [-Options]... [Source]`: Store, list or extract file(s) / folder(s) in an archive.
  - > `-c` - Create a new archive.
  - > `-f TARGET` - Specify the archive file.
  - > `-x` - Extract files from an archive.
  - > `-z` - Filter the archive through gzip.
  - > `-C` - Change the extraction directory.
  - > `-cf ./test.tar ./test.txt` - Compress the './test.txt' file as a tar archive.
  - > `-xf ./test.tar` - Extract the contents of the archive file in the current directory.
  - > `-C /srv/www -xzf ./test.tar.gz` - Extract the contents of the gzip compressed archive to the '/srv/www' directory.

<p align="right">
    <a href="#linux-debian-based">back to top ⬆</a>
</p>

<br>
<br>
