import { Injectable } from '@angular/core';
import { ProductService } from '../product/product.service';
import { Effect, Actions} from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import * as productActions from '../actions/product.action';

@Injectable()
export class ProductEffects {
    constructor(private productService : ProductService,
    private actions$: Actions) {

    }

    @Effect() loadProducts$ = this.actions$
    .ofType(productActions.LOAD_PRODUCTS)
    .switchMap(() => this.productService.getProducts()
    .map(products => (new productActions.LoadProductsSuccessAction(products))));
   
}