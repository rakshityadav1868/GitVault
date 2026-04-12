# GitVault

A simple GitHub user repository explorer with dark/light mode, sorting, and pagination.

## Features

- **Search GitHub Users** - Search for any GitHub user and view their public repositories
- **Sort Repositories** - Sort repos alphabetically (A-Z or Z-A)
- **Pagination** - View 10 repositories at a time with "View More" button to load additional repos
- **Dark/Light Mode** - Toggle between light and dark themes
- **Simple UI** - Clean and intuitive interface

## Technologies Used

| Category | Technology |
|----------|------------|
| Frontend | HTML5, CSS3, JavaScript (ES6+) |
| API | GitHub REST API v3 |
| Storage | Browser LocalStorage |

## How to Use

1. Enter a GitHub username in the search box
2. Click "Search" to fetch their repositories
3. Use the sort dropdown to arrange repos A-Z or Z-A
4. Click "View More" to load additional repositories
5. Toggle dark/light mode using the button in the header

## API Used

- **Get User Repositories**: `GET https://api.github.com/users/{username}/repos`
  - Fetches all public repositories of a GitHub user
  - Returns: repo name, description, and other metadata
