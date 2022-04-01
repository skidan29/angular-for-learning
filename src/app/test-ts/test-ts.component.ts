import { Component, OnInit } from '@angular/core';



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


      console.log(
        array1.slice(1,3)
      )
  }

}
