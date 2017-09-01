import { HomePage } from './../home/home';
import { UsersProvider } from './../../providers/users/users';
import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[UsersProvider]
})
export class LoginPage {
  email:String;
  password:String;
  constructor(public navCtrl: NavController, public toastctrl:ToastController,public navParams: NavParams,public login: UsersProvider) {
  }
 gettoast(){
    let toast = this.toastctrl.create({
            message:'Login gagal cek username atau password',
            duration:3000,
            position:'top'
          })
    toast.onDidDismiss(()=>{
      console.log('dismiss toast');
    })
    toast.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  registerpage(){
    this.navCtrl.push(RegisterPage);
  }
  loginbutton(){
    let data = {strategy:"local",email:this.email,password:this.password}
    this.login.getauthentication(data).subscribe(
       val =>{
        if(val == null){
         return this.gettoast();
        }else{
          localStorage.setItem('token',JSON.stringify(val.accessToken))
          this.navCtrl.setRoot(HomePage);
         // console.log(JSON.parse(localStorage.getItem('token')));
        }
       });
    //
  }
}
