import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signupForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  validation_messages = {
    'firstName': [
      { type: 'required', message: 'first name is required.' },
      { type: 'minlength', message: 'first name must be at least 5 characters' }
    ],
    'lastName': [
      { type: 'required', message: 'lastName is required.' },
      { type: 'minlength', message: 'last name must be at least 5 characters' }
    ],
    'ID': [
      { type: 'required', message: 'ID is required.' },
      { type: 'minlength', message: 'Please enter a valid ID.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      lastName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      ID: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    })
  }

  register() {
    localStorage.setItem("user", JSON.stringify(this.signupForm.value))
    this.navCtrl.navigateBack('/login');
  }

  goLoginPage(){
    this.navCtrl.navigateBack('');
  }

}
