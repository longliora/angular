import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CreateStock } from '../create-stock/create-stock';

@Component({
  selector: 'app-stock-list',
  standalone: true,
  imports: [CreateStock],
  template: `
   <app-create-stock></app-create-stock>
  `,
  styleUrls: ['./stock-list.css']
})
export class StockList implements AfterViewInit {
  @ViewChild(CreateStock) child!: CreateStock;

  ngAfterViewInit() {
    const data = this.child.getStock();
    console.log(data);
  }

} 