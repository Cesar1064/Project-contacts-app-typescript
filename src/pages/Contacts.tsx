import { useEffect, useState } from 'react';
import { Header } from '../components/header/Header';
import { useAppDispatch, useAppSelector } from '../hooks/useStore';
import { fetchContacts } from '../store/contactList/slice';
import { Card } from '../components/cards/Card';
import '../assets/styles/pages/Contacts.css';
import angleLeft from '../assets/images/angle-left.svg';
import angleRight from '../assets/images/angle-right.svg';

export const Contacts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useAppDispatch();
  const { data } = useAppSelector(state => state.contactList);
  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchContacts());
    }
  }, [dispatch, data.length]);

  const indexOfLastItem = currentPage * 8;
  const indexOfFirstItem = indexOfLastItem - 8;
  const contacts = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / 8);

  const nextPage = () => {
    if (currentPage < Math.ceil(data.length / 8)) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Header />
      <section className="contacts">
        <section className="overview-contacts">
          <div className="header">
            <span className="title">Contact List</span>
            <hr className="line" />
          </div>
          <article className="contact-cards">
            {contacts.map(contact => (
              <Card
                key={contact.id}
                email={contact.email}
                name={contact.first_name}
                last_name={contact.last_name}
                avatar={contact.avatar}
                id={contact.id}
                isFavorite={contact.isFavorite}
                currLocation="contacts"
              />
            ))}
          </article>
          <div className="pagination">
            <span>
              {currentPage} of {totalPages}
            </span>
            <button onClick={prevPage} disabled={currentPage === 1}>
              <img className="angle" src={angleLeft} alt="" />
            </button>
            <button
              onClick={nextPage}
              disabled={currentPage === Math.ceil(data.length / 8)}
            >
              <img className="angle" src={angleRight} alt="" />
            </button>
          </div>
        </section>
      </section>
    </>
  );
};
