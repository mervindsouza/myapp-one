import { Component, OnInit, Input } from '@angular/core';
// import { GridsterConfig, GridsterItem, GridType, DisplayGrid, CompactType, GridsterItemComponentInterface } from 'angular-gridster2';
import { User } from '../address-card/models/user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('user') user: User;
  isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

  toggleCollapsing() {
    this.isCollapsed = !this.isCollapsed;
  }
}
