import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Store} from "@ngrx/store";
import {ArticleState} from "../ngrx/states/article.state";
import {AsyncPipe} from "@angular/common";

import * as ArticleActions from "../ngrx/actions/article.actions";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo-effect';

  articles$ = this.store.select(state => state.articles.articles);
  loading$ = this.store.select(state => state.articles.loading);
  error$ = this.store.select(state => state.articles.error);

  constructor(private store: Store<{articles: ArticleState}>) {
    this.store.dispatch(ArticleActions.getArticles({q: 'tesla', from: '2023-12-31', sortBy: 'publishedAt'}));
  }
}

