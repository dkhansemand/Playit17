import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merch',
  templateUrl: './merch.component.html',
  styleUrls: ['./merch.component.css']
})
export class MerchComponent implements OnInit {

  constructor(
  ) { }

  ImagePathCup: string
  ImagePathCup2: string
  ImagePathCup3: string
  ImagePathgirlVersion: string
  ImagePathmanShirt1: string
  ImagePathmanShirt2: string
  ImagePathmanShirt3: string
  ImagePathmusse: string
  ImagePathPhoneCover: string
  
  ngOnInit() {
    this.ImagePathCup = '/assets/img/merch/cup.png'
    this.ImagePathCup2 = '/assets/img/merch/cup2.png'
    this.ImagePathCup3 = '/assets/img/merch/cup3.png'
    this.ImagePathgirlVersion = '/assets/img/merch/girlVersion.png'
    this.ImagePathmanShirt1 = '/assets/img/merch/manShirt1.png'
    this.ImagePathmanShirt2 = '/assets/img/merch/manShirt2.png'
    this.ImagePathmanShirt3 = '/assets/img/merch/manShirt3.png'
    this.ImagePathmusse = '/assets/img/merch/musse.png'
    this.ImagePathPhoneCover = '/assets/img/merch/PhoneCover.png'
  }

}
