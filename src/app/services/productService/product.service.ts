import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import {environment} from "../../../environments/environment.development";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[]=[];
  constructor(private httpClient:HttpClient) {

  }

   get () {
    return this.httpClient.get<Product[]>(`${environment.apiURL}`)

   }

  getByID(id : number){
    return this.httpClient.get<Product[]>(`${environment.apiURL}`+id)
  }


  post(product : Product){
    return this.httpClient.post<Product[]>(`${environment.apiURL}`,product)
  }

  put(product : Product){
    return this.httpClient.put<Product[]>(`${environment.apiURL}`,product)
  }

   deleteById( id:number){
     return this.httpClient.delete<Product[]>(`${environment.apiURL}`+id)
  }



}
