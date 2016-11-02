import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { Business } from './Business';
import { Category } from './Category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[FirebaseService]
})
export class AppComponent implements OnInit {
  businesses : any;
  categories : Category[];
  appState : string;
  activeKey : string;
 
   constructor(private _firebaseServcie:FirebaseService){

   }

    ngOnInit() {
      
      this._firebaseServcie.getBusinesses().subscribe(businesses=>this.businesses = businesses);
      this._firebaseServcie.getCategories().subscribe(category=>this.categories = category );
  }

  changeState(state, key){
    console.log('changing state to '+state);
    if(key){
      console.log('changing key to '+key);
      this.activeKey = key;
    }
    this.appState = state;
  }

}
