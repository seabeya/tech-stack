<p align="center">
  <img src="../logo.png" height="200">
</p>

<h1 align="center">Docker</h1>

<p align="center">
  Almost everything about the containerization platform Docker.
</p>

> Docker is a platform and technology that enables developers to create, deploy, and manage applications using containers.

<p align="right">
    <a href="https://github.com/shaanaliyev/tech-stack#tech-stack">Main Page ↖</a>
</p>

#### Knowledge requirements

- No previous knowledge is required!

  > But I recommend that you watch ["Docker in 100 Seconds"](https://youtu.be/Gjnup-PuquQ) and some other 5-10 minute videos with titles like "What is Docker" before you start.

### Contents

1. [Installation](#-installation)
2. [Docker basics](#-docker-basics)
   - [Images](#-images)
   - [Containers](#-containers)

<br>

<hr>

## 🔶 Installation

1. Setting up Linux repositories for the latest Docker version: [Docs](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository)

   ```
   sudo apt-get update
   ```

   ```
   sudo apt-get install \
   ca-certificates \
   curl \
   gnupg \
   lsb-release
   ```

   ```
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
   ```

   ```
   echo \
   "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   ```

   ```
   sudo apt-get update
   ```

2. Installing required dependencies and Docker itself:

   ```bash
   sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
   ```

3. To run Docker without root privileges: [Docs](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user)

   ```
   sudo groupadd docker
   ```

   ```
   sudo usermod -aG docker $USER
   ```

   ```
   newgrp docker
   ```

4. Configure Docker to start on boot: [Docs](https://docs.docker.com/engine/install/linux-postinstall/#configure-docker-to-start-on-boot-with-systemd)

   - Enabling:

     ```
     sudo systemctl enable docker.service
     ```

     ```
     sudo systemctl enable containerd.service
     ```

   - Disabling:

     ```
     sudo systemctl disable docker.service
     ```

     ```
     sudo systemctl disable containerd.service
     ```

<p align="right">
    <a href="#docker">back to top ⬆</a>
</p>

<br>
<br>

## 🔶 Docker basics

> Docker CLI official docs: https://docs.docker.com/engine/reference/commandline/cli/

- `docker command --help`: Shows detailed information and usage instructions about a specific Docker command.
- `docker system prune`: Frees up storage by clearing stopped containers, unused networks, dangling images, and build cache.

<br>

### 🔷 Images

A Docker image is a blueprint or template that includes both the application and the necessary environment to run it. This environment encompasses the operating system, runtimes, tools, and more.

- `docker pull [Image_Name]`: Downloads an image from DockerHub or another registry.
- `docker images`: Displays a list of all images stored locally.
- `docker image tag [Name]:[Tag] [New_Name]:[New_Tag]`: Renames an image.
- `docker tag [Name]:[Tag] [New_Name]:[New_Tag]`: Creates a clone of an image with a new name and optional tag.
- `docker rmi [Image_Name]`: Deletes an image by its name.
  > Any connected containers must be removed first.
- `docker image prune [-Options]`: Deleting images in bulk.
  - ` ` - Removes all dangling images (untagged images).
  - `-a` - Removes all locally stored images.
- `docker build [-Options]...`: Building new custom images.
  - `.` - Builds an image using the Dockerfile in the current directory.
    > path_to_Dockerfile
  - `-f path/to/customFile` - Uses a specific Dockerfile for building (default: Dockerfile).
  - `-t name:tag` - Assigns a NAME and TAG to the image (e.g., node:16.5, node:latest).

<br>

### 🔷 Containers

Containers are running instances of images. Multiple containers can be started based on the same single image. All containers run in isolation, meaning they don't share any application state or written data by default.

> - **Attached mode**: The listening or foreground mode.
> - **Detached mode**: The background mode.
> - **Interactive mode**: The input mode.

- `docker run [-Options]... [Image_Name]`: Creates and starts a new container (in attached mode) based on the specified image.
  > Use `docker create [Image_Name]` if you want to create a container without starting it immediately. The image can also be a remote image, which Docker will automatically download.
  - `--name [Container_Name]` - Assigns a name to the container, making management easier.
    > Otherwise, you would need to use the container ID for reference.
  - `-w [Dir_Address]`: Specifies the working directory inside the container.
    > Any default commands executed in the container will be relative to this directory.
  - `-d` - Runs the container in detached mode, freeing your terminal.
  - `-it` - Runs the container in interactive mode (combining interactive and user-friendly terminal modes).
  - `--rm` - Automatically removes the container when it's stopped.
  - `-p [External_Port]:[Internal_Port]` - Exposes a Docker port to the outside world.
    > Incoming requests to `External_Port` on the local host are routed to `Internal_Port` inside the container, where the application should be listening.
- `docker container ls [-Options]`: Displays a list of all running containers along with their specifications.
  - `-a` - Displays a list of all containers, including those that are stopped.
- `docker stop [Container_Name]`: Gracefully stops a running container (SIGTERM).
- `docker kill [Container_Name]`: Forcefully stops a running container instantly (SIGKILL).
- `docker start [Container_Name] [-Options]`: Starts a stopped container (detached mode).
  > Unlike `docker run`, this command starts the existing container.
  - `-a` - Starts the container in attached mode.
  - `-i` - Starts the container in interactive mode.
- `docker attach [Container_Name]`: Attaches to a running container.
  > This is useful to reattach if previously detached.
- `docker stats [Container_Name]`: Displays detailed information about CPU, memory, and other resource usage for a specific container.
- `docker logs [Container_Name] [-Options]`: Shows previous logs for a container.
  > You can also use this on a stopped container.
  - `-f` - Follows logs in real-time.
    > This is useful for monitoring a running container (similar to attached mode).
- `docker rm [Container_Name]`: Deletes a container using its name.
- `docker container prune`: Deletes all stopped containers.
- `docker cp [./folder1/.] [Container_Name]:[/folder2]`: Copies the contents of folder1 to the folder2 directory inside the running container.
  > This operation goes from local to container. The positions can be reversed to copy from the container to the local machine.

<br>

**Executing Commands within a Container:**

- `docker run [Image_Name] [Command]`: Overrides the default command and run a new container.

  > The default command in Docker refers to the command specified in the Dockerfile's `CMD` instruction. This command is executed when a container is started from an image using the `docker run` command without explicitly providing a command.

  > If a default command is set and the container is stopped and then started again, the originally defined default command (from the Dockerfile) will be executed. This command cannot be altered; the only option is to create a new container.

- `docker exec [-Options]... [Container_Name] [Command]`: Executes an additional command within a running container.

Examples:

> - `docker run myImage ls`: Creates a new container and runs the command to list all folders within the current directory of the container, overriding the default command.
> - `docker exec -it myContainer redis-cli`: Opens a redis-cli console within a running container.
> - `docker exec -it myContainer sh`: Connects to the shell (terminal) of a running container.
> - `docker run -it myImage sh`: Creates a new container, overriding the default command, and connects to its shell (terminal).

> [!NOTE]
> The commands should be available in the image. For example, you cannot use `redis-cli` if Redis is not available in that image.
