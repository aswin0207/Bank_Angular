
import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user:any
  // acno:any
  // psw:any
  // amnt:any

  // acno1:any
  // psw1:any
  // amnt1:any
  constructor(private ds:DataService,private router:Router, private fb:FormBuilder){
    //access data from dataservice and store in a variable
    this.user=this.ds.currentUser
  }

  // model for deposit form
depositForm=this.fb.group({
  acno1:['',[Validators.required,Validators.pattern('[0-9]+')]],
  psw1:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],
  amnt1:['',[Validators.required,Validators.pattern('[0-9]+')]]
})


  // model for withdraw form
  withdrawForm=this.fb.group({
    acno2:['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw2:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],
    amnt2:['',[Validators.required,Validators.pattern('[0-9 ]+')]]
  })


deposit(){
  var acno=this.depositForm.value.acno1
  var psw=this.depositForm.value.psw1
  var amnt=this.depositForm.value.amnt1
  if(this.depositForm.valid){
    const result=this.ds.deposit(acno,psw,amnt)
    if(result){
      alert(`your account has ben credited with amount${amnt}and the available balance is${result}`)
    }
    else{
      alert(`incorrect acnumber or password`)
    }
  }

}
withdraw(){
  var acno=this.withdrawForm.value.acno2
  var psw=this.withdrawForm.value.psw2
  var amnt=this.withdrawForm.value.amnt2
  if(this.withdrawForm.valid){
    const result=this.ds.withdraw(acno,psw,amnt)
    if(result){
      alert(`your account has been debited with amount${amnt} and the available balance is${result}`)
    }
    else{
      alert(`incorrect acnumber or password`)
    }
  
  }
}
}
