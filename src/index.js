import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import GifDisplay from './components/gif_display';
import ajax from 'superagent';

// Create an app class component
class App extends Component {
    constructor(props){
        super(props);

        this.gifSearch("");

        this.state = { 
            videos: [],
            gifID: null
        };


    }

    gifSearch(term) {
        // ajax call to giphy api
        ajax.get('http://api.giphy.com/v1/gifs/search?q='+term+'&api_key=dc6zaTOxFJmzC&limit=1')
            .end((error, response) => {
                if (!error && response) {
                    let gifID = null;
                    if (term !== ""){
                        gifID = response.body.data[0].id;
                    }
                    this.setState({gifID: gifID});
                } else {
                    console.log('There was an error fetching data', error);
                }
            }
        );
    }

    render() {
        //throttles the search so it only updates every 500 ms
        const  gifSearch = _.debounce((term) => {this.gifSearch(term) }, 500)

        return (
            <div className='search_bar'>
                <SearchBar onSearchSubmit={gifSearch} />
                <GifDisplay gifID={this.state.gifID}/>
            </div>
        );
    }
}

// Take compnent's HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector(".container"));