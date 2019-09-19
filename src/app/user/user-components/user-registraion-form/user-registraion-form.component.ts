
import { UserHttpService } from './../../user-services/user-http.service';


import { ActivatedRoute, Params, Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { MustMatch } from '@app/_directives/_validators/must-match.validator';
import { UserDataService } from '@app/user/user-services/user-data.service';



// import custom validator to validate that password and confirm password fields match



@Component({
  selector: 'app-user-registraion-form',
  templateUrl: './user-registraion-form.component.html'

})
export class UserRegiatraionForm implements OnInit {
  id: number;
  editMode = false;
  registerForm: FormGroup;


  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userService: UserDataService,
    private userHttpService: UserHttpService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });

  }
  onSubmit() {
    if (this.editMode) {
      this.userHttpService.updateUser(this.registerForm.value).subscribe(
        () => {
          this.userService.updateUser(this.id, this.registerForm.value);
        }
      )
    } else {
      this.userHttpService.storeUsers(this.registerForm.value).subscribe(
        (resp) => {
          this.userService.addUser(resp["value"]);
          this.router.navigate(['/'], { relativeTo: this.route });
        }
      )

    }
    this.onCancel();
  }
  onCancel() {
    this.router.navigate(['/'], { relativeTo: this.route });
  }
  get f() { return this.registerForm.controls; }
  get myWifes() {
    return this.registerForm.get('wifes') as FormArray;
  }
  private initForm() {
    let firstName = '';
    let lastName = '';
    let password = '';
    let email = '';

    if (this.editMode) {
      const user = this.userService.getUser(this.id);

      firstName = user.firstName;
      lastName = user.lastName;
      password = user.password;
      email = user.email;
    }
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: [firstName, Validators.required],
      lastName: [lastName, Validators.required],
      email: [email, [Validators.required, Validators.email]],
      password: [password, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [password, Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
      wifes: this.formBuilder.array(
        [
          this.formBuilder.control('')
        ])
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

}

/*   // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']); */