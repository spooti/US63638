import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';
import { ProductService } from './product/product.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './product/product-data';
import { AppRoutingModule } from './app-routing.module';
import { ProductDetailComponent } from './product/product-detail.component';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './reducers/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './effects/product.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ProductData),
    AppRoutingModule,
    StoreModule.forRoot({products: productReducer}),
    EffectsModule.forRoot([ProductEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25})
  ],
  providers: [
    ProductService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
