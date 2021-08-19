import * as actionsTypes from './action-types';
export const buildActions = (dispatch) => {
  return {
    increase: () => dispatch({ type: actionsTypes.INCREASE }),
    decrease: () => dispatch({ type: actionsTypes.DECREASE }),
    reset: () => dispatch({ type: actionsTypes.RESET }),

    setCounter: (payload) => {
      dispatch({ type: actionsTypes.SET_COUNTER, payload });
    },
    asyncIncrease: () => asyncIncreaseFn(dispatch),
    asyncError: () => asyncError(dispatch),
  };
};

const asyncIncreaseFn = async (dispatch) => {
  dispatch({ type: actionsTypes.ASYNC_INCREASE_START });

  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve('RESOLVED!');
      dispatch({ type: actionsTypes.ASYNC_INCREASE_END });
    }, 2000);
  });
};
const asyncError = async (dispatch) => {
  dispatch({ type: actionsTypes.ASYNC_INCREASE_START });

  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      dispatch({ type: actionsTypes.ASYNC_INCREASE_ERROR });
      reject(new Error('Reject custom error by Lazo'));
    }, 2000);
  });
};
