import { Injectable } from '@angular/core';
import { of, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser = ''
  constructor() {
    this.getData()
  }

  userDetails: any = {
    "abc@gmail.com": { acn: "abc@gmail.com", password: "abc123" },
    "123@gmail.com": { acn: "123@gmail.com", password: "abc123" },
    "456@gmail.com": { acn: "456@gmail.com", password: "abc123" },
    "efg@gmail.com": { acn: "efg@gmail.com", password: "abc123" },

  }

  sendMail: any = [
    { To: "shani@gmail.com", subject: 'hi how are you', date: '01-02-2023' },
    { To: "sharafi@gmail.com", subject: 'hi how are you', date: '01-02-2023' },
    { To: "noufal@gmail.com", subject: 'hi how are you', date: '01-02-2023' }

  ]
  draftMail: any = [
    { To: "shani@gmail.com", subject: 'hi how are you', date: '01-02-2023' },
    { To: "sharafi@gmail.com", subject: 'hi how are you', date: '01-02-2023' },
    { To: "noufal@gmail.com", subject: 'hi how are you', date: '01-02-2023' }

  ]


  saveData() {
    if (this.userDetails) {
      localStorage.setItem("database", JSON.stringify(this.userDetails))
    }

    if (this.currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(this.currentUser))

    }


    if (this.sendMail) {
      localStorage.setItem("sendemails", JSON.stringify(this.sendMail))
    }




  }
  getData() {
    if (localStorage.getItem('database')) {
      this.userDetails = JSON.parse(localStorage.getItem('database') || "")
    }
    if (localStorage.getItem('currentUser')) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser') || "")
    }

    if (localStorage.getItem('sendemails')) {
      this.sendMail = JSON.parse(localStorage.getItem('sendemails') || "")
    }





  }

  create(acn: any, psw: any) {
    if (acn in this.userDetails) {
      return false
    }
    else {
      this.userDetails[acn] = { acn, password: psw }
      this.saveData()
      return true

    }

  }
  send(acn: any, mail1: any, sub1: any, text1: any) {
    var sendMail = this.sendMail

    sendMail = sendMail.push({ To: mail1, subject: text1, date: sub1 })

    this.saveData()


    return true


  }
  draft(acn: any, mail1: any, sub1: any, text1: any) {
    var draftMail = this.draftMail

    draftMail = draftMail.push({ To: mail1, subject: text1, date: sub1 })

    this.saveData()


    return true


  }

  login(acn: any, psw: any) {

    var userDetails = this.userDetails
    if (acn in userDetails) {


      if (psw == userDetails[acn]["password"]) {
        this.currentUser = userDetails[acn]['acn']


        this.saveData()
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
  sendData() {
    return this.sendMail

  }
  draftData() {
    return this.draftMail
  }

}

