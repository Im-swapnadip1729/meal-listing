# Recipe Haven

Recipe Haven is a modern recipe discovery web app built with React and Vite. It lets users explore a wide collection of meals from around the world, search by keyword, filter by category, and open detailed recipe views with ingredients and instructions.


## Features

- Beautiful, food-inspired UI with a polished hero section
- Search meals by name, cuisine, or category
- Filter recipes by category using interactive pills
- View detailed recipe information in a modal
- Browse recipes with pagination and smooth scrolling
- Save favorite recipes locally in the browser
- Featured “Today’s pick” recipe with image and quick access

## Tech Stack

- React 19
- Vite 8
- CSS for custom styling and responsive layout
- FreeAPI for meal data

## Getting Started

1. Clone the repository
2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open the local URL shown in the terminal.

## Build for Production

```bash
npm run build
```

## Project Structure

```bash
src/
├── components/
│   ├── Navbar.jsx
│   ├── HeroStrip.jsx
│   ├── Controls.jsx
│   ├── MealGrid.jsx
│   ├── MealCard.jsx
│   ├── MealModal.jsx
│   └── Pagination.jsx
├── hooks/
│   ├── useMeals.js
│   └── useMealDetail.js
├── App.jsx
├── main.jsx
└── index.css
```

## Future Improvements

- Add user authentication and saved recipes across devices
- Introduce meal sorting and advanced filters
- Add category-based recommendation sections
- Support dark/light theme toggle
