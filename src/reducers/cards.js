/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
const initialState = {layer: 0};

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);

  switch(action.type) {
    /*
    case 'YOUR_ACTION': {
      // Modify next state depending on the action and return it
      return nextState;
    } break;
    */
  case 'NEXT_CARD_LAYER': {
    return {
      ...state,
      layer: state.layer + action.layer}
  }

  case 'PREV_CARD_LAYER': {
    return {
      ...state,
      layer: state.layer - action.layer}
  }
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
