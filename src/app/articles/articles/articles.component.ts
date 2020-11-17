import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
    article$ = null;

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        this.article$ = this.http.get<any[]>(environment.url.api + '/articles');
    }

}
