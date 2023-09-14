import { randomUUID } from "crypto";
import Tipo from "./Tipo";

interface EquipamentoInterface {
  get id(): string;
  get name(): string;
  get description(): string;
  get tipo(): Tipo;
}

// descreve as propriedades do objeto que será criado
export type EquipamentoProps = {
  id?: string;
  name: string;
  description: string;
  tipo: Tipo;
};

export default class Equipamento implements EquipamentoInterface {
  private _id: string;
  private _name: string;
  private _description: string;
  private _tipo: Tipo;

  constructor(props: EquipamentoProps) {
    this._id = props.id || randomUUID();
    this._name = props.name;
    this._description = props.description;
    this._tipo = props.tipo;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }
  get description(): string {
    return this._description;
  }
  get tipo(): Tipo {
    return this._tipo;
  }
}
