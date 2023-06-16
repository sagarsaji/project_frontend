import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from 'src/app/modal/menu';
import { Restaurant } from 'src/app/modal/restaurant';
import { RestaurantService } from 'src/app/service/restaurant.service';

@Component({
  selector: 'app-specificmenu',
  templateUrl: './specificmenu.component.html',
  styleUrls: ['./specificmenu.component.css']
})
export class SpecificmenuComponent implements OnInit {
  menu: Menu[] = [];
rest:Restaurant[]=[];
restn:string='';
  constructor(private restService: RestaurantService, private router: Router,
    private route:ActivatedRoute) {}

  ngOnInit(): void {
   // var restname =this.restName;
   this.restn=this.route.snapshot.params['restname'];
    const restname = this.restn;
    
     // Replace with the actual restaurant name
    this.fetchSpecificRestaurantMenu(restname);
  }

  fetchSpecificRestaurantMenu(restname: string): void {
    this.restService.getAllMenu().subscribe(data => {
      this.menu = data.filter(menuItem => menuItem.restname === restname);
      console.log(this.menu);
    });
  }
}

