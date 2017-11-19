import React, { Component } from 'react';
import { connect } from 'react-redux';

class Story extends Component{

render(){
  return(
    <p>One fine day, my trusty dog woke up to find a {this.props.adjective} cat. The cat was {this.props.verb} {this.props.adverb}. What a weird morning...</p>
  );
}

}

function mapStateToProps(state) {
    return {
        adjective:state.adjective,
        verb:state.verb,
        adverb:state.adverb

    }
}

export default connect(mapStateToProps)(Story);
