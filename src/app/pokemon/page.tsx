'use client';

import { usePokemonStore } from '@/store/usePokemonStore';
import { useEffect } from 'react';
import { PokemonList } from '../components/pokemon/list';
import { Pagination } from '../ui/pagination';

export default function PokemonPage() {
  const { data, loading, error, fetchPokemons, limit, totalPages, currentPage } = usePokemonStore();

  useEffect(() => {
    // Dispara a busca ao montar o componente
    fetchPokemons(5,0);
  }, [fetchPokemons]);

  const handlerPagination = (direction:number)=>{
    const goTo = (currentPage + direction) * limit;
    fetchPokemons(limit, goTo);
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>PokeAPI - Zustand Store</h1>
      {loading && <p><strong>Carregando...</strong></p>}
      {error && <p style={{ color: 'red' }}>Erro: {error}</p>}
      {!loading && !error && data?.results && (
        <PokemonList pokemons={data.results}/>
      )}

      <Pagination handlerPagination={handlerPagination} currentPage={currentPage} totalPages={totalPages} />

    </div>
  );
}