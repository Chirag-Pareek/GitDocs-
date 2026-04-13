export interface Tutorial {
  id: string;
  title: string;
  category: string;
  description: string;
  content: TutorialContent[];
}

export interface TutorialContent {
  type: 'paragraph' | 'heading' | 'subheading' | 'code' | 'list' | 'info' | 'warning' | 'tip';
  content?: string;
  items?: string[];
  code?: string;
  language?: string;
}

export interface Category {
  id: string;
  title: string;
  tutorials: { id: string; title: string }[];
}

export const categories: Category[] = [
  {
    id: 'learn-git',
    title: 'Learn Git',
    tutorials: [
      { id: 'git-commands', title: 'Git Commands' },
      { id: 'learn-git-overview', title: 'Learn Git Overview' },
    ],
  },
  {
    id: 'beginner',
    title: 'Beginner',
    tutorials: [
      { id: 'what-is-version-control', title: 'What is Version Control' },
      { id: 'what-is-git', title: 'What is Git' },
      { id: 'why-git', title: 'Why Git for Your Organization' },
      { id: 'install-git', title: 'Install Git' },
      { id: 'git-ssh', title: 'Git SSH' },
      { id: 'git-cheat-sheet', title: 'Git Cheat Sheet' },
    ],
  },
  {
    id: 'getting-started',
    title: 'Getting Started',
    tutorials: [
      { id: 'setting-up-repository', title: 'Setting up a Repository' },
      { id: 'saving-changes', title: 'Saving Changes' },
      { id: 'inspecting-repository', title: 'Inspecting a Repository' },
      { id: 'undoing-changes', title: 'Undoing Changes' },
      { id: 'rewriting-history', title: 'Rewriting History' },
    ],
  },
  {
    id: 'collaborating',
    title: 'Collaborating',
    tutorials: [
      { id: 'syncing', title: 'Syncing (git remote)' },
      { id: 'using-branches', title: 'Using Branches' },
      { id: 'making-pull-request', title: 'Making a Pull Request' },
      { id: 'comparing-workflows', title: 'Comparing Workflows' },
    ],
  },
  {
    id: 'advanced',
    title: 'Advanced Tips',
    tutorials: [
      { id: 'merging-vs-rebasing', title: 'Merging vs. Rebasing' },
      { id: 'reset-checkout-revert', title: 'Reset, Checkout, and Revert' },
      { id: 'advanced-git-log', title: 'Advanced Git Log' },
      { id: 'git-hooks', title: 'Git Hooks' },
      { id: 'git-submodules', title: 'Git Submodules' },
      { id: 'git-cherry-pick', title: 'Git Cherry Pick' },
      { id: 'git-stash', title: 'Git Stash' },
      { id: 'git-tag-bisect', title: 'Tags & Bisect' },
      { id: 'git-clean-rm', title: 'Clean & Remove' },
      { id: 'git-switch-restore', title: 'Switch & Restore' },
    ],
  },
];

