import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
  url='https://localhost:3000';
  constructor(public http:HttpClient) { }
  userLogin(data:any){
    return this.http.post<any>(this.url +'/login',data)
  }
  userRegistration(data:any){
    return this.http.post<any>(this.url +'/register',data)
  }
  contactus(data:any){
    return this.http.post<any>(this.url +'/add-contact-data',data)
  }
  addtoCart(data:any){
    return this.http.post<any>(this.url +'/addto-cart',data)
  }
  getBlog(){
    return this.http.get<any>(this.url +'/blog');
  }
  getBookCat(){
    return this.http.get<any>(this.url +'/bookCatgeries');
  }
}
