import { Component } from '@angular/core';
import { CartrService } from '../../service/cartr.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  dataa:any = new Array();
  datac:any = new Array();
  amount:any = new Array();

  constructor(private cart: CartrService) {
    this.dataa = this.cart.data;
    this.datac = this.cart.dataCart;
    this.amount = this.cart.amount;
  }


  clickme(data: any) {
    if(this.datac.indexOf(data) !== -1)  
    {  
      this.dataa.forEach((element:any) => {
        if(data == element) {
          ++element.amount;
        }
      });
     
    }   
    else  
    {  
        this.cart.dataCart.push(data);
     

    } 
   this.amount.forEach((element:any, index:any) => {
    ++element.amount;
   });
  }
}
