# Nursery Management React App

A simple and intuitive React application for nursery owners to manage
plants and fertilizers, track watering and fertilizing schedules, and
get helpful notifications.

## Features

-   View all plants with images, care instructions, next watering
    schedule, and category.
-   View all fertilizers with images, care instructions, next
    fertilizing schedule, and category.
-   Mark plants as watered and fertilizers as fertilized, which
    updates next scheduled date.
-   Persistent data stored in `localStorage`.
-   Notifications shown in a right-side drawer with blinking alert on
    new reminders.
-   Plant and Fertilizer lists displayed in a responsive two-column
    flexbox layout.
-   Clean UI built with **React Bootstrap** and **React Icons**.
-   Category displayed as a stylish chip over images with smooth
    animation.

##  Technologies Used

-   React 18
-   React Bootstrap
-   React Icons
-   animate.css (for animations)
-   localStorage (for data persistence)
-   Vite (for development tooling)

## 🚀 Installation

1.  Clone the repository

    ``` bash
    git clone ---
    cd nursery-management-app
    ```

2.  Install dependencies

    ``` bash
    npm install
    ```

3.  Start the development server

    ``` bash
    npm run dev
    ```

## 🧱 Project Structure

    src/
    ├── components/
    │   ├── Dashboard.jsx
    │   ├── PlantList.jsx
    │   ├── FertilizerList.jsx
    │   └── NotificationDrawer.jsx
    ├── context/
    │   └── NurseryContext.jsx
    ├── assets/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    └── styles/

## 🎯 Usage

-   🌿 Navigate between **Plants** and **Fertilizers** tabs.
-   📋 See next watering/fertilizing dates.
-   ✔️ Mark as Watered/Fertilized after action.
-   🔔 View notifications in the right drawer.

## 🌐 CDN Images

Images are loaded from a hosted CDN (replace with your actual URLs).

## 🎨 Customization

-   Modify `NurseryContext.jsx` to add new plants or fertilizers.
-   Adjust chip styling in `PlantList.css` for different designs.
-   Extend notifications with sound alerts or timestamps.


