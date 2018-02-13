import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { IProduct } from './product';
import { Store } from '@ngrx/store';
import { AppState } from '../models/app-state';
import { Observable } from 'rxjs/Observable';

import * as productActions from '../actions/product.action';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products$: Observable<any>;
  errorMessage: string;
  pageTitle: string = 'Products';

  constructor(private store: Store<AppState>) {
    this.products$ = this.store.select(state => state.products);
   }

  getProducts() {
    this.store.dispatch(new productActions.LoadProductsAction());
  }

  ngOnInit() {
    this.getProducts();
  }

}
