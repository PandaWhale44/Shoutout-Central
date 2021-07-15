// /**
//  * ************************************
//  *
//  * @module  fetchReducer
//  * @author
//  * @date
//  * @description reducer for user account data
//  *
//  * ************************************
//  */

// import * as types from '../constants/actionTypes';

// // dummy data
// const initialState = {
//   userList: [],
//   shoutoutList: [],
//   loading: false,
//   error: null,
// };
// const shoutoutReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case types.FETCH_SHOUTOUTS_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         error: null,
//       };
//     case types.FETCH_SHOUTOUTS_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         shoutoutList: [...action.payload],
//       }
//     case types.FETCH_SHOUTOUTS_FAILURE:
//       return {
//         ...state,
//         loading: false,
//       }
//     case types.POST_SHOUTOUT_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         error: null,
//       }

//     case types.POST_SHOUTOUT_SUCCESS:
//       const newShoutout = { ...action.payload };
//       const shoutoutList = state.shoutoutList.slice().push(newShoutout);
//       const recipientUser = state.userList.slice().filter(user => user._id === newShoutout.recipient_id);
//       recipientUser.points += 1;
//       const userList = state.userList.slice().push(recipientUser);
//       return {
//         ...state,
//         userList,
//         shoutoutList,
//         loading: true,
//         error: null,
//       }
//     case types.POST_SHOUTOUT_FAILURE:
//       return {
//         ...state,
//         loading: false,
//       }

//   }

// }

export default shoutoutsReducer;