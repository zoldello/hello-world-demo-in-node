# Hello, world App

This app is a demo of running a service in node and consuming that service in a console application.


## Running the Application

### Get Dependencies
Get dependencies using npm:
```
npm install
```

### Running the service
To run the service, run:
```
npm start
```


### Running Application
To run the console, run-
```
node console-app -w
```

To see the options/run help, run:
```
node console-app -h
```


## Run Test
Run the unit test by running this command:
```
jasmine
```


## Architecture
Here is the main parts of the application:
- ./server.js: Runs the service

- ./console-app.js: Run the application

- ./routes/message.js: Handles request

- ./data/message.js: Service for getting data

- spec- Folder containing unit test


## Notes
- Node's process.env is used for storing configuration. It reads for the machines's environmental variables
