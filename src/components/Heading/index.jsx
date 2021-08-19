// import P from 'prop-types';
import { useCounterContext } from '../../context/CounterContext';

export const Heading = () => {
  const [state] = useCounterContext();
  return <h1>{state.counter}</h1>;
};

/* when this text children was provide by props */
// Heading.propTypes = {
//   children: P.node.isRequired,
// };
