import { Component, OnInit } from '@angular/core';
import {
    transition,
    trigger,
    useAnimation,
} from '@angular/animations';
import { bounce } from 'ng-animate';

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.scss'],
    animations: [
        trigger('bonus', [
            transition('void=>*',useAnimation(bounce))
        ])
    ]
})
export class AnimateComponent implements OnInit {
public visible = true;
  constructor() { }

  ngOnInit(): void {
  }

}
