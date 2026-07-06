import { Component, input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  // displayfavorite=output<Product>();
  //  onfavoriteClick(){
  //   this.displayfavorite.emit(this.product());
  // }
  favorites= input.required<Product[]>();
}
