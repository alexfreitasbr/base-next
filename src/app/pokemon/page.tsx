'use client';

import { usePokemonStore } from '@/store/usePokemonStore';
import { useEffect } from 'react';
import { PokemonList } from '../components/pokemon/list';
import { Pagination } from '../ui/pagination';
import { Title } from '../ui/title';

export default function PokemonPage() {
  const { data, loading, error, fetchPokemons, limit, totalPages, currentPage } = usePokemonStore();

  useEffect(() => {
    // Dispara a busca ao montar o componente
    fetchPokemons(105,0);
  }, [fetchPokemons]);

  const handlerPagination = (direction:number)=>{
    const goTo = (currentPage + direction) * limit;
    fetchPokemons(limit, goTo);
  }

  return (
    <section className="flex flex-1 flex-col gap-4 py-4 bk">
      <Title>PokeAPI - Zustand Store</Title>
      {loading && <p><strong>Carregando...</strong></p>}
      {error && <p style={{ color: 'red' }}>Erro: {error}</p>}
      {!loading && !error && data?.results && (
        <PokemonList pokemons={data.results}/>
      )}

      <Pagination handlerPagination={handlerPagination} currentPage={currentPage} totalPages={totalPages} />

    </section>
  );
}