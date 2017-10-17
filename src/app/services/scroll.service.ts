// modified version of from https://github.com/abhazelton/animate-on-scroll
import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

@Injectable()
export class ScrollService implements OnDestroy {

  scrollObs: Observable<any>;
  resizeObs: Observable<any>;
  pos: number;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor() {

    // set initial value
    this.manageScrollPos();

    // create observable that we can subscribe to from component or directive
    this.scrollObs = Observable.fromEvent(window, 'scroll');

    // initiate subscription to update values
    this.scrollObs.takeUntil(this.ngUnsubscribe)
      .subscribe(() => this.manageScrollPos());

    // create observable for changes in screen size
    this.resizeObs = Observable.fromEvent(window, 'resize');

    // initiate subscription to update values
    this.resizeObs.takeUntil(this.ngUnsubscribe)
      .subscribe(() => this.manageScrollPos());

  }


  private manageScrollPos(): void {

    // update service property
    this.pos = window.pageYOffset;

  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  /**
   * get window height utility function
   *
   * @returns void
   */
  public getWinHeight(): number {

    return window.screen.height;

  }

  /**
   * get offsetTop value for element
   *
   * @returns void
   */
  public getOffsetTop(el): number {

    const viewportTop = el.nativeElement.getBoundingClientRect().top;
    const clientTop = el.nativeElement.clientTop;

    // get vertical position for selected element
    return viewportTop + this.pos - clientTop;

  }

  /**
   * get offsetBottom value for element
   *
   * @returns void
   */
  public getOffsetBottom(el): number {

    const viewportTop = el.nativeElement.getBoundingClientRect().top;
    const clientBottom = el.nativeElement.clientTop + el.nativeElement.clientHeight;

    // get vertical position for selected element
    return viewportTop + this.pos - clientBottom;

  }

}
