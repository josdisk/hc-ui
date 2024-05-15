import React, { useEffect, useState } from 'react';
import { fetchUsers } from './services/userService';
import UserCard from './components/UserCard';
import UserModal from './components/UserModal';
import { User } from './types';
import './App.css';

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUsers = await fetchUsers();
      setUsers(fetchedUsers);
    };
    fetchData();
  }, []);

  const handleViewMore = (user: User) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  return (
    <div className="container mx-auto p-4">
        { 
          (users).map(user => (
            <UserCard
              key={user.id}
              avatar={user.avatar}
              firstname={user.firstname}
              lastname={user.lastname}
              description={user.description}
              onViewMore={() => handleViewMore(user)}
            />
          ))
        }
      {selectedUser && (
        <UserModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          user={selectedUser}
        />
      )}
    </div>
  );
};

export default App;
