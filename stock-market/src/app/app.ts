import { Component, signal } from '@angular/core';
import { StockItemComponent } from './stock/stock-item/stock-item';
import { CreateStock } from './stock/create-stock/create-stock';
import { StockList } from './stock/stock-list/stock-list';
@Component({
  selector: 'app-root',
  imports: [StockItemComponent,  CreateStock , StockList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('stock-market');
}