import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gridproducts',
  templateUrl: './gridproducts.component.html',
  styleUrls: ['./gridproducts.component.scss']
})
export class GridproductsComponent {
  constructor(public router: Router) { }
  productList: any = [{ name: "Sneaker", img: "https://rukminim1.flixcart.com/image/832/832/l3929ow0/shoe/x/y/8/10-366-wht-t-rock-white-black-original-imageeq7n87vys95.jpeg?q=70", price: 2500 },
  { name: "Sneaker", img: "https://rukminim1.flixcart.com/image/832/832/l3929ow0/shoe/x/y/8/10-366-wht-t-rock-white-black-original-imageeq7n87vys95.jpeg?q=70", price: 2500 },
  { name: "Sneaker", img: "https://rukminim1.flixcart.com/image/832/832/l3929ow0/shoe/x/y/8/10-366-wht-t-rock-white-black-original-imageeq7n87vys95.jpeg?q=70", price: 2500 },
  { name: "Sneaker", img: "https://rukminim1.flixcart.com/image/832/832/l3929ow0/shoe/x/y/8/10-366-wht-t-rock-white-black-original-imageeq7n87vys95.jpeg?q=70", price: 2500 },
  { name: "Sneaker", img: "https://rukminim1.flixcart.com/image/832/832/l3929ow0/shoe/x/y/8/10-366-wht-t-rock-white-black-original-imageeq7n87vys95.jpeg?q=70", price: 2500 },
  { name: "Sneaker", img: "https://rukminim1.flixcart.com/image/832/832/l3929ow0/shoe/x/y/8/10-366-wht-t-rock-white-black-original-imageeq7n87vys95.jpeg?q=70", price: 2500 },
  { name: "Sneaker", img: "https://rukminim1.flixcart.com/image/832/832/l3929ow0/shoe/x/y/8/10-366-wht-t-rock-white-black-original-imageeq7n87vys95.jpeg?q=70", price: 2500 },
  { name: "Sneaker", img: "https://rukminim1.flixcart.com/image/832/832/l3929ow0/shoe/x/y/8/10-366-wht-t-rock-white-black-original-imageeq7n87vys95.jpeg?q=70", price: 2500 },
  { name: "Sneaker", img: "https://rukminim1.flixcart.com/image/832/832/l3929ow0/shoe/x/y/8/10-366-wht-t-rock-white-black-original-imageeq7n87vys95.jpeg?q=70", price: 2500 },]
}
