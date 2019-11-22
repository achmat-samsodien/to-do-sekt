# Todo list exercise

### Install

- Install https://nodejs.org/en/
- Download archive from link provided
- Unzip file and cd into it
- run `npm install`

### Run
`node app.js`

Visit http://localhost:8080 in your browser

### High level application requirements
1. Multiple users should be able to view the shared public todo list
2. Should be able to add items
3. Should be able to delete items
4. Should be able to edit items (Missing feature)
5. Must be able to deploy in docker (Missing feature)

### Tasks
1. Add missing requirement #4 to the application
2. Add sufficient test coverage to the application and update readme on howto run the tests
3. Add missing requirement #5 to the application (Dockerfile and update readme with instructions)

### Bonus
4. Display test coverage after tests are executed
5. Find and fix the XSS vulnerability in the application. Also make sure that it wont happen again by including a test.

> ### Notes
> - Update the code as needed and document what you have done in the readme below
> - Will be nice if you can git tag the tasks by number

### Solution
Explain what you have done here and why...

Oh boy this was tough, I don't like node that much and also very little experience with testing

1.  Added the edit function to existing array, similar to the delete function it just adds in the new value thats taken from the html code
    Click the pencil on the new task and it will spawn a new edit textbox to edit the relevant item, thanks for the loop

2. Added testing with some help, uses mocha and chai framework. Opens a connection to the server and executes the task against the relevant function.
   Script added to the overall project function, run with:

   ```npm run test```

3. Dockerfile added to containerise application:

```bash

docker build -t todo-app .

docker run -it -p 8080:8080 todo-app
```

4. Didn't get round to bonus XSS stuff

5. Attempted to create a helm chart for minikube but stuck with a current bug where tiller doesnt install to minikube correctly, not enough time to debug and fix.
   Basically the exisiting tiller.yaml file references the incorrect api and the spec is incorrect.