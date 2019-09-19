import { Subject } from 'rxjs';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-decoration-sub',
  templateUrl: './decoration-sub.component.html'
})
export class DecorationSubComponent implements OnInit {
  @Output() notifyParent = new Subject<string>();
  constructor() { }

  ngOnInit() {

  }
  onClickInSon() {
    this.notifyParent.next("hi from son");
  }
}
