import { Component, OnInit } from '@angular/core';
import {
    animate,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss'],
    animations:[
        trigger('box',[
            state('start', style({background:'blue'})),
            state('end', style({background: 'red', transform: 'scale(1.2)'})),
            transition('start=>end',animate(450)),
            transition('end=>start',animate(450))
        ])
    ]
})
export class TestPageComponent implements OnInit {
    public boxState = 'start'

  constructor() { }

  ngOnInit(): void {
  }

  animate(){
        this.boxState = this.boxState === 'start' ? 'end': 'start';
  }

}
