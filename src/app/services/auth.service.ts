import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app'
import { reject } from 'q';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afo:AngularFireAuth) { }

  registerUser(value){
    return new Promise<any>((resolve,reject)=>{
      firebase.auth().createUserWithEmailAndPassword(value.email,value.password)
      .then(
        res=>resolve(res), 
        err => reject(err)
       
      )
    })
  }

  loginUser(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email,value.password)
      
      .then(
       
        res => resolve(res),
        err => reject(err))
    })
   }
  
   logoutUser(){
     return new Promise((resolve, reject) => {
       if(firebase.auth().currentUser){
         firebase.auth().signOut()
         .then(() => {
           
           resolve();
         }).catch((error) => {
           reject();
         });
       }
     })
   }
  
   userDetails(){
     return firebase.auth().currentUser;
   }

   doGoogleLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afo.auth.signInWithRedirect(provider).then(res => {
        resolve(res);
       
      // console.log(this.getUser());
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.log(errorMessage);
      });
    })
}
//return observable
isLogged(){
  return this.afo.authState;
}
isAuthenticated(){
  if (this.userDetails == null ) {
    return false;
  } else {
    return true;
  }
}

   

}
