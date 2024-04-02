# LoveBox

## Description deliverable

### Elevator pitch

Have you ever wanted to leave a love note for that special someone but forgot or been too busy? The LoveBox application allows you to send a love note to your sweetheart at any time. When a message is sent to your companion's LoveBox the heart on the box spins, and keeps your significan other's heart spinning in anticipation. You'll be able to document your chain of love notes so they're never lost. A spontaneous gift to your love will never be missed again.

### Design

LoveBox home page.

LoveBox login page.

Sequence diagram demonstrating interaction with LoveBox.

![Screenshot of the LoveBox login page](https://github.com/mmosiahc/Startup/blob/main/LoveBoxLoginSample.png) 
![Screenshot of the LoveBox home page](https://github.com/mmosiahc/Startup/blob/main/loveBoxHome.png)
![Image of sequence diagram](https://github.com/mmosiahc/Startup/blob/main/loveBoxSequenceDiagram.png)

### Key features
- Secure login over HTTPS
- Ability to send message
- Ability to read messages
- Ability to view message history
- messages are presistently stored

### Technologies

I will use the required technologies in teh following ways.

- HTML - Use 5 HTML pages: login, home, send, open, and story.
- CSS - Application styling for short animation indicating message in inbox. Dynamic sizing, use good whitespace, and clean color and design.
- JavaScript - I will use JavaScript to perform the login function, add animations to sending and recieving mail, and backend endpoint calls.
- Service - Backen service with endpoints for;
    - login
    - sending messages
    - receiving messages
    - receiving message history
- DB - Store users, messages, and message chains in database
- Login - Register and login users. Credentials securely stored in database. Can't send messages unless authenticated.
- WebSocket - When a user gets a message it is broadcast to them
- React - Application ported to tuse the React web framework.

 ## HTML deliverable

For this deliverable I will build the basic structure using HTML.

- HTML pages - Five HTML pages to represent the login, home, send, open, and story pages
- Links - The login page will link to the home page. From the home page there will be links to the send, open, and story pages. There will be three links back to the home page
- Text - Each message and link to other pages will be text
- Images - there are images on the home, open, and send pages that are placeholders for svg images later and standard images later
- Login - The login page has imput elements for the user to create a username and password and submit them.
- Database - The love story represent messagses stored and pulled from the database
- WebSocket - The notifications on the home page represent realtime incoming messages from users

## CSS deliverable

For this deliverable I properly styled the application into its final appearance.

- Header, footer, and main content body - added these structure elements.
- Navigation elements - I styled my navigation by making them appear as buttons and changing decoration, color, and shape.
- Responsive to window resizing - I added media queries to adjust to different screeen sizes and conserve my content.
- Application elements - Did my best to make it astetically pleasing.
- Application text content - I used consistent fonts.
- Application images - Changed my static PNG images to richer SVGs.

## JavaScript deliverable

For this deliverable I implemented by JavaScript so that the application works for a single user. I also added placeholders for future technology.

- Login - I used a javascript junction to take the login input and store it in local memory and redirected to the home page.
- Database - I used a javascript junction to take the login input and store it in local memory and redirected to the home page.
- WebSocket - I used another script to watch for notifications on the home page and if none to list a notification alerting the user of no notifications. I will replace this with WebSocket functionality later.
- Application logic - Unfortunately I didn't get to create the logic I inteded to.

## Service deliverable

For this deliverable I added backend endpoints that send and log messages.

- Node.js/Express HTTP service - done!
- Static middleware for frontend - done!
- Calls to third party endpoints - I didn't have time to implement this. 😔
- Backend service endpoints - I implemented /api/messages for getting and recieving messages
- Frontend calls service endpoints - I did this using the fetch function on the story page and the send page.

## Database deliverable

For this deliverable I stored the votes in the database.

- MongoDB Atlas database created - done!
- Endpoints for data - My endpoints log my lovebox messages in my mongo database
- Stores data in MongoDB - done!

## Login deliverable

For this deliverable I set up user authentication.

- User registration - Creates a new account in the database.
- existing users can login.
- Use MongoDB to store credentials - Stores both user and their hashed passwords.
- Restricts functionality - The api's all require authenticated users.

## WebSocket deliverable

For this deliverable I used webSocket to send hearts to connected users in realtime.

- Backend listens for WebSocket connection - done!
- Frontend makes WebSocket connection - done!
- Data sent over WebSocket connection - done!
- WebSocket data displayed - All connected users sent hearts are displayed
