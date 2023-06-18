import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Addtocart } from '../modal/addtocart';
import { Menu } from '../modal/menu';
import { Restaurant } from '../modal/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  saveProduct(rest:Restaurant):Observable<Object>{
    return this.http.post(`http://localhost:8080/rest/create`,rest);
  }
  getRest(){
    return this.http.get<Restaurant[]>(`http://localhost:8080/rest/all`);
  }
  getMenuByName(restname: String):Observable<Menu[]>{
    return this.http.get<Menu[]>(`http://localhost:8080/rest/menu/find/${restname}`);
  }
  deleteRest(id: number):Observable<Restaurant>{
    return this.http.delete<Restaurant>(`http://localhost:8080/rest/delete/${id}`);
  }

  deleteMenu(mid: number):Observable<Menu>{
    return this.http.delete<Menu>(`http://localhost:8080/rest/delete/menu/${mid}`);
  }

  getAllMenu(){
    return this.http.get<Menu[]>(`http://localhost:8080/rest/getAllMenu`);
  }

  getRestById(id: number): Observable<Restaurant> {
    return this.http.get<Restaurant>(`http://localhost:8080/rest/getbyid/${id}`);
  }

  getMenuById(mid:number):Observable<Menu>{
    return this.http.get<Menu>(`http://localhost:8080/rest/getbyid/menu/${mid}`);
  }

  saveUpdate(rest:Restaurant):Observable<Object>{
    return this.http.post(`http://localhost:8080/rest/create`,rest);
  }

  updateProduct(id:number,rest: Restaurant): Observable<Object> {
    return this.http.put(`http://localhost:8080/rest/update/${id}`,rest);
  }

  saveMenu(menu: Menu):Observable<Object>{
    return this.http.post(`http://localhost:8080/rest/addmenu`,menu);
  }

  getCartDetails(uId: number): Observable<Addtocart[]> {
    return this.http.get<Addtocart[]>(`http://localhost:8082/api/cart/viewByuser/1`);
  }

  updateMenu(mid:number,menu:Menu):Observable<Object>{
    return this.http.put(`http://localhost:8080/rest/menu/update/${mid}`,menu);
  }
  
  

}
