import { Orcamento } from 'src/app/orcamentos/models/orcamento.model';

export class Servico {
    id: number;
    orcamento: Orcamento;
    data_inicio: Date;
    data_fim: Date;
    observacao: string;
}