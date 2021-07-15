import Axios from "axios";
import * as types from '../constants/actionTypes';
import { getState } from "expect";

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