export const tutorials: Record<string, Tutorial> = {
  'what-is-git': {
    id: 'what-is-git',
    title: 'What is Git?',
    category: 'Beginner',
    description: 'Learn about Git, the most widely used modern version control system.',
    content: [
      {
        type: 'paragraph',
        content: 'By far, the most widely used modern version control system in the world today is Git. Git is a mature, actively maintained open source project originally developed in 2005 by Linus Torvalds, the famous creator of the Linux operating system kernel.',
      },
      {
        type: 'paragraph',
        content: 'A staggering number of software projects rely on Git for version control, including commercial projects as well as open source. Developers who have worked with Git are well represented in the pool of available software development talent and it works well on a wide range of operating systems and IDEs (Integrated Development Environments).',
      },
      {
        type: 'paragraph',
        content: 'Having a distributed architecture, Git is an example of a DVCS (hence Distributed Version Control System). Rather than have only one single place for the full version history of the software as is common in once-popular version control systems like CVS or Subversion (also known as SVN), in Git, every developer working copy of the code is also a repository that can contain the full history of all changes.',
      },
      {
        type: 'heading',
        content: 'Performance',
      },
      {
        type: 'paragraph',
        content: 'The raw performance characteristics of Git are very strong when compared to many alternatives. Committing new changes, branching, merging and comparing past versions are all optimized for performance. The algorithms implemented inside Git take advantage of deep knowledge about common attributes of real source code file trees, how they are usually modified over time and what the access patterns are.',
      },
      {
        type: 'paragraph',
        content: 'Unlike some version control software, Git is not fooled by the names of the files when determining what the storage and version history of the file tree should be, instead, Git focuses on the file content itself. After all, source code files are frequently renamed, split, and rearranged.',
      },
      {
        type: 'heading',
        content: 'Security',
      },
      {
        type: 'paragraph',
        content: 'Git has been designed with the integrity of managed source code as a top priority. The content of the files as well as the true relationships between files and directories, versions, tags and commits, all of these objects in the Git repository are secured with a cryptographically secure hashing algorithm called SHA1. This protects the code and the change history against both accidental and malicious change and ensures that the history is fully traceable.',
      },
      {
        type: 'heading',
        content: 'Flexibility',
      },
      {
        type: 'paragraph',
        content: 'Git is designed to handle everything from small to very large projects with speed and efficiency. It is easy to learn and has a tiny footprint with lightning fast performance. It outclasses SCM tools like Subversion, CVS, Perforce, and ClearCase with features like cheap local branching, convenient staging areas, and multiple workflows.',
      },
    ],
  },
  'what-is-version-control': {
    id: 'what-is-version-control',
    title: 'What is Version Control?',
    category: 'Beginner',
    description: 'Understand the basics of version control and why it is essential for software development.',
    content: [
      {
        type: 'paragraph',
        content: 'Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later. For the examples in this book, you will use software source code as the files being version controlled, though in reality you can do this with nearly any type of file on a computer.',
      },
      {
        type: 'paragraph',
        content: 'If you are a graphic or web designer and want to keep every version of an image or layout (which you would most certainly want to), a Version Control System (VCS) is a very wise thing to use. It allows you to revert selected files back to a previous state, revert the entire project back to a previous state, compare changes over time, see who last modified something that might be causing a problem, who introduced an issue and when, and more. Using a VCS also generally means that if you screw things up or lose files, you can easily recover. In addition, you get all this for very little overhead.',
      },
      {
        type: 'heading',
        content: 'Local Version Control Systems',
      },
      {
        type: 'paragraph',
        content: 'Many people version-control method of choice is to copy files into another directory (perhaps a time-stamped directory, if they are clever). This approach is very common because it is so simple, but it is also incredibly error prone. It is easy to forget which directory you are in and accidentally write to the wrong file or copy over files you do not mean to.',
      },
      {
        type: 'heading',
        content: 'Centralized Version Control Systems',
      },
      {
        type: 'paragraph',
        content: 'The next major issue that people encounter is that they need to collaborate with developers on other systems. To deal with this problem, Centralized Version Control Systems (CVCSs) were developed. These systems, such as CVS, Subversion, and Perforce, have a single server that contains all the versioned files, and a number of clients that check out files from that central place.',
      },
      {
        type: 'heading',
        content: 'Distributed Version Control Systems',
      },
      {
        type: 'paragraph',
        content: 'This is where Distributed Version Control Systems (DVCSs) step in. In a DVCS (such as Git, Mercurial, Bazaar or Darcs), clients do not just check out the latest snapshot of the files: they fully mirror the repository. Thus if any server dies, and these systems were collaborating via it, any of the client repositories can be copied back up to the server to restore it. Every clone is really a full backup of all the data.',
      },
    ],
  },
  'install-git': {
    id: 'install-git',
    title: 'Install Git',
    category: 'Beginner',
    description: 'Learn how to install Git on different operating systems.',
    content: [
      {
        type: 'paragraph',
        content: 'Before you start using Git, you have to make it available on your computer. Even if it is already installed, it is probably a good idea to update to the latest version. You can either install it as a package or via another installer, or download the source code and compile it yourself.',
      },
      {
        type: 'heading',
        content: 'Installing on Linux',
      },
      {
        type: 'paragraph',
        content: 'If you want to install the basic Git tools on Linux via a binary installer, you can generally do so through the package management tool that comes with your distribution. For Fedora (and RPM-based distributions):',
      },
      {
        type: 'code',
        code: `sudo dnf install git-all`,
        language: 'bash',
      },
      {
        type: 'paragraph',
        content: 'For Debian-based distributions (like Ubuntu):',
      },
      {
        type: 'code',
        code: `sudo apt install git-all`,
        language: 'bash',
      },
      {
        type: 'heading',
        content: 'Installing on macOS',
      },
      {
        type: 'paragraph',
        content: 'There are several ways to install Git on macOS. The easiest is probably to install the Xcode Command Line Tools. On Mavericks (10.9) or above you can do this simply by trying to run git from the Terminal the very first time.',
      },
      {
        type: 'code',
        code: `git --version`,
        language: 'bash',
      },
      {
        type: 'paragraph',
        content: 'If you do not have it installed already, it will prompt you to install it. Alternatively, you can use Homebrew:',
      },
      {
        type: 'code',
        code: `brew install git`,
        language: 'bash',
      },
      {
        type: 'heading',
        content: 'Installing on Windows',
      },
      {
        type: 'paragraph',
        content: 'There are also a few ways to install Git on Windows. The most official build is available for download on the Git website. Just go to https://git-scm.com/download/win and the download will start automatically.',
      },
      {
        type: 'info',
        content: 'Note: The Git for Windows installer provides the Git command-line tools, Git GUI, and Git Bash.',
      },
    ],
  },
  'setting-up-repository': {
    id: 'setting-up-repository',
    title: 'Setting up a Repository',
    category: 'Getting Started',
    description: 'Learn how to initialize and clone Git repositories.',
    content: [
      {
        type: 'paragraph',
        content: 'A Git repository is a virtual storage of your project. It allows you to save versions of your code, which you can access when needed. There are two ways to create a Git repository: initializing a new repository or cloning an existing one.',
      },
      {
        type: 'heading',
        content: 'git init',
      },
      {
        type: 'paragraph',
        content: 'The git init command creates a new Git repository. It can be used to convert an existing, unversioned project to a Git repository or initialize a new, empty repository. Most of the other Git commands are not available outside of an initialized repository, so this is usually the first command you will run in a new project.',
      },
      {
        type: 'code',
        code: `# Create a new directory for your project
mkdir my-project
cd my-project

# Initialize a Git repository
git init`,
        language: 'bash',
      },
      {
        type: 'paragraph',
        content: 'This creates a new .git subdirectory in your current working directory. This directory contains all of the necessary Git metadata for the new repository.',
      },
      {
        type: 'heading',
        content: 'git clone',
      },
      {
        type: 'paragraph',
        content: 'The git clone command copies an existing Git repository. This is the most common way for developers to obtain a working copy of a central repository. Cloning creates a local copy of the repository with all files, branches, and commits.',
      },
      {
        type: 'code',
        code: `# Clone a repository
git clone https://github.com/user/repository.git

# Clone into a specific directory
git clone https://github.com/user/repository.git my-directory`,
        language: 'bash',
      },
      {
        type: 'heading',
        content: 'git config',
      },
      {
        type: 'paragraph',
        content: 'Git uses a username to associate commits with an identity. The git config command can be used to set this identity. You should set both your username and email address.',
      },
      {
        type: 'code',
        code: `# Set your username
git config --global user.name "Your Name"

# Set your email
git config --global user.email "your.email@example.com"

# Check your settings
git config --list`,
        language: 'bash',
      },
    ],
  },
  'saving-changes': {
    id: 'saving-changes',
    title: 'Saving Changes',
    category: 'Getting Started',
    description: 'Learn how to save changes to your Git repository.',
    content: [
      {
        type: 'paragraph',
        content: 'Once you have a Git repository initialized, you can start tracking changes to your files. Git has a staging area that lets you choose which changes you want to include in each commit.',
      },
      {
        type: 'heading',
        content: 'git add',
      },
      {
        type: 'paragraph',
        content: 'The git add command adds a change in the working directory to the staging area. It tells Git that you want to include updates to a particular file in the next commit. However, git add does not really affect the repository in any significant way—changes are not actually recorded until you run git commit.',
      },
      {
        type: 'code',
        code: `# Add a specific file
git add filename.txt

# Add all files in the current directory
git add .

# Add all modified and deleted files
git add -A`,
        language: 'bash',
      },
      {
        type: 'heading',
        content: 'git commit',
      },
      {
        type: 'paragraph',
        content: 'The git commit command captures a snapshot of the project currently staged changes. Committed snapshots can be thought of as "safe" versions of a project—Git will never change them unless you explicitly ask it to.',
      },
      {
        type: 'code',
        code: `# Commit with a message
git commit -m "Add new feature"

# Commit all modified files (skipping git add)
git commit -am "Fix bug in login"

# Amend the last commit
git commit --amend -m "Updated commit message"`,
        language: 'bash',
      },
      {
        type: 'heading',
        content: 'git status',
      },
      {
        type: 'paragraph',
        content: 'The git status command displays the state of the working directory and the staging area. It lets you see which changes have been staged, which have not, and which files are not being tracked by Git.',
      },
      {
        type: 'code',
        code: `# Check status
git status

# Short format
git status -s`,
        language: 'bash',
      },
      {
        type: 'heading',
        content: 'git diff',
      },
      {
        type: 'paragraph',
        content: 'The git diff command shows the differences between various states of your repository. It can show changes between the working directory and the staging area, or between the staging area and the last commit.',
      },
      {
        type: 'code',
        code: `# Show unstaged changes
git diff

# Show staged changes
git diff --staged

# Show changes between two commits
git diff commit1 commit2`,
        language: 'bash',
      },
    ],
  },
  'inspecting-repository': {
    id: 'inspecting-repository',
    title: 'Inspecting a Repository',
    category: 'Getting Started',
    description: 'Learn how to view the state of your repository and its history.',
    content: [
      {
        type: 'paragraph',
        content: 'Git provides several commands to help you inspect your repository and understand its state. These commands are essential for tracking progress and debugging issues.',
      },
      {
        type: 'heading',
        content: 'git log',
      },
      {
        type: 'paragraph',
        content: 'The git log command displays committed snapshots. It lets you list the project history, filter it, and search for specific changes.',
      },
      {
        type: 'code',
        code: `# Show commit history
git log

# Show one line per commit
git log --oneline

# Show graph with branches
git log --oneline --graph --all

# Show last N commits
git log -n 5`,
        language: 'bash',
      },
      {
        type: 'heading',
        content: 'git show',
      },
      {
        type: 'paragraph',
        content: 'The git show command displays various types of Git objects. For commits, it shows the commit message and the diff.',
      },
      {
        type: 'code',
        code: `# Show details of a commit
git show commit-hash

# Show only statistics
git show --stat commit-hash`,
        language: 'bash',
      },
      {
        type: 'heading',
        content: 'git blame',
      },
      {
        type: 'paragraph',
        content: 'The git blame command shows what revision and author last modified each line of a file. It is useful for identifying who made specific changes.',
      },
      {
        type: 'code',
        code: `# Show line-by-line annotations
git blame filename.txt

# Show annotations for specific lines
git blame -L 10,20 filename.txt`,
        language: 'bash',
      },
    ],
  },
  'undoing-changes': {
    id: 'undoing-changes',
    title: 'Undoing Changes',
    category: 'Getting Started',
    description: 'Learn how to undo changes in Git safely.',
    content: [
      {
        type: 'paragraph',
        content: 'One of the most powerful features of Git is the ability to undo changes. However, because there are multiple ways to undo changes, it is important to understand which method to use in each situation.',
      },
      {
        type: 'heading',
        content: 'git checkout',
      },
      {
        type: 'paragraph',
        content: 'The git checkout command switches branches or restores working tree files. It is commonly used to discard changes in the working directory.',
      },
      {
        type: 'code',
        code: `# Discard changes in a file
git checkout -- filename.txt

# Discard all changes in working directory
git checkout -- .`,
        language: 'bash',
      },
      {
        type: 'heading',
        content: 'git revert',
      },
      {
        type: 'paragraph',
        content: 'The git revert command creates a new commit that undoes the changes from a previous commit. This is the safest way to undo changes that have already been pushed to a shared repository.',
      },
      {
        type: 'code',
        code: `# Revert a specific commit
git revert commit-hash

# Revert without creating a commit
git revert -n commit-hash`,
        language: 'bash',
      },
      {
        type: 'heading',
        content: 'git reset',
      },
      {
        type: 'paragraph',
        content: 'The git reset command is a complex and versatile tool for undoing changes. It operates on the commit history, the staging area, and the working directory. Use with caution, especially on shared branches.',
      },
      {
        type: 'code',
        code: `# Soft reset - move HEAD, keep changes staged
git reset --soft HEAD~1

# Mixed reset - move HEAD, unstage changes (default)
git reset --mixed HEAD~1

# Hard reset - move HEAD, discard all changes
git reset --hard HEAD~1`,
        language: 'bash',
      },
      {
        type: 'warning',
        content: 'Be careful with git reset --hard! It permanently discards changes. Make sure you do not need the changes before using this command.',
      },
    ],
  },
  'syncing': {
    id: 'syncing',
    title: 'Syncing (git remote)',
    category: 'Collaborating',
    description: 'Learn how to synchronize your local repository with remote repositories.',
    content: [
      {
        type: 'paragraph',
        content: 'Remote repositories are versions of your project that are hosted on the Internet or network somewhere. You can have several remote repositories, each of which generally is either read-only or read/write for you.',
      },
      {
        type: 'heading',
        content: 'git remote',
      },
      {
        type: 'paragraph',
        content: 'The git remote command lets you create, view, and delete connections to other repositories. Remote connections are more like bookmarks rather than direct links into other repositories.',
      },
      {
        type: 'code',
        code: `# List remote connections
git remote

# List with URLs
git remote -v

# Add a remote
git remote add origin https://github.com/user/repo.git

# Remove a remote
git remote remove origin`,
        language: 'bash',
      },
      {
        type: 'heading',
        content: 'git fetch',
      },
      {
        type: 'paragraph',
        content: 'The git fetch command downloads commits, files, and refs from a remote repository into your local repo. Fetching is what you do when you want to see what everybody else has been working on.',
      },
      {
        type: 'code',
        code: `# Fetch from default remote
git fetch

# Fetch from specific remote
git fetch origin

# Fetch all branches
git fetch --all`,
        language: 'bash',
      },
      {
        type: 'heading',
        content: 'git pull',
      },
      {
        type: 'paragraph',
        content: 'The git pull command fetches and downloads content from a remote repository and immediately updates the local repository to match that content. It is essentially a git fetch followed by a git merge.',
      },
      {
        type: 'code',
        code: `# Pull from default remote
git pull

# Pull specific branch
git pull origin main

# Pull with rebase instead of merge
git pull --rebase`,
        language: 'bash',
      },
      {
        type: 'heading',
        content: 'git push',
      },
      {
        type: 'paragraph',
        content: 'The git push command uploads local repository content to a remote repository. Pushing is how you transfer commits from your local repository to a remote repo.',
      },
      {
        type: 'code',
        code: `# Push to default remote
git push

# Push specific branch
git push origin main

# Push all branches
git push --all origin

# Force push (use with caution)
git push --force`,
        language: 'bash',
      },
    ],
  },
  'using-branches': {
    id: 'using-branches',
    title: 'Using Branches',
    category: 'Collaborating',
    description: 'Learn how to create, manage, and merge branches.',
    content: [
      {
        type: 'paragraph',
        content: 'Branches are an essential part of Git workflow. They allow you to work on different features or fixes in isolation, without affecting the main codebase.',
      },
      {
        type: 'heading',
        content: 'git branch',
      },
      {
        type: 'paragraph',
        content: 'The git branch command lets you create, list, rename, and delete branches. It does not let you switch between branches or put a forked history back together again.',
      },
      {
        type: 'code',
        code: `# List all branches
git branch

# List all branches including remote
git branch -a

# Create a new branch
git branch feature-branch

# Delete a branch
git branch -d feature-branch

# Force delete a branch
git branch -D feature-branch`,
        language: 'bash',
      },
      {
        type: 'heading',
        content: 'git checkout',
      },
      {
        type: 'paragraph',
        content: 'The git checkout command lets you navigate between branches created by git branch. Checking out a branch updates the files in the working directory to match the version stored in that branch.',
      },
      {
        type: 'code',
        code: `# Switch to a branch
git checkout feature-branch

# Create and switch to a new branch
git checkout -b new-branch

# Switch to the previous branch
git checkout -`,
        language: 'bash',
      },
      {
        type: 'heading',
        content: 'git merge',
      },
      {
        type: 'paragraph',
        content: 'The git merge command lets you take the independent lines of development created by git branch and integrate them into a single branch.',
      },
      {
        type: 'code',
        code: `# Merge a branch into current branch
git merge feature-branch

# Merge with no fast-forward
git merge --no-ff feature-branch

# Abort a merge in progress
git merge --abort`,
        language: 'bash',
      },
      {
        type: 'heading',
        content: 'Merge Conflicts',
      },
      {
        type: 'paragraph',
        content: 'Merge conflicts occur when competing changes are made to the same line of a file, or when one person edits a file and another person deletes the same file. Git cannot automatically determine what is correct.',
      },
      {
        type: 'code',
        code: `# Check conflict status
git status

# After resolving conflicts, mark as resolved
git add filename.txt

# Complete the merge
git commit`,
        language: 'bash',
      },
    ],
  },
  'merging-vs-rebasing': {
    id: 'merging-vs-rebasing',
    title: 'Merging vs. Rebasing',
    category: 'Advanced',
    description: 'Understand the differences between merging and rebasing and when to use each.',
    content: [
      {
        type: 'paragraph',
        content: 'Merging and rebasing are the two most common ways to integrate changes from one branch into another in Git. Both achieve the same goal, but they do it in different ways.',
      },
      {
        type: 'heading',
        content: 'Git Merge',
      },
      {
        type: 'paragraph',
        content: 'Merging creates a new commit that combines the histories of both branches. It preserves the complete history and context of all changes.',
      },
      {
        type: 'code',
        code: `# Switch to main branch
git checkout main

# Merge feature branch
git merge feature-branch`,
        language: 'bash',
      },
      {
        type: 'info',
        content: 'Merge is non-destructive. The existing branches are not changed in any way. This is good for preserving history.',
      },
      {
        type: 'heading',
        content: 'Git Rebase',
      },
      {
        type: 'paragraph',
        content: 'Rebasing moves or combines a sequence of commits to a new base commit. It creates a linear history by replaying commits from one branch onto another.',
      },
      {
        type: 'code',
        code: `# Switch to feature branch
git checkout feature-branch

# Rebase onto main
git rebase main`,
        language: 'bash',
      },
      {
        type: 'warning',
        content: 'Never rebase commits that have been pushed to a public repository! Rebasing rewrites history, which can cause serious problems for your collaborators.',
      },
      {
        type: 'heading',
        content: 'Interactive Rebase',
      },
      {
        type: 'paragraph',
        content: 'Interactive rebase gives you complete control over how your commits appear in the project history. You can squash commits, reword messages, and more.',
      },
      {
        type: 'code',
        code: `# Rebase last 3 commits interactively
git rebase -i HEAD~3`,
        language: 'bash',
      },
    ],
  },
  'git-cheat-sheet': {
    id: 'git-cheat-sheet',
    title: 'Git Cheat Sheet',
    category: 'Beginner',
    description: 'Quick reference for the most commonly used Git commands.',
    content: [
      {
        type: 'heading',
        content: 'Setup',
      },
      {
        type: 'code',
        code: `git config --global user.name "Your Name"
git config --global user.email "email@example.com"
git config --global color.ui auto`,
        language: 'bash',
      },
      {
        type: 'heading',
        content: 'Create & Clone',
      },
      {
        type: 'code',
        code: `git init                    # Initialize a new repository
git clone <url>             # Clone an existing repository`,
        language: 'bash',
      },
      {
        type: 'heading',
        content: 'Basic Snapshotting',
      },
      {
        type: 'code',
        code: `git status                  # Check status
git add <file>              # Add file to staging
git add .                   # Add all files to staging
git commit -m "message"     # Commit changes
git commit -am "message"    # Add and commit in one command`,
        language: 'bash',
      },
      {
        type: 'heading',
        content: 'Branching & Merging',
      },
      {
        type: 'code',
        code: `git branch                  # List branches
git branch <name>           # Create branch
git checkout <name>         # Switch branch
git checkout -b <name>      # Create and switch
git merge <branch>          # Merge branch
git branch -d <name>        # Delete branch`,
        language: 'bash',
      },
      {
        type: 'heading',
        content: 'Remote Repositories',
      },
      {
        type: 'code',
        code: `git remote -v               # List remotes
git remote add <name> <url> # Add remote
git fetch <remote>          # Fetch changes
git pull <remote> <branch>  # Pull changes
git push <remote> <branch>  # Push changes`,
        language: 'bash',
      },
      {
        type: 'heading',
        content: 'Inspection',
      },
      {
        type: 'code',
        code: `git log                     # View commit history
git log --oneline           # Compact view
git diff                    # Show unstaged changes
git show <commit>           # Show commit details`,
        language: 'bash',
      },
      {
        type: 'heading',
        content: 'Undoing Changes',
      },
      {
        type: 'code',
        code: `git checkout -- <file>      # Discard file changes
git reset HEAD <file>       # Unstage file
git revert <commit>         # Revert commit
git reset --hard <commit>   # Reset to commit (dangerous!)`,
        language: 'bash',
      },
    ],
  },
  'git-commands': {
    id: 'git-commands',
    title: 'Git Commands',
    category: 'Learn Git',
    description: 'Complete list of essential Git commands with explanations.',
    content: [
      {
        type: 'heading',
        content: 'Configuration Commands',
      },
      {
        type: 'list',
        items: [
          'git config - Configure Git settings',
          'git config --global user.name - Set global username',
          'git config --global user.email - Set global email',
          'git config --list - Show all settings',
        ],
      },
      {
        type: 'heading',
        content: 'Repository Commands',
      },
      {
        type: 'list',
        items: [
          'git init - Initialize a new repository',
          'git clone - Clone an existing repository',
          'git status - Check repository status',
          'git log - View commit history',
        ],
      },
      {
        type: 'heading',
        content: 'Basic Commands',
      },
      {
        type: 'list',
        items: [
          'git add - Stage changes',
          'git commit - Save staged changes',
          'git push - Upload to remote',
          'git pull - Download from remote',
          'git fetch - Download without merging',
        ],
      },
      {
        type: 'heading',
        content: 'Branching Commands',
      },
      {
        type: 'list',
        items: [
          'git branch - List, create, or delete branches',
          'git checkout - Switch branches',
          'git merge - Combine branches',
          'git rebase - Replay commits on another branch',
          'git cherry-pick - Apply specific commits',
        ],
      },
      {
        type: 'heading',
        content: 'Undo Commands',
      },
      {
        type: 'list',
        items: [
          'git reset - Unstage or undo commits',
          'git revert - Create undo commit',
          'git checkout -- - Discard changes',
          'git clean - Remove untracked files',
        ],
      },
      {
        type: 'heading',
        content: 'Advanced Commands',
      },
      {
        type: 'list',
        items: [
          'git stash - Temporarily save changes',
          'git tag - Manage tags',
          'git bisect - Binary search for bugs',
          'git blame - Show line annotations',
          'git diff - Show differences',
        ],
      },
    ],
  },
  'why-git': {
    id: 'why-git',
    title: 'Why Git for Your Organization',
    category: 'Beginner',
    description: 'Learn why Git is the best choice for version control in modern organizations.',
    content: [
      {
        type: 'paragraph',
        content: 'Git has become the industry standard for version control, and for good reason. Organizations of all sizes benefit from its distributed nature, speed, and flexibility.',
      },
      {
        type: 'heading',
        content: 'Distributed Development',
      },
      {
        type: 'paragraph',
        content: 'Unlike centralized version control systems, Git gives every developer a complete copy of the entire repository. This means developers can work offline, commit locally, and sync when ready.',
      },
      {
        type: 'heading',
        content: 'Feature Branch Workflow',
      },
      {
        type: 'paragraph',
        content: 'Git makes it easy to create and manage branches. Teams can work on features in isolation, review code through pull requests, and merge only when ready.',
      },
      {
        type: 'heading',
        content: 'Community and Ecosystem',
      },
      {
        type: 'paragraph',
        content: 'Git has the largest community of any version control system. This means extensive documentation, numerous tools, and a large pool of developers who already know Git.',
      },
      {
        type: 'heading',
        content: 'Integration',
      },
      {
        type: 'paragraph',
        content: 'Git integrates seamlessly with modern development tools and platforms like GitHub, GitLab, Bitbucket, and countless CI/CD pipelines.',
      },
    ],
  },
  'git-ssh': {
    id: 'git-ssh',
    title: 'Git SSH',
    category: 'Beginner',
    description: 'Learn how to set up SSH keys for secure Git authentication.',
    content: [
      {
        type: 'paragraph',
        content: 'SSH (Secure Shell) is a protocol that provides secure remote access to systems. Using SSH keys with Git eliminates the need to enter your username and password for every interaction with remote repositories.',
      },
      {
        type: 'heading',
        content: 'Generating an SSH Key',
      },
      {
        type: 'code',
        code: `# Generate a new SSH key
ssh-keygen -t ed25519 -C "your.email@example.com"

# For older systems, use RSA
ssh-keygen -t rsa -b 4096 -C "your.email@example.com"`,
        language: 'bash',
      },
      {
        type: 'heading',
        content: 'Adding SSH Key to SSH Agent',
      },
      {
        type: 'code',
        code: `# Start the SSH agent
eval "$(ssh-agent -s)"

# Add your key
ssh-add ~/.ssh/id_ed25519`,
        language: 'bash',
      },
      {
        type: 'heading',
        content: 'Adding Key to GitHub/GitLab',
      },
      {
        type: 'code',
        code: `# Copy the public key to clipboard
cat ~/.ssh/id_ed25519.pub

# Then paste it into your Git hosting provider SSH settings`,
        language: 'bash',
      },
      {
        type: 'heading',
        content: 'Testing Your SSH Connection',
      },
      {
        type: 'code',
        code: `# Test GitHub connection
ssh -T git@github.com

# Test GitLab connection
ssh -T git@gitlab.com`,
        language: 'bash',
      },
    ],
  },
  'rewriting-history': {
    id: 'rewriting-history',
    title: 'Rewriting History',
    category: 'Getting Started',
    description: 'Learn how to modify commit history safely.',
    content: [
      {
        type: 'paragraph',
        content: 'Git provides several tools for rewriting history. While powerful, these tools should be used with caution, especially on shared branches.',
      },
      {
        type: 'heading',
        content: 'git commit --amend',
      },
      {
        type: 'paragraph',
        content: 'The amend command lets you modify the most recent commit. You can change the commit message or add forgotten files.',
      },
      {
        type: 'code',
        code: `# Amend the last commit message
git commit --amend -m "New commit message"

# Add forgotten file to last commit
git add forgotten-file.txt
git commit --amend --no-edit`,
        language: 'bash',
      },
      {
        type: 'heading',
        content: 'git rebase',
      },
      {
        type: 'paragraph',
        content: 'Rebasing is the most flexible way to rewrite history. Interactive rebase allows you to squash, reorder, and modify commits.',
      },
      {
        type: 'code',
        code: `# Interactive rebase of last 3 commits
git rebase -i HEAD~3

# Rebase onto another branch
git rebase main`,
        language: 'bash',
      },
      {
        type: 'heading',
        content: 'git reflog',
      },
      {
        type: 'paragraph',
        content: 'The reflog records when the tips of branches and other references were updated in the local repository. It is your safety net for recovering lost commits.',
      },
      {
        type: 'code',
        code: `# View reflog
git reflog

# Recover a lost commit
git checkout HEAD@{2}`,
        language: 'bash',
      },
    ],
  },
  'making-pull-request': {
    id: 'making-pull-request',
    title: 'Making a Pull Request',
    category: 'Collaborating',
    description: 'Learn how to create and manage pull requests effectively.',
    content: [
      {
        type: 'paragraph',
        content: 'Pull requests are a fundamental part of collaborative Git workflows. They provide a way to discuss and review code before merging it into the main codebase.',
      },
      {
        type: 'heading',
        content: 'Creating a Pull Request',
      },
      {
        type: 'list',
        items: [
          'Push your branch to the remote repository',
          'Navigate to the repository on your Git hosting platform',
          'Click "New Pull Request" or "Compare & Pull Request"',
          'Select your branch and the target branch',
          'Add a descriptive title and detailed description',
          'Request reviews from team members',
          'Submit the pull request',
        ],
      },
      {
        type: 'heading',
        content: 'Best Practices',
      },
      {
        type: 'list',
        items: [
          'Keep pull requests small and focused on a single feature or fix',
          'Write clear commit messages and PR descriptions',
          'Include tests for new functionality',
          'Respond promptly to review comments',
          'Update your branch with the latest changes from main',
        ],
      },
      {
        type: 'heading',
        content: 'Reviewing Pull Requests',
      },
      {
        type: 'paragraph',
        content: 'When reviewing pull requests, check for code quality, test coverage, documentation, and adherence to project standards. Provide constructive feedback and suggestions.',
      },
    ],
  },
  'comparing-workflows': {
    id: 'comparing-workflows',
    title: 'Comparing Workflows',
    category: 'Collaborating',
    description: 'Compare different Git workflows and choose the best one for your team.',
    content: [
      {
        type: 'paragraph',
        content: 'A Git workflow is a recipe or recommendation for how to use Git to accomplish work in a consistent and productive manner. Several popular workflows exist, each with its own strengths.',
      },
      {
        type: 'heading',
        content: 'Centralized Workflow',
      },
      {
        type: 'paragraph',
        content: 'Similar to SVN, uses a single central repository. Everyone works on the main branch. Simple but lacks isolation for features.',
      },
      {
        type: 'heading',
        content: 'Feature Branch Workflow',
      },
      {
        type: 'paragraph',
        content: 'Each new feature is developed in its own branch. Branches are merged to main when complete. Provides isolation but can become complex with many features.',
      },
      {
        type: 'code',
        code: `# Create feature branch
git checkout -b feature/login

# Work on feature, then merge
git checkout main
git merge feature/login`,
        language: 'bash',
      },
      {
        type: 'heading',
        content: 'Gitflow Workflow',
      },
      {
        type: 'paragraph',
        content: 'A strict branching model with dedicated branches for features, releases, and hotfixes. Good for projects with scheduled releases.',
      },
      {
        type: 'code',
        code: `# Start a feature
git flow feature start new-feature

# Finish a feature
git flow feature finish new-feature`,
        language: 'bash',
      },
      {
        type: 'heading',
        content: 'Forking Workflow',
      },
      {
        type: 'paragraph',
        content: 'Each developer has their own server-side repository. Changes are submitted via pull requests. Common in open source projects.',
      },
    ],
  },
  'reset-checkout-revert': {
    id: 'reset-checkout-revert',
    title: 'Reset, Checkout, and Revert',
    category: 'Advanced',
    description: 'Understand the differences between these three undo commands.',
    content: [
      {
        type: 'paragraph',
        content: 'Git provides three main commands for undoing changes: reset, checkout, and revert. Each works differently and is suited for different situations.',
      },
      {
        type: 'heading',
        content: 'git reset',
      },
      {
        type: 'paragraph',
        content: 'Moves the HEAD and current branch reference to a specified commit. Can modify the staging area and working directory depending on flags used.',
      },
      {
        type: 'code',
        code: `# Soft reset - keeps changes staged
git reset --soft HEAD~1

# Mixed reset (default) - unstages changes
git reset --mixed HEAD~1

# Hard reset - discards all changes
git reset --hard HEAD~1`,
        language: 'bash',
      },
      {
        type: 'warning',
        content: 'git reset --hard permanently discards changes. Use with extreme caution!',
      },
      {
        type: 'heading',
        content: 'git checkout',
      },
      {
        type: 'paragraph',
        content: 'Primarily used to switch branches, but can also discard changes in the working directory when used with file paths.',
      },
      {
        type: 'code',
        code: `# Discard changes in a file
git checkout -- filename.txt

# Switch to a branch
git checkout branch-name`,
        language: 'bash',
      },
      {
        type: 'heading',
        content: 'git revert',
      },
      {
        type: 'paragraph',
        content: 'Creates a new commit that undoes the changes from a previous commit. Safe for shared repositories as it does not rewrite history.',
      },
      {
        type: 'code',
        code: `# Revert a specific commit
git revert abc123

# Revert without auto-commit
git revert -n abc123`,
        language: 'bash',
      },
      {
        type: 'info',
        content: 'Use revert for public/shared branches. Use reset only for local, unshared changes.',
      },
    ],
  },
  'advanced-git-log': {
    id: 'advanced-git-log',
    title: 'Advanced Git Log',
    category: 'Advanced',
    description: 'Master the git log command with advanced options and filters.',
    content: [
      {
        type: 'paragraph',
        content: 'The git log command is incredibly powerful with many options for filtering, formatting, and displaying commit history.',
      },
      {
        type: 'heading',
        content: 'Formatting Options',
      },
      {
        type: 'code',
        code: `# One line per commit
git log --oneline

# Custom format
git log --pretty=format:"%h - %an, %ar : %s"

# Graph with decorations
git log --oneline --graph --decorate --all`,
        language: 'bash',
      },
      {
        type: 'heading',
        content: 'Filtering Options',
      },
      {
        type: 'code',
        code: `# Show last N commits
git log -n 5

# Show commits since date
git log --since="2 weeks ago"

# Show commits by author
git log --author="John"

# Show commits with specific text
git log --grep="bug fix"`,
        language: 'bash',
      },
      {
        type: 'heading',
        content: 'File History',
      },
      {
        type: 'code',
        code: `# Show commits affecting a file
git log -- filename.txt

# Show detailed changes for a file
git log -p -- filename.txt

# Show statistics for a file
git log --stat -- filename.txt`,
        language: 'bash',
      },
    ],
  },
  'git-hooks': {
    id: 'git-hooks',
    title: 'Git Hooks',
    category: 'Advanced',
    description: 'Learn how to use Git hooks to automate workflows.',
    content: [
      {
        type: 'paragraph',
        content: 'Git hooks are scripts that run automatically at certain points in the Git workflow. They can be used to enforce policies, run tests, or automate tasks.',
      },
      {
        type: 'heading',
        content: 'Client-Side Hooks',
      },
      {
        type: 'list',
        items: [
          'pre-commit - Runs before a commit is created',
          'prepare-commit-msg - Runs before the commit message editor opens',
          'commit-msg - Runs after the commit message is saved',
          'post-commit - Runs after a commit is created',
          'pre-rebase - Runs before a rebase operation',
          'post-checkout - Runs after a checkout',
          'post-merge - Runs after a merge',
        ],
      },
      {
        type: 'heading',
        content: 'Server-Side Hooks',
      },
      {
        type: 'list',
        items: [
          'pre-receive - Runs when receiving a push',
          'update - Runs once per branch being updated',
          'post-receive - Runs after all refs are updated',
        ],
      },
      {
        type: 'heading',
        content: 'Example: Pre-commit Hook',
      },
      {
        type: 'code',
        code: `#!/bin/sh
# .git/hooks/pre-commit

# Run linter
npm run lint

# Run tests
npm test

# Exit with error if tests fail
if [ $? -ne 0 ]; then
  echo "Tests failed. Commit aborted."
  exit 1
fi`,
        language: 'bash',
      },
    ],
  },
  'git-submodules': {
    id: 'git-submodules',
    title: 'Git Submodules',
    category: 'Advanced',
    description: 'Learn how to manage external repositories as submodules.',
    content: [
      {
        type: 'paragraph',
        content: 'Git submodules allow you to keep a Git repository as a subdirectory of another Git repository. This lets you clone another repository into your project and keep your commits separate.',
      },
      {
        type: 'heading',
        content: 'Adding a Submodule',
      },
      {
        type: 'code',
        code: `# Add a submodule
git submodule add https://github.com/user/repo.git path/to/submodule

# Initialize and update submodules
git submodule update --init --recursive`,
        language: 'bash',
      },
      {
        type: 'heading',
        content: 'Cloning with Submodules',
      },
      {
        type: 'code',
        code: `# Clone with all submodules
git clone --recursive https://github.com/user/repo.git

# Or after cloning
git submodule update --init --recursive`,
        language: 'bash',
      },
      {
        type: 'heading',
        content: 'Updating Submodules',
      },
      {
        type: 'code',
        code: `# Pull updates for submodules
git submodule update --remote

# Update specific submodule
git submodule update --remote path/to/submodule`,
        language: 'bash',
      },
      {
        type: 'warning',
        content: 'Submodules can be tricky to work with. Make sure your team understands how to use them properly.',
      },
    ],
  },
  'git-cherry-pick': {
    id: 'git-cherry-pick',
    title: 'Git Cherry Pick',
    category: 'Advanced',
    description: 'Learn how to apply specific commits from one branch to another.',
    content: [
      {
        type: 'paragraph',
        content: 'The git cherry-pick command allows you to apply the changes introduced by some existing commits. This is useful when you want to apply a specific commit from one branch to another without merging the entire branch.',
      },
      {
        type: 'heading',
        content: 'Basic Cherry Pick',
      },
      {
        type: 'code',
        code: `# Cherry pick a single commit
git cherry-pick abc123

# Cherry pick multiple commits
git cherry-pick abc123 def456

# Cherry pick a range of commits
git cherry-pick abc123^..def456`,
        language: 'bash',
      },
      {
        type: 'heading',
        content: 'Cherry Pick Options',
      },
      {
        type: 'code',
        code: `# Cherry pick without committing
git cherry-pick -n abc123

# Cherry pick with original commit message
git cherry-pick -x abc123

# Cherry pick and edit message
git cherry-pick -e abc123`,
        language: 'bash',
      },
      {
        type: 'heading',
        content: 'Handling Conflicts',
      },
      {
        type: 'paragraph',
        content: 'Cherry picking can result in conflicts. When this happens, resolve the conflicts, stage the files, and continue the cherry pick.',
      },
      {
        type: 'code',
        code: `# Resolve conflicts, then continue
git add .
git cherry-pick --continue

# Or abort the cherry pick
git cherry-pick --abort`,
        language: 'bash',
      },
    ],
  },
  'learn-git-overview': {
    id: 'learn-git-overview',
    title: 'Learn Git Overview',
    category: 'Learn Git',
    description: 'Get started with learning Git from the basics to advanced topics.',
    content: [
      {
        type: 'paragraph',
        content: 'Welcome to the comprehensive Git tutorial! Whether you are a complete beginner or looking to sharpen your skills, this guide will take you through everything you need to know about Git.',
      },
      {
        type: 'heading',
        content: 'What You Will Learn',
      },
      {
        type: 'list',
        items: [
          'Understanding version control concepts',
          'Installing and configuring Git',
          'Creating and managing repositories',
          'Making and tracking changes',
          'Branching and merging strategies',
          'Collaborating with others',
          'Advanced Git techniques',
        ],
      },
      {
        type: 'heading',
        content: 'Learning Path',
      },
      {
        type: 'paragraph',
        content: 'Start with the Beginner section if you are new to Git. If you have some experience, you can jump to specific topics that interest you. The tutorials are organized from basic to advanced concepts.',
      },
      {
        type: 'tip',
        content: 'Practice is key! Try out the commands in a test repository as you go through the tutorials.',
      },
    ],
  },
  'git-stash': {
    id: 'git-stash',
    title: 'Git Stash',
    category: 'Advanced',
    description: 'Learn how to temporarily save changes without committing them.',
    content: [
      {
        type: 'paragraph',
        content: 'Often, when you have been working on part of your project, things are in a messy state and you want to switch branches for a bit to work on something else. The problem is, you don’t want to do a commit of half-done work just so you can get back to this point later. The answer to this issue is the git stash command.',
      },
      {
        type: 'heading',
        content: 'Stashing Changes',
      },
      {
        type: 'code',
        code: `# Stash your modified tracked files and staged changes
git stash

# Stash with a custom message
git stash save "Working on login feature"

# Stash including untracked files
git stash -u`,
        language: 'bash'
      },
      {
        type: 'heading',
        content: 'Applying Stashes',
      },
      {
        type: 'paragraph',
        content: 'You can see which stashes you’ve stored by using git stash list, and re-apply them when you are ready.',
      },
      {
        type: 'code',
        code: `# List stashes
git stash list

# Apply the most recently stashed changes
git stash apply

# Apply exactly a specific stash
git stash apply stash@{2}`,
        language: 'bash'
      },
      {
        type: 'heading',
        content: 'Cleaning Up',
      },
      {
        type: 'paragraph',
        content: 'git stash apply only tries to apply the stashed work—you continue to have it on your stack. To remove it, you can run git stash drop.',
      },
      {
        type: 'code',
        code: `# Drop the most recent stash
git stash drop

# Apply and immediately drop (pop) the stash
git stash pop

# Clear all stashes
git stash clear`,
        language: 'bash'
      }
    ]
  },
  'git-tag-bisect': {
    id: 'git-tag-bisect',
    title: 'Tags & Bisect',
    category: 'Advanced',
    description: 'Learn how to tag releases and use binary search to find bugs.',
    content: [
      {
        type: 'paragraph',
        content: 'Git has tools to mark specific points in your repository’s history as being important (tagging) and to systematically find which commit introduced a bug via a binary search (bisect).',
      },
      {
        type: 'heading',
        content: 'Git Tag',
      },
      {
        type: 'code',
        code: `# List existing tags
git tag

# Create a lightweight tag
git tag v1.0.0

# Create an annotated tag (recommended for releases)
git tag -a v1.0.0 -m "Release version 1.0.0"

# View tag data
git show v1.0.0

# Push tags to remote master
git push origin --tags`,
        language: 'bash'
      },
      {
        type: 'heading',
        content: 'Git Bisect',
      },
      {
        type: 'paragraph',
        content: 'Git bisect helps you find a commit that introduced a bug by using binary search. It checks out intermediate commits between a "good" and a "bad" commit until you pinpoint the exact commit that broke the code.',
      },
      {
        type: 'code',
        code: `# Start the bisect wizard
git bisect start

# Mark the current commit as broken/bad
git bisect bad

# Mark an older commit as working/good
git bisect good v1.0

# Git will checkout a commit in the middle... test it!
# If it's broken:
git bisect bad
# If it works:
git bisect good

# When done, reset to original HEAD
git bisect reset`,
        language: 'bash'
      }
    ]
  },
  'git-clean-rm': {
    id: 'git-clean-rm',
    title: 'Clean & Remove',
    category: 'Advanced',
    description: 'Properly remove untracked files or stop tracking logged files.',
    content: [
      {
        type: 'paragraph',
        content: 'Sometimes you have generated build files, debug logs, or just unwanted files in your working directory. You might also want to stop tracking a file that is already committed into Git.',
      },
      {
        type: 'heading',
        content: 'Git Clean',
      },
      {
        type: 'paragraph',
        content: 'git clean is used to remove untracked files from the working directory. It is often combined with git reset --hard to completely discard all changes.',
      },
      {
        type: 'code',
        code: `# Show which files would be removed (dry run)
git clean -n

# Remove untracked files forcefully
git clean -f

# Remove untracked directories as well
git clean -fd

# Remove ignored files too
git clean -fx`,
        language: 'bash'
      },
      {
        type: 'heading',
        content: 'Git Rm',
      },
      {
        type: 'paragraph',
        content: 'To remove a file from Git, you have to remove it from your tracked files (more accurately, remove it from your staging area) and then commit. The git rm command does that.',
      },
      {
        type: 'code',
        code: `# Remove file from working directory and staging area
git rm file.txt

# Stop tracking file BUT keep it in working directory (e.g. forgot .gitignore)
git rm --cached file.txt

# Force remove if file is modified and already on index
git rm -f file.txt`,
        language: 'bash'
      }
    ]
  },
  'git-switch-restore': {
    id: 'git-switch-restore',
    title: 'Switch & Restore',
    category: 'Advanced',
    description: 'Learn modern alternatives to git checkout.',
    content: [
      {
        type: 'paragraph',
        content: 'In newer versions of Git (2.23+), git checkout was logically split into two separate commands to make its overloaded capabilities easier to grasp: git switch (for branches) and git restore (for files).',
      },
      {
        type: 'heading',
        content: 'Git Switch',
      },
      {
        type: 'paragraph',
        content: 'Use git switch specifically to navigate branches without the risk of accidentally altering working tree files.',
      },
      {
        type: 'code',
        code: `# Switch to an existing branch
git switch my-branch

# Create a new branch and switch to it concurrently
git switch -c new-feature

# Return to previously checked out branch
git switch -`,
        language: 'bash'
      },
      {
        type: 'heading',
        content: 'Git Restore',
      },
      {
        type: 'paragraph',
        content: 'Use git restore to discard changes in the working directory or to unstage files, essentially replacing the use of git checkout -- <file> and git reset HEAD <file>.',
      },
      {
        type: 'code',
        code: `# Discard changes in working directory
git restore file.txt

# Unstage a file (restore the index to HEAD)
git restore --staged file.txt

# Restore file from an older commit
git restore --source HEAD~2 file.txt`,
        language: 'bash'
      }
    ]
  }
};

export const getTutorial = (id: string): Tutorial | undefined => {
  return tutorials[id];
};

export const getCategoryTutorials = (categoryId: string) => {
  const category = categories.find(c => c.id === categoryId);
  if (!category) return [];
  return category.tutorials.map(t => tutorials[t.id]).filter(Boolean);
};
