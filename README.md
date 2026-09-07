# Chrome Extension 

A modern and lightweight Chrome Extension built using **React** and **Vite**. This project provides a foundation for building powerful browser extensions with a fast and responsive user interface.

## 📌 About the Project

This project is a Chrome browser extension developed with React and Vite. It demonstrates how modern web technologies can be used to create browser extensions with a clean UI, reusable components, and a fast development workflow.

The project is designed to be easily extended with additional features and Chrome Extension APIs.

## Demo 
https://drive.google.com/file/d/17L-sT7ZTvZScQtHQyJLzOhvXDHqmBPRa/view
##  Features

*  Built with React and Vite
*  Fast development using Vite
*  Modern and responsive user interface
*  Chrome Extension architecture
*  Easy to install and run locally
*  Easy to customize and extend
*  ESLint configuration for cleaner code
*  Hot Module Replacement (HMR) during development

##  Technologies Used

* **React** – Frontend UI library
* **Vite** – Frontend build tool
* **JavaScript** – Programming language
* **HTML5** – Structure
* **CSS3** – Styling
* **Chrome Extension APIs** – Browser extension functionality
* **ESLint** – Code quality and linting

## Project Structure

```text
Chrome-Extension/
│
├── public/          # Public/static assets
├── server/          # Server-side related files
├── src/             # React source code
│
├── index.html       # Main HTML file
├── package.json     # Project dependencies and scripts
├── vite.config.js   # Vite configuration
├── eslint.config.js # ESLint configuration
└── README.md        # Project documentation
```

##  Getting Started

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* npm
* Google Chrome

### 1. Clone the Repository

```bash
git clone https://github.com/SAfroz12/Chrome-Extension.git
```

### 2. Navigate to the Project

```bash
cd Chrome-Extension
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Vite will start the development environment and provide a local URL in the terminal.

##  Loading the Extension in Chrome

To load the extension into Chrome:

1. Build the project:

```bash
npm run build
```

2. Open Chrome and navigate to:

```text
chrome://extensions/
```

3. Enable **Developer mode**.

4. Click **Load unpacked**.

5. Select the generated build/output directory.

6. The extension should now appear in your Chrome extensions list.

> **Note:** Depending on the extension configuration, the Vite build output may need to be configured specifically for Chrome Extension/Manifest V3 usage.

##  Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Preview

```bash
npm run preview
```

Runs a local preview of the production build.

### Lint

```bash
npm run lint
```

Checks the project for ESLint issues.

##  Future Improvements

Some possible improvements for this project include:

* Add additional Chrome Extension APIs
* Improve the extension UI/UX
* Add Chrome Extension Manifest V3 configuration
* Add persistent storage using Chrome Storage API
* Add background service worker functionality
* Add automated testing
* Publish the extension to the Chrome Web Store
* Add screenshots and demo videos

##  Contributing

Contributions are welcome!

If you would like to contribute:

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature/your-feature
```

3. Make your changes.
4. Commit your changes.

```bash
git commit -m "Add new feature"
```

5. Push the branch.

```bash
git push origin feature/your-feature
```

6. Open a Pull Request.

##  License

This project is open source. Please check the repository for the applicable license information.

## Author

**Afroz Shaik**

GitHub: https://github.com/SAfroz12


**Repository:** https://github.com/SAfroz12/Chrome-Extension
