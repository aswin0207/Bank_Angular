import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser: any
  currentAcno:any
  userDetails:any

  // userDetails:any = {
  //   1000: { username: "anu", acno: 1000, password: "abc123", balance: 0, transactions: [] },
  //   1001: { username: "adarsh", acno: 1001, password: "abc123", balance: 0, transactions: [] },
  //   1002: { username: "akhil", acno: 1002, password: "abc123", balance: 0, transactions: [] },
  //   1003: { username: "ddz", acno: 1003, password: "abc123", balance: 0, transactions: [] },
  // }

  constructor() {
    this.getDetails()
   }

  saveDetails(){
    if(this.userDetails){
      localStorage.setItem("userDetails",JSON.stringify(this.userDetails))
    }
    if(this.currentUser){
      localStorage.setItem("currentUser",this.currentUser)
}
if(this.currentAcno){
  localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
}
  }

  getDetails(){
    if(localStorage.getItem("userDetails")){
      this.userDetails=JSON.parse(localStorage.getItem("userDetails") || "")
    }
    if(localStorage.getItem("currentUser")){
      this.currentUser=localStorage.getItem("currentUser")
    }
    if(localStorage.getItem("currentAcno")){
      this.currentAcno=JSON.parse(localStorage.getItem("currentAcno") || "")
    }
  }

  register(acno: any, uname: any, psw: any) {
    var userDetails=this.userDetails
    if (acno in userDetails) {
      return false
    }
    else {
      userDetails[acno] = { username: uname, acno, password: psw, balanace:0,transactions:[]}
      console.log(userDetails);
      this.saveDetails()
      return true
    }
  }

  login(acno: any, psw: any) {
    var userDetails = this.userDetails
    if (acno in userDetails) {
      if (psw==userDetails[acno]["password"]) {
        //store current user
        this.currentUser=userDetails[acno]["username"]

        this.currentAcno=acno
        this.saveDetails()
        return true
      }
      else {
        return false
      }
    }
    else {
      return false
    }
  }
  deposit(acno: any, psw: any, amnt: any) {
    var amount = parseInt(amnt)
    var userDetails = this.userDetails

    if (acno in userDetails) {
      if (psw == userDetails[acno]["password"]) {
        userDetails[acno]["balance"] += amount
        console.log(userDetails);

        // add transaction data

        userDetails[acno]["transactions"].push(
        {
          Type:"credit",
          Amount:amnt
        })

          this.saveDetails()
        return userDetails[acno]["balance"]
      }
      else {
        return false
      }
    }
    else {
      return false
    }
  }

  withdraw(acno: any, psw: any, amnt: any) {
    var amount = parseInt(amnt)
    var userDetails = this.userDetails

    if (acno in userDetails) {
      if (psw == userDetails[acno]["password"]) {
        if (amount <= userDetails[acno]["balance"]) {
          userDetails[acno]["balance"] -= amount
          console.log(userDetails);

          
        // add transaction data

        userDetails[acno]["transactions"].push(
          {
            Type:"debit",
            Amount:amount
          })
  
  
            this.saveDetails()
          return userDetails[acno]["balance"]
        }
        else {
          alert("insufficient balance")
        }
      }
      else {
        return false
      }
    }
    else {
      return false
    }
  }
  getTransactions(acno:any){
    return this.userDetails[acno].transactions
  }
 
}


deleteAcc(acno:any){
  return this.http.delete('')
}