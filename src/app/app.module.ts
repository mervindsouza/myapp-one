import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { GridsterModule} from 'angular-gridster2';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AddressCardComponent
  ],
  imports: [
    BrowserModule,
    GridsterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
