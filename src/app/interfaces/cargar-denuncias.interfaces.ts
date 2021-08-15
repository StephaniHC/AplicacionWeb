import { Denuncia } from '../models/denuncia.model';

export interface CargarDenuncia {
    total: number;
    denuncias: Denuncia[];
}