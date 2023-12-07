import {PayloadAction, createAction, createSlice} from '@reduxjs/toolkit';
import {Redux} from '../types';
import {
  ForumState,
  ForumType,
  PayloadHttpListForumData,
} from '../types/forum.type';
import {produce} from 'immer';

const initialState: ForumState = {};

const reducer = createSlice({
  name: Redux.forum,
  initialState: {...initialState},
  reducers: {
    clearListData: (state: ForumState) => {
      return {
        ...state,
        listDataForum: {},
      };
    },
    getListData: (state: ForumState, _: PayloadAction<number>) => {
      return {
        ...state,
      };
    },
    setListData: (
      state: ForumState,
      action: PayloadAction<PayloadHttpListForumData<ForumType>>,
    ) => {
      const currentData: ForumType[] = state.listDataForum?.data || [];
      const newData = action.payload.data || [];
      const updatedData = [...currentData, ...newData];
      return {
        ...state,
        listDataForum: {
          data: updatedData,
          canNext: action.payload.canNext,
          currentDataSize: action.payload.currentDataSize,
          currentPage: action.payload.currentPage,
          totalPage: action.payload.totalPage,
          totalData: action.payload.totalData,
        },
      };
    },
    postLikeForum: (state: ForumState, _: PayloadAction<any>) => {
      return {
        ...state,
      };
    },

    deleteLikeForum: (state: ForumState, _: PayloadAction<any>) => {
      return {
        ...state,
      };
    },

    handleLike_UnlikeSuccess: (
      state: ForumState,
      action: PayloadAction<string>,
    ) => {
      const uuid = action.payload;

      if (state.listDataForum && state.listDataForum.data) {
        const updatedListForum = {
          ...state.listDataForum,
          data: state.listDataForum.data.map(item => {
            if (item.uuid === uuid) {
              const updatedIsLike = !item.is_liked;
              const updatedLikeCount = updatedIsLike
                ? item.like_count + 1
                : item.like_count - 1;

              return {
                ...item,
                is_liked: updatedIsLike,
                like_count: updatedLikeCount,
              };
            }
            return item;
          }),
        };

        return {
          ...state,
          listDataForum: updatedListForum,
        };
      }

      return state;
    },

    postCreatePost: (state: ForumState, action: PayloadAction<ForumType>) => {
      return {
        ...state,
        listDataForum: {
          canNext: state.listDataForum?.canNext,
          currentPage: state.listDataForum?.currentPage,
          totalData: state.listDataForum?.totalData,
          data: [action.payload, ...(state.listDataForum?.data || [])],
        },
      };
    },

    handleCreatePostSuccess: (
      state: ForumState,
      action: PayloadAction<FormData>,
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },

    deletePost: (state: ForumState, _: PayloadAction<any>) => {
      return {
        ...state,
      };
    },

    deletePostRefesh: (state: ForumState, action: PayloadAction<string>) => {
      if (state.listDataForum && state.listDataForum.data) {
        const indexToDelete = state.listDataForum?.data.findIndex(
          item => item.uuid === action.payload,
        );

        if (indexToDelete !== -1) {
          // Tìm thấy item, hãy xóa nó
          const newData = [...state.listDataForum.data];
          newData.splice(indexToDelete, 1);
          state.listDataForum.data = newData;
        }
      }
    },
  },
});

export const ForumReducer = reducer.reducer;
export const ForumActions = reducer.actions;
