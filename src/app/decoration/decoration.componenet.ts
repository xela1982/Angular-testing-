import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decoration-comp',
  templateUrl: './decoration.component.html'

})
export class DecorationComponent implements OnInit {
  message: string;
  birthday = new Date(1988, 3, 15); // April 15, 1988
  constructor() { }

  ngOnInit() {


  }
  onNotifyParent($event: string) {
    this.message = $event;
  }


}
