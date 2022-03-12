import Layout from "../../components/Layuot";
import router, { useRouter } from "next/router";
import { useEffect } from "react";

export default function ClienteProCodigo() {
  const router = useRouter();
  return (
    <Layout titulo="Navegação Dinâmica">
      <span>Código = {router.query.codigo}</span>
      <span>Filial = {router.query.filial}</span>
    </Layout>
  );
}
