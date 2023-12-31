import AddTipoUseCase from "../application/tipo/addTipoUseCase";
import FindAllTipoUseCase from "../application/tipo/findAllTipoUseCase";
import FindTipoUseCase from "../application/tipo/findTipoUseCase";
import UpdateTipoUseCase from "../application/tipo/updateTipoUseCase";
import TipoFacade from "../facade/TipoFacade";
import TipoRepositoryImpl from "../repositories/TipoRepository";

export default class TipoFactory {
  static create() {
    const tipoRepository = new TipoRepositoryImpl();

    const addTipoUseCase = new AddTipoUseCase(tipoRepository);
    const findAllTipoUseCase = new FindAllTipoUseCase(tipoRepository);
    const findTipoUseCase = new FindTipoUseCase(tipoRepository);
    const updateTipoUseCase = new UpdateTipoUseCase(tipoRepository);

    const tipoFacade = new TipoFacade({
      addUseCase: addTipoUseCase,
      findAllUseCase: findAllTipoUseCase,
      findUseCase: findTipoUseCase,
      updateUseCase: updateTipoUseCase,
    });
  }
}
