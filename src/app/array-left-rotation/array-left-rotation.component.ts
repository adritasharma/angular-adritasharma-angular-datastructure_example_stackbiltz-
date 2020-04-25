import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-array-left-rotation",
  templateUrl: "./array-left-rotation.component.html",
  styleUrls: ["./array-left-rotation.component.css"]
})
export class ArrayLeftRotationComponent implements OnInit {
  
  arr = [1, 2, 3, 4, 5];
  rotation2 = [3, 4, 5, 1, 2];
  rotation4 = [5, 1, 2, 3, 4];
  output = [];

  // rotation2
  // 0=2
  // 1=3
  // 2=4

  // 3=0
  // 4=1

  // rotation4
  // 0 =4

  // 1= 0
  // 2=1
  // 3=2
  // 4 =3

  constructor() {
    var n = 5;
    var d = 2;
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
