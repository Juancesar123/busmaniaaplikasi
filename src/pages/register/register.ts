import { UsersProvider } from './../../providers/users/users';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers:[UsersProvider]
})
export class RegisterPage {
    email : String;
    password: String;
  constructor(public navCtrl: NavController, public navParams: NavParams,public login: UsersProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  simpandata(){
    let  data = {email:this.email,password:this.password}
    this.login.simpandata(data).subscribe(data => console.log('okebro'));
  }
}
