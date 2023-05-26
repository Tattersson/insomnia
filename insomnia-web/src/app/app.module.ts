import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HeroComponent } from './hero/hero.component';
import { PartnersComponent } from './partners/partners.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewsComponent } from './news/news.component';
<<<<<<< HEAD
import { FooterComponent } from './footer/footer.component';
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogInComponent } from './login-register/log-in/log-in.component';
import { RegisterComponent } from './login-register/register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';

>>>>>>> b6b27f1366879961d5788eae745d5c490e0ac7d1






@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeroComponent,
    PartnersComponent,
    NewsComponent,
<<<<<<< HEAD
    FooterComponent,
=======
    LogInComponent,
    RegisterComponent,
>>>>>>> b6b27f1366879961d5788eae745d5c490e0ac7d1

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatTooltipModule,
    FontAwesomeModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
