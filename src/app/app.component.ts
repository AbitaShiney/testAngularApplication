import { Component } from '@angular/core';
import { NODES } from '../assets/mock-nodes';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestApp';

  nodes = NODES;
}
