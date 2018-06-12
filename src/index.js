//import React
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCrVDceP1-KwRsIVi12ODPCwS2oSHe-_7k';

//A. Create Component that produces HTML

const App = () => {
    return ( <div>
        <SearchBar />
    </div>
    );
}


//A2. Take Component HTML and Render to DOM

ReactDOM.render(<App />, document.querySelector('.container'));