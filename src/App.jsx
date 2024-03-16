import React, { useReducer } from 'react';
import './App.css';

const initialState = {
  research: true,
  planning: true,
  design: true,
  manufacture: true,
  sales: true
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_RESEARCH':
      return { planning: !state.planning, design: !state.design, manufacture: !state.manufacture, sales: !state.sales, research: state.research};
    case 'TOGGLE_PLANNING':
      return { planning: state.planning, design: !state.design, manufacture: !state.manufacture, sales: !state.sales, research: !state.research};
    case 'TOGGLE_DESIGN':
      return { planning: !state.planning, design: state.design, manufacture: !state.manufacture, sales: !state.sales, research: !state.research};
    case 'TOGGLE_MANUFACTURE':
      return { planning: !state.planning, design: !state.design, manufacture: state.manufacture, sales: !state.sales, research: !state.research };
    case 'TOGGLE_SALES':
      return { planning: !state.planning, design: !state.design, manufacture: !state.manufacture, sales: state.sales, research: !state.research};
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {state.research && (
        <button onClick={() => dispatch({ type: 'TOGGLE_RESEARCH' })}>
          Research
        </button>
      )}
      {state.planning && (
        <button onClick={() => dispatch({ type: 'TOGGLE_PLANNING' })}>
          Planning
        </button>
      )}
      {state.design && (
        <button onClick={() => dispatch({ type: 'TOGGLE_DESIGN' })}>
          Designing
        </button>
      )}
      {state.manufacture && (
        <button onClick={() => dispatch({ type: 'TOGGLE_MANUFACTURE' })}>
          Manufacturing
        </button>
      )}
      {state.sales && (
        <button onClick={() => dispatch({ type: 'TOGGLE_SALES' })}>
          Sales
        </button>
      )}
    </div>
  );
};

export default App;
