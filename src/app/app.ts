import { Component, signal , computed} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Container } from './components/container/container';
import { Product } from './models/product';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header ,Footer, Container],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('jour_7');

  favorites= signal<Product[]>([]);
  // favoritesCount = signal(0);


  onFavoriteAdded(product:Product){
      // this.favoritesCount.update(count => count + 1)
    //elle verifie si l id d un produit est deja en favori   
    const exists=this.favorites().some(p=>p.id === product.id);
    if (exists){
      console.log('ce produit est deja en favori');
      return;
    }

    this.favorites.update(favorites=>[...favorites, product])

    console.log('Total favoris:', this.favoritesCount());
    // this.favoritesCount.set(product)
  }
    favoritesCount= computed(()=>this.favorites().length)

}
