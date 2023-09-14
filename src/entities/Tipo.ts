import { randomUUID } from "crypto";

interface TipoInterface {
  get id(): string;
  get name(): string;
  get description(): string;
}
// descreve as propriedades do objeto que será criado
export type TipoProps = {
  id?: string;
  name: string;
  description: string;
};

export default class Tipo implements TipoInterface {
  private _id: string;
  private _name: string;
  private _description: string;

  constructor(props: TipoProps) {
    this._id = props.id || randomUUID();
    this._name = props.name;
    this._description = props.description;
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
}
