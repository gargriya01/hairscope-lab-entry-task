Project Structure
lab-entry/
│
├─ frontend/
│   ├─ index.html        # Login page
│   ├─ lab.html          # Lab page
│   ├─ style.css         # Shared CSS for both pages
│   └─ script.js         # JS logic
│
├─ assets/
│   └─ placeholder images (optional course/lab images)
│
└─ README.md

README.md
# Lab Entry System

This is a **password-protected lab entry system** with a countdown timer and animated login effects. It is a front-end only project (HTML, CSS, JS) that can be run in any modern web browser.

---

## Features

- Password-protected login (hardcoded password: `1234`)
- Circle animation on correct login
- Sliding door unlock effect (placeholder animation)
- Countdown timer for allocated lab time (10 minutes)
- Exit button preserves remaining time
- Automatic logout on timeout
- Modern, colorful UI with placeholder course/lab images

---

## Folder Structure



lab-entry/
│
├─ frontend/
│ ├─ index.html
│ ├─ lab.html
│ ├─ style.css
│ └─ script.js
│
├─ assets/
│ └─ placeholder images
│
└─ README.md


---

## Setup Instructions

1. **Clone or download** this repository.
2. Navigate to the `frontend/` folder.
3. Open `index.html` in your browser (double-click or use Live Server in VS Code).
4. Enter the password `1234` to access the lab page.
5. You can exit and re-enter—the remaining time will be preserved.
6. When the timer reaches 0, the user is automatically logged out.

---

## Dependencies

- None. Pure front-end project.
- Optional: [Google Fonts](https://fonts.google.com/) used in `index.html` for better typography (`Roboto`).

---

## Notes

- Placeholder images are used for the course/lab visuals. You can replace them with your own images inside the `assets/` folder and update the `src` attributes in HTML.
- To extend this project for multiple users or persistent login, a backend (Node.js/Express or similar) would be required.

How to Run Locally

Make sure you have the folder structure as above.

Open the frontend/index.html file in a browser.

Enter password: 1234

You’ll see the circle animation → navigate to lab page with countdown timer.

Use Exit to go back while preserving remaining time.

Timer expiry logs the user out automatically.

This setup is modular and ready for expansion, e.g., adding backend APIs, multiple users, or storing session info in a database.
