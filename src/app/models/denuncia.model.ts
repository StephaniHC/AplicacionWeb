import { environment } from '../../environments/environment';

export class Denuncia {

    constructor(
        public civil: string,
        public oficial: string,
        public fecha?: string,
        public estado?: string, 
        public calificacion?: string
    ) {}


}

