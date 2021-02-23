import api from "../../index";
import { ITreino } from "../../../interfaces/Treino.interface"

class TreinoData {
  show(treinoId: string) {
    return api.get<Treino[]>(`treinos/${dietaId}`);
  }
}

export default new TreinoData();
