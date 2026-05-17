import { Component, signal } from '@angular/core';
import { ProductsCard } from '../products-card/products-card';
import { Products } from '../products';
import { NgForOf } from "../../../../node_modules/@angular/common/types/_common_module-chunk";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-products-grid',
  imports: [ProductsCard, NgForOf, MatIcon],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {
  protected readonly products = signal<Products[]>([
    {id: 1, name: 'Premium Weriless Headphones', description: 'descrição', price: 199.99, originalPrice: 249.90}
  ])
}
