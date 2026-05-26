'use client';

import { usePokemonStore } from '@/store/usePokemonStore';
import { useEffect } from 'react';

export default function PokemonPage() {
  const { data, loading, error, fetchPokemons, limit, totalPages, currentPage } = usePokemonStore();

  useEffect(() => {
    // Dispara a busca ao montar o componente
    fetchPokemons(100,0);
  }, [fetchPokemons]);

  const handlePagination = (direction: number) => {
    const goTo = (currentPage + direction) * limit;
    fetchPokemons(limit, goTo);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>PokeAPI - Zustand Store</h1>

      {loading && <p><strong>Carregando...</strong></p>}
      
      {error && <p style={{ color: 'red' }}>Erro: {error}</p>}

      {!loading && !error && (
        <ul>
          {data?.results?.map((pokemon) => (
            <li key={pokemon.name} style={{ textTransform: 'capitalize' }}>
              {pokemon.name}
            </li>
          ))}
        </ul>
      )}
      <nav>
        <button onClick={() => handlePagination(-1)} disabled={currentPage === 0 || !data}>
          Anterior
        </button>
        <span>{currentPage+1} de {totalPages}</span>
        <button onClick={()=>handlePagination(1)} disabled={currentPage === totalPages || !data}>
          proximo
        </button>

      </nav>
    </div>
  );
}