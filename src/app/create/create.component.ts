import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
constructor(private ds:DataService,private router:Router,private fb:FormBuilder ){

}

//reactive form
createForm=this.fb.group({
  acn:['',Validators.compose([
    Validators.email,
    Validators.required])],
  psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
})
ngOninit(): void{}

acn=''
psw=''

create(){
var acn=this.createForm.value.acn
var psw=this.createForm.value.psw
if(this.createForm.valid){
  
  
  const result=this.ds.create(acn,psw)
//result will be true or  false
if(result){
  alert("Account created")
  this.router.navigateByUrl('')
}
else{
  alert("existing user!please login")
  this.router.navigateByUrl('')
}}

else{
  alert('invalid attributes')
}

}

}
