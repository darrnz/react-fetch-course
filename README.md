# React and Vite Project

# React Fetch Implementations with Vite

This repository showcases a simple UI demonstrating various ways to implement data fetching in a React application. It covers everything from using the native TypeScript `fetch` API directly within components to more abstracted approaches like custom hooks for Axios configuration and service-based product API hooks.

## Prerequisites

- **Node.js** (version 12 or higher)
- **npm** (Node Package Manager)

## Installation

1. **Clone the repository:**

```bash
  git clone https://github.com/your-username/your-repo.git
```

Navigate to the project directory:

```bash
cd your-repo
```

Install dependencies:

```bash
npm install
```

2. **Running the Application**
   2.1 Running the Frontend
   To start the React frontend application, run:

```bash
npx vite
```

This will launch the app, and you can view it in your browser at http://localhost:5173/ (or the port specified by Vite).

2.2 Running the JSON Server
To start the JSON server, run:

```bash
npm run server
```

The JSON server will start on port 3000. You can access the API endpoints at http://localhost:3000.

2.2.2 Running on GitHub Codespaces
If you're running this project on GitHub Codespaces, you'll need to adjust the port settings to make the JSON server accessible:

Click on the Ports tab in the Codespaces interface.
Locate Port 3000 (used by the JSON server).
Right-click on the port and select Port Visibility.
Change the visibility setting to Public.
This allows external access to the JSON server running on port 3000.

License
MIT

This updated README includes a **Features** section that highlights the different data fetching implementations in your React application. Let me know if there's anything else you'd like to add or modify!
