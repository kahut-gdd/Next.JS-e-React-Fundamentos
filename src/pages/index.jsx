
import Navegador from "../components/Navegador";

export default function Inicio() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          height: "100vh",
        }}
      >
        <Navegador texto="Estiloso" destino="/estiloso" cor="	#1C1C1C"/>
        <Navegador texto="Exemplo" destino="/exemplo" cor="	#191970" />
        <Navegador texto="JSX" destino="/jsx" cor="	#008B8B" />
        <Navegador texto="Navegação #01" destino="/navegacao" cor="	#4B0082" />
        <Navegador texto="Navegação #02" destino="/cliente/123" cor="#8B008B" />
        <Navegador texto="Componente com Estado" destino="/estado" cor="#D2691E" />
        <Navegador texto="Integração com API #01" destino="/integracao_1" cor="green" />
        <Navegador texto="Conteúdo Estático" destino="/estatico" cor="#42a9a9" />
      </div>
    </div>
  );
}
