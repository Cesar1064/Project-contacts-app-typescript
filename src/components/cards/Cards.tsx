import { useEffect, useState } from 'react';
import { Card } from './Card';
import { getUserList } from '../../services/getUserList';
import '../../assets/styles/cards/Cards.css';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export const Cards = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [userss, setUserss] = useState<User[]>([]);

  useEffect(() => {
    getUserList('https://reqres.in/api/users?page=1').then(usersList => {
      setUsers(usersList.data);
    });
    getUserList('https://reqres.in/api/users?page=2').then(usersList => {
      setUserss(usersList.data);
    });
  }, []);
  console.log(users);
  console.log(userss);

  return (
    <article className="cards">
      {users.map(user => (
        <Card
          key={user.id}
          email={user.email}
          name={user.first_name}
          last_name={user.last_name}
          avatar={user.avatar}
        />
      ))}
      {userss.map(user => (
        <Card
          key={user.id}
          email={user.email}
          name={user.first_name}
          last_name={user.last_name}
          avatar={user.avatar}
        />
      ))}
    </article>
  );
};
