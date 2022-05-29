import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-reactive-form-group',
  templateUrl: './reactive-form-group.component.html',
  styleUrls: ['./reactive-form-group.component.css']
})
export class ReactiveFormGroupComponent implements OnInit {

  profileForm= new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
  });

  constructor() { 

 
  }

  ngOnInit(): void {
  }


  onSubmit()
  {
      console.log(this.profileForm.value);
      console.log(this.profileForm.value.firstname);
  }


}
