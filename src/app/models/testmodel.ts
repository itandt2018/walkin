import { Http, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';

export class TestModel {

   public id: number;
   public title: string;
   public author: string;
   public url?: string;
   
   public modelallwings: any;
   
   static customerinfo: any;
   
   static aStaticCounter: any = 24;
   
    constructor() {
		
		this.modelallwings = "hello";
		
		
	}
   
    static aStaticMethod() {
     console.log("This is a static method");
   }
   
   
   
   
   
   
   
 
 
 
 
 
 
 
 
 
 
 
 

	   
	   
roomnames: any[] = [
  {
	id: 0,
	dname: "King Suite"
  },
  {
	 id: 1,
	 dname: "Presidential"  
  }
  ,
  {
	 id: 2,
	 dname: "Duplex"  
  }
 
    ];
	
availablerooms: any[] = [
  {
	id: 0,
	name: "Room 401",
	catname: "King Suite",
	category: 0
  },
  {
	 id: 1,
	name: "Room 402",
	catname: "Presidential",
	 category: 1
  }
  ,
  {
	 id: 2,
	 name: "Room 403",
	 catname: "Duplex",
     category: 2	 
  }
 
    ];
	

 
 
 
 }