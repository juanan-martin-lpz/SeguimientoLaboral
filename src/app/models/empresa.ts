import Nota from './nota';
import Contacto from './contacto';
import SeguimientoEmpresa from './seguimientoEmpresa';
import OfertasEmpresa from './ofertasempresa';



export interface Empresa {

    _id: string;

    nombre: string;

    createdAt: Date;
    lastModified: Date;

    linkendin: String;
    twitter: String;
    facebook: String;
    web: String;


    contactoPrincipal: Contacto;

    notas: Nota[]; //{type: Schema.Types.ObjectId , ref: Nota, required: false},
    //{type: Schema.Types.ObjectId , ref: Nota, required: false},
    ofertas: OfertasEmpresa[]; // {type: Schema.Types.ObjectId , ref: 'SeguimientoEmpresa', required: false},
    // {type: Schema.Types.ObjectId , ref: 'SeguimientoEmpresa', required: false},

    seguimientos: SeguimientoEmpresa[]; // {type: Schema.Types.ObjectId , ref: 'SeguimientoEmpresa', required: false},

    contactosAdicionales: Contacto[]; //{type: Schema.Types.ObjectId , ref: 'Contacto', required: false}
    //{type: Schema.Types.ObjectId , ref: 'Contacto', required: false}
}
