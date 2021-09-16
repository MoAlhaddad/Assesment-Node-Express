Conceptual Exercise
Answer the following questions below:

What are some ways of managing asynchronous code in JavaScript? By using AJAX, jQuery's AJAX, or Axios
What is a Promise? It is an object that guarantees a future value while making an asynchronous call; a promise can be pending, resolved, or rejected.
What are the differences between an async function and a regular function? An asynchronous function relies on a server to return a value. This means it will likely return a value slower than the execution of the program would otherwise run.
What is the difference between Node.js and Express.js? Node is the platform that the express library is built on. They are both for using JavaScript to create a server.
What is the error-first callback pattern? A callback function pattern that tries to find an error before moving onto executing the code.
What is middleware? Middleware is a function or module that runs before processes in routes are completed.
What does the next function do? Next looks for the next matching route for a request.
What does RETURNING do in SQL? When would you use it? For ending execution of a query or procedure; it helps when a condition is met at the remaining query does not need to be executed.
What are some issues with the following code? (consider all aspects: performance, structure, naming, etc) This will run in sequence, waiting for each ajax request to return from the server. Running the requests in parallel and await'ing after all those requests have returned a response would help to optimize this.
async function getUsers() {

  const mohamad = await $.getJSON('https://api.github.com/users/MoAlhaddad');

  return [Mohamad];
}