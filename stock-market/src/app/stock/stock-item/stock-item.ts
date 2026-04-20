import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';
@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.html',
  styleUrls: ['./stock-item.css']
})
export class StockItemComponent implements OnInit {



  public stock!: Stock;
  
  constructor() { }

  ngOnInit() {
    // this.stock = new Stock('Test Stock Company', 'TSC', 85, 80);
    // this.stock = new Stock('Second Stock Company', 'SSC', 10, 876);
    // this.stock = new Stock('Last Stock Company', 'LSC', 244, 10);
  }

  toggleFavorite() {
    console.log('We are toggling the favorite state for this stock');

    
    this.stock.favorite = !this.stock.favorite;
  }
}
 