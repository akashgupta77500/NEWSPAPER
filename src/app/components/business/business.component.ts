import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  
  businessnews:any =[];
  constructor(private _api:ApiService) { }

  ngOnInit(): void {
    this._api.newspaperbusiness().subscribe((result)=>{
    this.businessnews=result.articles


    })
  }

}
