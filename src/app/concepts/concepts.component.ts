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
  {t:'部件/Component',
      txt:`部件是ng2構成的元件，
           每個部件可以有自己的html與css與資料物件`},
  {t'相依性嵌入/Dependency Injection', rs:[{
    t:'Doc', h:'https://angular.io/docs/ts/latest/guide/dependency-injection.html'
  }]},

  {t:'指示物/Directives',
      txt:`由html標記或屬性啟動的angular功能`},
  {t:'屬性指示物/Attribute Directives',
      txt:`由屬性啟動，改變DOM元素的外觀或行為`, 
      rs: [{t:'Doc', h:'https://angular.io/docs/ts/latest/guide/attribute-directives.html'}
      ]
  },
  {t:'結構指示物/Structural Directives',
      txt:`由屬性啟動，會增加或移除DOM元素，由星號起頭，如*ngIf, *ngFor`,
      rs: [{
        t:'Doc', h:'https://angular.io/docs/ts/latest/guide/structural-directives.html'
      }]
  },

  {t:'水管算符/Pipe', rs:[{
    t:'Doc', h:'https://angular.io/docs/ts/latest/guide/pipes.html'
  }]},

  {t:'資料綁定',en:'Data Binding', rs:['*']},
  {t:'屬性綁定',en:'Attribute Binding'},
  {t:'事件綁定',en:'Event Binding'},
  {t:'雙向綁定',en:'Two-way Data-binding', rs:[
    {t:'ngModel', h:'https://angular.io/docs/ts/latest/guide/template-syntax.html#!#ngModel'},
  ]},

  {t:'巢狀部件',en:'Nested Components', rs:[
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
