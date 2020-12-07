import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent implements OnInit {
  blogdetailsdata:any
  rcnpost:any

  constructor(
    // private apiService:ApiService
    ) { }

  ngOnInit(): void {
    // this.apiService.blogdetailsdata().subscribe(data=>{
    //   this.blogdetailsdata=data

    // })

    // this.apiService.blogdetailsrcnpost().subscribe(data=>{
    //   this.rcnpost=data
    // })
  }

}
