import Nota from './nota';
import SeguimientoEmpresa from './seguimientoEmpresa';
import Lenguaje from './lenguaje';
import Framework from './framework';
import Entrevista from './interview';


export enum EmpresaOfferState {
    OPEN,                    // ABIERTA, EN SEGUIMIENTO
    CLOSED,                  // CERRADA
    CURRICULUM_SENT,         // SE ENVIO CURRICULUM
    INTERVIEW_SET,           // HAY FECHA PARA ENTREVISTA 
    AWAITING,                // ESPERANDO NOTICIAS
    REJECTED,                // RECHAZADO POR LA EMPRESA
    ACCEPTED                 // ACEPTADO
}

export default interface OfertasEmpresa {

    _id: string;

    createdAt: Date;
    lastModified: Date;

    descripcion: string;

    lenguajesRequeridos: Lenguaje[];
    frameworksRequeridos: Framework[];

    lenguajesAdicionales: Lenguaje[];
    frameworksAdicionales: Framework[];

    state: EmpresaOfferState;
    rejectionReason: string;

    entrevistas: Entrevista[];

    notas: Nota[]; //{type: Schema.Types.ObjectId , ref: Nota, required: false},
    //{type: Schema.Types.ObjectId , ref: Nota, required: false},
    seguimientos: SeguimientoEmpresa[]; // {type: Schema.Types.ObjectId , ref: 'SeguimientoEmpresa', required: false},
    // {type: Schema.Types.ObjectId , ref: 'SeguimientoEmpresa', required: false},
}
