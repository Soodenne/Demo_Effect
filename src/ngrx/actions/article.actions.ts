import {createAction, props} from "@ngrx/store";
import {Article} from "../../models/article.model";

export const getArticles = createAction('[Article] Get Articles', props<{q: string, from: string, sortBy: string}>());

export const getArticlesSuccess = createAction(
  '[Article] Get Articles Success',
  props<{articles: Article[]}>()
);

export const getArticlesFailure = createAction(
  '[Article] Get Articles Failure',
  props<{error: string}>()
);
