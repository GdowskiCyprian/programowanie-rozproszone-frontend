import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client, DataService, Order, Product } from '../data.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  columnsToDisplayProducts: string[] = [ 'productName', 'productPrice'];
  products:Array<Product> = [];
  client:Client = this.data.client;
  order:Order = <Order>{};
  constructor(public basketDialog:MatDialogRef<BasketComponent>, @Inject(MAT_DIALOG_DATA) public data:any, public service:DataService, @Inject(LOCALE_ID) private locale: string) { }

  ngOnInit(): void {
    this.products = this.data.products;
  }
  placeOrder():void{
    this.order.orderId = 0;
    this.order.orderDate = formatDate(Date.now(),'yyyy-MM-dd',this.locale);
    this.order.client = this.client
    this.order.products = this.products
    console.log(this.order)
    let resp = this.service.postOrder(this.order);
    resp.subscribe(data => console.log(data));

  }

}
