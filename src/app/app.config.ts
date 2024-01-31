import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import {ArticleEffects} from "../ngrx/effects/article.effects";
import {articleReducer} from "../ngrx/reducers/article.reducer";
import {provideHttpClient} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideEffects(ArticleEffects),
    provideStore({
    articles: articleReducer
  }),
    provideHttpClient()
  ]
};
