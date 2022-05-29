import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-formgroup-nested',
  templateUrl: './reactive-formgroup-nested.component.html',
  styleUrls: ['./reactive-formgroup-nested.component.css']
})
export class ReactiveFormgroupNestedComponent implements OnInit {

  profileForm=new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),

    address: new FormGroup({
    state: new FormControl(''),
    city:new FormControl(''),
    zip:new FormControl(''),
    street:new FormControl(''),
  })
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.profileForm.value);
    console.log(this.profileForm.value.firstname);

    console.log(this.profileForm.value.address.zip);
  }

  // updateProfile()
  // {
  //   this.profileForm.patchValue({
  //     firstname: 'Nancy',
  //     address: {
  //       street: '123 Drew Street'
  //     }
  //   });
  //   console.log(this.profileForm.value);
  // }

  updateProfile()
  {
   this.profileForm.value.firstname.setValue("Mash");
    console.log(this.profileForm.value);
  }

  

}
