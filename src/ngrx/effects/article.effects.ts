import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as ArticleActions from "../actions/article.actions";
import {switchMap,map, of, catchError} from "rxjs";
import {ArticleService} from "../../services/article.service";
import {Article} from "../../models/article.model";

@Injectable()
export class ArticleEffects {
  constructor(private actions$: Actions, private articleService: ArticleService) {
  }

  getArticles$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ArticleActions.getArticles),
      switchMap((action) => {
        return this.articleService.getArticles(action.q, action.from, action.sortBy).pipe(
          map((articles: any) => {
            return ArticleActions.getArticlesSuccess({articles: articles['articles'] as Article[]});
          }),
          catchError((error) => {
            return of(ArticleActions.getArticlesFailure({error}));
          })
        );
      })
    );
  }
  );
}



