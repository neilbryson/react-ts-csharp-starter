# React + TS / C# Starter server

## Starting the development server

To start a development server at https://localhost:5001, run

```bash
dotnet run

# To run in watch mode (rebuild on changes)
dotnet watch run
```

### Swagger page

A Swagger documentation is available on https://localhost:5001/swagger

## Release build

```bash
dotnet publish -c Release -o build
```
This generates all the necessary libraries at `build/`.

To run it :

```bash
dotnet build/ReactTSCSharpStarter.dll
```

## Docker

A simple Docker setup is provided ; this also allows for easy extending.

### Requirements

#### Windows / macOS
* [Docker Desktop](https://www.docker.com/products/docker-desktop)

#### Linux
* [Docker Engine](https://docs.docker.com/engine/install/)
* [Docker Compose](https://docs.docker.com/compose/install/)

### Starting the container

```bash
docker-compose -p react-ts-csharp-starter up

# To run in detached mode
docker-compose -p react-ts-csharp-starter up -d
```

This starts a release build server at http://localhost:5000.

### Stopping the container

If the container is running in detached mode, you can run the command below to stop it.

```bash
docker-compose -p react-ts-csharp-starter stop
```

### Removing the container

```bash
docker-compose -p react-ts-csharp-starter down
```
