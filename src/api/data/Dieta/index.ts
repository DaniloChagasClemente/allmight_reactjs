import api from "../../index";
import { IDieta } from "../../../interfaces/Dieta.interface"

class DietaData {
  index() {
    return api.get<IDieta[]>('dietas');
  }
}

export default new DietaData();
