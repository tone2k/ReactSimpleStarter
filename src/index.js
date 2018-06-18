//import React
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCrVDceP1-KwRsIVi12ODPCwS2oSHe-_7k';

//A. Create Component that produces HTML

class App extends Component {
    constructor(props){
        super(props);

        this.state = {videos: []};

        YTSearch({
            key: API_KEY,
            term: 'surfboards'
        }, (videos) => {
            this.setState({videos})
        });
    }
    render() { 
        return ( 
            <div>
                <SearchBar />
                {/* passing props (videos) to video list */}
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
};


//A2. Take Component HTML and Render to DOM

ReactDOM.render(<App />, document.querySelector('.container'));