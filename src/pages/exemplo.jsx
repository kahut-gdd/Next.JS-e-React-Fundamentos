import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layuot";

export default function Exemplo() {
  return (
    <Layout titulo="Usando componentes">
      <Cabecalho titulo="Next.js & React" />
      <Cabecalho titulo="Aprendendo Next na prática" />
    </Layout>
  );
}
