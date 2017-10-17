import {AfterViewInit, Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'anim-in-view',
  template: `<div elInView
                  (show)="show($event)"
                  [ngClass]="setClasses">
                <ng-content></ng-content>
            </div>
  `
})
export class AnimInViewComponent implements AfterViewInit{
  @Input('classes')classes: string;
  visible = false;
  setClasses = {};

  constructor() { }

  ngAfterViewInit(): void {
    this.setClass();
  }

  show(el: ElementRef) {
    this.visible = true;
    this.setClass();
  }

  setClass() {
    this.setClasses = {
      'animated ': this.visible,
      [this.classes]: this.visible,
      'invisible': !this.visible
    }
  }
}
