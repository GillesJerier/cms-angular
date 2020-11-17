import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ArticleService} from '../article.service';
import {EMPTY} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Component({
    selector: 'app-new-article',
    templateUrl: './new-article.component.html',
    styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent implements OnInit {
    error = null;
    response$ = null;
    articleForm: FormGroup = null;

    constructor(private fb: FormBuilder, private articleService: ArticleService) {
        this.articleForm = this.fb.group({
            title: ['', Validators.required],
            content: ['', [Validators.required, Validators.minLength(4)]]
        });
    }

    ngOnInit(): void {
    }

    submit() {
        this.response$ = this.articleService
            .createArticle(this.articleForm.value)
            .pipe(
                catchError((error) => {
                    this.error = error;
                    return EMPTY;
                })
            );
    }

    get title() {
        return this.articleForm.get('title');
    }

    get content() {
        return this.articleForm.get('content');
    }
}
