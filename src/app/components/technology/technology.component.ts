import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  technologynews:any=[]
  constructor(private _api:ApiService) { }

  ngOnInit(): void {
    this._api.newspapertechnology().subscribe((result)=>{
    this.technologynews=result.articles;
    })
  }

}
