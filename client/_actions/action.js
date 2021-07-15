import Axios from "axios";
import { userConstants } from '../_constants';
// import * as types from '../constants/actionTypes';
// import { userService } from '../_services';
import { getState } from "expect";

export const userActions = {
    login,
    logout,
    register,
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => { 
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}



export const getShoutouts = () => async (dispatch, getState) => {
  dispatch({ type: types.FETCH_SHOUTOUTS_REQUEST });
  try {
    const response = await Axios.get("/api/shoutout");
    dispatch({ type: types.FETCH_SHOUTOUTS_SUCCESS, payload: response.data })
  } catch (error) {
    dispatch({ type: types.FETCH_SHOUTOUTS_FAILURE, error })
  }
};

export const addShoutout = () => async (dispatch, getState) => {
  dispatch({ type: types.POST_SHOUTOUTS_REQUEST });
  try {
    const response = await Axios.post("/api/shoutout", {
      body: {
        // shoutout: ,
        // contents: ,
        // sender_id: ,
        // recipient_id: ,
        timestamp: new Date(),
      }
    });
    dispatch({ type: types.POST_SHOUTOUTS_SUCCESS, payload: response.data })
  } catch (error) {
    dispatch({ type: types.POST_SHOUTOUTS_FAILURE, error })
  }
};