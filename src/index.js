import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBN_PHVeUz85QNXkE_TNrwt47Q7Ntj_EOo';

// Create a new Component. This component shoudl produce
// some HTML
const App = () => {
    return <div>
        <SearchBar />
    </div>;
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
