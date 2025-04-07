// Authentication and Data Handling
const currentUserKey = 'dataTrackerCurrentUser';
const entriesKey = 'dataTrackerEntries';

// Check if user is logged in
function checkAuth() {
    const user = localStorage.getItem(currentUserKey);
    if (!user && !window.location.pathname.endsWith('index.html')) {
        window.location.href = 'index.html';
    }
    return user;
}

// Login function
function login(username) {
    if (!username || username.trim() === '') return false;
    localStorage.setItem(currentUserKey, username.trim());
    return true;
}

// Logout function
function logout() {
    localStorage.removeItem(currentUserKey);
}

// Data Entry Functions
function saveEntry(entry) {
    const entries = getEntries();
    entry.id = Date.now();
    entry.author = localStorage.getItem(currentUserKey);
    entry.timestamp = new Date().toISOString();
    entries.push(entry);
    localStorage.setItem(entriesKey, JSON.stringify(entries));
    return entry;
}

function getEntries(filter = '') {
    const entries = JSON.parse(localStorage.getItem(entriesKey) || '[]');
    if (filter) {
        return entries.filter(entry => 
            entry.author.toLowerCase().includes(filter.toLowerCase()) ||
            entry.title.toLowerCase().includes(filter.toLowerCase())
        );
    }
    return entries;
}

// Initialize login form
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            if (login(username)) {
                window.location.href = 'dashboard.html';
            } else {
                alert('Please enter a valid username');
            }
        });
    }
    
    checkAuth();
});