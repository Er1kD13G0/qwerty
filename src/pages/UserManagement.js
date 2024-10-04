import React, { useEffect, useState } from 'react';
import { getUsers, createUser, deleteUser } from '../services/api';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      const userData = await getUsers();
      setUsers(userData);
    };

    fetchUsers();
  }, []);

  const handleAddUser = async () => {
    const userData = { name: newUser };
    await createUser(userData);
    setUsers([...users, userData]);
    setNewUser('');
  };

  const handleDeleteUser = async (userId) => {
    await deleteUser(userId);
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div>
      <h1>Gerenciamento de Usuários</h1>
      <input 
        type="text" 
        value={newUser} 
        onChange={(e) => setNewUser(e.target.value)} 
        placeholder="Nome do usuário" 
      />
      <button onClick={handleAddUser}>Adicionar Usuário</button>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} <button onClick={() => handleDeleteUser(user.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
