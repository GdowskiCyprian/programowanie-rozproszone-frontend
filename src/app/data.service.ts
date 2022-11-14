import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  baseUrl:string = 'http://localhost:5254/';

  public getClients(){
    const headers = new HttpHeaders({ 'Content-Type':'application/json' });
    return this.http.get(this.baseUrl+"Client");
  }
  public getProducts(){
    const headers = new HttpHeaders({ 'Content-Type':'application/json' });
    return this.http.get(this.baseUrl+"Product");
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