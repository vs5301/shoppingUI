import { APP_INITIALIZER,NgModule } from '@angular/core';
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
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './shared/cart/cart.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDialogModule } from '@angular/material/dialog';
import { TopwearComponent } from './pages/men-page/topwear/topwear.component';
import { BottomwearComponent } from './pages/men-page/bottomwear/bottomwear.component';
import { WesternwearComponent } from './pages/women-page/westernwear/westernwear.component';
import { DbService } from './services/db.service';

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
    WomenIndianComponent,
    CartComponent,
    TopwearComponent,
    BottomwearComponent,
    WesternwearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule,
    NgbDropdownModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    MatDialogModule,
    NgbCarouselModule
  ],
  providers: [
    DbService,
    { 
      provide: APP_INITIALIZER,
      useFactory: function(dbService: DbService) {
        return () => dbService.onLoad();
      },
      deps: [DbService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
