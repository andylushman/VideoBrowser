import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';

const APIKey = 'AIzaSyBSRMoi4_1RfGXt1bVQXfxHqYXSz4HdrE4';

//Create a new component. This component should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

//Take this componet's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
