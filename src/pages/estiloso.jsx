import styles from "../styles/Estiloso.module.css";
import Link from "../components/Layuot";
import Layout from "../components/Layuot";

export default function Estiloso() {
  return (
    <Layout titulo="Exemplo de CSS modularizado">
      <div className={styles.roxo}>
        <h1>Estilo Usando CSS módulos</h1>
      </div>
    </Layout>
  );
}
