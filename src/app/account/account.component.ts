import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  dateMsg: string;

  constructor() {
    setInterval(() => {
      let _currentDate = new Date();
      this.dateMsg = _currentDate.toDateString() + ' ' + _currentDate.toLocaleTimeString();
    }, 1000);
  }

  ngOnInit() {
  }

}
