import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { matchValidator } from 'src/app/matchPassword';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  trachIcon: any = faTrash;
  registerForm: FormGroup;
  userNameReg: string = '^[a-zA-Z0-9.-_$@*!]{4,30}$';
  passwordReg: string =
    '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';
  lettersReg: string = '[a-zA-Z]{1,}';
  addressReg: string = '^(?=.*?[a-zA-Z]).{1,}$';

  createAddress(): FormGroup {
    let addressForm = new FormGroup({
      address: new FormControl('', [
        Validators.required,
        Validators.pattern(this.addressReg),
      ]),
      street: new FormControl('', [
        Validators.required,
        Validators.pattern(this.addressReg),
      ]),
      city: new FormControl('', [
        Validators.required,
        Validators.pattern(this.lettersReg),
      ]),
      country: new FormControl('', [
        Validators.required,
        Validators.pattern(this.lettersReg),
      ]),
    });
    return addressForm;
  }

  constructor() {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      userName: new FormControl('', [
        Validators.required,
        Validators.pattern(this.userNameReg),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(this.passwordReg),
        matchValidator('confirmPass', true),
      ]),
      confirmPass: new FormControl('', [
        Validators.required,
        matchValidator('password'),
      ]),
      addresses: new FormArray([this.createAddress()]),
    });
  }

  handleSubmit() {
    console.log(this.registerForm);
  }
  get addresses(): FormArray {
    return this.registerForm.controls['addresses'] as FormArray;
  }

  addAddress() {
    this.addresses.push(this.createAddress());
  }

  removeAddress(i: number) {
    this.addresses.removeAt(i);
  }
}
