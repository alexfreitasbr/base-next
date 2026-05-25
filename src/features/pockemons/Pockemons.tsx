"use client";

import { selectPockemons } from "../../stores/pockemons/slice/pockemonsSelector";
import {getAllPokemons} from "../../stores/pockemons/slice/pockemonsSlice";

import { useAppDispatch, useAppSelector } from "@/stores/pockemons/hooks";

export function Pockemons() {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(selectPockemons);

  
  dispatch(getAllPokemons())
  const render = data?.results.map((pockemon) => (
    <li key={pockemon.name} className="capitalize">
      <p>{pockemon.name} </p>
      <p>{pockemon.url} </p>
    </li> 
  ));

  return (
    <div className="flex flex-col gap-4">
      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {data && render}
    </div>
  );
}

// "use client"

// import { useFetch } from '@/hooks/useFetch';
// import { getPockemon } from '@/services/pokemon/getPockemon';

// export default function UsersPage() {
//  const { data, loading, error } = useFetch({
//     request: () => getPockemon(0, 20),
//     dependencies: [],
//   });

//   const pockemonList = data?.data.results;

//   console.log(pockemonList)

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <main className="p-4">
//       <h1 className="text-xl font-bold text-red-500">Usuários</h1>
//       <ul>
//         {pockemonList?.map((pockemon) => (
//           <li key={pockemon.name} className="capitalize">
//             <p>{pockemon.name} </p>
//             <p>{pockemon.url} </p>
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// }
