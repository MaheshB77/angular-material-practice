import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.scss']
})
export class ConceptsComponent {
  title = 'angular-material-practice';
  notificationCount: number = 10;
  isSpinning: boolean = true;
  name: string = '';

  stopSpinner() {
    this.isSpinning = false;
  }

  startSpinner() {
    this.isSpinning = true;
  }

}
