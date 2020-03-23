import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-category',
  templateUrl: './menu-category.page.html',
  styleUrls: ['./menu-category.page.scss'],
})
export class MenuCategoryPage implements OnInit {

  loadedCategory: any;
  menuItems: any[] = [];
  constructor(
    private menuService: MenuService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('categoryId')) {
        return;
      }
      const categoryId = +paramMap.get('categoryId');
      this.loadedCategory = this.menuService.getCategory(categoryId);
      this.menuItems = this.menuService.getCategoryMenuItems(categoryId);
    })
  }
}
