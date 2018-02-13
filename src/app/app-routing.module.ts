import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product/product-list.component';
import { ProductDetailComponent } from './product/product-detail.component';



@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                component: ProductListComponent
            },
            { path: ':id', component: ProductDetailComponent },
            { path: '**', component: ProductListComponent }
        ]) // , { enableTracing: true })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }