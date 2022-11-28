import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit {
  name:string='ravi';
  constructor() { }

  ngOnInit(): void {
  }
 onsub(){
    if(this.name=="ravi"){
      this.name="welcome";
    }
    else{
      this.name="angular01";
    }
  }
}
