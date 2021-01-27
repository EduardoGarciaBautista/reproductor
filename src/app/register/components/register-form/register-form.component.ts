import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SUCCESSFUL_REGISTER} from '@constants/MessageConstant';
import {RegisterService} from '@core/services/register.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
})
export class RegisterFormComponent implements OnInit {

    registerForm: FormGroup;
    durationInSeconds = 5;

    constructor(private fb: FormBuilder,
                private snackBar: MatSnackBar,
                private registerService: RegisterService,
                private router: Router) {

        this.registerForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            name: ['', [Validators.required, Validators.maxLength(30)]],
            lastName: ['', [Validators.required, Validators.maxLength(60)]],
            phoneNumber: ['', [Validators.required, Validators.maxLength(10)]],
            location: ['', [Validators.required, Validators.maxLength(100)]],
            age: [0, [Validators.required]],
            curp: ['', [Validators.required, Validators.maxLength(18)]],
        });
    }

    ngOnInit(): void {
    }

    onSubmit(event: Event): void {
        event.preventDefault();
        if (this.registerForm.valid) {
            this.registerService.saveRegister(this.registerForm.value)
                .then(() => {
                    this.openSnackBar();
                    this.registerForm.reset();
                })
                .catch(er => {
                    console.log(er);
                });
        }
    }

    hasError(field: string, error: string): boolean {
        return this.registerForm.controls[field].hasError(error);
    }

    openSnackBar(): void {
        this.snackBar.open(SUCCESSFUL_REGISTER, 'OK', {
            duration: this.durationInSeconds * 1000,
        });
    }

    cancel(): void {
        this.router.navigate(['/home']);
    }
}
