'use client';

import { usePokemonStore } from '@/store/usePokemonStore';
import { useEffect } from 'react';


export default function PokemonPage() {
  const { data, loading, error, fetchPokemons } = usePokemonStore();

  useEffect(() => {
    // Dispara a busca ao montar o componente
    fetchPokemons();
  }, [fetchPokemons]);

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
    </div>
  );
}