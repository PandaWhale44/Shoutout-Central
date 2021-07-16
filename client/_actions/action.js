import { types as userConstants } from '../_constants/actionTypes';
import userService from '../_services/user.service.js';
import shoutoutService from '../_services/user.service.js';
const Axios = require('axios');

// import * as types from '../constants/actionTypes';
// import { userService } from '../_services';

export const userActions = {
  login,
  logout,
  register,
};

function login(email, password) {
  return (dispatch, getState) => {
    dispatch(request({ email }));

    userService.login(email, password).then(
      (user) => {
        dispatch(success(user));
        history.push('/');
      },
      (error) => {
        dispatch(failure(error));
      }
    );
  };

  function request(email) {
    return { type: userConstants.LOGIN_REQUEST, email };
  }
  function success(email) {
    return { type: userConstants.LOGIN_SUCCESS, email };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

function register(user) {
  return (dispatch, getState) => {
    dispatch(request(user));

    userService.register(user).then(
      (user) => {
        dispatch(success());
        history.push('/login');
      },
      (error) => {
        dispatch(failure(error));
      }
    );
  };

  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
}

// export const getShoutouts = () => async (dispatch, getState) => {
//   dispatch({ type: userConstants.FETCH_SHOUTOUTS_REQUEST });
//   try {
//     const response = await Axios.get('/api/shoutout');
//     dispatch({ type: userConstants.FETCH_SHOUTOUTS_SUCCESS, payload: response.data });
//   } catch (error) {
//     dispatch({ type: userContstants.FETCH_SHOUTOUTS_FAILURE, error });
//   }
// };

// export const addShoutout = () => async (dispatch, getState) => {
//   dispatch({ type: userConstants.POST_SHOUTOUTS_REQUEST });
//   try {
//     const response = await Axios.post('/api/shoutout', {
//       body: {
//         // shoutout: ,
//         // contents: ,
//         // sender_id: ,
//         // recipient_id: ,
//         timestamp: new Date(),
//       },
//     });
//     dispatch({ type: userConstants.POST_SHOUTOUTS_SUCCESS, payload: response.data });
//   } catch (error) {
//     dispatch({ type: userConstants.POST_SHOUTOUTS_FAILURE, error });
//   }
// };
