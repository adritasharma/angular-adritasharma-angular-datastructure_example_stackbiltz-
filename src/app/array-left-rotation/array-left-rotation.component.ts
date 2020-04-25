import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-array-left-rotation",
  templateUrl: "./array-left-rotation.component.html",
  styleUrls: ["./array-left-rotation.component.css"]
})
export class ArrayLeftRotationComponent implements OnInit {
  arr = [1, 2, 3, 4, 5];

  output = [];

  // rotation = 2

  // rotation2 = [3, 4, 5, 1, 2];
  //==========================

  // 0=>2
  // 1=>3
  // 2=>4

  // Here right = left + 2; i.e left  + d
  //========================
  // 3=>0
  // 4=>1
  //Here right = left -3 ; i.e left  - (n-d)

  // 3 iteration in 1st condition. i-e (n-d)

  // rotation = 4

  rotation4 = [5, 1, 2, 3, 4];

  // 0 =4

  // 1=>0
  // 2=>1
  // 3=>2
  // 4=>3

  rotate(d) {
    this.output = [];
    var n = this.arr.length;
    for (var i = 0; i < n; i++) {
      if (i < n - d) {
        this.output[i] = this.arr[i + d];
      } else {
        this.output[i] = this.arr[i - (n - d)];
      }
    }
  }

  ngOnInit() {}
}
