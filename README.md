# deploysight
A lightweight DevOps visibility platform for small engineering teams.

## 🧠 The Problem

Small teams deploy frequently but lack:

Clear visibility into what’s deployed

Who deployed it

Which version is live

Environment consistency

Rollback confidence

Deployment history

Most tools (Datadog, GitHub Actions UI, AWS Console) are:

Fragmented

Overwhelming

Not unified

DeploySight becomes the single pane of glass for deployment awareness.

## Core Features 
1. Deployment Timeline

A clean UI showing:

Service name

Environment (prod / staging)

Git SHA

Branch

Deployed by

Timestamp

Status (success / failed)


2. Environment Overview

Card-based UI showing:

Service health

Uptime

Current version

Last deployment

Container status

3. Audit Log

Track:

Who triggered deployment

When

What changed

4. Health Monitoring

Backend endpoint polling:

/health

container status

simulated failures


## 🧱 Technical Architecture 
### Frontend
React

Tailwind

Charts (Recharts)

WebSockets or polling

### Backend

Node.js (or Go if you want edge)

Express

REST API

PostgreSQL

### Infrastructure

Dockerized services

GitHub Actions pipeline

Deploy to:

AWS ECS (ideal)

or EC2 if simpler

Nginx reverse proxy