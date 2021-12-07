import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name:string = 'Xavi';
  listOfSongs:string[]=["Clint Eastwood", "Dare", "Feel Good Inc"]
}
