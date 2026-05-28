import { BtnAction } from "@/components/ui/btn";
import { Pokemon } from "@/interfaces/pokemon";
import {  Eye } from "lucide-react";

interface Props {
  pokemon: Pokemon;
}

export const Item = ({ pokemon }: Props) => {
  return (
    <li className="flex gap-2 justify-between"
        aria-label="Item Name"
        test-id="itemName">
      {pokemon.name}
      <BtnAction
        action={() => console.log("ver pokemon")}
        aria-label="See Item info"
        test-id="seeItem"
      >
        <Eye className="w-5 h-5  transition-transform duration-200 hover:rotate-180" />
      </BtnAction>
    </li>
  );
};
