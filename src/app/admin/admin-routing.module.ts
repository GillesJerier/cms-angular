import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NewArticleComponent} from './new-article/new-article.component';


const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'new-article', component: NewArticleComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {
}
