import { Component, OnInit } from '@angular/core';
import { IProduct } from '../common/product';
import { productService } from './product.service';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  produts: IProduct[];
  errorMessage: string;
  Title: string = 'Product List';
  constructor(private prodService: productService) { }

  private _loading: boolean = true;

    get Loading(): boolean {
        return this._loading;
    }



  ngOnInit() {
    this.prodService.getProducts().subscribe(
      products =>{
        setTimeout(() => {
          this.produts = products;
          this._loading = false;
        }, 1500);
     
       //console.log(JSON.stringify(products));
      },
      error => this.errorMessage = <any>error
      ); 

      //let self = this;
    
      
  }

}