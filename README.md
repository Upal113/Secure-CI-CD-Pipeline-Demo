# Secure-CI-CD-Pipeline-Demo

This project demonstrates a simple Node.js application with a CI CD pipeline using GitHub Actions, Docker, and security scanning with Snyk.

Steps to use the project

1 Clone the repository
Download the project from GitHub to your local machine using the git clone command and navigate into the project folder.

2 Install dependencies
Install all required Node.js dependencies using npm install.

3 Run the application locally
Start the application using node server.js. The API will run on a local port such as 3000.

4 Test the application
Verify the API endpoints using a browser, curl, or Postman. If tests are included, run them using npm test.

5 Build Docker image
Build the Docker image using the Dockerfile provided in the project. Ensure the correct path is used if the Dockerfile is inside a folder.

6 Run Docker container
Run the application inside a Docker container and map the required port to access the API locally.

7 Push code to repository
Push your code changes to the main branch of the GitHub repository.

8 CI pipeline execution
When code is pushed or a pull request is created, GitHub Actions automatically triggers the CI pipeline.

The CI pipeline performs the following steps
It checks out the source code
It installs dependencies
It runs tests
It performs security scanning using Snyk for vulnerabilities in dependencies and containers
It builds the Docker image
It scans the Docker image for vulnerabilities

9 CD pipeline execution
After successful CI steps, the CD pipeline executes deployment steps.

The CD pipeline performs the following steps
It tags the Docker image with latest and a versioned tag based on the build number
It pushes the Docker image to GitHub Container Registry

10 Verify results
Check the GitHub Actions tab for pipeline execution status and logs. Check the GitHub Container Registry to confirm the Docker image has been published successfully.