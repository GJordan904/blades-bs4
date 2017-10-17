import { NgModule } from '@angular/core';
import {CardTabsComponent} from './card-tabs/card-tabs.component';
import {CardTabComponent} from './card-tabs/card-tab.component';
import {CommonModule} from '@angular/common';
import { ElInViewDirective } from './directives/el-in-view.directive';
import { AnimInViewComponent } from './anim-in-view/anim-in-view.component';
import { ParallaxDirective } from './directives/parallax/parallax.directive';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardTabsComponent,
    CardTabComponent,
    ElInViewDirective,
    AnimInViewComponent,
    ParallaxDirective,
    NavbarComponent,
  ],
  exports: [
    CardTabsComponent,
    CardTabComponent,
    ElInViewDirective,
    AnimInViewComponent,
    ParallaxDirective,
    NavbarComponent,
  ]
})
export class UiModule { }
