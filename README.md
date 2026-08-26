# KinesiTherapyStudio

## Introduction

Welcome to KinesiTherapyStudio — a modern web platform created for a kinesitherapy and rehabilitation studio.

The website is designed to provide visitors with an informative, interactive, and easy-to-use experience. Users can explore the studio and its specialists, browse available therapies and massage services, learn how the rehabilitation process works, read patient testimonials, contact the studio, and request an appointment.

The project also includes several interactive and more advanced features, such as an interactive 3D anatomical model created with Three.js and a browser-based posture analysis system using MediaPipe and the device camera.

The application follows a full-stack architecture with an Express.js backend, MongoDB database, client-side routing, dynamically rendered frontend components, and integrations with external services such as EmailJS and Google Maps.

## Tech Stack

KinesiTherapyStudio is built using a JavaScript-based full-stack architecture. Here's an overview of the main technologies and libraries used:

### Core Technologies

- **HTML5**: Provides the structure and semantic markup of the website.
- **CSS3**: Used for layouts, responsive design, animations, forms, navigation, and page-specific styling.
- **JavaScript (ES Modules)**: Main programming language used throughout the frontend and backend.
- **Node.js**: JavaScript runtime environment used to run the backend server.
- **Express.js**: Backend framework used for serving the application, static files, and API endpoints.

### Frontend Architecture

- **lit-html**: Used for creating reusable HTML templates and dynamically rendering content.
- **Page.js**: Client-side routing library used to navigate between the different pages without full page reloads.
- **Fetch API**: Used to communicate with the backend API and retrieve dynamic services and testimonials.

### Database & Backend

- **MongoDB**: NoSQL database used to store dynamic application data.
- **Mongoose**: MongoDB object modeling library used for schemas and database operations.
- **Express Router**: Used to organize and handle the backend API routes.
- **REST API**: Provides communication between the frontend and backend for services and testimonials.

### 3D Visualization

- **Three.js**: JavaScript 3D library used to create the interactive anatomical model.
- **GLTFLoader**: Used to load the `.glb` 3D anatomical model into the Three.js scene.
- **OrbitControls**: Allows users to rotate and inspect the 3D anatomical model.
- **WebGLRenderer**: Used to render the 3D scene directly in the browser.

### Computer Vision & Posture Analysis

- **MediaPipe Tasks Vision**: Used for real-time human pose detection through the device camera.
- **PoseLandmarker**: Detects human body landmarks from the camera feed.
- **Custom Posture Analysis**: Uses detected shoulder and hip landmarks to calculate the user's posture angle and determine whether the detected posture is acceptable.
- **Browser Camera API**: Provides the live video stream used by the posture analysis feature.

### External Services

- **EmailJS**: Used for sending contact and appointment requests and automatically replying to clients.
- **Google Maps**: Embedded into the contact page to display the studio's location.

This technology stack provides a lightweight foundation while still allowing the application to include database functionality, dynamic content, client-side routing, 3D visualization, computer vision, and external service integrations.

## Features

### Studio Website

- **Home Page:** Provides an introduction to the studio and links to the main sections of the website.
- **About Us:** Introduces the specialists working at the studio and provides information about their professional experience.
- **How We Work:** Explains the rehabilitation process and the different stages involved in working with a client.
- **Contact Page:** Provides the studio's contact information, working hours, location, and an appointment/contact form.

### Services

- **Dynamic Services:** Services are loaded from MongoDB through the backend API instead of being hard-coded into the frontend.
- **Service Information:** Visitors can view available therapies, massage types, descriptions, prices, and images.
- **Book an Appointment:** Each service can be selected when requesting an appointment.
- **Dynamic Appointment Selection:** When a visitor chooses a service, the contact form can automatically select that service.

### Contact & Appointment System

- **Contact Form:** Visitors can submit their name, phone number, email, preferred service, preferred date, and message.
- **Email Notifications:** Submitted forms are sent through EmailJS.
- **Automatic Client Reply:** After the request is successfully sent, an automatic reply can be sent back to the client.
- **Form Validation:** Required fields are used to ensure that the necessary information is provided before submission.
- **Google Maps Integration:** The studio's location is displayed using an embedded Google Maps component.

### Testimonials

- **Dynamic Testimonials:** Patient testimonials are retrieved from MongoDB through the backend API.
- **Filtering:** Testimonials can be filtered according to the type of massage/service.
- **Search Functionality:** Users can search through testimonials using the search field.
- **Suggestions:** The search system provides suggestions while the user is typing.
- **Keyboard Navigation:** The testimonial search supports keyboard controls such as Arrow Up, Arrow Down, Enter, and Escape.
- **Dynamic Results:** The testimonials section updates according to the selected search/filter criteria.

### Interactive 3D Anatomy

- **3D Anatomical Model:** The About Us page contains an interactive 3D human anatomy model.
- **Model Rotation:** Users can rotate the model to inspect it from different angles.
- **Interactive Camera:** OrbitControls allows users to move around the 3D scene.
- **Automatic Model Scaling:** The application calculates the model's dimensions and automatically scales it to fit the available scene.
- **Responsive Rendering:** The Three.js renderer updates its dimensions when the browser window is resized.
- **GLB Model Loading:** The anatomical model is loaded dynamically using GLTFLoader.

### Posture Analysis

