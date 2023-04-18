import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenComponent } from './pages/men-page/men/men.component';
import { WomenComponent } from './pages/women-page/women/women.component';
import { LivingComponent } from './pages/living/living.component';
import { MenFootwearComponent } from './pages/men-page/men-footwear/men-footwear.component';
import { MenIndianComponent } from './pages/men-page/men-indian/men-indian.component';
import { MenAccessoriesComponent } from './pages/men-page/men-accessories/men-accessories.component';
import { WomenFootwearComponent } from './pages/women-page/women-footwear/women-footwear.component';
import { WomenAccessoriesComponent } from './pages/women-page/women-accessories/women-accessories.component';
import { WomenIndianComponent } from './pages/women-page/women-indian/women-indian.component';
import { CartComponent } from './shared/cart/cart.component';
import { TopwearComponent } from './pages/men-page/topwear/topwear.component';
import { BottomwearComponent } from './pages/men-page/bottomwear/bottomwear.component';
import { WesternwearComponent } from './pages/women-page/westernwear/westernwear.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'men', component: MenComponent},
  {path: 'women', component: WomenComponent},
  {path: 'living', component: LivingComponent},
  {path: 'men-footwear', component: MenFootwearComponent},
  {path: 'men-indian', component: MenIndianComponent},
  {path: 'men-accessories', component: MenAccessoriesComponent},
  {path: 'women-footwear', component: WomenFootwearComponent},
  {path: 'women-indian', component: WomenIndianComponent},
  {path: 'women-accessories', component: WomenAccessoriesComponent},
  {path: 'cart', component: CartComponent},
  {path: 'topwear', component: TopwearComponent},
  {path: 'bottomwear', component: BottomwearComponent},
  {path: 'westernwear', component: WesternwearComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
