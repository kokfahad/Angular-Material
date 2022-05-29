import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-spinner2',
  templateUrl: './spinner2.component.html',
  styleUrls: ['./spinner2.component.css']
})
export class Spinner2Component implements OnInit {

  constructor(private spinner: NgxSpinnerService) {
    
   }

   ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }
}


