import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent implements OnInit {

  
  profileForm = this.fb.group({
    firstname:[''],
    lastname:[''],
    address:this.fb.group({
      street:[''],
      city:[''],
      state:[''],
      zip:['']
    })
  });


  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.profileForm.value);
    console.log(this.profileForm.value.firstname);

    console.log(this.profileForm.value.address.zip);
  }
  
}
