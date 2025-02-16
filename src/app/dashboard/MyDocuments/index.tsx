import { useState } from "react";
import { Calendar, Search } from "lucide-react";

// Componente Card reutilizável
function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-card-button shadow-lg rounded-lg overflow-hidden p-4 ${className}`}
    >
      {children}
    </div>
  );
}

// Componente principal AllEvents
export default function AllEvents() {
  const [search, setSearch] = useState("");

  // Dados de exemplo para os documentos
  const documents = [
    {
      id: 1,
      title: "Documento de Planejamento",
      link: "https://exemplo.com/documento1",
      description: "Este documento contém o planejamento estratégico.",
      preview: "Planejamento estratégico focado em crescimento de mercado...",
    },
    {
      id: 2,
      title: "Relatório Financeiro",
      link: "https://exemplo.com/documento2",
      description: "Relatório detalhado das finanças da empresa no último ano.",
      preview: "O relatório mostra um crescimento de 15% nas receitas...",
    },
    {
      id: 3,
      title: "Manual de Boas Práticas",
      link: "https://exemplo.com/documento3",
      description: "Manual com as boas práticas a serem seguidas pela equipe.",
      preview: "Inclui diretrizes para comunicação interna e externa...",
    },
  ];

  return (
    <div className="p-6 w-full mx-auto bg-almost-black">
      <header className="bg-almost-black flex items-center gap-4 mb-6 pb-4">
        <Search className="w-5 h-5 text-gray-200" />
        <input
          type="text"
          placeholder="Encontre eventos"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-almost-black w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-4 w-48 py-2 text-white rounded-md hover:bg-card-button transition flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          Criar Evento
        </button>
      </header>
      <h1 className="text-2xl font-bold mb-4 text-gray-200">Documentos adicionados</h1>
      <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {documents.map((doc) => (
          <Card key={doc.id}>
            <h2 className="text-xl font-semibold text-gray-200 mb-2">{doc.title}</h2>
            <p className="text-sm text-gray-300 mb-4">{doc.description}</p>
            <p className="text-sm text-gray-400 mb-4">{doc.preview}</p>
            <a
              href={doc.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition"
            >
              Acessar Documento
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
}