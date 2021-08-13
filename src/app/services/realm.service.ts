//npm install realm-web
import { App, Credentials } from 'realm-web';

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RealmService {

    private app: any
    private esquema: any

    public constructor() {
    }

    public getApp(): any {
        console.log("GET APP")
        //Inicialización perezosa (lazy init)
        if (!this.app) {
            this.app = new App({ id: "seguimientolaboral-yamfe" })

            console.log(this.app)

        }

        return this.app
    }

    public getEsquema(): any {
        console.log("GET ESQUEMA")
        if (!this.esquema) {
            let user = this.getApp().currentUser
            if (!user) {
                console.log("Usuario no autenticado al obtener el esquema")
                return
            }
            this.esquema = user.mongoClient("mongodb-atlas").db("esquema_tareas")
        }
        return this.esquema
    }

    public getCredentials(): any {
        return Credentials
    }

}


/*Lo mismo sin florituras:
//
export class RealmService {

    public app:any
    public esquema:any

    public constructor(){
        this.app = new App({ id: "aplicacionfunciones-ejzhy" })
        this.esquema = this.app.services.mongodb("mongodb-atlas").db("esquema_funciones")
    }

}
*/
