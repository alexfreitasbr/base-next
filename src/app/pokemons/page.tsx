"use client";

import { useEffect } from "react";
import { Pagination } from "../../components/ui/pagination";
import { Title } from "../../components/ui/title";
import { usePokemonStore } from "@/modules/pokemon/pokemon.store"
import { modalStore } from "@/store/modalStore";
import { Loading } from "../../components/ui/loading";
import { Warning } from "../../components/ui/warning";
import { List } from "@/components/shared/list";
import { SearchBar } from "@/components/ui/searchBar";
import { useRouter } from 'next/navigation';
import { useDebounce } from "@/hooks/debounce";

export default function PokemonPage() {
  const {
    data,
    loading,
    error,
    fetchPokemons,
    fetchPokemon,
    limit,
    totalPages,
    currentPage,
    pokemon,
    resetPokemon
  } = usePokemonStore();

  


  // const openModal = modalStore((state) => state.openModal);

  useEffect(() => {
    // Dispara a busca ao montar o componente
    resetPokemon();
    fetchPokemons(12, 0);
  }, [fetchPokemons,resetPokemon]);
  
  const handlerPagination = (direction: number) => {
    const goTo = (currentPage + direction) * limit;
    fetchPokemons(limit, goTo);
  };

  const router = useRouter();

  useDebounce({
    func: () => {
      if (pokemon === null) return
      router.push('/pokemon-details');
    },
    delay: 5,
    dependences: [pokemon, router], 
  });

  return (
    <section className="flex flex-1 flex-col  gap-4 py-4 bk">
      <header>
        <Title>PokeAPI - Zustand Store</Title>
        <SearchBar action={(query) => fetchPokemon(query)} />
      </header>
      <main className="flex  flex-1 flex-col gap-1 " aria-label="list" test-id="loading">
        {loading && <Loading />}
        {error && <Warning title="Erro a acessar a API" description="Try later"/>}
        {!loading && !error && data && (
          <List pokemons={data.pokemons} />
        )}
      </main>
      <footer>
        <Pagination
          handlerPagination={handlerPagination}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </footer>

      {/* <button
        onClick={() =>
          openModal(
            ErrorModal,
            {
              title: "Confirmar cancelamento",

              description:
                "Você tem certeza que deseja cancelar sua assinatura?",

              onConfirm: () => {
                console.log("confirmado");
              },
            },
            {
              ariaLabelledby: "modal-title",
              ariaDescribedby: "modal-desc",
            },
          )
        }
      >
        Abrir Modal
      </button> */}
    </section>
  );
}
