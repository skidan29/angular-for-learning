import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StyleDirective } from './directives/style.directive';
import { TestPageComponent } from './test-page/test-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimateComponent } from './animate/animate.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleDirective,
    TestPageComponent,
    AnimateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
