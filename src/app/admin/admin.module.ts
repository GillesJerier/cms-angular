import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AdminRoutingModule} from './admin-routing.module';
import {ArticleComponent} from './article/article.component';
import {NewArticleComponent} from './new-article/new-article.component';
import {HomeComponent} from './home/home.component';


@NgModule({
    declarations: [ArticleComponent, NewArticleComponent, HomeComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AdminModule {
}
