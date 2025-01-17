# Happy New Year Project

Welcome to the Happy New Year Project! This is a special message from me to you, the visitors, celebrating the joy of the New Year. Here, you have the ability to share your favorite songs and send me a message directly.

## Features

- 🎄 Tree Lights: The page comes with festive lights to brighten up your New Year celebrations (just like tree lights)!

- 🎵 Song Sharing: Visitors can add their favorite songs to celebrate the New Year together.

- ✉️ Messaging: Users can send direct messages to share their wishes, feedback, or thoughts.


## Prerequisites

- **Node.js**: Ensure you have Node.js version 22.12.0 installed. You can download it from the [official Node.js website](https://nodejs.org/).
- **Git**: Ensure Git is installed on your system. If you don't have it, download it from the [official Git website](https://git-scm.com/).

## Installation Steps

### Step 1: Clone the Repository

Clone the project repository to your local machine using the following command:

```bash
git clone <repository-url>
```

Replace `<repository-url>` with the actual URL of the repository.

### Step 2: Navigate to the Project Directory

Change into the project's root directory:

```bash
cd <project-folder>
```

Replace `<project-folder>` with the name of the cloned folder.

### Step 3: Install Dependencies

Install all required dependencies by running:

```bash
npm install
```

This will install all the packages listed in the `package.json` file.

### Step 4: Set Up Environment Variables

Create a `.env` file in the root directory of the project with the following content:

```txt
API_USERNAME=your_api_username
API_KEY=your_api_key
```

Replace `your_api_username` and `your_api_key` with appropriate values.

### Step 5: Start the Development Server

Run the following command to start the development server:

```bash
npm run dev
```

This will start the server, and you can access the application at `http://localhost:5173` by default.

## Notes

- Keep the `.env` file secure and avoid committing it to version control.
- If you modify the `.env` file, restart the development server to apply the changes.
