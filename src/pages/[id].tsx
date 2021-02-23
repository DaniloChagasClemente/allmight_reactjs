import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Header, Loading } from "../components";
import { apiTreino } from "../api/data";
import { ITreino } from "../interfaces/Treino.interface";
import { Table } from "../styles";
import { toast } from "react-toastify";

export default function Id() {
  const [isLoading, setIsLoading] = useState(true);
  const [treinos, setTreinos] = useState<ITreino[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiTreino.show(router.query.id as string);
        if (response.data.length === 0) {
          toast.error("Não existe nenhum treino para esta dieta específica!");
        }
        setTreinos(response.data);
      } catch (error) {
        toast.error("Ocorreu um erro na chamada do servidor!");
      } finally {
        setIsLoading(false);
      }
    };
    if (router.query.id) {
      fetchData();
    }
  }, [router.query.id]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <div className="container">
            <Table>
              <thead>
                <tr>
                  <th>Horario</th>
                  <th>Alimento</th>
                </tr>
              </thead>
              <tbody>
                {treinos &&
                  treinos.map((item) => (
                    <tr key={item.id}>
                      <td>{item.finalidade}</td>
                      <td>{item.exercicio}</td>
                      <td>{item.repeticoes}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        </>
      )}
    </>
  );
}
