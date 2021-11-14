import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  entertainmentnews:any=[]
  constructor(private _api:ApiService) { }

  ngOnInit(): void {
    this._api.newspaperintertainment().subscribe((result)=>{
      this.entertainmentnews= result.articles
    })
  }

}
