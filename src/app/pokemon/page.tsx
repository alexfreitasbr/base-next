'use client';

import { useEffect } from 'react';
import { PokemonList } from '../components/pokemon/list';
import { Pagination } from '../ui/pagination';
import { Title } from '../ui/title';
import { usePokemonStore } from '@/store/usePokemonStore';
import { modalStore } from "@/store/modalStore";
import { ErrorModal } from '../ui/modais/errorModal';



export default function PokemonPage() {
  const { data, loading, error, fetchPokemons, limit, totalPages, currentPage } = usePokemonStore();
  useEffect(() => {
    // Dispara a busca ao montar o componente
    fetchPokemons(105,0);
  }, [fetchPokemons]);

  const { setModal } = modalStore();

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
      <button onClick={() => setModal(<ErrorModal/>)}>Abrir Modal</button>
    </section>
  );
}


