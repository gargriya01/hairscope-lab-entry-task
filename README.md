# Lab Entry System

**Author:** Riya Garg  
**Email:** riya.garg@example.com

---

## Tech Stack Used

- **Frontend:** HTML, CSS, Vanilla JavaScript  
- **Animations:** CSS transitions & keyframes  
- **Fonts:** Google Fonts (`Roboto`)  
- **No backend** (front-end only; session state managed with `sessionStorage`)

---

## Features

- Password-protected login (hardcoded password: `1234`)  
- Circle animation on correct login  
- Sliding door unlock effect (placeholder)  
- Countdown timer for allocated lab time (10 minutes)  
- Exit button preserves remaining time  
- Automatic logout on timeout  
- Modern, colorful UI with placeholder course/lab images

---

## Folder Structure

lab-entry/
│
├─ frontend/
│ ├─ index.html # Login page
│ ├─ lab.html # Lab page
│ ├─ style.css # Shared styles
│ └─ script.js # JS logic
│
├─ assets/
│ └─ placeholder images (optional)
│
└─ README.md

pgsql
Copy
Edit

---

## Steps to Run the Project Locally

1. Clone or download this repository.  
2. Navigate to the `frontend/` folder.  
3. Open `index.html` in any modern browser.  
   - **Optional:** Use Live Server in VS Code for automatic reloads.  
4. Enter the password **`1234`** to access the lab page.  
5. Observe the circle animation → lab page with countdown timer.  
6. Use the **Exit** button to return to the login screen; remaining time is preserved.  
7. When the timer reaches 0, the user is automatically logged out and cannot log back in.

> **Note:** Since this is a front-end only project, there is no `npm install` or backend server required.

---

## Assumptions Made

- Only **one user** is required (hardcoded password: `1234`).  
- Countdown timer starts at **10 minutes** and is preserved on exit.  
- Session management is done using `sessionStorage` (no database).  
- Placeholder images are used for course/lab visuals. You can replace them in the `assets/` folder.  
- No backend or persistent login implemented; refreshing the page does not reset session if within the countdown.

---

## Screenshots / GIFs (Optional)

- **Login Screen**  
  ![Login Screen](assets/login-placeholder.png)  

- **Lab Screen with Countdown Timer**  
  ![Lab Screen](assets/lab-placeholder.png)  

- **Circle Animation on Correct Password**  
  *(GIF can be added here if available)*

---

## Future Enhancements

- Add **backend with Node.js/Express** for multiple users.  
- Store user sessions in a database for persistent login.  
- Replace placeholder images with real course/lab images.  
- Improve animations with realistic sliding door effect.  
