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
  topics = ['performace','routing','request','animation','cross-browser','cross-platform']
  socials = ['teamwork', 'community']


  routings = [
    'https://angular.io/docs/ts/latest/guide/router.html',
    'https://vsavkin.com/angular-2-router-d9e30599f9ea#.hbz7u6sew']

  onClick(m) {
    this.notify.emit(m);
  }

  constructor() { }
  ngOnInit() {
  }

}
