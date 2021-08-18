import P from 'prop-types';
import { useContext, useState } from 'react';
import { CounterContext } from './context';

/* create the initial value */
export const initialState = {
  counter: 0,
  loading: false,
};

export const CounterContextProvider = ({ children }) => {
  /* será mudado para reducer */
  const [state, dispatch] = useState(initialState);
  return (
    <CounterContext.Provider value={[state, dispatch]}>
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
