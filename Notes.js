/*useEffect:
useEffect is a React Hook used for handling side effects in functional components. Side effects can include things like data fetching, subscriptions, or manually changing the DOM. It allows you to perform such operations after the component has been rendered or after a state update.

useEffect can take two arguments.

The first argument: This is the function that will be executed after every render. It represents the side effect you want to perform. This function can optionally return a cleanup function.

The second argument (optional): This is an array of dependencies. If provided, useEffect will only re-run the effect if one of the dependencies has changed since the last render. If this array is omitted, the effect will run after every render. If the array is empty ([]), the effect will only run once, similar to componentDidMount in class components.

Here's an example to demonstrate the usage of the second argument:

jsx
Copy code
import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  // useEffect is called only when count changes
  useEffect(() => {
    document.title = `You clicked ${count} times`;

    // Clean-up function
    return () => {
      document.title = "React App"; // Resetting the document title
    };
  }, [count]); // Only re-run the effect if count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default ExampleComponent;
In this example, useEffect will only re-run if the count state changes. If any other state variable were to change, the effect wouldn't be re-executed. This can be useful for optimizing performance, ensuring that certain effects only happen when specific state variables change.


// if we are not adding the dependency array the the callback executes the whole logic every time the when the re-rendering is rendering


// Axios:-
Axios is a popular JavaScript library used for making HTTP requests from web browsers and Node.js environments. It provides a simple and organized API that relies on JavaScript promises to ensure asynchronous tasks. Some of the key features and benefits of Axios include its promise-based nature, ease of use, support for both browser and Node.js environments, interceptors, CSRF protection, progress tracking, etc. Axios is extensively used in web development due to its widespread adoption for its simplicity, flexibility, and robust feature set.

Axios is a popular JavaScript library used for making HTTP requests from a web browser or Node.js. It simplifies the process of sending asynchronous HTTP requests and handling responses. It provides a simple and easy-to-use API for performing tasks like fetching data from a server, submitting form data, or interacting with APIs.





// React Router:-
 Let's break down react-router-dom with a simple example:

Imagine you're building a website with multiple pages like a Home page and an About page. react-router-dom helps you manage which page to show when the user clicks on different links.

Here's how you can use it:

Install React Router Dom: First, you need to install react-router-dom in your React project. You can do this by running npm install react-router-dom in your terminal.

Set Up Routes: Next, you'll set up the routes for your pages in your main component. Let's say you have a Home component and an About component.

jsx
Copy code
// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
Here, we're using the <Router> component from react-router-dom to wrap our navigation and routes. We're also using the <Link> component to create navigation links.

Create Page Components: Now, you need to create the Home and About components. These components will be displayed when the corresponding route is matched.
jsx
Copy code
// Home.js

import React from 'react';

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to our website!</p>
    </div>
  );
}

export default Home;
jsx
Copy code
// About.js

import React from 'react';

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>Learn more about us.</p>
    </div>
  );
}

export default About;
Start Your App: Finally, you can start your React app (npm start), and you'll see navigation links for Home and About. Clicking on them will render the corresponding page.
And that's it! You've successfully set up routing in your React app using react-router-dom. It helps you create a single-page application with multiple "pages" without actually reloading the page.


Browser routers components actually enable the react router in whole app .
Means BrowserRouter will be enabled on all components where it is available.
And for writing the react router dom functionality we use the routes components.
and we also return the routes components from here.
 routes components internally takes some bunch of components.

 import { Routes,Route } from "react-router-dom";

function CustomRoutes(){
    return(
        <Routes>
        <Route path="/" element={component} />
        inside the route path we define the which one components we want to render it
        <Route />

        </Routes>

    );

}
export default CustomRoutes;



//  the below we use the anchor tag  for creating a hyperlink 

// But in reacts we didnot use the achnor tag for hyperlinks beacuse we 
that the react has a single page application and when we use the achnor tag in react then it 
refresh the page again and again so instead of using achnor tag we can use the <link>.
Beacause Link component provided by react-router-dom. The Link component allows for client-side routing within a single-page application without causing a full page reload 
function Pokemon({name,image}){
    return (
        <div className="pokemon">
        <a  href="/pokemon/2">
            <div className="pokemon-name">{name}</div>
            <div>
            <img className="pokemon-image" src={image} />
            </div>
            </a>
        </div>
    );

}
export default Pokemon;





// useParams hooks:-
useParams is a hook provided by React Router, which is a popular routing library for React applications.

Imagine you have a route like this: /pokemon/:id. Here, :id is a placeholder for the ID of a specific Pokémon. When you navigate to a route like /pokemon/25, you want to be able to access the value 25 in your component so you can fetch and display information about the Pokémon with that ID.

This is where useParams comes in handy. It allows you to extract the parameters from the current URL. In our example, if you're on the /pokemon/25 route, useParams will give you access to the value 25.

Here's a simple example:

jsx
Copy code
import { useParams } from 'react-router-dom';

function PokemonDetails() {
    // Extracting the 'id' parameter from the URL
    const { id } = useParams();

    // Now you can use the 'id' variable to fetch and display information about the Pokémon
    return (
        <div>
            <h2>Pokémon Details</h2>
            <p>You are viewing details for Pokémon with ID: {id}</p>
            // Fetch and display more information about the Pokémon using the 'id' 
            </div>
            );
        }
        In this example, useParams gives you access to the id parameter from the URL, which you can then use in your component to fetch and display details about the Pokémon with that ID.

        useParams is a React hook provided by React Router that allows you to access parameters from the current URL in your React components. It's particularly useful for extracting dynamic segments from the URL, such as IDs or usernames, and using them in your components to fetch data or customize the UI based on the current route.
 */