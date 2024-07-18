import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/useStore';
import { fetchContacts } from '../store/contactList/slice';
import { Header } from '../components/header/Header';
import '../assets/styles/pages/Overview.css';
import { Card } from '../components/cards/Card';

export const Overview = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector(state => state.contactList);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchContacts());
    }
  }, [dispatch, data.length]);

  const favoriteContacts = data
    ? data.filter(contact => contact.isFavorite).slice(0, 4)
    : [];
  const noFavoriteContacts = data
    ? data.filter(contact => !contact.isFavorite).slice(0, 6)
    : [];

  return (
    <>
      <Header />
      <section className="overview">
        <section className="overview-favorite">
          <div className="header">
            <span className="title">Favorites</span>
            <hr className="line" />
          </div>
          <article className="favorite-cards">
            {favoriteContacts.map(contact => (
              <Card
                key={contact.id}
                email={contact.email}
                name={contact.first_name}
                last_name={contact.last_name}
                avatar={contact.avatar}
                id={contact.id}
                isFavorite={contact.isFavorite}
                currLocation="favorite"
              />
            ))}
          </article>
        </section>
        <section className="overview-contacts">
          <div className="header">
            <span className="title">Contact List</span>
            <hr className="line" />
          </div>
          <article className="contact-cards">
            {noFavoriteContacts.map(contact => (
              <Card
                key={contact.id}
                email={contact.email}
                name={contact.first_name}
                last_name={contact.last_name}
                avatar={contact.avatar}
                id={contact.id}
                isFavorite={contact.isFavorite}
                currLocation="overview-contact"
              />
            ))}
          </article>
        </section>
      </section>
    </>
  );
};