- **Live Camera Analysis:** Users can use their device camera for real-time posture analysis.
- **Human Pose Detection:** MediaPipe Pose Landmarker detects the user's body landmarks.
- **Landmark-Based Analysis:** The application uses detected shoulder and hip landmarks to calculate body alignment.
- **Posture Angle Calculation:** The application calculates an angle based on the detected body landmarks.
- **Real-Time Processing:** Pose detection runs continuously while the camera is active.
- **Posture Feedback:** The application provides feedback based on the detected posture.
- **Posture Modal:** The result is displayed through a dedicated posture feedback component.
- **Single-Person Detection:** The Pose Landmarker is configured to analyze one person at a time.

### Navigation & User Experience

- **Client-Side Routing:** Page.js handles navigation between the different sections of the application.
- **Dynamic Rendering:** lit-html renders the individual pages and components dynamically.
- **Reusable Components:** The application separates different pages and functionality into individual JavaScript modules.
- **Responsive Design:** Individual CSS files provide layouts and styling for different sections of the website.
- **Interactive UI:** Forms, search fields, suggestions, 3D elements, and posture detection provide an interactive user experience.

## Prerequisites

Before you begin, ensure that you have met the following requirements:

- You have installed the latest version of [Node.js](https://nodejs.org/)
- You have installed npm, which is included with Node.js.
- You have MongoDB installed and running locally.
- You have a modern web browser such as Google Chrome.
- A camera is required if you want to use the posture analysis feature.

The application currently uses a local MongoDB database:

text - mongodb://localhost:27017/KinesiTherapy

## Installation

To install the project, follow these steps:

1. Clone the repository: git clone https://github.com/MaximNikolaevv/KinesiTherapyStudio.git
2. Navigate to the project directory: cd KinesiTherapyStudio
3. Install the required dependencies: npm install
4. Make sure that MongoDB is running locally.

5. If necessary, populate the database using the provided seed scripts.

## Running the Application

To run the application, use the development script provided in `package.json`.

1. Navigate to the project directory: cd KinesiTherapyStudio
2. Install the dependencies: npm install
3. Start the application: npm run dev
4. Open your browser and visit: http://localhost:3000

The Express.js server serves the frontend application, static files, images, and 3D models while also providing the backend API.

## Usage

1. **Exploring the Website:** Start from the Home page to learn about KinesiTherapyStudio and access the different sections of the website.

2. **About the Specialists:** Navigate to the "За нас" section to learn more about the therapists and their professional experience.

3. **Exploring the 3D Anatomy Model:** Open the About Us page and interact with the 3D anatomical model. You can rotate the model and inspect the human body from different angles.

4. **Browsing Services:** Open the "Услуги" section to view the available therapies and massage services together with their descriptions and prices.

5. **Booking an Appointment:** Select a service and use the appointment/contact functionality. The selected service can be automatically passed to the contact form.

6. **Sending a Contact Request:** Fill in your name, phone number, email address, preferred service, preferred date, and message. Submit the form to send the request through EmailJS.

7. **Reading Testimonials:** Open the "Отзиви" section to view testimonials from clients.

8. **Searching Testimonials:** Use the testimonial search field to find feedback related to a particular massage type. Suggestions are displayed while searching.

9. **Using Keyboard Navigation:** Navigate through testimonial suggestions using the Arrow Up and Arrow Down keys, select a result with Enter, or close the suggestions with Escape.

10. **Learning How the Studio Works:** Visit the "Как работим" section to learn about the rehabilitation process and how clients are guided through their treatment.

11. **Posture Analysis:** Open the posture analysis functionality and allow the browser to access your camera. Position yourself so that your body is visible to the camera. MediaPipe will detect your body landmarks and analyze your posture.

12. **Finding the Studio:** Open the Contact page to view the studio's phone numbers, email address, working hours, and location on Google Maps.

## API

The backend provides REST API endpoints used by the frontend.

### Services

Returns the services stored in the MongoDB database.

- **The Services page**
- **The Contact/Appointment form**
- **The dynamic service selection functionality**

### Testimonials

Returns testimonials stored in the database.

The Feedbacks page uses this functionality to retrieve and display relevant testimonials dynamically.

## Application Architecture

The application follows a separation between the frontend and backend responsibilities.

### Frontend

The frontend is responsible for:

- Rendering the user interface.
- Client-side routing.
- Displaying services and testimonials.
- Handling forms and user interactions.
- Rendering the 3D anatomy model.
- Running the posture detection system.
- Communicating with the backend API.


lit-html is then used to render the corresponding page templates.

### Backend

The Express.js backend is responsible for:

- Starting the web server.
- Serving static frontend resources.
- Connecting to MongoDB.
- Providing API endpoints.
- Retrieving services from the database.
- Retrieving and filtering testimonials.

### Database

MongoDB is used to persist dynamic content.

The project contains separate modules for:

- Services
- Testimonials

Seed scripts are also included for populating the database with initial data.

## Disclaimer

- **Posture Analysis:** The posture analysis feature is intended for demonstration and informational purposes only. It is not a medical diagnostic tool and should not be used as a replacement for professional medical or kinesitherapy assessment.

- **Camera Access:** The posture analysis functionality requires permission to access the device camera.

- **Posture Accuracy:** The accuracy of the posture analysis depends on camera position, lighting, body visibility, and the quality of pose landmark detection.

- **MongoDB:** The dynamic Services and Testimonials functionality requires a running MongoDB instance with the expected database configuration.

- **EmailJS:** The contact and appointment functionality depends on the configured EmailJS service and templates.

- **External Services:** Some functionality depends on external services such as EmailJS, Google Maps, CDN-hosted Three.js resources, and MediaPipe resources.

- **Local Development:** The project is currently configured primarily for local development and uses a local MongoDB database.

- **Medical Disclaimer:** Information presented on the website is not intended to diagnose, treat, or prevent any medical condition. Visitors should consult a qualified healthcare professional for medical advice.
