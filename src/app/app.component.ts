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


  addBusiness(
    company:string,
    category:string, 
    years_in_business:number,
    description:string,
    phone:string,
    email:string,
    street_address:string,
    city:string,
    state:string,
    zipcode:string){
      var created_at = new Date().toString();
      
      var newBusiness = {
        company: company,
        category: category,
        years_in_business:years_in_business,
        description:description,
        phone:phone,
        email:email,
        street_address: street_address,
        city: city,
        state: state,
        zipcode: zipcode,
        created_at:created_at
      }
      
      //console.log(newBusiness);
      
      this._firebaseServcie.addBusiness(newBusiness);
      
      this.changeState('default');
  }
  




  filterCategory(category){
    this._firebaseServcie.getBusinesses(category).subscribe(businesses=>this.businesses = businesses);
  }

}
