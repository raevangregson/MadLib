const INITIAL_STATE = {
  adjective:"brown",
  verb:"eating",
  adverb:"slowly"
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "READ":
            return Object.assign({}, state, {
                adjective:action.adjective,
                verb:action.verb,
                adverb:action.adverb
            });
        default:
            return state;
    }
}
