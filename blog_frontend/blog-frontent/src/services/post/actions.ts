import { postConstants } from './constants'
import { postService } from './index'

export interface IReduxBaseAction {
  type: postConstants
}

// export const offLineActions = {
//   GetPosts
// };

// function GetPosts(token: string) {
//   return (dispatch: any) => {
//     dispatch(request());
//     postService.GetPosts(token).then(
//       posts => {
//         dispatch(success(posts));
//       },
//       error => {
//         dispatch(failure(error.toString()));
//         // dispatch(alertActions.error(error.toString()));
//       }
//     );
//   };

//   function request() {
//     return { type: postConstants.POST_REQUEST };
//   }
//   function success(posts: {}) {
//     return { type: postConstants.POST_SUCCESS, posts };
//   }
//   function failure(error: string) {
//     return { type: postConstants.POST_FAILURE, error };
//   }
// }

// export interface IReduxGetPostsAction extends IReduxBaseAction {
//   type: postConstants.POST_REQUEST;
//   data: IPosts[];
// }
// export interface IReduxGetPostAction extends IReduxBaseAction {
//   type: EReduxActionTypes.GET_MOVIE;
//   data: IMovie;
// }

// export interface IReduxResetMovieAction extends IReduxBaseAction {
//   type: EReduxActionTypes.RESET_MOVIE;
// }
