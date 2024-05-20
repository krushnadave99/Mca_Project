import { Component } from "@angular/core";
import { CommonserviceService } from "../../commonservice.service";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrl: "./categories.component.scss",
})
export class CategoriesComponent {
  bookList: any;
  bookCat: any;
  constructor(
    public Commonservice: CommonserviceService
  ) { }
  ngOnInit(): void {
    this.initBookList();
    // this.initBoocat();
    this.bookCate()
  }
  initBookList() {
    this.bookList = [
      {
        title: "book title",
        Img: "https://images.penguinrandomhouse.com/cover/9780593527702",
        dec: "Book Title",
        price: "400",
      },
      {
        title: "book title",
        Img: "https://images.penguinrandomhouse.com/cover/9780593527702",
        dec: "Book Title",
        price: "400",
      },
      {
        title: "book title",
        Img: "https://images.penguinrandomhouse.com/cover/9780593527702",
        dec: "Book Title",
        price: "400",
      },
      {
        title: "book title",
        Img: "https://images.penguinrandomhouse.com/cover/9780593527702",
        dec: "Book Title",
        price: "400",
      },
      {
        title: "book title",
        Img: "https://images.penguinrandomhouse.com/cover/9780593527702",
        dec: "Book Title",
        price: "400",
      },
      {
        title: "book title",
        Img: "https://images.penguinrandomhouse.com/cover/9780593527702",
        dec: "Book Title",
        price: "400",
      },
      {
        title: "book title",
        Img: "https://images.penguinrandomhouse.com/cover/9780593527702",
        dec: "Book Title",
        price: "400",
      },
      {
        title: "book title",
        Img: "https://images.penguinrandomhouse.com/cover/9780593527702",
        dec: "Book Title",
        price: "400",
      },
      {
        title: "book title",
        Img: "https://images.penguinrandomhouse.com/cover/9780593527702",
        dec: "Book Title",
        price: "400",
      },
    ];
  }
  // initBoocat() {
  //   this.bookCat = [
  //     {
  //       title: "book title",
  //       Img: "https://www.bookswagon.com/productimages/mainimages/604/9789386538604.jpg",
  //       dec: "Book Title",
  //       price: "400",
  //     },
  //     {
  //       title: "book title",
  //       Img: "https://www.bookswagon.com/productimages/mainimages/604/9789386538604.jpg",
  //       dec: "Book Title",
  //       price: "400",
  //     },
  //     {
  //       title: "book title",
  //       Img: "https://www.bookswagon.com/productimages/mainimages/604/9789386538604.jpg",
  //       dec: "Book Title",
  //       price: "400",
  //     },
  //     {
  //       title: "book title",
  //       Img: "https://www.bookswagon.com/productimages/mainimages/604/9789386538604.jpg",
  //       dec: "Book Title",
  //       price: "400",
  //     },
  //     {
  //       title: "book title",
  //       Img: "https://www.bookswagon.com/productimages/mainimages/604/9789386538604.jpg",
  //       dec: "Book Title",
  //       price: "400",
  //     },
  //     {
  //       title: "book title",
  //       Img: "https://www.bookswagon.com/productimages/mainimages/604/9789386538604.jpg",
  //       dec: "Book Title",
  //       price: "400",
  //     },
  //     {
  //       title: "book title",
  //       Img: "https://www.bookswagon.com/productimages/mainimages/604/9789386538604.jpg",
  //       dec: "Book Title",
  //       price: "400",
  //     },
  //     {
  //       title: "book title",
  //       Img: "https://www.bookswagon.com/productimages/mainimages/604/9789386538604.jpg",
  //       dec: "Book Title",
  //       price: "400",
  //     },
  //     {
  //       title: "book title",
  //       Img: "https://www.bookswagon.com/productimages/mainimages/604/9789386538604.jpg",
  //       dec: "Book Title",
  //       price: "400",
  //     },
  //   ];
  // }
  bookCate() {
    this.Commonservice.getBookCat().subscribe((e: any) => {
      console.log(e);
      if (e.code == 0) {
        this.bookCat = e.data;
      }
    })
  }
  addtocart(item) {
    let addToCart = this.Commonservice.addtoCartList.push(item);
    // localStorage.setItem('addtocart', JSON.stringify(addToCart));
  }
}
