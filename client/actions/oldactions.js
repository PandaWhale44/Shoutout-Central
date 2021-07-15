/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import * as types from '../constants/actionTypes';

// Add new Comment action creator
export const addCommentActionCreator = (contents, username, parentId) => ({
  type: types.ADD_COMMENT,
  payload: {
    contents,
    username,
    parentId,
  },
});

// edit Comment action creator
export const editCommentActionCreator = (commentId, contents) => ({
  type: types.EDIT_COMMENT,
  payload: {
    commentId,
    contents,
  },
});

// delete Comment action creator
export const deleteCommentActionCreator = (commentId) => ({
  type: types.DELETE_COMMENT,
  payload: commentId,
});

// Cast upvote action creator
export const castUpvoteActionCreator = (commentId) => ({
  type: types.CAST_UPVOTE,
  payload: commentId,
});

// Cast downvote action creator
export const castDownvoteActionCreator = (commentId) => ({
  type: types.CAST_DOWNVOTE,
  payload: commentId,
});

// Add User action creator
export const addUserActionCreator = (username, password, nickname, email) => ({
  type: types.ADD_USER,
  payload: {
    username,
    password,
    nickname,
    email,
  },
});

export const authUserActionCreator = (username, password) => ({
  type: types.AUTH_USER,
  payload: {
    username,
    password,
  },
});
