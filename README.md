## Pro Manage - Project Management Tool (React, Redux, Firebase)
This single page application was developed as a learning project. 

Pro Manage is a project management tool that provides users with an easy way to track, manage and collaborate on projects from a centralized dashboard. 

## Motivation
The motivation for development of this application was to learn new technologies. Having recognized skills that were relevant to today's market, I wanted to develop hands on experience with Redux and Firebase/Firestore.

### Key Challenges:
I encountered and overcame the following key challenges when developing this application.
1. Asynchronously updating central store state and Firestore collections
2. Utilizing React Hooks and Context to connect components and store data within Firebase/Firestore
3. Abstracting action creators to improve code readability while ensuring the appropriate react-redux-firebase hooks were implemented
4. Adding action creators to handle multiple dispatch actions to separate reducers and Firestore collections

### Key Takeaway Lesson:
The main takeaway lesson I learned in this project was how handle asynchronously subscribing to central store state variables in components using Redux while ensuring data alignment with a Firestore database.

## Screenshots
![Homepage](homepage-screenshot.jpg)

![Create Project](create-proj-screenshot.jpg)

![Project Details](proj-details-screenshot.jpg)

## Tech/Framework Used
**Built with:**
- React
- Redux/React-Redux
- Firebase/Firestore
- React Router

## How To Run
**Within Project Folder:**
```shell
npm start
```

**Allowed Users:**

As the project will not be put into production, a user has been registered with limited functionality to allow viewing of the application:
 - email: john@gmail.com pass: john123

## Contribute
This project was developed as a learning project and will not be maintained going forward.

## Credits
Inspired by The Net Ninja - 
https://github.com/iamshaunjp/React-Redux-Firebase-App


## License
MIT © [Jimmy Figliomeni]()
