import { Component, OnInit } from '@angular/core';
import { Client, DataService, Order } from '../data.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  columnsToDisplayOrders: string[] = [ 'orderId', 'orderDate','clientName','numofprod', 'orderDelete'];
  constructor(private service:DataService) { }
  orders:Array<Order> = [];
  ngOnInit(): void {
    let resp = this.service.getOrders();
    resp.subscribe(data => {this.orders = <Array<Order>>data, console.log(data)})
  }


  DeleteOrder(orderId:number){
    console.log(orderId);
      this.service.deleteOrder(orderId);
      window.location.reload();
  }

}
