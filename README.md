---

# Project Guide Selector

The **Project Guide Selector** is a system designed to streamline the process of assigning project guides to students based on their preferences and the guide's area of expertise. This system aims to ensure an optimal match between students and guides, making the project work smoother and more productive.

## Problem Statement

In educational institutions, students often need to choose a guide for their projects. However, manually assigning guides can be inefficient and prone to mismatches where students' preferences and guides' expertise may not align. This project solves that problem by automating the guide selection process, considering both the student's preference and the guide's availability or specialization.

## Features

- **Student Preferences**: Students can submit their preferences for project guides.
- **Guide Expertise**: Guides can specify their areas of expertise to be matched with relevant student projects.
- **Automated Matching**: The system intelligently assigns guides to students based on their preferences and the guide's expertise.
- **Guide Availability**: Ensures that no guide is overloaded with too many students by distributing assignments evenly.
- **Admin Dashboard**: Admins can manage guide information, project topics, and oversee the selection process.

## Technology Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Other Tools**: 
  - Form submission for student preferences
  - Matching algorithm for student-guide allocation

## How It Works

1. **Student Input**: 
   - Students log in to the system and submit their project preferences along with preferred guides.
   - They can view a list of available guides along with their areas of expertise.

2. **Guide Input**:
   - Guides log in to update their profiles, specifying their expertise and availability.

3. **Matching Algorithm**:
   - The system processes student preferences and guides' expertise to find the best possible match.
   - A fair distribution is maintained to ensure that guides are not over-assigned.

4. **Final Assignment**:
   - Once the matching process is complete, students are notified about their assigned guides, and guides receive the list of students they are assigned to.

## Installation & Setup

To run the Project Guide Selector locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/project-guide-selector.git
   cd project-guide-selector
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the environment variables by creating a `.env` file:
   ```bash
   MONGO_URI=<your-mongodb-connection-string>
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to access the application.

## Future Enhancements

- **More Detailed Matching**: Incorporating factors like student GPA, past project history, and guide feedback.
- **Improved User Interface**: Enhancing the frontend to make the system more user-friendly.
- **Notifications**: Automated email notifications for students and guides once assignments are complete.
- **Guide Feedback**: Allowing guides to provide feedback on student projects.

---
