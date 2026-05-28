import { CircleX, Search } from "lucide-react";
import { useEffect, useState } from "react";

interface SearchBarProps {
  action: (url: string) => void;
}

export const SearchBar = ({ action }: SearchBarProps) => {
 
  // O estado agora controla o valor do input em tempo real
  const [searchTerm, setSearchTerm] = useState('');
  

  // 1. Função que lida com a busca real (ex: chamada de API)
  const handleSearch = (query:string) => {
    if (!query.trim()) return;
    action(query)
  };

useEffect(() => {
  const debounceTimer = setTimeout(() => {
    handleSearch(searchTerm.trim());
  }, 500);

  return () => clearTimeout(debounceTimer);
}, [searchTerm]);

  return (
    <form className="flex gap-2" role="search">
      <input
        placeholder="Digite para buscar..."
        value={searchTerm} // Componente controlado
        onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o estado instantaneamente
      />
      {!searchTerm.trim()  && <Search
        className="w-5 h-5  transition-transform duration-200 "
        aria-label="Search"
      />}
      {searchTerm.trim() !== ""  &&  <CircleX  onClick={() => setSearchTerm("")} className="h-5 w-5 transition-transform duration-200 hover:rotate-180" />}
    </form>
  );
}