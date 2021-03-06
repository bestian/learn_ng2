import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
//  directives: [NavbarComponent]
})
export class AppComponent {
	public section:string = 'learn';
	quote = [`"One Ring to rule them all, 
			<br/>&nbsp;One Ring to find them, 
			<br/>&nbsp;One Ring to bring them all, 
			<br/>&nbsp;and in the darkness bind them."  -- &lt;Lord of the Rings&gt;`
	]
	onNotify(message:string):void {
	    this.section = message;
	}
}
