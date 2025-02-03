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