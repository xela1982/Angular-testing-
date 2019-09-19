import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html'
})
export class TemplateFormComponent implements OnInit {

  model: any = {};
  constructor() { }

  ngOnInit(): void {

  }
  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));

  }

  /*   onSetName() {
      this.fname = "alex";
    }
    onRead() {
      this.fname = this.fname + "new";
    } */
}
