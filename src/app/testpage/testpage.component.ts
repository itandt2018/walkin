import { Component, OnInit } from '@angular/core';
import { TestModel } from '../models/testmodel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.css']
})
export class TestpageComponent implements OnInit {

  name = "therapy";
  
  statnumber: number;
  
  statid: any;
  
  

 constructor(private route: ActivatedRoute) { 
 
 this.statnumber  = TestModel.aStaticCounter;
 
 this.statid = this.route.snapshot.paramMap.get('id');
 
 }

  ngOnInit() {
  }

  
  
  
}
