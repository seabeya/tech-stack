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
