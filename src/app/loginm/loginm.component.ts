import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-loginm',
  templateUrl: './loginm.component.html',
  styleUrls: ['./loginm.component.css']
})
export class LoginmComponent {

constructor(private router:Router,private ds:DataService,private fb:FormBuilder) {}


ngOnInit(): void{

}
//reactive form

loginForm=this.fb.group({
  acn:['',Validators.compose([
    Validators.email,
    Validators.required])],
  psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
})




acn=''
psw=''

login(){
  var acn=this.loginForm.value.acn
  var psw=this.loginForm.value.psw
  if(this.loginForm.valid){
    const result=this.ds.login(acn,psw)

  if(result){
    alert('login success')
    this.router.navigateByUrl('inbox')
  }
  else{
    alert('please enter your registered mailid and password')
  }

}
else{
  alert('invalid attributes!please enter registered login details')
}
  }

}
