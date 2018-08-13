import { Component, OnInit } from '@angular/core';
import { TestModel } from '../models/testmodel';
import { ApiserviceService } from '../apiservice/apiservice.service';
import { Observable } from 'rxjs';
import { Http, Headers, RequestOptions} from '@angular/http';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { Router } from '@angular/router'; 
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {
	
    public dmodel: TestModel; 
	
	name: string;
	
	staticnumber: number;
	
	namevalue: string;
	
	showroomvalue: string;
	
	posts: any;
	
	allwings: any;
	
	allfloors: any;
	
	allrooms: any;
	
	allrates: any[] = [];
	
	allratetype: any;
	
	allbizsourceype: any;
	
	alltaxes: any[] = [];
	
    myimage: string = 'assets/regencylogo.png';

	array1: any[] = [];
	
	array2: any[] = [];
	
	array3: any[] = [];
	
	array4: any[] = [];
	
	arraydata: any[] = [];
	
	arrayrates: any[] = [];
	
	arraybizness: any[] = [];
	
	showvalue: number = 4;

	floorvalue: string = "";
	roomvalue: string = "";
	
	loadapi: string = "....loading wings API";
	
	taxa: boolean = false;
	
	taxb: boolean = false;
	
	taxc: boolean = false;
	
	selecttaxes: any = {};
	
	dnights: number;
	
	dmarkets: string;
	
	exadult: number;
	
	exchild: number;
	
	
	
	

	
  constructor(private http: Http, private router: Router) {

    this.dmodel = new TestModel();
	
	this.staticnumber = TestModel.customerinfo;

	
	//TestModel.aStaticMethod();
	
	
	
    this.makeGetRequest();

    this.getfloors(); 
	
	this.getrooms();
	
	this.getrates();
	
	this.getaxes();
	
	this.getratetypes();
	
	this.getbizsource();
	

  }

  ngOnInit() {
   
  //alert(this.allwings);
   
  }
  
  openpage(): void{
	  
	   $("#myModal").modal("hide");
	  this.router.navigate(['/detail']); 
  }
  

  showmarket(): void {
	  
	if (this.dmarkets == "show"){
		this.dmarkets = ""
	} 
    else{
		this.dmarkets = "show"
		
	}	
	

  }
  
  checkalldata(): any {

	var r = confirm("You are about to close this Dialog!");
    if (r == true) {
         $("#myModal").modal("hide");
    } else {
      
    }

  }
  
  
  date: Date  = new Date();
  
    settings = {
        bigBanner: false,
        timePicker: false,
        format: 'dd/MM/yyyy',
        defaultOpen: false,
		closeOnSelect: true
    }
	
	
 onDateSelect(event: AngularDateTimePickerModule) {
        	

		var d1 = new Date();
		var d2 = new Date(this.date);
        var d1month = d1.getMonth() + 1;
		var d3 =  d1.getFullYear() + "-" + d1month + "-" + d1.getDate();
		
		var d2month = d2.getMonth() + 1;
		var d4 =  d2.getFullYear() + "-" + d2month + "-" + d2.getDate();

		var d5 = new Date(d3);
		var d6 = new Date(d4);
		
		if (d6 < d5){
			
			alert("Enter Valid Date");
		}
		
		else {
			
		var diff = Math.abs(d6-d5);  
		let diff2 = (diff / 86400000>>0);

		this.dnights = diff2;
		
		var ddate = {selectdate: d4};
		
		var ddays = {selectdays: diff2};

		this.arraydata[2] = "";
		
		this.arraydata[3] = "";
		
		this.arraydata[4] = {};
		
		this.selecttaxes = {};
		


	   if(this.taxa == true){this.selecttaxes.taxa = "Service Charge";}
	   if(this.taxb == true){this.selecttaxes.taxb = "Consumption Tax";}
	   if(this.taxc == true){this.selecttaxes.taxc = "VAT";}
	   
	   

		this.arraydata.splice(2, 1, ddate);
		
		this.arraydata.splice(3, 1, ddays);
		
		this.arraydata.splice(4, 1, this.selecttaxes);
		
		console.log(this.arraydata);
		
		TestModel.customerinfo = this.arraydata;

		}

    }
	
	
	selectratetype(): void {
		
		var x = document.getElementById("selectrate")["value"];
		var i = 0;
		this.arrayrates = [];

		  for(i;i<this.allrates.length;i++){
			 
		  if (this.allrates[i].rate_type.id == x){

			this.arrayrates.push(this.allrates[i]);
	  }
    }
			
 }
 
 
 selectratename(): void {
		
		var x = document.getElementById("getratename")["value"];
		var i = 0;
		
		this.arraydata[1] = {};
		
		//delete this.arraydata[1];

		  for(i;i<this.arrayrates.length;i++){
			 
		  if (this.arrayrates[i].id == x){

			this.arraydata.splice(1, 1, this.arrayrates[i]);

	  }
    }
			
 }
 
	

  selectwing(): void {
    var x = document.getElementById("selected")["value"];
	var i = 0;
	this.array1 = [];

	  for(i;i<this.allfloors.length;i++){
	     
      if (this.allfloors[i].wing.id == x){
		  
		this.floorvalue  = "show";
		
		this.array1.push(this.allfloors[i]);
		console.log(this.array1);
		
	  }
    }

}

 selectroomtype(): void {
    var y = document.getElementById("selectfloor")["value"];
	var i = 0;
    this.array2 = [];
	
   for(i;i<this.allrooms.length;i++){
	     
      if (this.allrooms[i].floor.id == y){
		  
		this.roomvalue  = "showing";
		
		this.array2.push(this.allrooms[i]);
		
	  }
    }
	
    
}


 displayroom(): void {
    var y = document.getElementById("selectroom")["value"];
	var i = 0;
   this.array3 = [];
   this.arraydata[0] = {};
	
    //alert(y);

	  for(i;i<this.allrooms.length;i++){
	     
      if (this.allrooms[i].id == y){
		  
		this.showroomvalue  = "showing";
		
		this.array3.push(this.allrooms[i]);
		
		this.arraydata.splice(0, 1, this.allrooms[i]);
		
		//console.log(this.arraydata[0]);
	  }
    }

    
}

selectbizness(): void {
    var y = document.getElementById("selectbizness")["value"];
	var i = 0;
    this.arraybizness = [];
	
   for(i;i<this.allbizsourceype.length;i++){
	     
      if (this.allbizsourceype[i].business_source_type.id == y){
		  

		this.arraybizness.push(this.allbizsourceype[i]);
		
	  }
    }
	  
 } 
 
 
 selectbizsource(): void {
    var y = document.getElementById("selectbizsource")["value"];
	var i = 0;

   for(i;i<this.arraybizness.length;i++){
	     
      if (this.arraybizness[i].id == y){
		  
         var dsource = this.arraybizness[i];
		 
		 
         this.arraydata[5] = {};

         this.arraydata.splice(5, 1, dsource);

	  }
    }
	  
 } 
 


showwings() : void { 
      
    this.floorvalue = "";
	this.roomvalue = "";
	this.showroomvalue = "";
 //this.allwings = this.makeGetRequest();
   

 } 


////////////////////MAKE API CALLS


	makeGetRequest() {
			
	let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
	
        //this.http.get("http://192.168.2.28/api/v1/Wings.json", {}, options)
		this.http.get("http://192.168.2.28/api/v1/Wings.json")
        .subscribe(data => {
			
			//console.log(data.json().wings);
			
			this.allwings = data.json().wings;
			
			this.loadapi = "";
			
			return data.json().wings;

            
        }, error => {
            console.log(JSON.stringify(error.json()) + " error occured");
        });
    }
   
   
   
   
   getfloors() {

        this.http.get("http://192.168.2.28/api/v1/Floors.json")
        .subscribe(data => {

		   this.allfloors = data.json().floors;

        }, error => {
            console.log(JSON.stringify(error.json()) + " error for api floors occured");
        });
    }
	
	
	 getrooms() {

        this.http.get("http://192.168.2.28/api/v1/rooms.json")
        .subscribe(data => {

			//console.log(data.json().rooms);
			
			this.allrooms = data.json().rooms;
 
        }, error => {
            console.log(JSON.stringify(error.json()) + " error for api rooms occured");
        });
    }
	
	getrates() {

        this.http.get("http://192.168.2.28/api/v1/Rates.json")
        .subscribe(data => {

			//console.log(data.json().rates);
			
			this.allrates = data.json().rates;
 
        }, error => {
            console.log(JSON.stringify(error.json()) + " error for api rates occured");
        });
    }
	
	getaxes() { 

        this.http.get("http://192.168.2.28/api/v1/taxes.json")
        .subscribe(data => {

			//console.log(data.json().taxes);
			
			this.alltaxes = data.json().taxes;
 
        }, error => {
            console.log(JSON.stringify(error.json()) + " error for taxes occured");
        });
    }
	
	
	getratetypes() { 

        this.http.get("http://192.168.2.28/api/v1/rate%20types.json")
        .subscribe(data => {
			
			this.allratetype = data.json().rateTypes;
 
        }, error => {
            console.log(JSON.stringify(error.json()) + " error for rate types occured");
        });
    }
	
	
	getbizsource() { 

        this.http.get("http://192.168.2.28/api/v1/businessSources.json")
        .subscribe(data => {

			console.log(data.json().businessSources);
			
			this.allbizsourceype = data.json().businessSources;
 
        }, error => {
            console.log(JSON.stringify(error.json()) + " error for business source types occured");
        });
    }
	
 ////////POST API CALLS  
 
 postRequest(): void {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
 
    let postParams = {
      title: 'ejiro',
      body: 'eba too sweet',
      userId: 2
    }
    
    this.http.post("http://jsonplaceholder.typicode.com/posts", postParams, options)
      .subscribe(data => {
        console.log(data['_body']);
		//console.log(data.json());
       }, error => {
        console.log(error);// Error getting the data
      });
  }

////////////////////////////////////////////////////   
   
  


 showvalue1(dvalue: any) : void { 
      
  // this.name = this.mylists[dvalue].dname;
  
  TestModel.aStaticCounter = this.staticnumber;
   
   alert(TestModel.aStaticCounter);
 
 } 

   

}





