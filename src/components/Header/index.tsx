import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CgGym } from "react-icons/cg";
import { apiDieta } from "../../api/data";
import { IDieta } from "../../interfaces/Dieta.interface";
import { Link } from "../../styles";
import { Container } from "./styles";

const Header = () => {
  const router = useRouter();
  const [dietas, setDietas] = useState<IDieta[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiDieta.index();
      setDietas(response.data);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <div className="container">
        <CgGym onClick={() => router.push("/")} />
        {dietas &&
          dietas.map((item) => (
            <Link key={item.id} href={`/${item.id}`}>
              {item.id}
            </Link>
          ))}
      </div>
    </Container>
  );
};


export default Header;
