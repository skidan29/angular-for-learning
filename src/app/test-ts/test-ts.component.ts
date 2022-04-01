import { Component, OnInit } from '@angular/core';

enum Berry {
    Apple = "apple",
    Chery = "chery",
    Orange = "orange"
}

@Component({
  selector: 'app-test-ts',
  templateUrl: './test-ts.component.html',
  styleUrls: ['./test-ts.component.scss']
})

export class TestTsComponent implements OnInit {

  ngOnInit(): void {



      const array1 = [8, 12, 1, 130, 44];
      const array2 = [3, 12, 3, 130, 3];
      const array3 = [3, 12, 3, 130, 3,[3, 12, 3, 130, [44,44],3]];

      const array4 = ['Apple', 'Chery', 'Orange'];
      let oneBerry = Berry.Orange;

      (function timeToEat(berry: string){


            console.log(
              'Berry', berry
            )
        })(oneBerry);


  }

}
