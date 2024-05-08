import { Component } from "@angular/core";

@Component({
  selector: "app-blog",
  standalone: true,
  imports: [],
  templateUrl: "./blog.component.html",
  styleUrl: "./blog.component.scss",
})
export class BlogComponent {
  constructor(
      // public Commonservice: CommonserviceService 
  ) {}
  ngOnInit() {
    this.blogGet();
  }
  blogGet(){
    // this.Commonservice.getBlog().subscribe((e:any)=>{
    //   console.log(e);
    // })
  }
}
