import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {  
  @Input() section = '';
  @Output() notify = new EventEmitter<string>();

  navs = ['learn','do','rethink','dig']
  topics = ['performace','routing','http','animation','cross-browser','cross-platform'];

  onClick(m) {
    this.notify.emit(m);
  }

  constructor() { }
  ngOnInit() {
  }

}
