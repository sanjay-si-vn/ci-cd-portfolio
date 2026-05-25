# DevOps Portfolio App with Full CI/CD Pipeline

## 1. Project Overview

This project demonstrates a complete beginner-friendly DevOps workflow using:

* Node.js
* Docker
* GitHub Actions
* Docker Hub
* AWS EC2
* CI/CD Automation

The application is automatically built, containerized, pushed to Docker Hub, and deployed to an AWS EC2 server whenever code is pushed to the `main` branch.

---

# 2 Architecture Workflow


Developer Pushes Code
        ↓
GitHub Repository
        ↓
GitHub Actions Pipeline
        ↓
Docker Image Build
        ↓
Push Image to Docker Hub
        ↓
SSH into AWS EC2
        ↓
Pull Latest Docker Image
        ↓
Run Updated Container
        ↓
Application Live on Browser

---

# 3. CI/CD Workflow Diagram

flowchart TD
    A[Developer Pushes Code] --> B[GitHub Repository]
    B --> C[GitHub Actions Workflow]
    C --> D[Build Docker Image]
    D --> E[Push Image to Docker Hub]
    E --> F[Connect to AWS EC2 via SSH]
    F --> G[Pull Latest Docker Image]
    G --> H[Run Docker Container]
    H --> I[Application Live]

---

# 📁 Project Structure

ci-cd-portfolio/
│
├── app/
│   └── index.js
│
├── public/
│   └── style.css
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── Dockerfile
└── package.json

---

# 5. Technologies Used

| Technology     | Purpose             |
| -------------- | ------------------- |
| Node.js        | Backend Application |
| Docker         | Containerization    |
| GitHub Actions | CI/CD Automation    |
| Docker Hub     | Container Registry  |
| AWS EC2        | Cloud Server        |
| Git & GitHub   | Version Control     |

---

# 6. DevOps Concepts Learned

This project helped me learn:

* Linux basics
* Git & GitHub workflow
* Docker containerization
* Docker image creation
* CI/CD pipeline automation
* GitHub Actions workflows
* Docker Hub integration
* AWS EC2 deployment
* SSH automation
* Automated application deployment

---

# 7. Local Setup

## 1️⃣ Clone Repository

git clone <your-repository-url>

cd ci-cd-portfolio

---

## 2️⃣ Run Application Locally

npm start

Open browser:

http://localhost:5000

---

# 🐳 Docker Setup

## Build Docker Image

docker build -t ci-cd-portfolio .

## Run Docker Container

docker run -p 5000:5000 ci-cd-portfolio

Open:

http://localhost:5000

---

# ☁️ AWS EC2 Setup

## Launch EC2 Instance

### Recommended Configuration

| Setting       | Value    |
| ------------- | -------- |
| OS            | Ubuntu   |
| Instance Type | t3.micro |
| Port Open     | 22, 5000 |

---

## Install Docker on EC2

sudo apt update

sudo apt install docker.io -y

sudo systemctl start docker

sudo systemctl enable docker

Add Ubuntu user to Docker group:

sudo usermod -aG docker ubuntu

Reconnect SSH.

---

#  GitHub Secrets Configuration

Go to:

Repository
 → Settings
 → Secrets and variables
 → Actions

Add these secrets:

| Secret Name     | Description                         |
| --------------- | ----------------------------------- |
| DOCKER_USERNAME | Docker Hub Username                 |
| DOCKER_PASSWORD | Docker Hub Password or Access Token |
| EC2_HOST        | EC2 Public IP                       |
| EC2_USERNAME    | ubuntu                              |
| EC2_SSH_KEY     | Full PEM File Content               |

---

# ⚡ GitHub Actions Workflow

File:

.github/workflows/ci.yml

Workflow Process:

1. Checkout Source Code
2. Login to Docker Hub
3. Build Docker Image
4. Push Image to Docker Hub
5. SSH into EC2
6. Pull Latest Image
7. Stop Old Container
8. Run Updated Container

---

# 🔄 CI/CD Deployment Flow

Every time code is pushed:

git add .

git commit -m "updated app"

git push

The deployment happens automatically.

---

# 🌐 Live Deployment

Access the application:

http://YOUR_EC2_PUBLIC_IP:5000

---

#  Key Achievements

✅ Built Dockerized Node.js Application

✅ Created GitHub Actions CI/CD Pipeline

✅ Automated Docker Hub Image Push

✅ Automated AWS EC2 Deployment

✅ Learned Real DevOps Workflow

---

# 📚 Future Improvements

* Add Nginx Reverse Proxy
* Add HTTPS SSL
* Use Docker Compose
* Deploy Multiple Containers
* Add Kubernetes
* Add Monitoring Tools

---

# 👨‍💻 Author

## Sanjay

## Screenshots
<img width="1667" height="914" alt="Screenshot 2026-05-25 130313" src="https://github.com/user-attachments/assets/4397f603-2574-423f-bfad-29e06fc0c737" />
<img width="1702" height="953" alt="Screenshot 2026-05-25 130221" src="https://github.com/user-attachments/assets/7ca3c65c-6ed7-4435-b37e-791a080f7f3d" />
<img width="1919" height="972" alt="Screenshot 2026-05-25 124917" src="https://github.com/user-attachments/assets/4b28a55e-48b9-4c3e-9218-790b3ef99bd9" />
<img width="1898" height="918" alt="Screenshot 2026-05-25 124424" src="https://github.com/user-attachments/assets/6c46dee7-a3e4-470d-972d-f795ecc4ab6d" />
<img width="1916" height="839" alt="Screenshot 2026-05-25 124256" src="https://github.com/user-attachments/assets/16193825-c1a6-4cf2-a539-65150763c50c" />

