import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { iTreeNode } from '../models/tree-node';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.css']
})
export class FirstSectionComponent implements OnInit {

  constructor() { }

  @Input() treeData: iTreeNode[];

  ngOnInit() {
  }

  toggleChild(node) {
    node.showChildren = !node.showChildren;
  }
}
