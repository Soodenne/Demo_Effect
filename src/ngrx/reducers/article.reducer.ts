import {ArticleState} from "../states/article.state";
import * as ArticleActions from "../actions/article.actions";
import {createReducer, on} from "@ngrx/store";
export const initialState : ArticleState = {
    articles: [],
    loading: false,
    error: ''
};

export const articleReducer = createReducer(
  initialState,
    on(ArticleActions.getArticles,(state: any, action: any)=>{

        return {
            ...state,
            loading: true,
            error: ''
        }
    }),
    on(ArticleActions.getArticlesSuccess,(state: any, action: any)=>{
        return {
            ...state,
            articles: action.articles,
            loading: false,
            error:  ''
        }
    }),
    on(ArticleActions.getArticlesFailure,(state: any, action: any)=>{
        return {
            ...state,
            articles: [],
            loading: false,
            error: action.error
        }
    })

);

