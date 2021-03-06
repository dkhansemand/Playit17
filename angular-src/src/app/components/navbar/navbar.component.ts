import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
              public AuthService: AuthService,
              private Router: Router,
              private FlashMessage: FlashMessagesService
  ) { }
              headerImagePath: string
              logoImagePath: string

  ngOnInit() {
    this.headerImagePath = '/assets/img/headerRes.svg'
    this.logoImagePath = '/assets/img/Logo.svg'
  }

  onLogoutClick(){
    this.AuthService.Logout();
    this.FlashMessage.show('You are logged out!', {cssClass: 'alert-success', timeout: 5000});
    this.Router.navigate(['/login']);
    return false;
  }
}
