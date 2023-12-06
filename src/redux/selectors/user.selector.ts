import {RootState} from '../store';
export const getAllUser = (state: RootState) => state.user.listUser?.data;
export const getUserById = (state: RootState) => state.user.userById?.data;
export const getPostByUser = (state: RootState) =>
  state.user.listPostByUser?.data;
export const nextPagePostByUser = (state: RootState) =>
  state.user.listPostByUser?.canNext;

export const currentPagePostByUser = (state: RootState) =>
  state.user.listPostByUser?.currentPage;

export const getPostById = (state: RootState) => state.user.postById;

export const getListFollow = (state: RootState) => state.user.listFollow?.data;
export const getListFollower = (state: RootState) =>
  state.user.listFollow?.data?.follower;
export const getListFollowing = (state: RootState) =>
  state.user.listFollow?.data?.following;
