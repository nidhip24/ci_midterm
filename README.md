# CI Midterm Project

## Repository Structure
```
ci_midterm/
├── .github/
│   └── workflows/           # CI pipeline configuration
├── public/                  # Static public assets
├── src/                     # React source code
├── .dockerignore            # Files to ignore in Docker builds
├── .gitignore               # Files to ignore in Git
├── Dockerfile               # Docker image configuration
├── package.json             # NPM package configuration
├── package-lock.json        # NPM package lockfile
└── README.txt               # Project documentation
```

## Prerequisites
- Node.js (version 14 or higher)
- NPM (version 6 or higher)
- Docker (if using Docker)
- Git

## Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/nidhip24/ci_midterm.git
   cd ci_midterm
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```

## Running the Application
### Using NPM
```sh
# Start the development server
npm start
```
This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Using Docker
1. **Build the Docker image:**
   ```sh
   docker build -t todo-app:latest .
   ```
2. **Run the Docker container:**
   ```sh
   docker run -p 8080:80 todo-app:latest
   ```
This will start the application inside a Docker container, accessible at [http://localhost:8080](http://localhost:8080).

## Testing the Application
```sh
# Run tests
npm test
```

## Building for Production
```sh
# Create a production build
npm run build
```

## Continuous Integration Pipeline
The project uses GitHub Actions for continuous integration. The workflow is defined in `.github/workflows/ci.yml`.

### Testing the CI Pipeline
1. **Trigger the workflow:**
   - Push a commit to the repository.
   - Create a pull request.
2. **Monitor the workflow:**
   - Go to the "Actions" tab in your GitHub repository.
   - Select the latest workflow run to view details.

## Docker Image from Registry
```sh
# Pull the Docker image
docker pull nidhip24/todo-app:latest

# Run the Docker container
docker run -p 8080:80 nidhip24/todo-app:latest
```