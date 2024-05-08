import { Component } from "@angular/core";
import { FooterComponent } from "../../footer/footer.component";
import { HeaderComponent } from "../../header/header.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-categories",
  standalone: true,
  templateUrl: "./categories.component.html",
  styleUrl: "./categories.component.scss",
  imports: [FooterComponent, HeaderComponent,CommonModule],
})
export class CategoriesComponent {
  bookList: any;
  bookCat: any;
  constructor(
      // public Commonservice: CommonserviceService 
  ){}
  ngOnInit(): void {
    this.initBookList();
    this.initBoocat();
    this.bookCate()
  }
  initBookList() {
    this.bookList = [
      {
        title: "book title",
        Img: "https://www.bookswagon.com/productimages/mainimages/604/9789386538604.jpg",
        dec: "Book Title",
        price: "400",
      },
      {
        title: "book title",
        Img: "https://www.bookswagon.com/productimages/mainimages/604/9789386538604.jpg",
        dec: "Book Title",
        price: "400",
      },
      {
        title: "book title",
        Img: "https://www.bookswagon.com/productimages/mainimages/604/9789386538604.jpg",
        dec: "Book Title",
        price: "400",
      },
      {
        title: "book title",
        Img: "https://www.bookswagon.com/productimages/mainimages/604/9789386538604.jpg",
        dec: "Book Title",
        price: "400",
      },
      {
        title: "book title",
        Img: "https://www.bookswagon.com/productimages/mainimages/604/9789386538604.jpg",
        dec: "Book Title",
        price: "400",
      },
      {
        title: "book title",
        Img: "https://www.bookswagon.com/productimages/mainimages/604/9789386538604.jpg",
        dec: "Book Title",
        price: "400",
      },
      {
        title: "book title",
        Img: "https://www.bookswagon.com/productimages/mainimages/604/9789386538604.jpg",
        dec: "Book Title",
        price: "400",
      },
      {
        title: "book title",
        Img: "https://www.bookswagon.com/productimages/mainimages/604/9789386538604.jpg",
        dec: "Book Title",
        price: "400",
      },
      {
        title: "book title",
        Img: "https://www.bookswagon.com/productimages/mainimages/604/9789386538604.jpg",
        dec: "Book Title",
        price: "400",
      },
    ];
  }
  initBoocat() {
    this.bookCat = [
      {
        title: "book title",
        Img: "https://www.bookswagon.com/productimages/mainimages/604/9789386538604.jpg",
        dec: "Book Title",
        price: "400",
      },
      {
        title: "book title",
        Img: "https://www.bookswagon.com/productimages/mainimages/604/9789386538604.jpg",
        dec: "Book Title",
        price: "400",
      },
      {
        title: "book title",
        Img: "https://www.bookswagon.com/productimages/mainimages/604/9789386538604.jpg",
        dec: "Book Title",
        price: "400",
      },
      {
        title: "book title",
        Img: "https://www.bookswagon.com/productimages/mainimages/604/9789386538604.jpg",
        dec: "Book Title",
        price: "400",
      },
      {
        title: "book title",
        Img: "https://www.bookswagon.com/productimages/mainimages/604/9789386538604.jpg",
        dec: "Book Title",
        price: "400",
      },
      {
        title: "book title",
        Img: "https://www.bookswagon.com/productimages/mainimages/604/9789386538604.jpg",
        dec: "Book Title",
        price: "400",
      },
      {
        title: "book title",
        Img: "https://www.bookswagon.com/productimages/mainimages/604/9789386538604.jpg",
        dec: "Book Title",
        price: "400",
      },
      {
        title: "book title",
        Img: "https://www.bookswagon.com/productimages/mainimages/604/9789386538604.jpg",
        dec: "Book Title",
        price: "400",
      },
      {
        title: "book title",
        Img: "https://www.bookswagon.com/productimages/mainimages/604/9789386538604.jpg",
        dec: "Book Title",
        price: "400",
      },
    ];
  }
  bookCate(){
    // this.Commonservice.getBookCat().subscribe((e:any)=>{
    //   console.log(e);   
    // })
  }
}
