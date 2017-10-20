import {Component, ElementRef, ViewChild} from '@angular/core';
import {ScrollService} from '../../services/scroll.service';
import {ManageVisibility} from '../directives/manage-visibility.class';
import {
  navbarBgAnimation, navbarLinkAnimation, navbarLogoAnimation,
  navbarLowerLinkAnimation, navbarNavAnimation, upperNavbarNavAnimation
} from './navbar.animations';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    navbarBgAnimation(),
    navbarLinkAnimation(),
    navbarLogoAnimation(),
    navbarNavAnimation(),
    navbarLowerLinkAnimation(),
    upperNavbarNavAnimation()
  ]
})
export class NavbarComponent extends ManageVisibility {
  @ViewChild('navbar')navbar: ElementRef;
  private elHeight: number;
  public location = 'above';
  public upperNavStyles = {width: '100%'};

  constructor(public el: ElementRef, public scroll: ScrollService) {
    super(el, scroll);
  }

  ngAfterViewInit():void {
    this.elHeight = this.navbar.nativeElement.offsetHeight;

    const trigger = this.getTrigger();
    this.location = trigger < this.scroll.pos ? 'below' : 'above';

    super.ngAfterViewInit();
  }

  manageVisibility() {
    const trigger = this.getTrigger();

    if (!this.eivVisible && this.scroll.pos >= trigger) {
      this.eivVisible = true;
      this.location = 'below';
      this.upperNavStyles.width = '25%';
    }

    if(this.eivVisible && this.scroll.pos < trigger) {
      this.eivVisible = false;
      this.location = 'above';
      this.upperNavStyles.width = '100%';
    }
  }

  private getTrigger(): number {
    const winHeight = this.scroll.getWinHeight();
    return winHeight / 2;
  }
}
