import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {ScrollService} from '../../../services/scroll.service';
import {ManageVisibility} from '../manage-visibility.class';
import {ParallaxConfig} from './parallax.config';

@Directive({
  selector: '[parallax]'
})
export class ParallaxDirective extends ManageVisibility{
  @Input('parallax')parallax: ParallaxConfig;

  constructor(public el: ElementRef, public scroll: ScrollService) {
    super(el, scroll);
  }

  ngOnInit() {
    let config = {
      startPosition: 0,
      ratio: .5,
      cssUnit: 'px',
      maxValue: 0,
      minValue: 0
    };
    this.parallax = {
      ...config,
      ...this.parallax,
    };
    super.ngOnInit();
  }

  /**
   * check for visibility of element
   */
  manageVisibility(): void {
    const winHeight = this.scroll.getWinHeight();

    const scrollTrigger = this.offsetTop - winHeight;

    if (!this.eivVisible && this.scroll.pos >= scrollTrigger) {
      this.eivVisible = true;

    }

    if(this.eivVisible) {
      let resultVal: string;
      let calcVal: number;

      calcVal = ((this.scroll.pos * this.parallax.ratio) + this.parallax.startPosition) *  -1;

      if (this.parallax.maxValue && calcVal >= this.parallax.maxValue)
        calcVal = this.parallax.maxValue;
      else if (this.parallax.minValue && calcVal <= this.parallax.minValue)
        calcVal = this.parallax.minValue;

      // added after realizing original setup wasn't compatible in Firefox
      // debugger;
      resultVal = 'center calc(50% + ' + calcVal + this.parallax.cssUnit + ')';

      this.el.nativeElement.style['backgroundPosition'] = resultVal;
    }

    if (this.eivVisible && this.scroll.pos < scrollTrigger) {
      this.eivVisible = false;
    }
  }
}
