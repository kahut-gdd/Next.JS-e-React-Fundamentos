import Layout from "../components/Layuot";

export default function Jsx() {
  const titulo = <h1>JSX é um conceito central</h1>;

  function subtitulo() {
    return <h2>{"muito legal".toUpperCase()}</h2>;
  }
  return (
    <Layout titulo="Entendendo o JSX">
      {titulo}
      {subtitulo}
      <p>{JSON.stringify({ nome: "kahut", idade: 36 })}</p>
    </Layout>
  );
}
