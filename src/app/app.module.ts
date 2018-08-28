import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestService } from './test.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { GridsterModule } from 'angular-gridster2';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AddressCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GridsterModule,
    FormsModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
