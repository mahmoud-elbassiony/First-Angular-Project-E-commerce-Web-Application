import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

// export function matchPassword(): ValidatorFn {
//   return (control: AbstractControl): ValidationErrors | null => {
//     let password = control.get('password');
//     let confirmPassword = control.get('confirmPass');
//     if (
//       password &&
//       confirmPassword &&
//       password?.value !== confirmPassword?.value
//     ) {
//       return { passwordMatchError: true };
//     } else {
//       return null;
//     }
//   };
// }
// export const matchPassword: ValidatorFn = (
//   control: AbstractControl
// ): ValidationErrors | null => {
//   let password = control.get('password');
//   let confirmPassword = control.get('confirmPass');
//   if (
//     password &&
//     confirmPassword &&
//     password?.value !== confirmPassword?.value
//   ) {
//     return { passwordMatchError: true };
//   }
//   return null;
// };

// export class CustomValidators {
//   static MatchValidator(source: string, target: string): ValidatorFn {
//     return (control: AbstractControl): ValidationErrors | null => {
//       const sourceCtrl = control.get(source);
//       const targetCtrl = control.get(target);

//       return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
//         ? { mismatch: true }
//         : null;
//     };
//   }
// }

export function ConfirmPasswordValidator(
  controlName: string,
  matchingControlName: string
) {
  return (formGroup: FormGroup) => {
    let control = formGroup.controls[controlName];
    let matchingControl = formGroup.controls[matchingControlName];
    if (
      matchingControl.errors &&
      !matchingControl.errors?.['confirmPasswordValidator']
    ) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmPasswordValidator: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

export function matchValidator(
  matchTo: string,
  reverse?: boolean
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.parent && reverse) {
      const c = (control.parent?.controls as any)[matchTo] as AbstractControl;
      if (c) {
        c.updateValueAndValidity();
      }
      return null;
    }
    return !!control.parent &&
      !!control.parent.value &&
      control.value === (control.parent?.controls as any)[matchTo].value
      ? null
      : { matching: true };
  };
}
