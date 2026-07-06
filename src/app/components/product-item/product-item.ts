import { Component, input , output, signal} from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
  //input optionnel(peut etre undefine)
  // product=input<Product>();

  //input obligatoire(angular plante sinon)
  // product=input.required<Product>();
  product = input.required<Product>();

  //output qui emet un signal vers le parent qu on a clique
  displayProductViewModal=output<Product>();


  //methode qui emet l'evenement
  //  isMenuOpen = signal(true);

  onProductClick(){
       this.displayProductViewModal.emit(this.product());
    //  this.isMenuOpen.set( false);
  }
 
  // onProductClick(product:Product){
  //   this.productCliked.emit(product);
  // }
  
}
