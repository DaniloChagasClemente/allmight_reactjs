import api from "../../index";
import { ITreino } from "../../../interfaces/Treino.interface"

class TreinoData {
  show(treinoId: string) {
    return api.get<ITreino[]>(`treinos/${treinoId}`);
  }
}

export default new TreinoData();
