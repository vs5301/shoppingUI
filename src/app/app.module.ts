import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenComponent } from './pages/men-page/men/men.component';
import { WomenComponent } from './pages/women-page/women/women.component';
import { LivingComponent } from './pages/living/living.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './shared/footer/footer.component';
import { MenIndianComponent } from './pages/men-page/men-indian/men-indian.component';
import { MenFootwearComponent } from './pages/men-page/men-footwear/men-footwear.component';
import { MenAccessoriesComponent } from './pages/men-page/men-accessories/men-accessories.component';
import { WomenAccessoriesComponent } from './pages/women-page/women-accessories/women-accessories.component';
import { WomenFootwearComponent } from './pages/women-page/women-footwear/women-footwear.component';
import { WomenIndianComponent } from './pages/women-page/women-indian/women-indian.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenComponent,
    WomenComponent,
    LivingComponent,
    NavbarComponent,
    FooterComponent,
    MenIndianComponent,
    MenFootwearComponent,
    MenAccessoriesComponent,
    WomenAccessoriesComponent,
    WomenFootwearComponent,
    WomenIndianComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
