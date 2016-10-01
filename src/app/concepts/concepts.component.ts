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
  {zh:'資料綁定',en:'Binding', rs:['*']},
  {zh:'屬性綁定',en:'Attribute'},
  {zh:'物件性質綁定',en:'Object Property'},
  {zh:'巢狀部件',en:'Nested Components', rs:[
        {t:'傳輸資料I', href:'https://toddmotto.com/passing-data-angular-2-components-input'},
        {t:'傳輸資料I/O(有筆誤)', href:'https://www.themarketingtechnologist.co/building-nested-components-in-angular-2/'}
      ]}
  ];

  clicked(event) {
  	alert('aaa');
  }

  constructor() { }

  ngOnInit() {
  }

}
