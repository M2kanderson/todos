import React from 'react';
import ReactDOM from 'react-dom';

// import Note from './util/note';
// import configureStore from './store/store';
// import Root from './components/root';


const App = () => (
  <h1>Todos App</h1>
)

document.addEventListener("DOMContentLoaded", () => {
  // const store = configureStore();
  const rootEl = document.getElementById('content');
  console.log("hi");
	ReactDOM.render(
		<App/>,
    rootEl

	);
  // window.store = store;
});
