import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-stock',
  standalone: true,
  imports: [
    CommonModule,   
    FormsModule  
  ],
  templateUrl: './create-stock.html',
  styleUrls: ['./create-stock.css']
})
export class CreateStock {

  stock = {
    name: '',
    code: '',
    price: 0,
    previousPrice: 0,
    exchange: 'NASDAQ',
    favorite: false
  };

  exchanges = ['NASDAQ', 'NYSE', 'HNX'];

  isConfirmed = false;
  stocks: any[] = [];

  createStock() {
    //thêm phân tử vào cuối mảng stocks
    this.stocks.push({ ...this.stock });

  

  }
  message: string = 'hello';

  getStock() {
    return this.stock;

    // // reset form
    this.stock = {
      name: '',
      code: '',
      price: 0,
      previousPrice: 0,
      exchange: 'NASDAQ',
      favorite: false
    };

    this.isConfirmed = false;
  }
  constructor(){

  }
}

