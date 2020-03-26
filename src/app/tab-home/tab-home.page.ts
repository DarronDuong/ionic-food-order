import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { MenuItem } from '../models/classes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-home',
  templateUrl: './tab-home.page.html',
  styleUrls: ['./tab-home.page.scss'],
})
export class TabHomePage implements OnInit {

  constructor(
    private menuService: MenuService,
    private router: Router
  ) { }

  items: MenuItem[] = [];
  slideOpts = {
    initialSlide: 0,
    spaceBetween: -15,
    centeredSlides: false,
    slidesPerView: 2.5,
    autoHeight: false
  };

  ngOnInit() {

    this.items = this.menuService.getMostPopular();

  }

  goToDetail(categoryId: number, itemId: number) {
    this.router.navigate(['tabs/menu', categoryId, itemId])
  }
}
