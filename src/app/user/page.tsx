"use client"

import { Pockemon } from '@/services/interfaces/pokemon.interface';
import { usePockemon  } from '@/services/usePockemon'

export default function UsersPage() {
  const { data, error, loading } = usePockemon();

  if (loading) return <p className="p-4">Carregando pokémons...</p>;
  if (error) return <p className="p-4 text-red-500">Erro: {error}</p>;

  const pokemons: Pockemon[] = data?.results || [];

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold text-red-500">Usuários</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name} className="capitalize"> 
            <p>{pokemon.name} </p>
            <p>{pokemon.url} </p>
          </li>
        ))}
      </ul>
    </main>
  );
}


// 'use client';
// import { useState } from 'react';
// import { getUsers, User } from '@/services/user-service';

// export function UserLoader() {
//   const [users, setUsers] = useState<User[]>([]);

//   const loadData = async () => {
//     try {
//       const data = await getUsers();
//       setUsers(data);
//     } catch (error) {
//       console.error("Erro ao carregar usuários", error);
//     }
//   };

//   return (
//     <div>
//       <button 
//         onClick={loadData}
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         Carregar Dados via Axios
//       </button>
//       {/* Renderizar users... */}
//     </div>
//   );
// }
