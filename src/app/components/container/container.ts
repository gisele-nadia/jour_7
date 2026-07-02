import { Component, output } from '@angular/core';
import { ProductList } from "../product-list/product-list";
import { Product } from '../../models/product';

@Component({
  selector: 'app-container',
  imports: [ProductList],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {
  // NOUVEAU output : retransmet vers App
  favoriteAdded= output<Product>();

 // Méthode appelée quand le modal ajoute aux favoris 
  onFavoriteAdded(product:Product){
    console.log('favori ajouter:',product.name);
    this.favoriteAdded.emit(product);
  }
}
