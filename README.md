# IP Address Tracker

This project is a React + TypeScript application that allows users to search for any IP address or domain and instantly view information such as its location, timezone, and ISP. The app also displays the location on an interactive Leaflet map. It was originally built using plain HTML, CSS, and JavaScript and later refactored into a modern component-based React project with TailwindCSS for styling.

# Features

Search any IP address or domain

View details like:

IP Address

Location (city, region, postal code)

Timezone

ISP

Interactive map using Leaflet

Fully responsive UI

Clean component structure using React + TypeScript

Styled with TailwindCSS

# Tech Stack

React

TypeScript

Vite

TailwindCSS

Leaflet (map library)

Geo.ipify API

# Getting Started
1. Install dependencies
npm install

2. Add your API key

Create a .env file:

VITE_IPIFY_API_KEY=your_key_here

3. Start the development server
npm run dev


The app will run at:

http://localhost:5173

Project Structure
src/
 ├─ components/
 │   ├─ Header.tsx
 │   ├─ InfoCard.tsx
 │   └─ MapView.tsx
 ├─ App.tsx
 ├─ main.tsx
 └─ index.css

# Credits

IP data from geo.ipify.org

Map tiles from OpenStreetMap

Icons and original UI inspiration from Frontend Mentor

# Deployment Link:

https://ayaan-react-development-project.netlify.app/

# Reflection

During the development of this project, the main focus was on transforming a static HTML, CSS, and JavaScript application into a modern React + TypeScript setup using Vite and TailwindCSS. The process required breaking the original project into reusable components, managing state more cleanly, and integrating Leaflet maps in a React-friendly way. One of the early challenges was handling Leaflet’s map initialization. Because Leaflet tries to attach itself to the same DOM element every time the component renders, it caused the common “Map container is already initialized” error. This was resolved by using a useRef to persist the map instance and checking whether the map had already been created before initializing it again.

Styling also required some rethinking. TailwindCSS made the layout more flexible and simplified the spacing, fonts, and responsiveness. The biggest style-related adjustment was getting fonts to work correctly in a Vite environment, which required configuring the font link in index.html and extending Tailwind’s font settings.

TypeScript introduced stricter type checking, which helped prevent mistakes but initially caused issues, especially with Leaflet’s type declarations. Installing @types/leaflet resolved the warnings and made the development flow smoother.

If more time were available, potential improvements include implementing form validation for IP addresses, adding loading indicators, and creating custom hooks to further clean up the API logic. Overall, the project was a good exercise in modernizing a traditional web page and applying best practices in React component architecture.
