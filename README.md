# Hi, I'm Abhishek Kumar! 👋 (https://github.com/Abhirkt1996/BookMyShow/)

# Book my show..

This is a demo of real bookmyshow, where the user can book a movie with specified seats at a specified slot and get a confirmation that, wheteher booking was sucessful or not.

The movie booked by the user will be stored in database and is retrived and shown to the user.

## Installation
If you want to work on this project , clone this repo

```bash
git clone "https://github.com/Abhirkt1996/BookMyShow.git"
```
Open this project on your local IDE and in the terminal do this commands one by one

---For Frontend

 ```
cd BookMyShow-main
npm install
npm start

 ```

For backend

 ```
first step- cd book-my-show-main, second step- cd .\BookMyShow-Backend 
npm run start
(message show is connect the database mongodb)
 ```
In the backend you should connect with database server. This will start you frontend part on port - http://localhost:3000 and backend part running on port- http://localhost:8081

## Booking

--get booking
```http
  GET /api/bookings
  ```
--post booking 
Returns a list of all bookings stored in the database in JSON format.

```http
  POST /api/bookings
  ```
  
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `movie`    | `string` | **Required**. selected movie |
| `timeSlot`    | `string` | **Required**. selected time slot |
| `seats`    | `string` | **Required**. selected seats |
Returns the newly created booking in JSON format

--Request Body:
{
  "movie": "Movie Name",
  "timeSlot": "Time Slot",
  "seats": Number of seats
}


Memory updated
Your README.md looks great! It provides a clear overview of the project, installation steps, API usage, and environment variables. Here are a few suggestions to refine it further:

Introduction:

Change "where the user can book a movie with specified seats at a specified slot and get a confirmation that, wheteher booking was sucessful or not" to "where users can book movie tickets with specified seats and time slots, and receive a confirmation of their booking."
Installation:

In the backend setup, clarify that you should create a .env file for environment variables. It helps users understand the need for the .env file.
API Endpoints:

For the GET and POST routes, it’s helpful to include example requests and responses to provide more context.
Environment Variables:

Add clear instructions on how to obtain and set the API_KEY for MongoDB.
Tech Stack:

Add a section for backend technologies like Express and Mongoose.
Clarify Live and Local Setup:

Make it clear which variables are for live and local setups.
Here's a refined version of the README.md:

Hi, I'm Abhishek Kumar! 👋 GitHub Profile
BookMyShow
This is a demo of the real BookMyShow application, where users can book movie tickets with specified seats and time slots, and receive a confirmation of their booking. The booked movie details are stored in a database and can be retrieved and displayed to the user.

Installation
If you want to work on this project, clone this repo:

bash
Copy code
git clone "https://github.com/Abhirkt1996/Abhishek-BookMyShow.git"
Open this project in your local IDE and run the following commands:

For Frontend
bash
Copy code
cd BookMyShow-main
npm install
npm start
For Backend
bash
Copy code
cd BookMyShow-main
cd BookMyShow-Backend
npm install
npm start
Make sure to create a .env file in the BookMyShow-Backend directory with the required environment variables.

The frontend will be available at http://localhost:3000 and the backend will be running on http://localhost:8081.

Booking
Get Booking
http
Copy code
GET /api/bookings
Post Booking
http
Copy code
POST /api/bookings
Request Body:

json
Copy code
{
  "movie": "Movie Name",
  "timeSlot": "Time Slot",
  "seats": Number of seats
}

--Response:

For successful booking: Details of the newly created booking in JSON format
For errors: Error message

By clicking on above links , you can see the project

1. select the movie you would like to watch.
2. select timeslot .
3. select any seat type and and number of seats would you like to booked.
4. click on ```Book Now```  button. If you want to change any selected field, then do changes before booking it.
 After click on Book Now button you got succesfull booking message and your last booking details display on the screen under last booking details heading.
 
## Environment Variables
To run this project, you will need to add the following environment variables to your .env file

Note : your mongodb clustur connect key API_KEY

## For Backend
MongoDb live connection string
`MONGODBURI: mongodb+srv://<user_name>:<password>@mongodb_connection_string/database_name `

MongoDb local connection string (if you set application on localhost)
`MONGODBURI = mongodb://localhost:27017/<database_name> `

COLLECTION_NAME = <collection_name>

if application is running on localhost set node_env development or if it is on live set production NODE_ENV =  development (development || production)
APP_PORT = 8081

api routes path
GET_REQUEST = /api/booking POST_REQUEST = /api/booking

## For Frontend
`REACT_APP_API_LOCAL_PATH = http://localhost:3000`

### Tech Stack
Client: React js, Bootstrap

Server: Node, Express

## Technologies that are used.

- #### React  
    This app is fully built on top of react library.
- #### Axios / Fetch
    Used for making api calls.

##
<h4 align="center">Made with ❤️ from Abhishek </h4>
<h4 align="center">Thank You</h4>
