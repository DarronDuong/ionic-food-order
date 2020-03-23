import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.page.html',
  styleUrls: ['./tab-menu.page.scss'],
})
export class TabMenuPage implements OnInit {

  categories: any[] = []
  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit() {
    this.categories = this.menuService.getMenuCategories();
  }
}
