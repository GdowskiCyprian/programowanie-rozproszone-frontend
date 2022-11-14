import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BasketComponent } from '../basket/basket.component';
import { Client, DataService, Product } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  columnsToDisplayProducts: string[] = [ 'productName', 'productPrice', 'productAdd'];
  products:Array<Product> = [];
  clients:Array<Client> = [];
  client:Client = {} as Client;
  listOfProducts:Array<Product> = [];
  constructor(private service:DataService, public dialog: MatDialog) { }

  ngOnInit(): void {
    let resp = this.service.getClients();
    resp.subscribe(data => {this.clients = <Array<Client>>data})
    let resp1 = this.service.getProducts();
    resp1.subscribe(data1 => {this.products = <Array<Product>>data1})
  }
  AddProductToBasket(product:Product):void{
    if(!this.listOfProducts.includes(product)){
      this.listOfProducts.push(product)
    }
  }
  OpenBasket(){
    if(this.client.clientId != null){
      const basketDialog = this.dialog.open(BasketComponent, {
        width : '600px',
        data: {client:this.client, products:this.listOfProducts}
      });
    }

  }


  
}
