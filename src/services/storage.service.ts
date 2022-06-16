import { Injectable } from "@angular/core";
import { Cart } from "../app/models/cart";
import { LocalUser } from "../app/models/local_user";
import { STORAGE_KEYS } from "../config/strorage_keys.config";

@Injectable()
export class StorageService{   

    getLocalUser(): LocalUser{
        let usr = localStorage.getItem(STORAGE_KEYS.localUser);
        if(usr == null){
            return null;
        }
        else{
            return JSON.parse(usr);
        }
    }
    setLocalUser(obj : LocalUser){
        if(obj == null){
            localStorage.removeItem(STORAGE_KEYS.localUser);
        }
        else{
            localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));

        }

    }
    getCart(): Cart{
        let cart= localStorage.getItem(STORAGE_KEYS.cart);
        if(cart != null){
            return JSON.parse(cart);
        }
        else{
            return null;
        }
    }
    setCart(obj : Cart){
        if(obj != null){
            
            localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(obj));
        }
        else{
            localStorage.removeItem(STORAGE_KEYS.cart);

        }

    }
}