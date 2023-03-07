import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent {

  mail1:any
  sub1:any
  text1:any
  acn:any



  constructor(private ds:DataService,private router: Router){

    this.acn=this.ds.currentUser
  }
ngOnInit():void{

}
delete(){
  this.router.navigateByUrl('inbox')
  
}

send(){
var mail1=this.mail1
var sub1=this.sub1
var text1=this.text1
var acn=this.acn
const result=this.ds.send(acn,mail1,sub1,text1)

console.log(result);

  alert('mail send')
  }
  
  onSubmit(playlistForm: any) {
      playlistForm.form.reset();
    }


draft(){
  var mail1=this.mail1
  var sub1=this.sub1
  var text1=this.text1
  var acn=this.acn
  const result=this.ds.draft(acn,mail1,sub1,text1)
  console.log(result);
   alert('Your mail is saved to draft')
    
  
  
  
  
  
  }



}

