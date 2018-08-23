import { Component } from '@angular/core';
import { User } from './address-card/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  inputText = 'Initial Value';

  constructor() {
    this.user = new User();
    this.user.name = 'John Smith';
    this.user.address = '1234 Abc Ave, Main Ct, City, State, Country';
    this.user.designation = 'Software Engineer';
    this.user.phone = ['+13123123122', '8672341234'];
  }
}
