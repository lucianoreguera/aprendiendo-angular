import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cities = ['Catamarca', 'Córdoba', 'San Luis'];
  name!: string;
  title = 'Aprendiendo Angular';
  urlImage = 'https://sg.com.mx/sites/default/files/styles/570x500/public/images/angular-logo.png?itok=_4hR0cNu';
}
