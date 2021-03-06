# Hello, world App

This app is a demo of running a service in node and consuming that service in a console application.

## Get Dependencies
You need to fetch dependencies after downloading the application. Here is the command:

Get dependencies using npm:
```
npm install
```


## Running the Application
You need to have the service running in order for this application to work. After that is done, you can run the console app. The console app will fail if the service is not running.



### Running the service
Open up a new terminal for this. To run the service, run:

```
npm start
```
Keep this running.

### Running Console Application
Open a new terminal for this. To run the console, run-

```
node console-app -w
```

To see the options/run help, run:
```
node console-app -h
```


## Run Test
Run the unit test and integration test by running this command:
```
jasmine
```


## Viewing JSON on a browser
Go to this url to view the JSON data

```
http://localhost:3000/api/message/welcome
```

## Architecture
Here is the main parts of the application:
- ./server.js: Runs the service

- ./console-app.js: Run the application

- ./routes/message.js: Handles request

- ./data/message.js: Service for getting data

- spec- Folder containing unit test and integration test. The file name of unit test follow this format: *.unit-test.spec.js. The file name of integration test follows this: *.integration-test.spec.js


## Notes
- Node's process.env is used for storing configuration. It reads for the machines's environmental variables

- The integration test will fail if the server is not running.

- Dynamic languages do not need overhead like interfaces and other command to static languages. Any non-supported property, event or others is set to undefined. So, interface and other common tools used in C# or Typescript are not used here.
