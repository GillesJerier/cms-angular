import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Article} from '../models/article';

@Injectable({
    providedIn: 'root'
})
export class ArticleService {

    constructor(private http: HttpClient) {
    }

    createArticle(article: Article) {
        return this.http.post<Article>(environment.url.api + '/articles', article);
    }
}
