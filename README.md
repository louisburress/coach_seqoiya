Coach Seqoiya Web Application
This project is a web-based platform designed to manage and schedule athletic training sessions. The platform consists of both a frontend and backend service, but the primary focus of this project is on its CI/CD pipeline and infrastructure automation.

Project Overview
Frontend App: Built using JavaScript, HTML, and CSS, the frontend offers a user-friendly interface for both athletes and coaches. It enables users to view workout plans, training schedules, and communicate with coaches.

Backend App: The backend handles API requests and data processing to support the frontend. It stores athlete profiles, tracks training progress, and manages the scheduling functionality.

CI/CD Pipeline & Infrastructure
Infrastructure
Terraform: I used Terraform to automate the provisioning of the infrastructure. The project is deployed on an EC2 instance hosted on AWS. Terraform scripts define the entire infrastructure, including security groups, networking, and the EC2 instance configuration. This ensures consistent and reliable deployments.

Docker: Docker is used to package both the frontend and backend services into containers. These Docker images are stored in a DockerHub repository, from where they are pulled during the deployment process. This containerized approach helps in achieving portability across environments.

CI/CD Pipeline
GitHub Actions: For the CI/CD process, I set up GitHub Actions. This pipeline is responsible for automating the entire deployment process. Whenever changes are pushed to the repository, the pipeline triggers:
Build Stage: The Docker images for both the frontend and backend are built.
Push to DockerHub: Once built, the images are automatically pushed to DockerHub.
Deployment to EC2: On the EC2 instance, Docker is used to pull the latest images from DockerHub and run them as containers. This step ensures that the latest version of the application is always running.
Key Benefits of the Pipeline
Automated Deployments: The use of GitHub Actions means that new updates to the application are automatically built, tested, and deployed without manual intervention.

Consistency: Terraform ensures that infrastructure remains consistent across environments, and Docker guarantees that the application works the same way regardless of where it's deployed.

Scalability: The modular approach taken with Terraform makes it easy to scale the infrastructure if necessary, by simply updating the configuration and reapplying it.

Conclusion
This project showcases my ability to manage both the development and infrastructure sides of a web application. It highlights the use of modern DevOps practices like Infrastructure as Code (Terraform), containerization (Docker), and CI/CD pipelines (GitHub Actions), which are critical skills for building scalable, reliable applications.
