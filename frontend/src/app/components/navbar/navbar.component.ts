import { Component } from '@angular/core';
import { CartrService } from 'src/app/service/cartr.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  amount:any = new Array();
  constructor(private cart: CartrService) {
    this.amount = this.cart.amount;
  }
  

}
