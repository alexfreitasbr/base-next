import { useDebounce } from "@/hooks/debounce";
import { CircleX, Search } from "lucide-react";
import { useEffect, useState, useCallback} from "react";

interface SearchBarProps {
  action: (url: string) => void;
}

export const SearchBar = ({ action }: SearchBarProps) => {
 
  // O estado agora controla o valor do input em tempo real
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = useCallback((query:string) => {
    if (!query.trim()) return;
    action(query)
  }, [action]);

useDebounce({
  func: () => {
    handleSearch(searchTerm.trim());
  },
  delay: 600,
  dependences: [searchTerm], // O TS vai validar se isso é um array válido
});

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