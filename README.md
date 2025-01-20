# User Management App

A React-based application for managing and viewing user data fetched from an external API. The project includes a home page to list users with sorting and filtering functionality and a detailed user page.

---

## Project Setup

### Prerequisites

1. Node.js and npm installed on your local machine.
2. A code editor (e.g., VS Code).

### Steps to Run the Project Locally

Clone the repository:

```bash
git clone <repository-url>
cd <repository-directory>
```

# Features Implemented

This project includes several features designed to enhance usability and functionality for viewing and managing user data. Below is a detailed breakdown of the features implemented:

---

## 1. Home Page

### User List Display

- Fetches a list of users from the API: `https://jsonplaceholder.typicode.com/users`.
- Displays key user information:
  - **Name**
  - **Email**
  - **City**

### Search Functionality

- A search bar is provided to filter users by their name dynamically.

### Sorting

- Users can sort the list of users alphabetically:
  - **A-Z**
  - **Z-A**

### Navigation

- Clicking on a user in the list redirects to a detailed page with more user information.

---

## 2. User Detail Page

### Detail Display

- Fetches and displays the following information about the selected user:
  - Name
  - Email
  - Phone number
  - Company name
  - Website

### Navigation

- Includes a **"Go Back"** button that redirects the user back to the home page.

---

## 3. State Management

### React Context API

- A context provider is set up to manage global state.
- Components consume this context for seamless state sharing across the app.

---

## 4. Error Handling & Loading States

- Loading indicators are displayed during data fetching.
- Errors encountered during API calls are handled gracefully, ensuring the app remains user-friendly.

---

## 5. Styling and Design

### CSS Styling

- The application features clean and visually appealing styles.
- Responsive design ensures a smooth experience on both mobile and desktop devices.

### Tailwind CSS / Material-UI

- **Tailwind CSS**: Configured for utility-first styling.
- **Material-UI**: Used for pre-built components and consistent theming.

---

## Bonus Features

### Dark/Light Mode Toggle

- A toggle switch allows users to switch between dark and light themes for better accessibility.

### Pagination

- Pagination is implemented for user lists to enhance usability with larger
