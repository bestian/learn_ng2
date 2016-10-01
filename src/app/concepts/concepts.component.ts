import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.css']
})
export class ConceptsComponent implements OnInit {
  searchText:string = '想查什麼？'

  concepts = [
  {zh:'部件',en:'Component'},
  {zh:'指示物',en:'Directive'},
  {zh:'資料綁定',en:'Binding'},
  {zh:'屬性綁定',en:'Attribute'},
  {zh:'物件性質綁定',en:'Object Property'}];

  clicked(event) {
  	alert('aaa');
  }

  constructor() { }

  ngOnInit() {
  }

}
