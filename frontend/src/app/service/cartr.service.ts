import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartrService {

  constructor() { }

  data:any = [
    {id: '0',img: 'https://portotheme.com/html/molla/assets/images/demos/demo-8/products/product-5-2.jpg', title: 'Ao', amount: 1, description: 'ao nay cho moi nguoi'},
    {id: '1',img: 'https://portotheme.com/html/molla/assets/images/demos/demo-8/products/product-8-2.jpg',title: 'Quan', amount: 1, description: 'Quan sieu nhan'},
    {id: '2',img: 'https://portotheme.com/html/molla/assets/images/demos/demo-8/products/product-11-2.jpg',title: 'Ca Vat', amount: 1, description: 'Ca vat nam tinh'},
    {id: '3',img: 'https://portotheme.com/html/molla/assets/images/demos/demo-8/products/product-12-2.jpg',title: 'Vay', amount: 1, description: 'Vay cho phu nu va tre em'}
  ];

  dataCart:any = [];
  amount:any = [{amount: 0}];

    

}
