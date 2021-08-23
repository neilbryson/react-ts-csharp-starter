# React + TS / C# Starter server

## Requirements
* [.NET 5.0](https://dotnet.microsoft.com/download/dotnet/5.0)

## Before starting

You are free to rename the solution to whatever name you want.
By default, the solution / project name is "ReactTSCSharpStarter".

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
