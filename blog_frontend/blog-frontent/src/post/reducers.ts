import { postConstants } from "./constants";

export interface IPost {
  title: string;
  author: string;
  body: string;
  created_date: string;
  published_date: string;
}
export interface IReduxPostState {
  posts: IPost[];
  isLoading: boolean;
}
type TPostReducerActions = IReduxGetPostsAction | IReduxGetPostAction | IReduxResetPostAction;
const initialState: IReduxPostState = {
  posts: [],
  isLoading: false
};
type State = typeof initialState;
export function post(state: State, action: TPostReducerActions) {
  switch (action.type) {
    case postConstants.POST_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      });
    case postConstants.POST_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        language: action.post
      });
    case postConstants.POST_FAILURE:
      return Object.assign({}, state, {
        isLoading: false
      });
    default:
      return state;
  }
}
