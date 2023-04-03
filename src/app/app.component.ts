import { Component } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter App';
  count:number=0;
  hundleIncrease=()=>{
    if(this.count<10)
    this.count=this.count+1;
    else
    this.count=this.count;
  }
  hundleDecrease=()=>{
    if(this.count>0)
    this.count=this.count-1;
    else
    this.count=this.count;
  }
  hundleReset=()=>{
    this.count=0;
  }
}
