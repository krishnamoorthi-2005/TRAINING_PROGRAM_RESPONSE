# Docker Setup for DevOps Nexus Portal

This document provides instructions to build and run the DevOps Nexus Portal application using Docker.

## Prerequisites

- Docker Desktop installed on your machine
- Git (to clone the repository if needed)

## Files Created

The following files have been added to support Docker deployment:

- `Dockerfile` - Multi-stage Docker build configuration
- `nginx.conf` - Nginx configuration for serving the React SPA
- `.dockerignore` - Excludes unnecessary files from Docker build context

## Quick Start

### 1. Build the Docker Image

Open a terminal/command prompt in your project directory and run:

```bash
docker build -t devops-nexus-portal .
```

This command will:
- Install Node.js dependencies
- Build the React application 
- Create a production-ready image with nginx

### 2. Run the Container

```bash
docker run -p 8080:80 --name devops-nexus-portal-app devops-nexus-portal
```

### 3. Access the Application

Open your browser and navigate to:
```
http://localhost:8080
```

## Alternative Docker Commands

### Run in Detached Mode (Background)
```bash
docker run -d -p 8080:80 --name devops-nexus-portal-app devops-nexus-portal
```

### Stop the Container
```bash
docker stop devops-nexus-portal-app
```

### Remove the Container
```bash
docker rm devops-nexus-portal-app
```

### Remove the Image
```bash
docker rmi devops-nexus-portal
```

## Docker Compose (Optional)

Create a `docker-compose.yml` file for easier management:

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "8080:80"
    container_name: devops-nexus-portal-app
```

Then use:
```bash
# Build and start
docker-compose up --build

# Run in background
docker-compose up -d --build

# Stop
docker-compose down
```

## Troubleshooting

### Build Issues
- Ensure Docker Desktop is running
- Check that you're in the correct directory (where Dockerfile exists)
- Verify Node.js dependencies in package.json are valid

### Port Conflicts
If port 8080 is already in use, change the port mapping:
```bash
docker run -p 3000:80 --name devops-nexus-portal-app devops-nexus-portal
```

### Container Logs
To view container logs:
```bash
docker logs devops-nexus-portal-app
```

## Development vs Production

The current Dockerfile creates a production build. For development with hot reload, you might want to:

1. Use `npm run dev` instead of building
2. Mount your source code as a volume
3. Use a different port configuration

## Image Size Optimization

The multi-stage Dockerfile ensures:
- Only production dependencies are included
- Build tools are not in the final image  
- Uses lightweight Alpine Linux base images
- Final image contains only the built static files and nginx

## Security Considerations

The nginx.conf includes:
- Security headers (X-Frame-Options, X-Content-Type-Options, etc.)
- Gzip compression for better performance
- Proper caching for static assets
- SPA routing support for React Router