"use client"

import { useFetch } from '@/hooks/useFetch';
import { getPockemon } from '@/services/pokemon/getPockemon';


export default function UsersPage() {
 const { data, loading, error } = useFetch({
    request: () => getPockemon(0, 20),
    dependencies: [],
  });

  const pockmonList = data?.data.results;


  console.log(pockmonList)

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold text-red-500">Usuários</h1>
      <ul>
        {pockmonList?.map((pockemon) => (
          <li key={pockemon.name} className="capitalize"> 
            <p>{pockemon.name} </p>
            <p>{pockemon.url} </p>
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
