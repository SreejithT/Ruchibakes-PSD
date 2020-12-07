import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homemainimg:any
  homesecimg:any
  homeftrprd:any
  homercp:any
  homeabtus:any
  subdata:any
  constructor(
    // private apiService:ApiService
  ) { }   

  ngOnInit(): void {
    // this.apiService.homemainimg().subscribe(data=>{
    //   this.homemainimg=data
    // })

    // this.apiService.homesecimg().subscribe(data=>{
    //   this.homesecimg=data
    // })

    // this.apiService.homeftrprd().subscribe(data=>{
    //   this.homeftrprd=data
    // })

    // this.apiService.homercp().subscribe(data=>{
    //   this.homercp=data
    // })

    // this.apiService.homeabtus().subscribe(data=>{
    //   this.homeabtus=data
    // })

  }

// addSub(){
//   this.apiService.homesubdata(this.subdata).subscribe((response:any)=>{
//     console.log(response)
//     this.subdata=''
//   })
// }



}
