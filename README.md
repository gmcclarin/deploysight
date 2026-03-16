# DeploySight 🚀
**A real-time deployment monitoring dashboard for modern CI/CD pipelines**

DeploySight is a developer-focused observability tool that collects deployment events from hosting providers (starting with Netlify) via webhooks and visualizes them in a clean dashboard.

It helps developers quickly understand:

- Which projects are currently deployed
- Deployment status across environments
- Recent deployment activity
- Deployment history across repositories

The system normalizes events from multiple providers into a unified deployment model and persists them in a Postgres database.

---

## ✨ Features

- 📡 **Webhook ingestion** from deployment platforms  
- 🧠 **Provider normalization layer** for consistent deployment data  
- 🗄️ **PostgreSQL persistence** via TypeORM  
- 📊 **React dashboard with MUI DataGrid**  
- ⚡ **Deployment statistics cards**  
- 🧱 **Repository pattern + service layer architecture**  
- 🐳 **Dockerized database for easy local setup**

---

## 🧱 Architecture

DeploySight uses a layered backend architecture inspired by **hexagonal architecture / ports and adapters**.


Key goals:

- isolate provider-specific logic  
- normalize deployments across platforms  
- keep the core domain provider-agnostic  

---

## 🛠 Tech Stack

### Backend
- Node.js
- TypeScript
- Express
- TypeORM
- PostgreSQL
- Docker

### Frontend
- React
- TanStack Query
- Material UI
- MUI DataGrid

### Tooling
- ngrok (for local webhook testing)

---

## 🚀 Running the Project Locally

### 1 Clone the repository

```bash
git clone https://github.com/yourusername/deploysight.git
cd deploysight
```

### 2 Start the Database ( Docker)
```bash
docker compose up -d
```
This starts a container with:
host: localhost
port: 5433
database: deploysight
user: postgres
password: postgres

### 3 Start the Backend API
```bash
cd backend
npm install
npm run dev
```

You should see:
Database connected
DeploySight API running on port 5050

### 4 Start the Frontend Dashboard
```bash
cd frontend
npm install
npm run dev
```

open http://localhost:5173

You should see the dashboard

## Connecting Real Deployment Webhooks

DeploySight can ingest real deployment events using webhooks.
To test this locally, we expose the API via ngrok

### 1. Install ngrok
```bash
brew install ngrok
```
- Authenticate your account
```bash
ngrok config add-authtoken YOUR_TOKEN
```

### 2. Start a public tunnel
Your backend runs on port 5050..
Expose it with
```bash
ngrok http 5050
```

You may need to add a free public domain in your ngrok account 
You will recieve a public URL like: 
https://example-name.ngok-free.com

### 3. Configure your webhooks
For example, a Netlify Webhook can be configured in your Site Settings / Deploy Settings
Site Settings -> Build & Deploy -> Notifications


Add the webhook notifications you want, i.e. deploy started, deploy failed, deploy success

USE THIS ENDPOINT: https://YOUR-NGROK-DOMAIN/api/webhooks/netlify
Example:
https://example-name.ngrok-free.dev

### 4. Trigger a Deployment 
push a commit or trigger a manual deployment

Netlify will POST a deployment payload to DeploySight.

The backend will:

Receive the webhook

Parse the provider payload

Normalize the deployment data

Store it in Postgres

Expose it through the API

### 5. View Deploymenr Dashboard
Open https://localhost:5173 
You will see your deployment appear in the grid

Columns include:

repository

branch

commit SHA

environment

deployment source

status

deployment time

## Dashboard
The dashboard displays:

Deployment Statistics

Total tracked repositories

Successful deployments

Failed deployments

Last deployment time

Deployment Table

Each row represents the latest deployment per repo/environment.

## Normalization Layer
Different Providers emit very different webhook payloads

DeploySight converts them  into a unified model.
This abstraction makes it easy to support additional providers.

## 🔌 Planned Provider Integrations

DeploySight is designed to support multiple deployment sources:

Netlify

Vercel

GitHub Actions

AWS CodePipeline

GCP Cloud Build

## 📈 Future Improvements

Planned enhancements include:

Live deployment updates via WebSockets

Deployment timelines per repository

Deployment duration tracking

Failure rate analytics

Multi-provider dashboards

Slack / Discord alerts

Authenticated dashboards for teams

## 📷 Example Use Case

A developer running several side projects across multiple hosting platforms can use DeploySight to:

monitor deployments in one place

detect failing deployments

track deployment frequency

visualize activity across projects

## 💡 Why This Project Exists

Modern developers often deploy applications across many platforms:

Netlify

Vercel

AWS

CI/CD pipelines

Each platform provides deployment information, but there is no unified dashboard across providers.

DeploySight explores how to build a provider-agnostic deployment observability tool.

## 🧑‍💻 Author

Built by Grace McClarin

Software engineer focused on cloud infrastructure, developer tooling, and modern web architecture.

## If you like this project

Start the repository and feel free to contribute!