import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { MenuItem } from '../models/classes';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RootStoreState, MenuStoreSelectors } from '../root-store';
import { Store } from '@ngrx/store';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { MenuItemModal } from './modals/menu-item-modal/menu-item-modal.component';

@Component({
  selector: 'app-tab-home',
  templateUrl: './tab-home.page.html',
  styleUrls: ['./tab-home.page.scss'],
})
export class TabHomePage implements OnInit {

  constructor(
    private store$: Store<RootStoreState.AppState>,
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet
  ) { }

  items$: Observable<MenuItem[]>;

  slideOpts = {
    initialSlide: 0,
    spaceBetween: -15,
    centeredSlides: false,
    slidesPerView: 2.5,
    autoHeight: false
  };

  ngOnInit() {
    this.items$ = this.store$.select(MenuStoreSelectors.getPopularItems);
  }

  async goToDetails(item: MenuItem) {

    const modal = await this.modalController.create({
      component: MenuItemModal,
      componentProps: {
        loadedItem: item
      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });

    return await modal.present();
  }
}
