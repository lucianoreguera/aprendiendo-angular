import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change ->', changes);
  }
  ngOnInit(): void {
    console.log('OnInit ->');
  }
  ngOnDestroy(): void {
    console.log('Destroy ->');
  }
  cities = ['Catamarca', 'Córdoba', 'San Luis'];
  name!: string;
  title = 'Aprendiendo Angular';
  urlImage = 'https://sg.com.mx/sites/default/files/styles/570x500/public/images/angular-logo.png?itok=_4hR0cNu';
}
