import { Injectable } from '@angular/core';
import { Empresa } from '../models/empresa';
import { RealmService } from './realm.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmpresaService {

    public constructor(private realmService: RealmService) {
    }

    public listarEmpresas(): any {
        return new Promise(async (resolve, reject) => {
            try {
                let empresas: Observable<Empresa[]> = await this
                    .realmService
                    .getEsquema()
                    .collection("empresa")
                    .find() //{ idUsuario : this.autenticacionService.getUser().idUsuario })
                resolve(empresas)
            } catch (error) {
                console.log(error)
                reject(error)
            }
        })
    }

    public insertarTarea(empresa: Empresa): any {
        return new Promise(async (resolve, reject) => {
            //El _id de la tarea se decide en el servidor
            delete empresa._id
            try {
                let rs = await this.realmService.getEsquema().collection("empresas").insertOne(empresa)
                resolve(rs)
            } catch (error) {
                console.log(error)
                reject(error)
            }
        })
    }

}
