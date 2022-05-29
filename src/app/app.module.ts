import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormGroupComponent } from './reactive-form-group/reactive-form-group.component';
import { ReactiveFormgroupNestedComponent } from './reactive-formgroup-nested/reactive-formgroup-nested.component';
import { SpinnerComponent } from './spinner/spinner.component';
import {MatCardModule} from '@angular/material/card';
import { NgxSpinnerModule } from "ngx-spinner";
import { Spinner2Component } from './spinner2/spinner2.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { Spinner3Component } from './spinner3/spinner3.component';
import { SpinnersAngularModule } from 'spinners-angular';
import { CustomSpinnerComponent } from './custom-spinner/custom-spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    ReactiveFormGroupComponent,
    ReactiveFormgroupNestedComponent,
    SpinnerComponent,
    Spinner2Component,
    FormbuilderComponent,
    FormValidationComponent,
    Spinner3Component,
    CustomSpinnerComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatCardModule,
    NgxSpinnerModule,
    SpinnersAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
