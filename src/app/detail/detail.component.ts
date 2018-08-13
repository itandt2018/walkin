import { Component, OnInit } from '@angular/core';
import { TestModel } from '../models/testmodel';
declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

   arraydata: any[] = [];

  constructor() { 
  

	  this.arraydata = TestModel.customerinfo; 
	  
	  console.log(this.arraydata);
  
  }

  ngOnInit() {
	  
	 
	  $("#mineModal").modal({backdrop: "static"});
	  
  }
  
  
   checkalldata(): any {

	var r = confirm("You are about to close this Dialog!");
    if (r == true) {
         $("#mineModal").modal("hide");
    } else {
      
    }

  }

}
