import {RootState} from '../store';

export const getListForum = (state: RootState) => state.forum.listData?.data;
