<p align="center">
  <img src="../logo.png" height="200">
</p>

<h1 align="center">Linux <em>(debian based)</em></h1>

<p align="center">
  A compilation of some basic OS commands and concepts.
</p>

> Linux is an open-source operating system kernel that serves as the foundation for various operating systems, known as Linux distributions. Debian is one such distribution that is composed entirely of free and open-source software.

<p align="right">
    <a href="https://github.com/shaanaliyev/tech-stack#tech-stack">Main Page ↖</a>
</p>

#### Knowledge requirements

- No previous knowledge is required!

### Contents

1. [Directory Structure](#-directory-structure)
2. [Basic commands](#-basic-commands)
3. [Process / Monitor commands](#-process--monitor-commands)
4. [Using multiple commands together](#-using-multiple-commands-together)
5. [Permissions](#-permissions)
   - [Overview](#-overview)
   - [Commands](#-commands)
6. [User & Group commands](#-user--group-commands)

<br>

<hr>

## 🔶 Directory Structure

The Linux directory structure, often referred to as the Filesystem Hierarchy Standard (FHS), organizes files and directories on a Linux system in a hierarchical manner. It provides a consistent and organized way to store and locate files, making it easier to navigate and manage the system.

- `/` (root): The root is the top-level directory in the Linux filesystem hierarchy. All other directories and files are located beneath it.

- `/boot`: The boot directory contains files related to the system's boot process. It includes the kernel, initial RAM disk (initrd), and boot loader configurations.

- `/bin`: The bin directory contains essential binary executables (commands) that are available to all users. It typically includes commonly used utilities such as `ls`, `cp`, `curl`, and `mkdir`.

- `/sbin`: The sbin directory contains system binaries (commands) that are primarily used for system administration. These executables are typically available only to the root user.

- `/dev`: The dev directory contains device files that represent physical and virtual devices connected to the system, such as hard drives, USB devices, and serial ports.

  > These are not device drivers themselves, but rather dynamic files that act as interfaces between the operating system and the hardware devices.

  > These device files allow you to read from and write to the devices, send control commands, and perform various operations. When you interact with these files, the system communicates with the corresponding hardware or device driver to handle the requested actions.

- `/etc`: The etc directory contains system-wide configuration files. It includes various configuration files for the operating system, services, and applications.

  > This is where you customize all your programs.

- `/lib`: The lib directory contains libraries (shared object files) that are essential for the system and other executables to function properly.

  > Libraries are collections of code and resources that provide common functionality to applications and programs.

- `/media`: The media directory is used as a mount point for removable media such as USB drives, CDs, and DVDs. When a device is inserted, it is usually mounted under this directory.

- `/mnt`: The mnt directory is used as a temporary mount point for filesystems. It is often used by system administrators to manually mount temporary filesystems or network shares.

- `/opt`: The opt directory is intended for the installation of optional software packages. It provides a location for third-party applications that are not part of the core system distribution.

  > Developers or development teams may use the /opt directory to install development tools or libraries that are specific to their projects. This can help keep project-specific dependencies separate from the system-wide installations.

  > When you install software manually, bypassing the system's package manager, you can choose to place it under /opt to ensure it does not interfere with other system files or packages.

- `/proc`: The proc directory provides a virtual filesystem that exposes information about running processes and system resources. It is used by various system utilities to gather information dynamically.

  > Many of these files are dynamically generated during the boot time or even on the fly, with the kernel translating the information to appear as files.

- `/run`: The run directory in Linux is a temporary filesystem (tempfs - data is stored in RAM) that holds runtime data and information for running processes. It is typically used to store system-related runtime files and state information during the system's runtime.

- `/home`: The home directory is the default location for user home directories. Each user typically has a subdirectory under /home where they can store their personal files and configurations.

- `/root`: The root directory is the home directory for the root user (superuser). It contains configuration files and personal files specific to the root user.

- `/tmp`: The tmp directory is used for temporary files created by applications and users. The contents of this directory are generally cleared upon reboot.

- `/usr`: The usr directory contains user-related files and programs. It is divided into subdirectories such as /usr/bin (user binaries), /usr/lib (user libraries), /usr/share (shared data files), and more.

- `/var`: The var directory contains variable data files that are expected to change during the system's operation.

  > It includes log files, temporary files, MySQL databases, other database files, email inboxes, web server data files, and other data that is specific to running services.

- `/srv`: The srv directory is a designated location for storing data files that are served by the system.
  > Typically used by system administrators to store data related to services such as web servers (/srv/www), FTP (/srv/ftp) servers, or other network services. This directory is specifically meant to contain files that will be accessed by external users.

<p align="right">
    <a href="#linux-debian-based">back to top ⬆</a>
</p>

<br>
<br>

## 🔶 Basic commands

> `.`, `./` or ` ` is shorthand for the current directory.

> Some of these commands can take you into an editor or a special window. You can use `q` to quit.

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

## 🔶 Process / Monitor commands

- `shutdown [-Options] [When]`: Shutdown or restart the OS.
  - > `-h now` - Turn off now.
  - > `-r +30` - Reboot after 30 minutes.
  - > `-c` - Cancel a shutdown that is in progress.
  - > `-r 19:30` Reboot the system when it's 19:30.
- `df [-Options]...`: Displays free disk space.
  - > `-h` - Display in a human readable format.
- `du [-Options]... [Directory/File]...`: Displays the amount of disk space used by the specified files and for each directory.
  - > `-a` - Display counts for all files, not just directories.
  - > `-h` - Display in a human readable format.
  - > `-s` - Display only a total for each argument.
- `free [-Options]...`: Display memory usage.
  - > `-h` - Display in a human readable format.
- `watch [-Options] [Command & -Options]`: Execute a command periodically, show output full screen.
  - > `-n 2 ls -a` - Run `ls -a` every 2 seconds.
- `top [Control]`: Lists processes running on the system (task manager).
  - > `q` - Exit.
  - > `space` - Update display immediately.
  - > `s` - Select the refresh rate.
  - > `k PID` - Terminate the process with the specified process ID.
- `lsof [-Options] PATTERN`: Provides a list of open processes.
  - > `-i` - Print processes about network connections.
  - > `-i tcp` - List open network connections associated with TCP
  - > `-i tcp:3000` - List open network connections associated with TCP protocol and port.
- `kill [-Sigspec] PID`: Kill a process using PID.
  > `-3`: quit, `-6`: cancel, `-9`: kill, `-15`: orderly shutdown, `-17`, `-19`, `-23`: stop.
  - > `-9 423` - Kill the process with a PID of 423.
- `ps [-Options]...`: Displays process status.
  - > `-x` - Display information about all running processes.
  - > `-u USER` - Display information about processes of a specific user.
- `last`: Display the last users who have logged onto the system.

<p align="right">
    <a href="#linux-debian-based">back to top ⬆</a>
</p>

<br>
<br>

## 🔶 Using multiple commands together

- `cmd1 ; cmd2 ; cmd3`: If a command produces an error, it displays the error message and continues to execute.
- `cmd1 && cmd2 && cmd3`: If a command produces an error, the execution stops after the error.
- `cmd1 || cmd2 || cmd3`: Executes the commands until one of them runs successfully. If a command runs successfully, the execution is stopped.
- `cmd1 | cmd2`: Matches the output of the previous command to the input of the next command.
  - > `find . *.* | less` - Display the output from `find . *.*` in the `less` editor.

<p align="right">
    <a href="#linux-debian-based">back to top ⬆</a>
</p>

<br>
<br>

## 🔶 Permissions

### 🔷 Overview

When a file or directory is created, it is assigned an owner and a group. Additionally, there are a total of 4 blocks that determine both the type of entity and the permission level assigned to the file or directory. We can list the permissions by using the `ls -l` command.

<p align="center">
   <strong>[<ins>identifier</ins>] [<ins>owner</ins>] [<ins>group</ins>] [<ins>others</ins>]</strong>
</p>
<p align="center">
     - rwx rwx rwx
</p>

- **Identifier:** The type of entity to which the permissions apply.

  - `-`: File.
  - `d`: Directory.
  - `l`: Symbolic link (files that act as references to other files or directories).

- **Owner:** The permissions granted to the owner of the file or directory.

  > The owner is the user who created the file or directory, or the user who has been explicitly granted ownership.

- **Group:** The permissions granted to the group that the file or directory belongs to.

  > A "group" refers to a collection of user accounts that are associated together for the purpose of permissions and resource sharing.
  > Users can be members of one or more groups.
  > Groups have unique group names and group IDs (GIDs) that are used to identify and manage them in the system.
  > To become a member of a group, you need to be added to the group by a user with administrative privileges.
  > When you create a file or folder in Linux, the default group ownership is typically set to the primary group of the user who creates it. This primary group is specified in the user's account settings and is typically the same as the username.

- **Others:** The permissions granted to all users who are not the owner or members of the group associated with the file or directory.

The users listed above (owner, group, all-others) have access permissions represented by three characters (bits): `r`,`w`,`x`.

> If a dash `-` appears instead of a letter, it means that the permission is turned off for that bit.

- `r` Read.
  - File - View the contents of the file. `cat`, `less`, open with file editor.
  - Directory - List the contents of the directory. `ls`
- `w` Write.
  - File - Modify the file contents, delete, rename, or move the file itself.
  - Directory - Create, modify, move, or delete files or subdirectories within the directory.
    > Having the "w" permission on a directory does not allow you to delete the directory itself. To delete a directory, you need to have "w" and "x" permissions on the parent directory that contains the directory you want to delete.
- `x` Execute.
  - File - Run the file as a command or program.
  - Directory - Enter, access, and traverse within the directory.

Permissions can be represented by numbers.

`r: 4`, `w: 2`, `x: 1`

By adding up the value of each user classification, you can find the file permissions.

| Octal | Binary | File Mode |
| ----- | ------ | --------- |
| 0     | 000    | - - -     |
| 1     | 001    | - - x     |
| 2     | 010    | - w -     |
| 3     | 011    | - w x     |
| 4     | 100    | r - -     |
| 5     | 101    | r - x     |
| 6     | 110    | r w -     |
| 7     | 111    | r w x     |

Example: `-rwxr-x--x` translates to `751`. 7 for owner, 5 for group and 1 for the others.

<br>

### 🔷 Commands

> `$USER` - The current system user/group (yourself).

- `sudo [Command]...`: Execute a command as the superuser.

  > [!NOTE]
  > You may need to use `sudo` keyword before using the commands listed in this documentation.

  > To start a shell session as the root user (useful when you need to execute multiple commands that require elevated privileges), use `sudo -i`.

- `chown [-Options]... [NewOwner] [Directory/File]...`: Change owner, change the user and/or group ownership of each given directory/file to a new Owner.
  - > `-R` - Recursively change ownership of directories and their contents.
  - > `$USER ./file.txt` - Change the owner of the "./file.txt" file to the current user (yourself). If you also want to change the group of the file, you can use `$USER:$USER`.
  - > `-R shaan:staff /srv/www/my-website` - Change the owner to "shaan" and the group to "staff" of the "/srv/www/my-website" directory and its contents.
- `chgrp [-Options]... [Group] [Directory/File]...`: Change group ownership.
  - > `-R` - Recursively change group ownership of directories and their contents.
  - > `team /srv/www/my-website` - Change the group to 'team' of the '/srv/www/my-website' directory.
- `chmod [Users]... [+/-/=] [Permission]... [Target]`: Change permissions.
  > Users: `u: owner`, `g: group`, `o: others`, `a: everyone`.
  - > `-R` - Recursively change permission of directories and their contents.
  - > `+w ./file.txt` - Add 'write' permission for the owner. When we don't specify a user, it means the 'owner'.
  - > `g+w ./file.txt` - Add 'write' permission for the group.
  - > `o-r ./file.txt` - Remove 'read' permission for others.
  - > `ug+rwx ./file.txt` - Add 'read', 'write', and 'execute' permissions for the owner and group.
  - > `u=x ./file.txt` - Set 'execute' permission for the owner. If it had 'rwx' before this command, it will become '--x'.
  - > `a-rw ./file.txt` - Remove 'read' and 'write' permissions for everyone.
    > We can also use numeric format `chmod [owner group others] [Target]`.
  - > `777 ./file.txt` - Give `rwx` to everyone.
  - > `700 ./file.txt` - Give `rwx` to the owner and remove all permissions from the group and others.
  - > `324 file.txt` - Give `wx` to the owner, `w` to the group, and `r` to others.

<p align="right">
    <a href="#linux-debian-based">back to top ⬆</a>
</p>

<br>
<br>

## 🔶 User & Group commands

- `whoami`: Print the current user.
- `getent group`: Print all the groups on the System.
- `groups [Username]...`: Print all the groups you are a member of.
- `useradd [-Options]... [USER_NAME]`: Create a new user.
  - > `-d /home/testFolder` - Specify the home directory for the new user as '/home/testFolder'. The default directory is '/home/USER_NAME'.
  - > `-m` - Set up a corresponding home directory for the new user.
    > In general, using the '-m' option with the 'useradd' command is necessary if you want to create a home directory for the newly created user. If this option is not used, the home directory will not be created.
  - > `-c "your comment"` - Add comment/description for the new user.
  - > `-e 2023-06-01` - Set a date (YYYY-MM-DD) on which the user account will be disabled.
  - > `-g staff` - Specify the primary group as 'staff' for the new user.
  - > `-m -d /home/web -c "web server" -g operator www` - Create a new user account called 'www' with a home directory at '/home/web'. The user will have the primary group set as 'operator' and a comment of 'web server'.
- `userdel [-Options]... [USER_NAME]`: Delete a user account.
  - > `www` - Delete a user with the given username 'www'.
  - > `-r` - Delete user's home directory with its contents.
- `groupadd [-Options]... [GROUP_NAME]`: Create a new group.
- `groupdel [GROUP_NAME]`: Delete a group.
- `usermod -a -G [GROUP_NAME]... [USER_NAME]`: Add a user to a group.
  - > `-aG staff shaan` - Add the user 'shaan' to the group 'staff'.
- `gpasswd -d [USER_NAME] [GROUP_NAME]...`: Remove a user from a group.
  - > `-d staff shaan` - Remove the user 'shaan' from the group 'staff'.
- `newgrp [GROUP_NAME]`: Start a new shell with a different primary group.
  - > `operator` - Start a new shell session with the 'operator' group as the primary group. Any actions or commands you perform within that shell session will be done with the permissions and access rights of that group.
- `passwd [-Options...] [USER_NAME]`: Modify a user password.
  > When you press Enter, it will prompt for the old password and new password.
  - > `-d` - Delete a user's password and make it passwordless.
  - > `-e` - Immediately expire an account's password. Force a user to change their password at their next login.
- `id`: Print user and group id's.

<p align="right">
    <a href="#linux-debian-based">back to top ⬆</a>
</p>
