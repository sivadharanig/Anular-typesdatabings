import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proprty-binding',
  templateUrl: './proprty-binding.component.html',
  styleUrls: ['./proprty-binding.component.css']
})
export class ProprtyBindingComponent implements OnInit {

  name:string="siva";
  event:boolean=true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.event=false;
    },2000);
  }

}
