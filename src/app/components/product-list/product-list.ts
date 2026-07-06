import { Component, output, input } from '@angular/core';
import { signal } from '@angular/core';
import { ProductItem } from "../product-item/product-item";
import { Product } from '../../models/product';
import { ModalProductView } from '../modal-product-view/modal-product-view';

@Component({
  selector: 'app-product-list',
   standalone: true,
  imports: [ProductItem, ModalProductView],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  products=signal<Product[]>([
    {
      id:1,
      name:'ensemble moderne',
      description:'manifique tenue de ville ou de bureau',
      soldPrice:22000,
      regularPrice:28000,
      imageUrl:'assets/images/OIP (7).webp',
      createAt:new Date('2026-01-15'),
      categories:[' vetement', ' femme']
    },
    {
      id:2,
      name:'jean bleu',
      description:'s adapte a n importe quel style',
      soldPrice:7000,
      regularPrice:10000,
      imageUrl:'assets/images/OIP (11).webp',
      createAt:new Date('2026-02-10'),
      categories:[' vetement', ' femme']
      
    },
     {
      id:3,
      name:'ensemble leopard',
      description:'tres style',
      soldPrice:20000,
      regularPrice:25000,
      imageUrl:'assets/images/OIP (10).webp',
      createAt:new Date('2026-01-19'),
      categories:[' vetement', ' femme']
    }, 
    {
      id:4,
      name:'ensemble moderne ',
      description:'fait pour vous journe de travail',
      soldPrice:20000,
      regularPrice:12000,
      imageUrl:'assets/images/OIP (8).webp',
      createAt:new Date('2026-03-20'),
      categories:[' vetement', ' femme',]
    }, 
    {
      id:5,
      name:'jean ',
      description:'tendance',
      soldPrice:5000,
      regularPrice:7000,
      imageUrl:'assets/images/OIP (9).webp',
      createAt:new Date('2026-03-10'),
      categories:[ ' vetement', ' femme', ]
    },
    {
      id:6,
      name:'ensemble tendance',
      description:'ensemble decontracte',
      soldPrice:20000,
      regularPrice:27000,
      imageUrl:'assets/images/OIP (12).webp',
      createAt:new Date('2026-01-13'),
      categories:[' vetement', ' femme']
    },

  ])

   //Etat du modal
  isDisplayModal = signal(false);
  modalProduct = signal<Product| undefined>(undefined);


  // methode appele lorsque le produit est cliquer
    onDisplayProductViewModal(product:Product){
      this.modalProduct.set(product);
      this.isDisplayModal.set(true);

      // console.log('produit clique:',product);
      //faire quelque chose avec le produit
    }

    //Methode appele lorsque le modal demande a etre fermer
    onCloseModal(){
      this.isDisplayModal.set(false);
      this.modalProduct.set(undefined)
    }
  
   //nouveaux  output: retransmet vers app
   favoriteAdded=output<Product>();


    
   //methode appelee quand le modal ajoute aux favoris
   onFavoriteAdded(product:Product){
    console.log('favori ajouter:', product.name);
    this.favoriteAdded.emit(product);
   }

}

