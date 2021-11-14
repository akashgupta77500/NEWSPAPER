import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-newspaper',
  templateUrl: './newspaper.component.html',
  styleUrls: ['./newspaper.component.css']
})
export class NewspaperComponent implements OnInit {

topnews:any =[];
  result: any;


  constructor(private _api:ApiService) { }

  ngOnInit(): void {

  this._api.newspaper().subscribe((result) =>{
    console.log(result.articles);
    this.topnews = result.articles;
  })
  }

}
