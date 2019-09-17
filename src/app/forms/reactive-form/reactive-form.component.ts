import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { MustMatch } from '@app/_helpers/must-match.validator';

// import custom validator to validate that password and confirm password fields match



@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html'

})
export class ReactiveFormComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
      wifes: this.formBuilder.array(
        [
          this.formBuilder.control('')
        ])
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  get myWifes() {
    return this.registerForm.get('wifes') as FormArray;
  }
  onRead() {
    for (let item of this.myWifes.controls) {
      console.log(item.value);
    }
  }
  onSetName() {
    for (let item of this.myWifes.controls) {
      item.setValue(item.value + 'new value');
    }
  }
  onAddItems() {
    this.myWifes.push(this.formBuilder.control(''))
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }


  /*
  singel 
  onSetName() {
      this.name.setValue('value was set');
    }
    onRead() {
      var originalValue = this.name.value;
      this.name.setValue(originalValue + 'new value');
    }
    Group
     onSetName() {
      this.formInfo.patchValue({ firstName: "new value" })
    }
    onRead() {
      let firstName = this.formInfo.value["firstName"];
      this.formInfo.patchValue({ firstName: firstName + "new value" })
    }
    
    */
}
