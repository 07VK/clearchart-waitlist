# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/44be5990-d3ee-41e1-a753-decdde3d0bb1

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/44be5990-d3ee-41e1-a753-decdde3d0bb1) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```


## 2. Backend Setup (Server)
These commands set up and run the backend server and database.

Set up the PostgreSQL Database:

Start the psql interactive terminal.

Create the database and the required table.

SQL

CREATE DATABASE clear_chart_waitlist;
\c clear_chart_waitlist
CREATE TABLE waitlist (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone_number VARCHAR(20) UNIQUE NOT NULL,
    submission_date TIMESTAMPTZ DEFAULT NOW()
);
Set up backend dependencies:
Navigate to the backend directory and install its packages.

Bash

cd backend
npm install
Configure Environment Variables:

Create a .env file inside the backend folder.

Add your database credentials to this file. This file should not be committed to Git.

Code snippet

# backend/.env
DB_USER=your_postgres_username
DB_HOST=localhost
DB_DATABASE=clear_chart_waitlist
DB_PASSWORD=your_secure_password
DB_PORT=5432
Run the backend server:
This will start your API server, typically on http://localhost:5000.

Bash

node server.js
## Running the Full Application
To run the full application, you must have both servers running at the same time in two separate terminals:

Terminal 1 (Project Root): npm run dev

Terminal 2 (Backend Folder): node server.js


**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS



## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/44be5990-d3ee-41e1-a753-decdde3d0bb1) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
