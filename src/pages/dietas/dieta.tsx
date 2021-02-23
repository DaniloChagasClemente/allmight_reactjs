import { useEffect, useState } from "react";
import { Header, Loading } from "../../components";

export default function Dieta() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  });
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <div className="container">
            <h1>Olá Dieta</h1>
          </div>
        </>
      )}
    </>
  );
}
