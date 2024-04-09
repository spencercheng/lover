# BentoBox

## Description deliverable

### Elevator pitch

Presenting BentoBox: Your convenient solution for spreading love and joy effortlessly. Craft personalized surprises for your loved ones with ease, ensuring no moment goes uncelebrated. With each delivery, hearts dance with anticipation, creating memorable experiences that last a lifetime. BentoBox keeps the magic alive, allowing you to cherish every spontaneous act of affection. Say goodbye to missed opportunities and hello to endless expressions of love with BentoBox.

### Design

BentoBox home page.

BentoBox login page.

Sequence diagram demonstrating interaction with BentoBox.

![Screenshot of the BentoBox login page](https://github.com/spencercheng/lover/blob/main/bentoBoxLoginPage.png) 
![Screenshot of the BentoBox home page](https://github.com/spencercheng/lover/blob/main/bentoBoxHomePage.png)
![Image of sequence diagram](https://github.com/spencercheng/lover/blob/main/bentoBoxSequenceDiagram.png)

### Key features
- Secure login over HTTPS
- Ability to send message
- Ability to read messages
- Ability to view message history
- messages are presistently stored

### Technologies

I will utilize the required technologies in the following manner.

- HTML - Employ 5 HTML pages: login, home, send, open, and story.
- CSS - Style the application for short animations indicating messages in the inbox, dynamic sizing, good whitespace utilization, and clean color and design.
- JavaScript - Implement the login function, add animations to sending and receiving mail, and backend endpoint calls.
- Service - Backend service with endpoints for;
    - login
    - sending messages
    - receiving messages
    - receiving message history
- DB - Store users, messages, and message chains in the database.
- Login - Register and log in users with credentials securely stored in the database. Users cannot send messages unless authenticated.
- WebSocket - Implement WebSocket functionality to broadcast messages to users in real-time.
- React - Port the application to use the React web framework.

 ## HTML deliverable

For this deliverable I will build the basic structure using HTML.

- HTML pages - Five HTML pages to represent the login, home, send, open, and story pages.
- Links - The login page will link to the home page. From the home page, there will be links to the send, open, and story pages. There will  be three links back to the home page.
- Text - Each message and link to other pages will be text-based.
- Images - Placeholder images on the home, open, and send pages for SVG images to be replaced later.
- Login - Input elements on the login page for users to create a username and password and submit them.
- Database - Displaying love stories represents messages stored and pulled from the database.
- WebSocket - Notifications on the home page represent real-time incoming messages from users.

## CSS deliverable

For this deliverable I properly styled the application into its final appearance.

- Header, footer, and main content body - Structure elements added.
- Navigation elements - Styled navigation buttons with changes in decoration, color, and shape.
- Responsive to window resizing - Media queries added to adjust to different screen sizes.
- Application elements - Aesthetic enhancements made for a visually pleasing interface.
- Application text content - Consistent font usage.
- Application images - Static PNG images replaced with richer SVGs.

## JavaScript deliverable

For this deliverable I implemented by JavaScript so that the application works for a single user. I also added placeholders for future technology.

- Login - JavaScript function to capture login input, store it in local memory, and redirect to the home page.
- Database - JavaScript function to store login input in local memory and redirect to the home page.
- WebSocket - Script to monitor notifications on the home page and display a notification alerting the user of no notifications, to be replaced with WebSocket functionality later.
- Application logic - Implementation of intended logic.

## Service deliverable

For this deliverable I added backend endpoints that send and log messages.

- Node.js/Express HTTP service - Implemented.
- Static middleware for frontend - Applied.
- Calls to third-party endpoints - Pending implementation.
- Backend service endpoints - Implemented /api/messages for getting and receiving messages.
- Frontend calls service endpoints - Utilized the fetch function on the story page and the send page.

## Database deliverable

For this deliverable I stored the votes in the database.

- MongoDB Atlas database created - Completed.
- Endpoints for data - Backend endpoints log bentobox messages in the MongoDB database.
- Stores data in MongoDB - Completed.

## Login deliverable

For this deliverable I set up user authentication.

- User registration - Creates a new account in the database.
- existing users can login.
- Use MongoDB to store credentials - User and hashed passwords stored securely.
- Functionality restriction - APIs require authenticated users.

## WebSocket deliverable

For this deliverable I used webSocket to send sushi to connected users in realtime.

- Backend listens for WebSocket connection - Completed!
- Frontend makes WebSocket connection - Completed!
- Data sent over WebSocket connection - Completed!
- WebSocket data displayed - All connected users receive sushi displayed on the interface.
