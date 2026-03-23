# GitVault

Discover GitHub. Explore Repositories. Find Insights.

A web application that allows users to search GitHub users and repositories, with powerful filtering and sorting capabilities.

---

## Project Overview

GitVault is a dynamic GitHub explorer that combines username and repository search in a single, intuitive interface. Search for any GitHub user to explore their public repositories, or search for specific repositories across GitHub. Filter by programming language, star count, and sort by various metrics to discover projects that match your interests.

## Features

### Core Features (Milestone 3)
- Dual Search Mode
  - Search GitHub users by username
  - Search repositories by name or keyword
  - Smart detection of search type

- Advanced Filtering
  - Filter by programming language
  - Filter by star count (min-max range)
  - Filter by fork count
  - Real-time filtering using JavaScript array methods

- Smart Sorting
  - Sort by stars (ascending or descending)
  - Sort by forks count
  - Sort by last updated date
  - Sort by creation date

- Favorites System
  - Like or favorite repositories
  - Save to browser localStorage
  - View saved favorites separately

- Dark Mode and Light Mode
  - Theme toggle
  - User preference saved in localStorage

### Bonus Features (Milestone 4)
- Pagination for large result sets
- Debounced search input (avoid excessive API calls)
- Loading spinners and error handling
- Responsive design (mobile, tablet, desktop)
- PWA support (optional)

---

## Technologies Used

| Category | Technology |
|----------|------------|
| Frontend | HTML5, CSS3, JavaScript (ES6+) |
| API | GitHub REST API v3 |
| Styling | CSS (Custom) or Tailwind CSS (Optional) |
| Storage | Browser LocalStorage |
| Deployment | Vercel or Netlify or GitHub Pages |

---

## APIs Used

### 1. Get User Repositories
GET https://api.github.com/users/{username}/repos

Fetches all public repositories of a GitHub user. Returns: repo name, stars, forks, language, last updated, description

### 2. Search Repositories
GET https://api.github.com/search/repositories?q={query}&sort={sort}&order={order}

Searches repositories by keyword or name. Returns: matching repositories with metadata

### 3. Get User Profile (Optional)
GET https://api.github.com/users/{username}

Fetches user profile info (avatar, bio, followers, repos count)

---
