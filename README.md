# React A/B Testing with IP-Based Form Assignment

## Overview
This project demonstrates A/B testing in a React application by presenting two different versions of a registration form. The version displayed to the user is determined by a hash function applied to the user's IP address. The selected version is saved and persisted using Redux, ensuring consistency for the user across sessions. Even if the user's IP address changes, they will see the same form unless they manually clear their cache/local storage and change their IP.

## Features
- **Two Registration Form Versions**: The application randomly assigns one of two distinct form layouts to each user.
- **IP-Based Form Assignment**: A hash function uses the user's IP address to determine which form version to show.
- **Persistent State with Redux**: The selected form version is stored in Redux and persists across user sessions.
- **User Control**: Users can manually clear their cache/local storage and change their IP address to view a different form version.

## Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>

2. **Install Dependencies:**
   ```bash
   npm install

1. **Run the application:**
   ```bash
   npm run dev

## Running the Project Locally

After completing the installation steps, the project will be running locally on http://localhost:3000 by default. You can open this URL in your web browser to see the registration form assigned to your IP address.