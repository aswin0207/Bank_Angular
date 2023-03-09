import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // string interpolation

  acno:any
  psw:any

  data="Your Perfect Banking Partner"
  // property binding[property_name]="data1"
  data1="Enter Your ACC NO"
// userDetails:any={
//   1000:{username:"anu",acno:1000,password:"abc123",balance:0},
//   1001:{username:"anu",acno:1001,password:"abc123",balance:0},
//   1002:{username:"anu",acno:1002,password:"abc123",balance:0},
//   1003:{username:"anu",acno:1003,password:"abc123",balance:0},

// }

constructor(private router:Router,private ds:DataService){}
// methods
login(){
  var acno=this.acno
  var psw=this.psw
const result=this.ds.login(acno,psw)
if (result){
  alert("login success")
  this.router.navigateByUrl("dashboard")
}
else{
  alert("incorrect account number or password")
}
}
}









  // alert('login sucesss')
//  if(acnum in userDetails ){
//     if(psw==userDetails[acnum]["password"]){
//       alert("login sucess")
//       // redirection
//       this.router.navigateByUrl("dashboard")

//     }
//     else{
//       alert("incorrect password")
//     }
//   }
//   else{
//     alert("incorrect account number")
//   }
// }

// acnoChange(event:any){
//   this.acno=event.target.value
//   // console.log(this.acno);
  
// }
// pswChange(event:any){
//   this.psw=event.target.value
//   // console.log(this.psw);
  
// }
// }
