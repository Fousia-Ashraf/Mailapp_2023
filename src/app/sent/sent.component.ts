import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css']
})
export class SentComponent {

  acn: any
  sendData: any
  constructor(private ds: DataService, private router: Router) {
    this.acn = this.ds.currentUser
    this.sendData = this.ds.sendMail
    console.log(this.sendData);

  }
  ngOnInit(): void {

  }
  back() {

    this.router.navigateByUrl('inbox')
  }

}

