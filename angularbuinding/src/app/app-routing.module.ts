import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SringbindingComponent} from 'src/app/combonents/sringbinding/sringbinding.component';
import {ComponentComponent} from 'src/app/combonents/component/component.component';
import {EventBindingComponent} from 'src/app/combonents/event-binding/event-binding.component';
import{ProprtyBindingComponent}from'src/app/combonents/proprty-binding/proprty-binding.component';
import{TwoWayBindingComponent}  from'src/app/combonents/two-way-binding/two-way-binding.component';
import { LifeCycleComponent } from './combonents/life-cycle/life-cycle.component';
const routes: Routes = [
  {path:'',component: ComponentComponent},
  {path:'string',component: SringbindingComponent},
  {path:'even',component: EventBindingComponent},
  {path:'pro',component: ProprtyBindingComponent},
  {path:'two-way',component: TwoWayBindingComponent},
  {path:'life-cycle',component:LifeCycleComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
