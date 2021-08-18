import P from 'prop-types';
import { useContext, useReducer, useState, useRef } from 'react';
import { buildActions } from './build-actions';
import { CounterContext } from './context';
import { reducer } from './reducer';

/* create the initial value */
export const initialState = {
  counter: 0,
  loading: false,
};

export const CounterContextProvider = ({ children }) => {
  /* será mudado para reducer */
  const [state, dispatch] = useReducer(reducer, initialState);
  /* o useRef em volta das actions previne um loop infinito por parte do useEffect ao recriar o objeto repetidas vezes */
  const actions = useRef(buildActions(dispatch));

  return (
    <CounterContext.Provider value={[state, actions.current]}>
      {children}
    </CounterContext.Provider>
  );
};

/* hook to use Context */
export const useCounterContext = () => {
  const context = useContext(CounterContext);
  if (typeof context === 'undefined') {
    throw new Error(
      'You have to use CounterContext inside <CounterContext.Provider /> ',
    );
  }
  return [...context];
};
CounterContextProvider.propTypes = {
  children: P.node.isRequired,
  initialState: P.shape({
    counter: P.number,
    loading: P.number,
  }),
};
