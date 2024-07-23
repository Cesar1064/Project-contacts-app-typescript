import { ButtonClose } from './ButtonClose';
import { ButtonDelete } from './ButtonDelete';
import { ButtonFavorite } from './ButtonFavorite';
import '../../assets/styles/components/cards/Card.css';
import { ButtonRemove } from './ButtonRemove';

interface Props {
  email: string;
  name: string;
  last_name: string;
  avatar: string;
  id: number;
  isFavorite: boolean;
  currLocation:
    | 'favorite'
    | 'contacts'
    | 'overview-contact'
    | 'invalid-location';
}

export const Card = ({
  email,
  name,
  last_name,
  avatar,
  id,
  isFavorite,
  currLocation,
}: Props) => {
  return (
    <article className="card">
      <section className="card-general-information">
        <img
          className={
            isFavorite
              ? 'card-general-information-img-favorite'
              : 'card-general-information-img'
          }
          src={avatar}
          alt={name}
        />
        <h3>{`${name} ${last_name}`}</h3>
        <h4>{email}</h4>
      </section>
      <section className="card-functions">
        {currLocation === 'contacts' ? (
          isFavorite ? (
            <>
              <ButtonClose contactId={id} />
              <ButtonDelete contactId={id} />
            </>
          ) : (
            <>
              <ButtonFavorite contactId={id} />
              <ButtonDelete contactId={id} />
            </>
          )
        ) : null}
        {currLocation === 'favorite' ? <ButtonRemove contactId={id} /> : null}
        {currLocation === 'overview-contact' ? (
          <ButtonFavorite contactId={id} />
        ) : null}
      </section>
    </article>
  );
};
