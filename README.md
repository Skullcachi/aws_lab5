# aws_lab5

Instrucciones para crear contenedor de docker y correr la aplicacion dentro del contenedor creado.

Crear un archivo llamado Dockerfile y colocar lo siguiente:
FROM node:8

WORKDIR /src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
CMD [ "node", "src/app.js" ]

Luego crear un archivo llamado .dockerignore y colocar lo siguiente:
node_modules
npm-debug.log

Hacer login:
 * docker login

Comando para crear una imagen en Docker
 * docker build -t cachigua/aws_lab5 .
 * docker images

Comando para correr la imagen creada
 * docker run -p 3000:3000 -d cachigua/aws_lab5
 * docker ps -a 

•	docker ps
•	docker exec -it tag_imagen /bin/bash

Comandos para instalar docker, iniciar el servicio, hacerle pull a la imagen del contenedor creado y correr la aplicacion en EC2
•	sudo yum update -y
•	sudo amazon-linux-extras install docker
•	sudo service docker start
•	sudo usermod -a -G docker ec2-user
•	sudo docker info
•	sudo docker pull juanpablobc7/laboratorio5
•	sudo docker run -p 3000:3000 -d cachigua/aws_lab5
