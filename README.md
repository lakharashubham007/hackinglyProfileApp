# Hackingly Profile Page

Welcome to the second round of the full-stack developer interview for Hackingly! This project showcases a profile page for Hackingly users, designed with functionalities inspired by LinkedIn profiles.

## Task Overview

The goal was to develop a web page that functions as a profile page for developers on the Hackingly platform. The profile page includes the following features:

- **User Information**:
  - Name
  - Profile picture (upload feature included)
  - Banner image (upload feature included)
  - Email address (display only)
  
- **Social Links**:
  - Links to GitHub and LinkedIn profiles (with optional support for other social media platforms)
  
- **Experience**:
  - List work experience (company, designation, duration)
  - Showcase projects (brief description, links if applicable)
  
- **Achievements**:
  - Display hackathons participated in (name, year, achievements)
  - Showcase certifications earned (name, issuing authority)
  
- **Ranking**:
  - Implemented a basic ranking system (e.g., points based on contributions, hackathon wins)

## Technical Specifications

- **Frontend**: Built with React.js
- **Backend**: Mock API used for demonstration
- **Styling**: CSS modules for component-level styling
- **Features**:
  - Responsive design for various screen sizes
  - User experience and design principles applied for a clean UI

## Getting Started

To get started with this project, follow these instructions:

### Prerequisites

- Node.js and npm installed

### Setup

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/hackingly-profile-page.git
    cd hackingly-profile-page
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Run the development server**:

    ```bash
    npm start
    ```

    Open [http://localhost:3000](http://localhost:3000) to view the application in your browser. The page will reload when you make changes.

### Scripts

- **Start Development Server**:

    ```bash
    npm start
    ```

- **Run Tests**:

    ```bash
    npm test
    ```

- **Build for Production**:

    ```bash
    npm run build
    ```

    The build is optimized for production and minified. The files are located in the `build` folder.

- **Eject Configuration**:

    ```bash
    npm run eject
    ```

    Note: This is a one-way operation to customize build configurations.

## Features Implemented

- **Profile Information**: Users can upload a profile picture and banner image. Email is displayed but not editable.
- **Social Links**: Fields to add GitHub and LinkedIn profiles.
- **Experience Section**: Manage work experience and projects with options to add, edit, and delete.
- **Achievements Section**: Manage hackathons and certifications with options to add, edit, and delete.
- **Ranking System**: Basic ranking based on predefined criteria.

## Future Improvements

- **Search Functionality**: Implement a search feature to find users based on skills or interests.
- **Social Media Integration**: Add sharing buttons for projects and achievements.
- **Recommendations**: Include a section for endorsements from other users.

## Design Choices and Technical Approach

- **Design**: Focused on a clean, user-friendly interface with responsive design.
- **Technical Approach**: Used React.js for building components, state management with hooks, and CSS modules for styling.

## Additional Resources

- [React Documentation](https://reactjs.org/)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

