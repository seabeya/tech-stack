<p align="center">
  <img src="../logo.png" height="200">
</p>

<h1 align="center">Git</em></h1>

<p align="center">
  Git is the world's most popular version control system that helps teams work together on projects. It tracks changes to files over time, allowing multiple people to collaborate efficiently. And I have tried to cover almost everything about it here.
<p>

<p align="right">
    <a href="https://github.com/shaanaliyev/tech-stack#tech-stack">Main Page ↖</a>
</p>

#### Knowledge requirements

- No previous knowledge is required!
  > But if you are new to Git, I recommend watching [Git Explained in 100 Seconds](https://youtu.be/hwP7WQkmECE) before starting.

### Contents

1. [Configuration](#-configuration)
2. [Basics](#-basics)
   - [Git Areas](#-git-areas)
   - [Core commands](#-core-commands)
3. [Branches](#-branches)
   - [Core branching commands](#-core-branching-commands)
   - [Merging branches](#-merging-branches)
4. [Comparing changes](#-comparing-changes)
5. [Stashing](#-stashing)
6. [Time Traveling (undoing changes)](#-time-traveling-undoing-changes)
7. [GitHub](#-github)
   - [Getting Started](#-getting-started)
   - [Setting Up a Remote](#-setting-up-a-remote)

<br>

<hr>

## 🔶 Configuration

- Configure the name and email that Git will associate with your work (required before start).
  - `git config --global user.name "[Name]"`
  - `git config --global user.email "[Email]"`
    > (Optional): If you want to keep your email private, you can use the email provided by GitHub. You can find it in your GitHub settings. For example, mine is 35802638+shaanaliyev@users.noreply.github.com.
    > Without the '--global' option, the configuration will be applied locally to the current repository (you need an initialized repository to do this).
- `git init`: Initialize a new Git repository in a directory.
  > When you run this command in a folder, it sets up all the necessary files and directories that Git needs to start tracking changes in your project. _(You need this once per project.)_

<p align="right">
    <a href="#git">back to top ⬆</a>
</p>

<br>
<br>

## 🔶 Basics

### 🔷 Git Areas

Git has three main areas or states for managing changes in a project:

- **Working Directory (Untracked Area)** - 1️⃣
  > This is where you make modifications to your files. It contains all the files and directories of your project. Changes made in this area are considered 'untracked' by Git. Git detects the changes and sees that the working tree is no longer clean, but it does not track the changes. Untracked files are not included in version control and do not become part of Git's history.
- **Staging Area** - 2️⃣
  > This is where you can carefully select and prepare changes before committing them to the repository. By adding files to the staging area, Git tracks them and considers them ready to be committed. This allows you to group related changes together and review modifications before permanently adding them to the repository.
- **Repository (Committed Area)** - 3️⃣
  > This is the final and permanent area for your project's history. When you commit changes from the staging area, Git creates a new snapshot of the project's state and stores it in the repository. Commits in the repository are immutable and represent milestones in the project's timeline. They can be referenced by unique commit hashes, and you can switch between different commits to view the project at different points in time.

Summary:

> 1️⃣ We work on stuff (creating, editing, deleting files, etc.).

> 2️⃣ Add changes (group specific changes together).

> 3️⃣ Commit (commit everything that was previously added).

Ignoring files `.gitignore`:

> The '.gitignore' file is a configuration file in Git that allows you to specify which files and directories should be ignored and not tracked by Git. This is useful for files you know you never want to commit, such as secrets, API keys, credentials, log files, dependencies etc. When you create a '.gitignore' file and list files or patterns inside it, Git will exclude those files from being staged or committed.

> Here are some examples of commonly used patterns:

- > `*.txt` - Ignores all files with the .txt extension.
- > `!important.txt` - Excepts a file named important.txt from being ignored (assuming we use it after `*.txt`).
- > `folderName/` - Ignores the entire directory named folderName.
- > `config.ini` - Ignores a file named config.ini.
- > `build*/` - Ignores all directories starting with build.
- > `/src/**/*.bak` - Ignores all .bak files in any subdirectory under the src directory.

<br>

### 🔷 Core commands

- `git status`: Show the working tree status.
  > This includes information about the current branch you are on, the changes made to your files and their current status within the repository.
- `git add [File]...`: Add the given new or modified files from the working directory to the staging (index) area. 1️⃣ --> 2️⃣
  - `.` - Stage all changes at once.
- `git commit`: Record grouped changes from the staging area to the repository. 2️⃣ --> 3️⃣

  > It will open an editor for you to enter a multilane commit message. Enter the message you want, then save and exit the editor.

  - `-m '[Message]'` - Shortcut that allows you to enter a single-line commit message directly without opening an editor.

    > You can use this option multiple times to add multiple lines to the commit message. The first line is required and should summarize the changes, while the second and subsequent lines can be used for comments and additional details.

    > It is more common to use the present tense (imperative) for the first line.

  > Keep each commit focused on a single thing. A commit should have only one purpose. This makes it much easier to undo or rollback changes later on. It also makes your project easier to review.

  - `--amend` - Modify / Amend the most recent commit.

    > Let's say you have just made a commit and then realize that you forgot something, such as a typo in a file or including a file itself, or even made a mistake in the commit message. Instead of creating a completely new and separate commit to fix it, you can modify the previous commit using this command.

    > Before using `git commit --amend`, you need to stage your changes using `git add [File]...` for the modifications you want to include in the amended commit if you have any. For typos, you can directly use the command and modify the message.

    > When you use this command, it will open an editor for you to edit the commit message. If you want to edit the commit message, you can make the changes there. Or, you can leave it as it is to not edit and then save and exit to apply the changes.

- `git log`: Show commit logs.
  > It shows a detailed log of commits, including the commit hash, author information, date and time of the commit, and the commit message.
  - > `--oneline` - Show commit logs in a minimized format.
  - > `-[Number]` - Limit the number of commits to output.
  - > `--merge` - Show only the merge commits in the commit history, excluding regular non-merge commits.

<p align="right">
    <a href="#git">back to top ⬆</a>
</p>

<br>
<br>

## 🔶 Branches

In Git, a branch is a lightweight movable pointer to a commit. Branches allow you to isolate changes, work on them independently, and merge them back into the main branch when they are ready. This way, you can develop new features or fix bugs without affecting the stability of the main codebase.

When we initialize a repository in Git, there is always a default branch created.

> Historically, Git commonly used the branch name "master" as the default branch. However, in recent years, there has been a shift towards using "main" as the default branch name to promote more inclusive terminology.

<p align="center">
  <img src="./git-flow.png" height="auto" width="650">
</p>

What is `HEAD`?

> HEAD is a pointer that refers to the current "location" in your repository, acting like a bookmark. It represents the latest commit in the current branch or a specific commit when in a detached HEAD state.

> It allows you to easily identify the commit that is currently active and serves as the starting point for new commits.

<br>

### 🔷 Core branching commands

- `git branch`: List, create, rename, or delete branches.

  - ` ` - List the existing branches in your repository. (\*) indicates the branch you are currently on.
  - `[Name]` - Create a new branch with the given name, based upon the current HEAD.
    > This just creates the branch. It does not switch you to that branch.
  - `-d [Name]` - Delete the branch with the given name. It will delete the branch only if it has been merged. Otherwise, it will not delete it.

    > You can use `-D` to forcefully delete the branch, even if it has not been merged.

    > You can't delete the branch you're currently on, you need to switch to a different branch first.

  - `-M [New_Name]` - Rename the branch that you are currently on.

    > You can use `-m [Name] [New_Name]` to rename any branch.

  - `-vv` - Display a list of local branches along with additional information about their tracking branches.
  - `-a` - List all branches in your Git repository, both local and remote.
  - `-r` - List the remote branches in your Git repository.

- `git switch`: Switch branches.
  - `[Name]` - Switch to the specified branch.
  - `-c [Name]` - Create a new branch and switch to it.
    > You can use `-C` if the branch already exists, but we want to reset it.
- `git checkout`: Switch branches or restore working tree files.
  - `[Name]` - Switch to the specified branch.
  - `-b [Name]` - Create a new branch and switch to it. > You can use `-B` if the branch already exists, but we want to reset it.
    > When you move between branches, your codebase will be updated accordingly to match that branch you are on.

When you switch branches in Git while having uncommitted changes, the behavior depends on the nature of the changes you have made:

- Changes with no conflicts:
  > Git will try to carry them over to the new branch (the changes come with you). Git will preserve your modifications in your working directory as you switch branches, allowing you to continue working on them.
- Changes with conflicts:
  > Git will prevent the branch switch to avoid data loss and inform you about the conflicts. In this case, you need to decide whether to commit, stash, or discard your changes before switching branches.

<br>

### 🔷 Merging branches

In Git, merging refers to the process of combining two or more branches together. When you merge branches in Git, the changes made in the source branch are applied to the target branch.

- `git merge [Name]`: Combine changes from the given named branch into the current branch.

  - `--squash` - Combine all the commits from the merged branch and add them to the staged area of the current branch.

    > This allows you to commit everything at once with a single commit, thereby avoiding cluttering your branch history with numerous small, individual commits from the merged branch.

  > If you encounter conflicts or issues while performing a Git merge, you can use `git merge --abort` to cancel the merge and revert your branch to its previous state.

There are two primary types of merges in Git:

- Fast-forward merge:

  > This type of merge occurs when there have been no new commits on the target branch since the source commit was created. In such cases, Git simply moves the pointer of the target branch to the latest commit of the source branch without creating a new merge commit. This process results in a linear commit history.

  <p align="center">
    <img src="./fast-forward.png" height="auto" width="550">
  </p>

- Three-way merge:

  > This type of merge occurs when there are new commits on both branches. Git performs a three-way merge by finding the common ancestor commit and applying the changes introduced in both branches since that point.

  - If there are no conflicts, Git automatically applies the combined changes to the current branch and creates a new merge commit (you are still asked to enter a commit message).

  - If conflicting changes occur, where the same lines of code have been modified differently on both branches, Git stops the merge and asks for manual conflict resolution. In such cases, you need to edit the conflicting files and choose which changes to keep.
    > Step by step scenario:
    - > Conflicts occur (It shows you which files have merge conflicts. The files with merge conflicts are in a special form; they have markers that show the differences between two branches).
    - > Open up the files with merge conflicts.
    - > Edit the files to remove the conflicts and choose which changes to keep. It is up to you how you keep and edit the file.
    - > Remove the conflict 'markers' and save the files.
    - > Stage your changes and then make a commit (that will be your merge commit).

  <p align="center">
    <img src="./three-way.png" height="auto" width="550">
  </p>

<p align="right">
    <a href="#git">back to top ⬆</a>
</p>

<br>
<br>

## 🔶 Comparing changes

- `git diff`: Show the differences between different versions of files in a Git repository.

  > It displays the changes made to the files, line by line, and provides a clear view of what has been added, modified, or deleted.

  - ` ` - List the changes made between the unstaged area (1️⃣) and the staged area (2️⃣).
  - `HEAD` - List all changes in the working tree since the last commit (3️⃣), including both staged (2️⃣) and unstaged (1️⃣) changes.
  - `--staged` - List the changes between the staged area (2️⃣) and the last commit (3️⃣).

    > In other words, it shows what will be included in your commit if you run 'git commit' right now.

    > `--cached` does the same thing.

  - `[Branch1]..[Branch2]` - List the changes between two branches.
  - `[Commit_Hash1]..[Commit_Hash2]` - List the changes between two commits.
    > We can view the changes within a specific file by providing a file name after any of these options. `git diff HEAD [File]...`.

<p align="right">
    <a href="#git">back to top ⬆</a>
</p>

<br>
<br>

## 🔶 Stashing

Stashing is a feature that allows you to temporarily save changes in your working directory that are not ready to be committed yet.

> Stashing is useful in situations where you need to switch to a different branch to work on something else, but you don't want to commit your current changes or lose them. It allows you to save your changes, switch branches, and then later come back to your original branch and apply the saved changes.

- `git stash`: Save changes that have not yet been committed (unstaged & staged).

  - ` ` - Save changes to the stash.

    > Running this command will revert the changes you have made since the last commit. This means that the changes will not be carried over when you switch branches (the changes will not come with you).

    > You can add muptiple stashes onto the stash list.

    > When you stash, it assigns an index, branch, and message information to that stash. The most recent stash added always has index 0, the second has index 1, and so on.

  - `push -m '[Message]'` - Save changes to the stash with a specific message.
  - `list` - Show the stash list.
  - `pop` - Apply the most recently stashed changes to your working copy <ins>and remove</ins> them from the stash list.
    - > `[Index_No]` - Apply a specific stash.
  - `apply` - Apply the most recenly stashed changes to your working <ins>without removing</ins> it from the stash list.

    - > `[Index_No]` - Apply a specific stash.
      > This can be useful if you want to apply stashed changes to multiple branches.

    > If a conflict occurs, you can resolve it using the same method as we do in merging.

  - `clear` - Clear the entire stash list.
  - `drop [Index_No]` - Remove a specific stash from the list.

<p align="right">
    <a href="#git">back to top ⬆</a>
</p>

<br>
<br>

## 🔶 Time Traveling (undoing changes)

- `git checkout [Commit_Hash]`: Travel to a specific commit.

  - > `HEAD~[Number]` - A different syntax to do the same thing.
    > `~1` refers to the commit before HEAD. `~2` refers to 2 commits before HEAD and so on. _Ex: `git checkout HEAD~3` means three commits before the current HEAD._

  > You will travel to the state of the given commit, and everything will be as it was at that moment (the given commit included).

  > This puts your repository in a detached HEAD state.

  > The files in your working directory are replaced with the contents of the commit you checked out.

  What you can do here?

  - > Look around, view files, and when you're done, simply switch back to the branch you were on before to go back to where you were. _Ex: `git switch main`_. Alternatively, you can use a special syntax to switch directly to the exact branch where you were previously with `git  switch -`.
  - > Create a new branch from the detached HEAD and switch to it. Now the changes will be saved since the HEAD is no longer detached, and you can build upon this state. This new branch will represent a distinct version that is based on a specific commit, disregarding any subsequent commits that came after it.

  What is `detached HEAD` state?

  > In Git, the "detached HEAD" state occurs when the HEAD pointer is directly pointing to a specific commit rather than a branch reference (latest commit of current branch). This can happen when you check out a specific commit, a tag, or a branch that is not up to date. While in a detached HEAD state, you can still look around, make changes and create commits, but these commits won't belong to any branch and can be easily lost.

- `git restore --source [Commit_Hash] [File]...`: Restore the contents of the given files to their state from the given commit (including).

  > It simply adds the "Commit_Hash" state of the given files as unstaged changes; there will not be any time travel.

  <br>

**Moving between areas:**

- `git restore [File]...`: Discard unstaged changes. 1️⃣ --> 0️⃣

  > The old command to do the same thing: `git checkout [File]...`.

- `git clean [-Options]...`: Clean up untracked files and folder in a Git repository.

  - `-d` - Remove untracked files and folders.
  - `-f` - To perform the clean operation forcefully.
  - `-n` - Preview what would be removed if the command were executed.

- `git checkout HEAD [File]...`: Discard uncommitted changes. 1️⃣, 2️⃣ --> 0️⃣

  > Any changes made to those files since the last commit will be discarded, and the files will be reverted to their previous state (staged area will be cleared).

- `git restore --stage [File]...`: Unstage files. 2️⃣ --> 1️⃣

  > When you accidentally add a file to the staging area using "git add [File]...", you can use this command to undo it.

  > `git reset [File]...` does the same thing as well.

- `git reset [--Options] [Commit_Hash]`: Rewind the repository to the specified commit (including).

  - ` ` - Jump to a specific commit and discard all the commits that come after it. 3️⃣ --> 1️⃣

    > All the changes that were made before using this command will be kept in the working directory as unstaged changes.

  - `--hard` - Does the same thing with ` `, but this time the changes will also be discarded. 3️⃣ --> 0️⃣

  - `--soft` - Does the same thing with ` `, but this time the changes will move to the staged area, not the unstaged area. 3️⃣ --> 2️⃣

- `git revert [Commit_Hash]`: Create a new commit that undoes the changes made in the specified commit.

  > The new commit will have the changes made before the specified commit.

  > You may be asked to resolve conflicts.

  > It is useful when working with a team as it enables collaboration by allowing everyone to easily see and understand the changes that have been undone. It maintains a clear record of the project's history and helps avoid conflicts when multiple people are making changes simultaneously.

> **Note**:
> Instead of using `[File]...` in the mentioned locations within this section, you can use `.` to cover everything. Additionally, instead of using `[Commit_Hash]`, you can also use the `HEAD~[Number]` syntax.

<p align="right">
    <a href="#git">back to top ⬆</a>
</p>

<br>
<br>

## 🔶 GitHub

GitHub is a web-based platform that provides a centralized location for hosting and collaborating on software development projects using the Git version control system.

<br>

### 🔷 Getting Started

**To get a GitHub repository to your local machine.**

- `git clone [Remote_URL]`: Create a local copy of a repository hosted on GitHub.

  > When you run this command, Git will create a folder, download all the files and version history of the specified repository, and set up a local copy on your machine.

  > It is not necessary to own the repository you want to clone.

  > If you want to clone the repository into the current directory, you can append `.` to that command.

<br>

**To get a local repository on GitHub.**

- Starting from Scratch:

  > If you haven't begun work on your local repo.

  - Create a new repository on GitHub.
  - Create a local copy of it by cloning.
  - Do your work locally.
  - Push your changes up to GitHub.

- Existing Repository:

  > If you already have an existing repository locally that you want to get on GitHub.

  - Create a new repository on GitHub.
  - Connect your local repository with the remote GitHub repository.
  - Push your changes up to GitHub.

<br>

### 🔷 Setting Up a Remote

Prior to uploading any content to GitHub, it is necessary for us to inform Git about the existence of our remote repository on GitHub.

> If you clone a GitHub repository, you don't need to manually set up the remote repository in Git. The cloning process automatically establishes the remote repository as the default origin.

- `git remote`: Manage the remote repositories.

  - `-v` - Display the remote repositories associated with your local Git repository.
  - `add [Label] [Remote_URL]` - Add a new remote repository to your local Git repository.
    > We are simply instructing Git to remember the Remote Repository URL using the label/name we have provided, and it's a convention to use "origin" as the default label/name. However, you can choose any name that makes sense to you.
  - `rename [Label] [New_Name]` - Rename remote.
  - `remove [Label]` - Remove remote.

- `git push [Label] [Branch_Name]`: Push the changes from the specified branch in your local Git repository to a remote repository labeled with the previously defined label.

  > If there is no branch with the given name on GitHub, the branch will be created there.

  - `-u` - Establish a tracking relationship between your local branch and the remote branch.

    > Setting upstream branch is useful because once you've set it up, you can simply use `git pull` and `git push` without specifying the remote and branch names in the future. Git will automatically know which remote and branch to use based on the established tracking relationship.

  > We can also push a local branch to a differently named remote branch by using the `git push [Label] [Local_Branch]:[Remote_Branch]` syntax.
