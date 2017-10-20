import React, {Component} from 'react';
import Autosuggest from 'react-autosuggest';

//array of autocomplete values
const autovalues = ["about", "above", "across", "app", "apple", "appreciate", "bad", "ball", "balloon", "bell", "cat"];

// Filter the list of values and slice them based on the current input length
// return a list of matching values
const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
 
    return inputLength === 0 ? [] : autovalues.filter(autovalue =>
        autovalue.toLowerCase().slice(0, inputLength) === inputValue
    );
};

// When suggestion is clicked, Autosuggest needs to populate the input 
const getSuggestionValue = suggestion => suggestion;

// Use your imagination to render suggestions. 
const renderSuggestion = suggestion => (
  <div>
    {suggestion}
  </div>
);

// make a new SearchBar class with functionality of a React Component
class SearchBar extends Component {

    //define the state of the component - only available to class based components
    //called whenever instance is created (like __init__)
    constructor(props) {
        super(props);

        this.state = { 
            value: "",
            suggestions: []
         };

    }

    // Autosuggest will call this function every time you need to update suggestions. 
  // You already implemented this logic above, so just use it. 
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };
 
  // Autosuggest will call this function every time you need to clear suggestions. 
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  // event handler to listen for changes to input
    onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

    // submit the value to the giphy search
    submitSearch(value) {
        this.props.onSearchSubmit(value)
    }

    // Autosuggest will call this function every time you need to update suggestions. 
    // You already implemented this logic above, so just use it. 
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };
 
    render() {
        const { value, suggestions } = this.state;
     
        // Autosuggest will pass through all these props to the input. 
        const inputProps = {
          placeholder: 'Search value',
          value,
          onChange: this.onChange
        };
     
        // Finally, render it! 
        return (
          <div className="search-bar">
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}/>
            <input id="submit" type="submit" value="GO" />
          </div>
        );
    } 
}

export default SearchBar;