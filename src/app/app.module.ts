import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { UserService } from './services/user.service';

import { AppComponent } from './app-root/app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
