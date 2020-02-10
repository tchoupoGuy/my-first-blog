import { postConstants } from "./constants";

export interface IReduxBaseAction {
  type: postConstants;
}

export interface IReduxGetPostsAction extends IReduxBaseAction {
  type: postConstants.POST_REQUEST;
  data: IPosts[];
}
export interface IReduxGetPostAction extends IReduxBaseAction {
  type: EReduxActionTypes.GET_MOVIE;
  data: IMovie;
}

export interface IReduxResetMovieAction extends IReduxBaseAction {
  type: EReduxActionTypes.RESET_MOVIE;
}
