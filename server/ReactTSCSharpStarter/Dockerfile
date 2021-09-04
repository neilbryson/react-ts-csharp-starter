FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /source

COPY ReactTSCSharpStarter.csproj .
RUN dotnet restore

COPY . .
RUN mv appsettings.json appsettings.Old.json
RUN mv appsettings.Docker.json appsettings.json
RUN dotnet publish -c Release -o /app --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:5.0
WORKDIR /app
COPY --from=build /app .
ENTRYPOINT ["dotnet", "ReactTSCSharpStarter.dll"]
