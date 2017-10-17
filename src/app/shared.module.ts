import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UiModule} from './ui/ui.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UiModule
  ],
  declarations: [],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    UiModule,
  ]
})
export class SharedModule { }
