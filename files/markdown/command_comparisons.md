# CLI Command Comparisons

This table provides a quick comparison of common command-line interface (CLI) commands used in Windows Command Prompt and Linux terminals, along with a brief description of their functions.

## Basic Commands

| **Function**               | **Windows** | **Linux**   | **Description**                                                                 |
|---------------------------|---------------------|---------------------|---------------------------------------------------------------------------------|
| List directory contents   | `dir`               | `ls`                | Lists files and directories in the current directory.                           |
| Change directory          | `cd`                | `cd`                | Changes the current working directory.                                          |
| Copy files                | `copy`              | `cp`                | Copies one or more files to another location.                                   |
| Move/rename files         | `move`              | `mv`                | Moves or renames files or directories.                                          |
| Delete a file             | `del`               | `rm`                | Deletes a file.                                                                 |
| Delete a directory        | `rmdir` / `rd`      | `rmdir` / `rm -r`   | Removes a directory. `rm -r` also deletes non-empty directories in Linux.       |
| Create a directory        | `mkdir`             | `mkdir`             | Creates a new directory.                                                        |
| Display file contents     | `type`              | `cat`               | Displays the contents of a file.                                                |
| Clear the screen          | `cls`               | `clear`             | Clears the terminal screen.                                                     |
| Show current directory    | `cd`                | `pwd`               | Displays the path of the current directory.                                     |
| Search for text in file   | `find`              | `grep`              | Searches for a string in a file.                                                |
| Ping a host               | `ping`              | `ping`              | Tests connectivity to a network host.                                           |

---

## Intermediate Commands

| **Function**                  | **Windows**      | **Linux**         | **Description**                                                                 |
|------------------------------|--------------------------|---------------------------|---------------------------------------------------------------------------------|
| View running processes        | `tasklist`               | `ps` / `top`              | Displays running processes.                                                     |
| Kill a process                | `taskkill /PID <id>`     | `kill <pid>`              | Terminates a process by its process ID.                                         |
| Search for files              | `dir /s <filename>`      | `find` / `find . -name`   | Searches for files in directories.                                              |
| Rename a file                 | `ren`                    | `mv`                      | Renames a file or directory.                                                    |
| Change file attributes        | `attrib`                 | `chmod` / `chown`         | Modifies file permissions or ownership.                                         |
| View environment variables    | `set`                    | `printenv` / `env`        | Displays environment variables.                                                 |
| Set environment variables     | `set VAR=value`          | `export VAR=value`        | Sets environment variables.                                                     |
| Redirect output to file       | `command > file.txt`     | `command > file.txt`      | Redirects command output to a file.                                             |
| Append output to file         | `command >> file.txt`    | `command >> file.txt`     | Appends command output to a file.                                               |
| Run script files              | `.bat` or `.cmd` files   | `.sh` (via `bash`)        | Executes batch or shell scripts.                                                |
| Download a file               | `curl`                   | `wget` / `curl`           | Downloads files using HTTP/S.                                                   |
| View disk usage               | `dir`                    | `df -h` / `du -sh`        | Displays storage usage.                                                         |

---

## Advanced Commands

| **Function**                     | **Windows**             | **Linux**                | **Description**                                                                 |
|----------------------------------|----------------------------------|----------------------------------|---------------------------------------------------------------------------------|
| Schedule a task                  | `schtasks`                      | `cron` / `crontab`               | Automates task execution at specified times.                                   |
| View system info                 | `systeminfo`                    | `uname -a` / `hostnamectl`       | Displays system and kernel information.                                        |
| Manage services                  | `sc` / `net start/stop`         | `systemctl` / `service`          | Starts, stops, or manages services.                                            |
| Network configuration            | `ipconfig` / `netsh`            | `ifconfig` / `ip`                | Views or configures network interfaces.                                        |
| View open ports                  | `netstat -an`                   | `netstat` / `ss`                 | Displays open ports and listening services.                                    |
| User account management          | `net user`                      | `useradd` / `usermod` / `passwd` | Manages user accounts and passwords.                                           |
| Compress files                   | `compact` / third-party tools   | `tar` / `gzip` / `zip`           | Compresses or archives files and folders.                                      |
| View logs                        | `eventvwr`                      | `journalctl` / `dmesg`           | Views system and kernel logs.                                                  |
| Remote session                   | `mstsc` / `PsExec`              | `ssh`                            | Initiates a remote desktop or shell session.                                   |
| Monitor system performance       | `perfmon` / `resmon`            | `htop` / `vmstat` / `iotop`      | Monitors real-time system performance.                                         |
| Run as administrator/root        | `runas`                         | `sudo`                           | Executes commands with elevated privileges.                                    |
| Edit boot configuration          | `bcdedit`                       | `grub-mkconfig` / `update-grub`  | Manages boot loader configurations.                                            |
| Package management               | Chocolatey / Winget             | `apt` / `yum` / `dnf` / `pacman` | Installs, updates, or removes software packages.                               |

---

On Linux, combining commands with pipes (`|`) and using scripting techniques like loops and conditions can significantly increase CLI power. On Windows, PowerShell offers enhanced scripting and object manipulation beyond traditional Command Prompt.

---
> **Note:** Some commands may require administrator/root privileges depending on the system configuration.
