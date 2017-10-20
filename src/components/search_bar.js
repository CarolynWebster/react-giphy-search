import React, {Component} from 'react';

// make a new SearchBar class with functionality of a React Component
class SearchBar extends Component {

    //define the state of the component - only available to class based components
    //called whenever instance is created (like __init__)
    constructor(props) {
        super(props);

        this.state = { term: "" };
    }

    render() {
        // return an input box and GO button
        return (
            <div className="search-bar">
                <input 
                    value = {this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} placeholder="Search Term" />
                <input id ="submit" type='submit' value="Go" onClick={event => this.submitSearch(this.state.term)} />
            </div>
        );

    }

    // event handler to listen for changes to input
    onInputChange(term) {
        this.setState({term});
    }
    // submit the term to the giphy search
    submitSearch(term) {
        this.props.onSearchSubmit(term)
    }
}

export default SearchBar;