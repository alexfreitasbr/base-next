import { BtnAction } from "@/components/ui/btn";
import { usePokemonStore } from "@/modules/pokemon/pokemon.store";
import { PokemonCard } from "@/modules/pokemon/pokemon.types";
import { Eye } from "lucide-react";
import Image from 'next/image'

interface Props {
  pokemon: PokemonCard;
}

export const Item = ({ pokemon }: Props) => {

  const {
    fetchPokemon,
  } = usePokemonStore();

  return (
    <li className="flex gap-2 justify-between items-center"
        aria-label="Item Name"
        test-id="itemName">
      <Image src={pokemon.image} alt={`Image of ${pokemon.name}`} width={40} height={40} />
      <h4 className="flex-1 font-semibold capitalize" >{pokemon.name}</h4>
      <BtnAction
        action={() => fetchPokemon(pokemon.name)}
        aria-label="See Item info"
        test-id="seeItem"
      >
        <Eye className="w-5 h-5  transition-transform duration-200 hover:rotate-180" />
      </BtnAction>
    </li>
  );
};
