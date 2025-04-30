import './header.css'
import { useState } from "react";

export default function Diagnostico() {
  const [nome, setNome] = useState("");
  const [sintoma, setSintoma] = useState("");
  const [mensagem, setMensagem] = useState("");

  function analisar() {
    let resposta = `Olá ${nome}, `;
    if (sintoma.includes("febre")) {
      resposta += "pode ser uma infecção.";
    } else if (sintoma.includes("dor")) {
      resposta += "recomendamos descanso.";
    } else {
      resposta += "sugiro procurar um médico.";
    }
    setMensagem(resposta);
  }

  return (
    <div className="m-6 text-center border-2 border-blue-700 p-6 rounded-2xl">
      <h2 className="text-2xl font-bold mb-4">Autoavaliação</h2>
      <input
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="border border-gray-300 rounded p-2 w-full mb-3"
      />
      <input
        placeholder="Sintoma"
        value={sintoma}
        onChange={(e) => setSintoma(e.target.value)}
        className="border border-gray-300 rounded p-2 w-full mb-3"
      />
      <button
        onClick={analisar}
        className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
      >
        Analisar
      </button>
      {mensagem && (
        <p className="mt-4 p-3 bg-gray-100 rounded shadow">{mensagem}</p>
      )}
    </div>
  );
}