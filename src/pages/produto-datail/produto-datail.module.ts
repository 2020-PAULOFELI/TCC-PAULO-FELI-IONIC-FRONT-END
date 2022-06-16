import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdutoDatailPage } from './produto-datail';

@NgModule({
  declarations: [
    ProdutoDatailPage,
  ],
  imports: [
    IonicPageModule.forChild(ProdutoDatailPage),
  ],
})
export class ProdutoDatailPageModule {}
