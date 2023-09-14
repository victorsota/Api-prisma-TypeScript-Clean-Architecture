import { create } from "domain";
import { Tipo, createTipo } from "../entities/Tipo";

export class TipoRepository {
  async createTipo(tipo: Tipo): Promise<Tipo | null> {
    return await createTipo(tipo);
  }
}
