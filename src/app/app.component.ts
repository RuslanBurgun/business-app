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
  title = 'app works!';
  businesses : any;
  categories : Category[];
 
   constructor(private _firebaseServcie:FirebaseService){

   }

    ngOnInit() {
      console.log(2);
      this._firebaseServcie.getBusinesses().subscribe(businesses=>this.businesses = businesses);
      this._firebaseServcie.getCategories().subscribe(category=>this.categories = category );
  }

}
