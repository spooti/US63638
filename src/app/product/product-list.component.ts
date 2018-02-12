import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { IProduct } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: IProduct[];
  errorMessage: string;
  pageTitle: string = 'Products';

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (products: IProduct[]) => {
          this.products = products;
      },
      (error: any) => this.errorMessage = <any>error
  );

  }

}
