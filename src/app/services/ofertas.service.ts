import { Injectable } from '@angular/core';
import { OfertasEmpresa, EmpresaOfferState } from '../models/ofertasempresa';
import { RealmService } from './realm.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OfertasService {

    public constructor(private realmService: RealmService) {
    }

    public listarOfertas(): any {
        return new Promise(async (resolve, reject) => {
            try {
                let ofertas: Observable<OfertasEmpresa[]> = await this
                    .realmService
                    .getEsquema()
                    .collection("ofertasempresa")
                    .find({ "state": { $ne: EmpresaOfferState.CLOSED } }) //{ idUsuario : this.autenticacionService.getUser().idUsuario })
                    .sort({ "lastModified": 0 })
                resolve(ofertas)
            } catch (error) {
                console.log(error)
                reject(error)
            }
        })
    }
}
