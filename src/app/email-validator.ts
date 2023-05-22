import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    // Doit être un email valide
    const emailRegex = RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
    const valid = emailRegex.test(control.value);

    const errors = {
        email: {
            rules: 'doit être un email valide'
        }
    };

    return !valid ? errors : null;
}
