import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { ForumActions } from '../reducer';
import { CommentForumAction } from '../reducer/comment.forum.reducer';
import { CommentForumService } from '../services/comment.forum.service';
import { da } from 'date-fns/locale';

function* postCommentSaga(action: PayloadAction<any>): Generator {
  try {
    console.log('run===========>');
    const { data }: any = yield call(
      CommentForumService.postCommentForum,
      action.payload,
    );
    if (data.code == 200) {
      console.log('postCommentSaga: ======================>', data.data);
      yield put(CommentForumAction.postCommentForumSucces(data.data));
      yield put(ForumActions.handleSuccessCount(action.payload.forum_uuid));
      console.log('run push tookit');
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
  }
}

function* getCommentSaga(action: PayloadAction<any>): Generator {
  try {
    console.log('run===========>');
    const { data }: any = yield call(
      CommentForumService.getCommentForum,
      action.payload,
    );
    console.log('getCommentSaga: ======================>', action.payload);
    if (data.code == 200) {
      yield put(CommentForumAction.setCommentForum(data.data));
      console.log('run push tookit');
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
  }
}

function* postLikeCommentSaga(action: PayloadAction<any>): Generator {
  try {
    console.log('run===========>');
    const { data }: any = yield call(
      CommentForumService.postLikeCommentForum,
      action.payload,
    );
    if (data.code == 200) {
      if (action.payload.type) {
        yield put(
          CommentForumAction.handleLike_UnlikeSuccess(
            action.payload.comment_uuid,
          ),
        );
      } else {
        yield put(
          CommentForumAction.handleLike_UnlikeSuccess(
            action.payload.comment_uuid,
          ),
        );
      }
      console.log('run push tookit');
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
  }
}

function* deleteLikeCommentSaga(action: PayloadAction<any>): Generator {
  try {
    console.log('run===========>');
    const { data }: any = yield call(
      CommentForumService.deleteLikeCommentForum,
      action.payload,
    );
    console.log(data);
    if (data.code == 200) {
      if (action.payload.type) {
        yield put(
          CommentForumAction.handleLike_UnlikeSuccess(
            action.payload.comment_uuid,
          ),
        );
      } else {
        yield put(
          CommentForumAction.handleLike_UnlikeSuccess(
            action.payload.comment_uuid,
          ),
        );
      }
      console.log('run push tookit');
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
  }
}

function* postRepCommentSaga(action: PayloadAction<any>): Generator {
  try {
    console.log('run===========>');
    const { data }: any = yield call(
      CommentForumService.postRepCommentForum,
      action.payload,
    );
    console.log('postRepCommentSaga: ======================>', action.payload);
    if (data.code == 200) {
      yield put(CommentForumAction.postRepCommentForumSucces(data.data));
      console.log('run push tookit');
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
  }
}

function* getRepCommentForumSaga(action: PayloadAction<any>): Generator {
  try {
    console.log('run===========>');
    const { data }: any = yield call(
      CommentForumService.getRepCommentForum,
      action.payload,
    );
    if (data.code == 200) {
      yield put(CommentForumAction.setRepCommentForum(data.data));
      console.log('run push tookit');
    } else {
      console.log('Server errol !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
  }
}

function* deleteCommentSaga(action: PayloadAction<any>): Generator {
  try {
    const { data }: any = yield call(
      CommentForumService.deleteCommentForum,
      action.payload,
    );
    if (data.code == 200) {
      yield put(CommentForumAction.handleDeleteCommentSuccess(action.payload));
    } else {
      console.log('Server error !!!');
    }
  } catch (error) {
    console.log(error);
  } finally {
  }
}

export default function* watchCommentForumSaga() {
  yield takeLatest(CommentForumAction.postCommentForum, postCommentSaga);
  yield takeLatest(CommentForumAction.getCommentForum, getCommentSaga);

  yield takeLatest(
    CommentForumAction.postLikeCommentForum,
    postLikeCommentSaga,
  );
  yield takeLatest(
    CommentForumAction.deleteLikeCommentForum,
    deleteLikeCommentSaga,
  );

  yield takeLatest(CommentForumAction.postRepCommentForum, postRepCommentSaga);

  yield takeLatest(
    CommentForumAction.getRepCommentForum,
    getRepCommentForumSaga,
  );

  yield takeLatest(CommentForumAction.deleteCommentForum, deleteCommentSaga);
}
