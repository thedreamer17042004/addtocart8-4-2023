import { Component } from '@angular/core';
import { CartrService } from '../../service/cartr.service';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  dataCart2:any = new Array();
  amount:any = new Array();
  constructor(private cart: CartrService) {
    this.dataCart2 = this.cart.dataCart;
    this.amount = this.cart.amount;
  }

  delete(index1: any) {
    this.dataCart2.forEach((element1:any, index:any) => {
      if(index == index1) {
        this.dataCart2.splice(index, 1);

        this.amount.forEach((element:any) => {
          element.amount = element.amount - element1.amount;
          console.log(element.amount);
          element1.amount = 1;
        });

      }
      
      
    });
  }

  
  
}
