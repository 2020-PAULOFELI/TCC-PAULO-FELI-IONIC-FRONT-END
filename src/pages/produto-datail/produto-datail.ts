import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutoDTO } from '../../app/models/produto.dto';
import { API_CONFIG } from '../../config/api.config';
import { CartService } from '../../services/domain/cart.service';
import { ProdutoService } from '../../services/domain/produto.service';

/**
 * Generated class for the ProdutoDatailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produto-datail',
  templateUrl: 'produto-datail.html',
})
export class ProdutoDatailPage {

  item: ProdutoDTO;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public produtoService: ProdutoService,
    public cartService: CartService) {
  }

  ionViewDidLoad() {
    let produto_id = this.navParams.get('produto_id');
    this.produtoService.findById(produto_id)
      .subscribe(response => {
        this.item = response;
        this.getImageUrlIfExists();
      },
      error =>{})
    
  }
  getImageUrlIfExists() {
    this.produtoService.getImageFromBucket(this.item.id) 
      .subscribe(resposne => {
        this.item.imageUrl= `${API_CONFIG.bucketBaseUrl}/prod${this.item.id}.jpg`;
      }, 
      error => {})
  }
  addToCart(produto: ProdutoDTO) {
    this.cartService.addPruduto(produto);
    this.navCtrl.setRoot('CartPage');
  }
}
