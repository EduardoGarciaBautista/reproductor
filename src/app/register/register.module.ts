import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RegisterRoutingModule} from './register-routing.module';
import {RegisterFormComponent} from './components/register-form/register-form.component';
import {RegisterComponent} from './pages/register/register.component';
import {MaterialModule} from '../material/material.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [RegisterFormComponent, RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule {
}
