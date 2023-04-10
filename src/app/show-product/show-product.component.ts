import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../models/product';
import { ProductService } from '../services/productService/product.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit{
  products:Product[]=[];
  displayedColumns:string[]=['id','name','price','description','category_id','image_url']
  constructor(private productService: ProductService){}
  ngOnInit(): void {
    this.productService.get()
  .subscribe(
    response=>{
      this.products=response;
      // this._router.navigateByUrl('/product');
    },
    error=>{
      alert('error occurred');
    }
  );
  //alert("3");
}

getProductById(index:number){
  let product=this.products[index]
  this.productService.getByID(index)
    .subscribe(
      response =>{
      this.products=response;
      },
      error=>{
        alert('error occurred');
      }
    );
}

add(){
    let product=new Product();
    this.productService.post(product)
      .subscribe(
        response =>{
          this.products.push(product)
          alert("added ")
        },
        error=>{
          alert('error occurred');
        }
      );
}


update(){
  let product=new Product();
  this.productService.put(product)
    .subscribe(
      response =>{
        this.products.push(product)
        alert("updated")
      },
      error=>{
        alert('error occurred');
      }
    );
}

delete(index:number){
  let product=this.products[index];
  this.productService.deleteById(index)
    .subscribe(
      response=>{
        this.products.splice(index,1);
      }
    );
}

  }




