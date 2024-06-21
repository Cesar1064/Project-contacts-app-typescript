import '../../assets/styles/cards/Card.css';
import { ButtonDelete } from './ButtonDelete';
import { ButtonFavorite } from './ButtonFavorite';

export const Card = ({
  email,
  name,
  last_name,
  avatar,
}: {
  email: string;
  name: string;
  last_name: string;
  avatar: string;
}) => {
  return (
    <article className="card">
      <section className="card-general-information">
        <img src={avatar} alt={name} />
        <h3>{`${name} ${last_name}`}</h3>
        <h4>{email}</h4>
      </section>
      <section className="card-functions">
        <ButtonFavorite />
        <ButtonDelete />
      </section>
    </article>
  );
};
