import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenComponent } from './pages/men/men.component';
import { WomenComponent } from './pages/women/women.component';
import { LivingComponent } from './pages/living/living.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { NgbModule,NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenComponent,
    WomenComponent,
    LivingComponent,
    NavbarComponent
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
