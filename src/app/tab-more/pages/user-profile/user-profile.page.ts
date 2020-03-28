import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  isAdmin = true;
  constructor(
    private router: Router,
    private notificationService: NotificationService
  ) { }


  ngOnInit() {
  }

  addPaymentMethod() {
    this.router.navigate(['tabs/more/credit-card-details'])
  }

  removeCard() {

  }

  toggleRole() {
    this.isAdmin = !this.isAdmin;
    if (this.isAdmin) {
      this.notificationService.show('Admin mode is ON');
    } else {
      this.notificationService.show('Admin mode is OFF');
    }
  }
}
