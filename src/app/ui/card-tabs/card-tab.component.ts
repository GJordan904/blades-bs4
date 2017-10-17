import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-tab',
  styleUrls: ['./card-tabs.component.scss'],
  template: '<div [hidden]="!active"><ng-content></ng-content></div>'

})
export class CardTabComponent implements OnInit {
  @Input('title') title: string;
  @Input() active = false;

  constructor() { }

  ngOnInit() {
  }

}
