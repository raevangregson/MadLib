import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { newStory } from '../actions';
import Story from './Story';

class Form extends Component{
  constructor(props){
    super(props);
    this.state = {
      adjective: "",
      verb: "",
      adverb: ""
    }
  }

render(){
  return(
      <Router>
        <div>
    <form className="MadLibs" onSubmit={this.onSubmit.bind(this)}>
                <h2>MadLibs</h2>
                <p>
                    <label className="form__label">Adjective</label>
                    <input type="text" value={this.state.adjective} placeholder="brown" onChange={this.handleAdjectiveChange.bind(this)} />
                </p>
                <p>
                    <label className="form__label">"ing"Verb:</label>
                    <input type="text" value={this.state.verb} placeholder="eating" onChange={this.handleVerbChange.bind(this)} />
                </p>
                <p>
                    <label className="form__label">Adverb:</label>
                    <input type="text" value={this.state.adverb} placeholder="slowly" onChange={this.handleAdverbChange.bind(this)} />
                </p>
                  {/* <Link to="/story">*/}<button type="submit">Read Story</button> {/*</Link> */}
                </form>
                <Route path="/story" component={Story} />
              </div>

          </Router>

  );
}

handleAdjectiveChange(event) {
    this.setState({
        adjective: event.target.value
    });
}

handleVerbChange(event) {
    this.setState({
        verb: event.target.value
    });
}

handleAdverbChange(event) {
    this.setState({
        adverb: event.target.value
    });
}

onSubmit(event) {
    event.preventDefault();
    event.action = "./Story.js"

    const words = {
        adjective: this.state.adjective,
        verb: this.state.verb,
        adverb: this.state.adverb
    }

    // Added this
    this.props.onSubmit(words);

    // Clear form
    this.setState({
        adjective: "",
        verb: "",
        adverb: ""
    });
}

}

const mapActionsToProps = {
    onSubmit: newStory
}

export default connect(null, mapActionsToProps)(Form);
