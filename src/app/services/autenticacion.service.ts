import { Injectable } from '@angular/core';
import { RealmService } from './realm.service';
import { Credentials } from 'realm-web';

const APIKEY = require('./api-key.json').key;

@Injectable({ providedIn: 'root' })
export class AutenticacionService {

    private app: any
    //private esquema:any

    public constructor(private realmService: RealmService) {

        this.app = realmService.getApp()

        //this.esquema = realmService.getEsquema()
    }

    public logIn(): any {

        let credenciales = this.realmService.getCredentials().serverApiKey(APIKEY);

        return this.app.logIn(credenciales)

    }

    public logOut(): any {

        return new Promise(async (resolve, reject) => {

            //Por si acaso hubiera más de un usuario autenticado hacemos
            //logout a todos
            let usuarios = this.app.users

            let ok = true
            for (let usr of usuarios) {
                try {
                    await usr.logOut()
                } catch (e) {
                    console.log(e)
                    ok = false
                }
            }

            if (ok) {
                resolve(null)
            } else {
                reject("WTF!")
            }


            //Si quisieramos que no quedara ni rastro de los usuarios nos basta con
            //limpiar el localStorage con napalm.
            //¡No haría falta ni invocar logOut!
            //localStorage.clear()
        })
    }
}
