## zsh: command not found: docker
### echo $PATH
The PATH environment variable is a colon-separated list of directories where the shell looks for executable files when you run a command without specifying its absolute path. For example, when you type a command like ls, the shell searches through the directories in PATH to find the ls executable.
- if docker isnt listed add docker to ~./zshrc

- find path of docker by find / -name docker 
- alias docker="/Applications/Docker.app/Contents/Resources/bin/docker"
or docker 2
/Applications/Docker\ 2.app/Contents/Resources/bin/docker


## username == aakash 
why ? psql -h localhost -d postgres -U `postgres`


## ERROR: Cannot connect to the Docker daemon at unix:///Users/akashmalik/.docker/run/docker.sock. Is the docker daemon running?
errors pretty printing info

 open "/Applications/Docker 2.app"
 or open docker desktop app manually


 ## Dockerfile:1
--------------------
   1 | >>> FROM node:20
   2 |     
   3 |     WORKDIR  /app
--------------------
ERROR: failed to solve: node:20: failed to resolve source metadata for docker.io/library/node:20: error getting credentials - err: exec: "docker-credential-desktop": executable file not found in $PATH, out: ``


nano ~/.docker/config.json
"credsStore": "desktop"


## Error: P1001: Can't reach database server at `accelerate.prisma-data.net`:`5432`

Please make sure your database server is running at `accelerate.prisma-data.net`:`5432`.

why tf would u use prisma acclerate

