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
    this.count=this.count+1;
  }
  hundleDecrease=()=>{
    this.count=this.count-1;
  }
  hundleReset=()=>{
    this.count=0;
  }
}
