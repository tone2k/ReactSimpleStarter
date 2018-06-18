//import React
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCrVDceP1-KwRsIVi12ODPCwS2oSHe-_7k';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
    console.log(data);
});

//A. Create Component that produces HTML

const App = () => {
    return ( <div>
        <SearchBar />
    </div>
    );
}


//A2. Take Component HTML and Render to DOM

ReactDOM.render(<App />, document.querySelector('.container'));