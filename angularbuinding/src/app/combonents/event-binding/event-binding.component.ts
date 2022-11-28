import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  siva:string="online";
  constructor() {
  
    }

  ngOnInit(): void {
  }
  onsiva(){
    
    if(this.siva=="online"){
      this.siva="offline";
    }
    else{
      this.siva="online";
    }
  }
  
  

}
