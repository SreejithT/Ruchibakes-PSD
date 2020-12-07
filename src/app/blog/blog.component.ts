import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogdata:any
  constructor(
    // private apiService:ApiService
    ) { }

  ngOnInit(): void {
    // this.apiService.blogdata().subscribe(data=>{
    //   this.blogdata=data
    // })

  }

}
