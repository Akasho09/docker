# Docker Commands Cheat Sheet

- docker kill containerName/ID
- docker rmi image_id --force
- docker exec -it cId /bin/bash 


## 1. **Docker Installation & Version**
```sh
# Check Docker version
docker --version

# Check Docker info
docker info
```

---

## 2. **Container Management**
```sh
# Run a container in detached mode (-d) with a name
docker run -d --name container_name image_name

# Run a container and access interactive shell
docker run -it image_name bash

# Run a container and remove it after exit (--rm)
docker run --rm image_name

# List running containers
docker ps

# List all containers (including stopped ones)
docker ps -a

# Stop a running container
docker stop container_id

# Start a stopped container
docker start container_id

# Restart a container
docker restart container_id

# Remove a container
docker rm container_id
```

---

## 3. **Image Management**
```sh
# List all images
docker images

# Pull an image from Docker Hub
docker pull image_name

# Build an image from Dockerfile
docker build -t image_name .

# Remove an image
docker rmi image_id

# Tag an image
docker tag image_id new_repo:new_tag
```

---

## 4. **Volumes & Persistent Storage**
```sh
# List all volumes
docker volume ls

# Create a volume
docker volume create volume_name

# Remove a volume
docker volume rm volume_name

# Run a container with a mounted volume
docker run -d -v volume_name:/container/path image_name
```

---

## 5. **Networking**
```sh
# List all networks
docker network ls

# Create a custom network
docker network create network_name

# Connect a container to a network
docker network connect network_name container_id

# Disconnect a container from a network
docker network disconnect network_name container_id

# Run a container in a custom network
docker run -d --network network_name image_name
```

---

## 6. **Logs & Debugging**
```sh
# Show container logs
docker logs container_id

# Show real-time logs
docker logs -f container_id

# Show logs with timestamps
docker logs --timestamps container_id

# Execute a command inside a running container
docker exec -it container_id bash
```

---

## 7. **Compose & Swarm**
```sh
# Run services using Docker Compose
docker-compose up -d

# Stop services
docker-compose down
```

---

## 8. **Prune & Cleanup**
```sh
# Remove all stopped containers
docker container prune

# Remove all unused images
docker image prune -a

# Remove all unused volumes
docker volume prune

# Remove everything (containers, images, volumes, networks)
docker system prune -a
```