import {Subject} from 'rxjs/Subject';
import {ScrollService} from '../../services/scroll.service';
import {AfterViewInit, ElementRef, OnDestroy, OnInit} from '@angular/core';

export class ManageVisibility implements OnInit, AfterViewInit, OnDestroy{
  eivVisible: boolean;
  offsetTop: number;
  ngUnsubscribe = new Subject<void>();

  constructor(public el: ElementRef, public scroll: ScrollService) { }

  ngOnInit(): void {
    this.eivVisible = false;
    this.offsetTop = this.scroll.getOffsetTop(this.el);
  }

  ngAfterViewInit(): void {
    this.manageVisibility();

    this.scroll.scrollObs.takeUntil(this.ngUnsubscribe)
      .subscribe(() => this.manageVisibility());

    this.scroll.resizeObs.takeUntil(this.ngUnsubscribe)
      .subscribe(() => this.manageVisibility());
  }

  ngOnDestroy():void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  /**
   * check for visibility of element
   */
  manageVisibility(): void {

  }

}