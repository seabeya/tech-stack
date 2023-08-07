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
   - [Dockerfile](#-dockerfile)
     - [Basic instructions](#-basic-instructions)
     - [Arguments instructions (Build time)](#-arguments-instructions-build-time)
     - [Environment Variables (Runtime)](#-environment-variables-runtime)

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

<br>

### 🔷 Dockerfile

A Dockerfile is a text-based script used to define the configuration and steps required to build a Docker container image.

> A Dockerfile typically consists of a series of instructions that guide the process of creating a container image. These instructions include things like specifying a base image, adding files and directories, installing software packages, configuring environment variables, and defining how the container should run when launched.

> Dockerfile official docs: https://docs.docker.com/engine/reference/builder/

<br>

#### 🔻 Basic instructions

- `FROM [Image_Name]:[Tag]`: Specifies the base image for your Docker image.
  > It forms the foundation of your container. If no tag is specified, it defaults to "latest".
- `WORKDIR [Dir_Address]`: Sets the working directory for the subsequent instructions in the Dockerfile.
  > This becomes the location where your project will reside within the container. Any following commands executed in the container or instructions will be relative to this directory.
- `COPY [From_Dir] [To_Dir]`: Copies files or directories from the local host to the specified location within the container.
  > For example, using `COPY ./ ./`: it takes files from the current directory on the host and copies them to the same relative location within the container's WORKDIR. This allows you to transfer your project files into the container for further processing.

> [!NOTE]
> During image building, Docker captures a snapshot of the source code at that specific moment. If you modify the source code after creating the image, those changes will not automatically reflect within the existing image. To incorporate the changes, you must rebuild the Docker image to create a new snapshot with the updated source code.

- `RUN [Commands]`: Executes specified commands within the container during the image build process.
  > This instruction allows you to install software, configure settings, and perform various tasks required for setting up the environment within the container. You can include multiple RUN instructions in your Dockerfile to perform a sequence of tasks.
- `EXPOSE [Port]`: Informs Docker that the container will listen on the specified port at runtime.
  > This does not actually publish the port externally; it's used to indicate which ports the container will use. It helps in documenting which ports are intended to be used by the containerized application, making it easier to understand the container's networking requirements. Actual port mapping to the host system is typically done when running the container.
- `CMD ["[Command1_a]", "[Command1_b]", "[Command1_c]"]`: Specifies the default command to run when the container starts.
  > It can include multiple commands as a list. If multiple CMD instructions are provided, the last one will overwrite any previous ones. This sets the initial command or process that the container will execute when it's launched without any specific command provided.
- `ENTRYPOINT ["Entry_Command"]`: Defines the primary command that will be executed when the container starts.
  > Unlike CMD, which can be overridden by providing a command when running the container, the ENTRYPOINT instruction sets a fixed command that cannot be easily overridden. Any additional arguments provided when running the container will be passed as arguments to the ENTRYPOINT command. This is useful when you want to create a container that always runs a specific command or application and only accepts additional arguments to modify its behavior.

<br>

#### 🔻 Arguments instructions (Build time)

Dockerfile Arguments (also known as build-time variables or ARGs) are a way to parameterize the Docker image build process.

> They allow you to pass values into the Docker build process, which can then be used within the Dockerfile to customize the image being built.

> Once you define an argument using the ARG instruction, you can reference its value in subsequent instructions.

> You can also override Dockerfile ARGs when building an image using the docker build command. When you pass an argument to the docker build command using the `--build-arg` flag, it will override the default value specified in the Dockerfile.

- Dockerfile: `ARG [Arg_Name]=[Value]`
  ```Dockerfile
  ARG PACKAGE=nginx
  ```
- CLI: `--build-arg [Arg_Name]=[Value]`
  ```
  docker build --build-arg PACKAGE=apache2 ...
  ```

Example usage:

```Dockerfile
RUN apt-get update && apt-get install -y ${PACKAGE}
```

<br>

#### 🔻 Environment Variables (Runtime)

Environment variables are dynamic values that can affect the behavior of processes or applications running on a computer system.

> Environment variables provide a way to customize the behavior of software without modifying the program's source code. They are particularly useful for configuration purposes and for keeping sensitive information, such as API keys or database credentials, separate from the actual codebase.

> For instance, you can access environment variables in a Node.js application using `process.env.var_name`.

There are methods for passing dynamic values into the container during the build process or while the container is running:

- Dockerfile: `ENV [Var_Name] [Value]`

  ```Dockerfile
  ...
  ENV PORT 80

  # You can also use declared ENV variables inside the Dockerfile.
  EXPOSE $PORT
  ...
  ```

- CLI: `--env [Var_Name]=[Value]`
  ```bash
  docker run ... --env PORT=8000 ...
  ```
- .env file (Recommended):
  ```bash
  # example.env
  PORT = 8000
  ```
  And then in CLI:
  ```bash
  docker run ... --env-file ./env/file/path/example.env
  ```

<br>

> [!IMPORTANT]
> There is a mechanism called Dockerfile caching that optimizes the build process of Docker images.
>
> Each instruction in the Dockerfile corresponds to a step in the image creation process. Every time an instruction is executed in the Dockerfile, it generates content that contributes to a new layer, which is then cached. These layers are stacked on top of each other to form the final image. Each layer is immutable, and subsequent layers can only add or modify files on top of the lower layers.
>
> When building an image, Docker attempts to reuse previously built layers if the build context (the directory containing the Dockerfile and other necessary files) hasn't changed. This reuse prevents redundant execution of unchanged steps, thereby speeding up the build process.
>
> Note: modifying a single instruction or related file context **invalidates** subsequent layers. Therefore, optimizing the instruction order can enhance caching benefits.
>
> Watch this: https://youtu.be/RP-z4dqRTZA
