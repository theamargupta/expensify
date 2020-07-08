import React from 'react';
import { createStore } from 'redux';

class Redux extends React.Component {
  render() {
    //Reducer
    //Reducer are pure function
    // Never Change State or function
    const countReducer = (state = { count: 0 }, action) => {
      switch (action.type) {
        case 'increment':
          return { count: state.count + action.incrementBy };

        case 'decrement':
          return { count: state.count - action.decrementBy };

        case 'set':
          return { count: action.count };

        case 'reset':
          return { count: 0 };

        default:
          return state;
      }
    };
    const store = createStore(countReducer);
    // intial Output
    console.log('INTIAL STATE', store.getState());

    // Action Generators - Function that return action objects
    const incrementCount = ({ incrementBy = 1 } = {}) => ({
      type: 'increment',
      incrementBy,
    });
    const decrementCount = ({ decrementBy = 1 } = {}) => ({
      type: 'decrement',
      decrementBy,
    });
    const reset = () => ({
      type: 'reset',
    });
    const set = ({ count = 0 } = {}) => ({
      type: 'set',
      count,
    });

    //Subscribe
    store.subscribe(() => {
      console.log('State Changed =>', store.getState());
    });

    // Actions - object that we can sent to the store

    //Increment
    store.dispatch(incrementCount({ incrementBy: 20 }));
    store.dispatch(incrementCount());

    //Decrement
    store.dispatch(decrementCount());
    store.dispatch(decrementCount({ decrementBy: 10 }));

    //set
    store.dispatch(set({ count: 101 }));

    //Reset
    store.dispatch(reset());
    return <h1>Amar</h1>;
  }
}

export default Redux;
