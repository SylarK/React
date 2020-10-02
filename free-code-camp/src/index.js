import React from 'react';
import ReactDOM from 'react-dom';
//import App from './components/Todo-app/App';
//import App from './components/Parent-Child Component/App';
//import MyApp from './components/Intro/MyApp';
//import App from './components/Props/App';
import App from './components/Joke/App';

const Ex = () => {
  return <p>Hello, World!</p>;
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
