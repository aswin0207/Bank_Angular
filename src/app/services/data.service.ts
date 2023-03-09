import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser:any

  userDetails: any = {
    1000: { username: "anu", acno: 1000, password: "abc123", balance: 0 },
    1001: { username: "arun", acno: 1001, password: "abc123", balance: 0 },
    1002: { username: "amal", acno: 1002, password: "abc123", balance: 0 },
    1003: { username: "aswin", acno: 1003, password: "abc123", balance: 0 },

  }
  register(acno:any,uname:any,psw:any){
    var userDetails=this.userDetails
    if(acno in userDetails){
      return false
    }
    else{
      userDetails[acno]={username:uname,acno,password:psw,balance:0}
      console.log(userDetails);
      
      return true
    }
  }
  login(acno:any,psw:any){
    var userDetails=this.userDetails
    if(acno in userDetails){
      if(psw==userDetails[acno]["password"]){
       this.userDetails=userDetails[acno]["username"]
        return true}

        else{
          return false
        }
      }
      else{
        return false
      }
    }
  
  constructor() {}

  }