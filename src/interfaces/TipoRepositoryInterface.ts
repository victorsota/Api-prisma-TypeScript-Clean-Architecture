export default interface TipoRepositoryInterface {
  add(input: any): Promise<any>;
  findAll(): Promise<any>;
  find(input: any): Promise<any>;
  update(input: any): Promise<any>;
}
