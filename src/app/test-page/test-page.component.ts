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
            state('special', style({ borderRadius:'50%', transform: 'scale(0.5)', background: 'orange'})),
            transition('start=>end',animate(450)),
            transition('end=>start',animate(450)),
            transition('special<=>*',[
                style({background:'pink'}),
                animate(750)
            ]),
            transition('void<=>*', animate(400))
        ])
    ]
})
export class TestPageComponent implements OnInit {
    public boxState = 'start';
    public visible = true;

  constructor() { }


  ngOnInit(): void {
  }

  animate(){
        this.boxState = this.boxState === 'start' ? 'end': 'start';
  }

}
