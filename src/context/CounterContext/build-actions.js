import * as actionsTypes from './action-types';
export const buildActions = (dispatch) => {
  return {
    increase: () => dispatch({ type: actionsTypes.INCREASE }),
  };
};
