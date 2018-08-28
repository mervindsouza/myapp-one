import { Component, OnInit } from '@angular/core';
import { User } from './address-card/models/user.model';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: User;
  inputText = 'Initial Value';

  // constructor() {
  //   // this.user = new User();
  //   // this.user.name = 'John Smith';
  //   // this.user.address = '1234 Abc Ave, Main Ct, City, State, Country';
  //   // this.user.designation = 'Software Engineer';
  //   // this.user.phone = ['+13123123122', '8672341234'];
  // }

  constructor(private svc: TestService, private http: HttpClient) {
    this.svc.printToConsole('Printing from App Component');
  }

  ngOnInit() {
    let obs = this.http.get('https://api.github.com/users/mervindsouza');
    obs.subscribe((response) => console.log(response));
  }
}
