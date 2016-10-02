import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.css'],
})
export class ConceptsComponent implements OnInit {
  searchText:string = '想查什麼？';
  mySearch = '';

  concepts = [
  {zh:'部件', en:'Component',
      txt:`部件是ng2構成的元件，
           每個部件可以有自己的html與css與資料物件`},
  {zh:'相依性嵌入', en:'Dependency Injection', rs:[{
    t:'Doc', h:'https://angular.io/docs/ts/latest/guide/dependency-injection.html'
  }]},

  {zh:'指示物', en:'Directive'},
  {zh:'屬性指示物', en:'Attribute Directive'},
  {zh:'結構指示物', en:'Structure Directive'},

  {zh:'水管算符', en:'Pipe', rs:[{
    t:'Doc', h:'https://angular.io/docs/ts/latest/guide/pipes.html'
  }]},

  {zh:'資料綁定',en:'Data Binding', rs:['*']},
  {zh:'屬性綁定',en:'Attribute Binding'},
  {zh:'事件綁定',en:'Event Binding'},
  {zh:'雙向綁定',en:'Two-way Data-binding', rs:[
    {t:'ngModel', h:'https://angular.io/docs/ts/latest/guide/template-syntax.html#!#ngModel'},
  ]},

  {zh:'巢狀部件',en:'Nested Components', rs:[
        {t:'向下傳輸資料', h:'https://angular.io/docs/ts/latest/tutorial/toh-pt3.html'},
        {t:'向上傳輸資料', h:'https://angular.io/docs/ts/latest/cookbook/component-communication.html#!#child-to-parent'}
      ]}
  ];

  clicked(event) {
  	alert('aaa');
  }

  constructor() { }

  ngOnInit() {
  }

}
