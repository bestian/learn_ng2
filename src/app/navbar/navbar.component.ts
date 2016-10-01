import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {  
  @Input() section = '';
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  onClick(m) {
    this.notify.emit(m);
  }

  constructor() { }
  ngOnInit() {
  }

}
