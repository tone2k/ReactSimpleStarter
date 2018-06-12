//import React
import React from 'react';
import ReactDOM from 'react-dom';

//A. Create Component that produces HTML

const App = () => {
    return <div>Hello</div>
}


//A2. Take Component HTML and Render to DOM

ReactDOM.render(<App />, document.querySelector('.container'));