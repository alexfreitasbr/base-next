"use client";

import { ChevronLeft } from "lucide-react";
import { Title } from "../../components/ui/title";
import { usePokemonStore } from "@/modules/pokemon/pokemon.store";
import Link from "next/link";
import Image from 'next/image'

export default function PokemonPage() {
  const { pokemon } = usePokemonStore();

  return (
    <section className="flex flex-1 flex-col  gap-4 py-4 bk">
      <header className="flex items-center gap-2">
        <Link href="/pokemons" aria-label="Go to Pokemon index">
          <ChevronLeft className="w-10 h-10 transition-transform duration-200 hover:-translate-x-2" />
        </Link>
        <Title>PokeAPI - Zustand Store</Title>
      </header>
      <main
        className="grid grid-rows-[auto] grid-cols-[200px_1fr]  gap-1"
        aria-label="list"
        test-id="loading"
      >
        {pokemon?.image && <Image src={pokemon.image} alt={`Image of ${pokemon.name}`} width={200} height={200}
        className="row-span-4"  />}
        <h3 className="font-semibold"> <dt className="inline-block">Name:</dt> <dd className="inline-block">{pokemon?.name}</dd></h3>
        <dl className="font-semibold"><dt >Types:</dt> {pokemon?.types.map(type => <dd className="font-medium pl-4" key={type}>{type}</dd>)}</dl>
        <dl className="font-semibold"> <dt className="inline-block">Height:</dt> <dd className="inline-block">{pokemon?.height}</dd></dl>
        <dl className="font-semibold"><dt className="inline-block">Weight:</dt> <dd className="inline-block">{pokemon?.weight}</dd></dl>
      </main>
      <footer></footer>
    </section>
  );
}
