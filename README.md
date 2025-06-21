# 🧠 AppEasy Mini Job Tracker

This is a full-stack web application built for the AppEasy Software Engineer Intern technical assessment. It allows users to track their job applications, including adding, viewing, editing, and deleting entries. It also includes an AI-powered job description analyzer.

## ✨ Features

### Frontend
* **Job Application Form:** Add new job applications with fields for Job Title, Company Name, Application Link, and Status (Applied, Interviewing, Rejected, Offer).
* **Dashboard Table:** Displays a list of all added job applications.
* **Edit Functionality:** Update existing job entries.
* **Delete Functionality:** Remove job entries.

### Backend (Next.js API Routes)
* **In-Memory Storage:** Job applications are stored in a simple in-memory array on the server (data resets on server restart).
* **RESTful Endpoints:**
    * `GET /api/jobs`: Retrieve all job applications.
    * `POST /api/jobs`: Add a new job application.
    * `PUT /api/jobs/:id`: Update an existing job application.
    * `DELETE /api/jobs/:id`: Delete a job application.

### 🤖 AI Bonus Feature (OpenAI Integration)
* **Job Description Analyzer:** Paste a job description and click "Analyze".
* Uses **OpenAI's GPT-3.5 Turbo** to:
    * Return a concise summary of the job.
    * Suggest 3 key skills to highlight in a resume for that job.

## ⚙️ Technologies Used

* **Frontend:** Next.js (Pages Router), React, TypeScript
* **Backend:** Next.js API Routes, Node.js
* **Data Storage:** In-memory array (for simplicity, as per assessment requirements)
* **Unique IDs:** `uuid` library
* **AI:** OpenAI API (`gpt-3.5-turbo`)

## 🚀 How to Run the App

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Chiefengr/Job-Tracker-App.git](https://github.com/Chiefengr/Job-Tracker-App.git) # Use your actual repo URL
    cd Job-Tracker-App # Or mini-job-tracker, depending on your folder name
    ```

2.  **Install dependencies:**
    ```bash
    npm install # or yarn install
    ```

3.  **Configure OpenAI API Key (for AI Bonus Feature):**
    * Obtain an API key from [platform.openai.com](https://platform.openai.com/account/api-keys).
    * Create a file named `.env.local` in the root of the project.
    * Add your API key to this file:
        ```
        OPENAI_API_KEY=your_openai_api_key_here
        ```
        *(If you do not have an API key, the AI feature will use a mocked response, but the integration structure is in place.)*

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  **Open your browser:**
    The application will be running at `http://localhost:3000`.

## 🧠 Transparency on AI Assistance

This project utilized AI tools (specifically ChatGPT) for:
* Generating initial boilerplate code for Next.js API routes.
* Assistance with structuring React components and state management.
* Refining prompts for the OpenAI API integration to achieve desired output format.
* Suggesting basic inline styling for a quick and functional UI.

All core logic and integration were implemented and verified by me.
