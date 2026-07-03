import { Component,input , output} from '@angular/core';
import { Product } from '../../models/product';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-modal-product-view',
  imports: [DatePipe],
  templateUrl: './modal-product-view.html',
  styleUrl: './modal-product-view.css',
})
export class ModalProductView {
  //input recoit le produit a afficher
  product = input.required<Product>();
  //output signale aux parent de fermer le modal
  close = output<void>();

  onCloseClick(){
    this.close.emit();
  }

  //nouveau output: ajout aux favorites
  favoriteAdded= output<Product>();

  onAddToFavorites(){
    const p = this.product();
    if(p){
      this.favoriteAdded.emit(p);
      this.close.emit();
    }else{
      console.log('ce produit est deja en favorie')
    }
  }
}
