'use client';

import { usePokemonStore } from '@/store/usePokemonStore';
import { useEffect } from 'react';

export default function PokemonPage() {
  const { data, loading, error, fetchPokemons, limit, offset, totalPages, currentPage } = usePokemonStore();

  useEffect(() => {
    // Dispara a busca ao montar o componente
    fetchPokemons(5,0);
  }, [fetchPokemons]);

  const handlePagination = (direction:number)=>{
    const goTo = (currentPage + direction) * limit;
    fetchPokemons(limit, goTo);
  }

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
        <button onClick={()=>handlePagination(-1)}>
          Anterior
        </button>
        <button onClick={()=>handlePagination(1)}>
          proximo
        </button>
      </nav>
    </div>
  );
}