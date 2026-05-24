import { getUsers } from '@/services/user-service';

export default async function UsersPage() {
  // Chamada direta no componente assíncrono
  const users = await getUsers();

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold">Usuários</h1>
      <ul>
        {users.map(user => (
          <li key={user.id} className="p-2 border-b">
            {user.name} ({user.email})
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
