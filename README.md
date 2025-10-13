### 🧬  EuCanImage Web Portal

The EuCanImage Web Portal is a static website built with Hugo and containerized using Docker and Docker Compose.
It serves as the main entry point for sharing information, documentation, and resources for the EuCanImage project — an EU–Canada collaboration for building a federated imaging platform for cancer research.

---

#### 🌍 About EuCanImage

EuCanImage is an EU–Canada initiative that aims to build a large-scale federated repository of high-quality, multi-modal cancer imaging data, integrating AI-based tools for precision medicine research.

Learn more at:  [EucanImage](https://eucanimage.eu/) 

----

#### 🏗️ Project Overview

This repository contains the source code for the EuCanImage public website, including:

Hugo static site generator setup

Custom theme and layouts for content presentation

Docker-based deployment for consistent builds

Configuration through hugo.toml

Automated build output in public/ (and optionally public.zip)

----

#### ⚙️ Technologies Used

- Hugo
- Docker
- Docker Compose
- Markdown for content management
- HTML/CSS/JS for theming and layout

----

#### 🚀 Getting Started
Prerequisites

Make sure you have the following installed:

- Docker
- Docker Compose
- Hugo (optional)

Run with Docker

You can quickly start a local instance of the portal using Docker Compose:
´´´bash
docker compose up
´´´

This will build the image and start a local Hugo server.
By default, the site will be available at:
´´´bash
👉 http://localhost:1313
´´´

Build the Site Locally (without Docker)
If you have Hugo installed, you can build or serve the site directly:
```bash
hugo server
```

Then open your browser at http://localhost:1313

To generate the static files:
```bash
hugo
```

The generated files will be placed in the /public directory.

----

#### 🧰 Configuration

Main configuration options are defined in hugo.toml.

You can adjust:

Base URL

Theme and layout options

Site parameters and metadata

Menu structure and sections

----

#### 📁 Repository Structure:
```php
├── archetypes/          # Default content templates
├── content/             # Markdown-based pages and posts
├── layouts/             # Custom HTML layouts
├── static/              # Static assets (images, CSS, JS)
├── themes/              # Hugo theme (if used)
├── Dockerfile           # Docker build instructions
├── docker-compose.yml   # Local orchestration file
├── hugo.toml            # Hugo configuration
└── public/              # Generated static site (output)
```
