import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './combonents/component/component.component';
import { SringbindingComponent } from './combonents/sringbinding/sringbinding.component';
import { ProprtyBindingComponent } from './combonents/proprty-binding/proprty-binding.component';
import { EventBindingComponent } from './combonents/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './combonents/two-way-binding/two-way-binding.component';
import{LifeCycleComponent}from'./combonents/life-cycle/life-cycle.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    SringbindingComponent,
    ProprtyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    LifeCycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
