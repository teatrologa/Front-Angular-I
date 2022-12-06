import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { InputSearchData } from 'src/app/models/input-search-data.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  @Output() public inputSearch: EventEmitter<InputSearchData> = new EventEmitter<InputSearchData>();

  public searchData: InputSearchData = {
    inputSearch: "",
  }
  
  ngOnInit(){
    this.inputSearch.emit(this.searchData);
  }
  
  public submitSearch(): void {
    console.log("Pesquisa realizada!");
    this.inputSearch.emit(this.searchData);
  }

}
