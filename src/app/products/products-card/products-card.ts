import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-products-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './products-card.html',
  styleUrl: './products-card.scss',
})
export class ProductsCard {}
