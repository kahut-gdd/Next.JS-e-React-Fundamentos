import Layout from "../components/Layuot";

export async function getStaticProps() {
  return {
    props: {
      numero: Math.random(),
    },
  };
}

export default function Estatico(props) {
  return (
    <Layout titulo="Contúdo Estático">
      <div>{props.numero}</div>
    </Layout>
  );
}
