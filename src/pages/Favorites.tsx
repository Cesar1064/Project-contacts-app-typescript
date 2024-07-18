import { Card } from '../components/cards/Card';
import { Header } from '../components/header/Header';
import { useAppSelector } from '../hooks/useStore';
import '../assets/styles/pages/Favorites.css';

export const Favorites = () => {
  const { data } = useAppSelector(state => state.contactList);

  const favoriteContacts = data.filter(contact => contact.isFavorite);

  return (
    <>
      <Header />
      <section className="favorites">
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
      </section>
    </>
  );
};
