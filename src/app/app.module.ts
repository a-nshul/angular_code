import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsletterSignupComponent } from './newsletter-signup/newsletter-signup.component';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
@NgModule({
  declarations: [
    AppComponent,
    NewsletterSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,BrowserModule, ReactiveFormsModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
