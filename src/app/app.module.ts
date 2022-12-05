import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { AddressComponent } from './components/address/address.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { FeaturesComponent } from './components/features/features.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    AddressComponent,
    FooterComponent,
    ContactComponent,
    FeaturesComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    NgbCarouselModule,
    FormsModule
    // Isso é chamado para usar o two binding no form/textarea
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
