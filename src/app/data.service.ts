import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  baseUrl:string = 'http://localhost:5254/';

  public getClients(){

    return this.http.get(this.baseUrl+"Client");
  }
  public getProducts(){

    return this.http.get(this.baseUrl+"Product");
  }
  public getOrders(){

    return this.http.get(this.baseUrl+"Order");
  }
  public postOrder(order:Order){

    return this.http.post(this.baseUrl+"Order", order)
  }
  public deleteOrder(orderId:number){
    console.log(this.baseUrl+"Order"+"?OrderId="+orderId);
    let resp = this.http.delete(this.baseUrl+"Order"+"?OrderId="+orderId)
    resp.subscribe(data => {console.log(data)})
  }
}
export interface Order{
  orderId:number;
  orderDate: string;
  client:Client;
  products:Product[];
}
export interface Client{
  clientId:number;
  clientName:string;
  clientAddress:string
}
export interface Product{
  productId: number;
  productName:string;
  productPrice: number;
}