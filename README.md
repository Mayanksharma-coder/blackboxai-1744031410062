
Built by https://www.blackbox.ai

---

```markdown
# Data Entry Tracker

## Project Overview

The **Data Entry Tracker** is a multi-user data entry system designed for easy entry and tracking of user-generated data. Users can log in, submit data entries, and view all their entries in a user-friendly dashboard interface. This application utilizes local storage for data persistence, ensuring that entries are saved and can be retrieved across sessions.

## Installation

To set up the Data Entry Tracker locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/data-entry-tracker.git
   ```

2. **Navigate into the project directory**:
   ```bash
   cd data-entry-tracker
   ```

3. **Open `index.html` in your preferred web browser** to run the application.

## Usage

1. Visit the application's main page at `index.html`.
2. Enter your username in the login form and click the "Enter Dashboard" button.
3. Once logged in, you can create new data entries from the dashboard.
4. Access the tracking dashboard to view and search through your entries.
5. You can log out at any time by clicking the "Logout" button.

## Features

- User authentication via local storage.
- Create and save data entries with a title and description.
- View all entries in a dedicated tracking dashboard.
- Search functionality to filter entries by author or title.
- Responsive design that adapts to various screen sizes.

## Dependencies

This project uses the following libraries:

- **Tailwind CSS**: A utility-first CSS framework for designing responsive layouts.
    - Loaded from CDN in the HTML files.
    
- **Font Awesome**: A toolkit for icons and social logos.
    - Loaded from CDN in the HTML files.

No additional Node.js dependencies were found in a `package.json` file.

## Project Structure

The project is organized as follows:

```
/data-entry-tracker
├── index.html         # Login page for the application
├── dashboard.html     # Main dashboard for users to submit new entries
├── track.html         # Tracking page to view all entries
├── app.js             # JavaScript file containing authentication and data handling logic
├── styles.css         # Custom styles for the application
```

### File Descriptions

- **index.html**: The landing page, allowing users to log in.
- **dashboard.html**: Contains the form for submitting new data entries, including a logout option.
- **track.html**: Displays all saved entries with search functionality.
- **app.js**: Handles user authentication, data entry functions, and local storage operations.
- **styles.css**: Custom styles, including responsive designs and animations for the application.

## License

This project is licensed under the MIT License. Feel free to use and modify as needed.
```