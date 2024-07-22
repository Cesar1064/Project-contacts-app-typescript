import '../../assets/styles/components/header/Form.css';
import { useAppDispatch } from '../../hooks/useStore';
import { addUsers } from '../../store/contactList/slice';
import Swal from 'sweetalert2';
import Avatar from '../../assets/images/avatarImage.png';

interface Props {
  isOpen: Boolean;
}

export const Form = ({ isOpen }: Props) => {
  const dispatch = useAppDispatch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const first_name = formData.get('name') as string;
    const last_name = formData.get('last_name') as string;
    const email = formData.get('email') as string;
    const isFavorite = formData.get('isFavorite') === 'on';
    const id = Date.now() + Math.random();
    const avatarFile = formData.get('avatar') as File | null;

    let avatar = Avatar;

    if (avatarFile) {
      avatar = URL.createObjectURL(avatarFile);
    }

    if (!first_name || !last_name || !email) {
      Swal.fire({
        title: 'Ohh no!',
        text: 'Please fill out all fields!',
        icon: 'error',
      });
      return;
    }

    if (!isValidEmail(email)) {
      Swal.fire({
        title: 'Ohh no!',
        text: 'Please enter a valid email address!',
        icon: 'error',
      });

      return;
    }

    dispatch(
      addUsers({
        id,
        email,
        first_name,
        last_name,
        avatar,
        isFavorite,
      })
    );

    form.reset();
    Swal.fire({
      title: 'Saved!',
      text: 'Contact saved successfully',
      icon: 'success',
    });
  };

  const isValidEmail = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <section className={`form-to-add ${isOpen ? 'show' : ''}`}>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="First Name" />
        <input name="last_name" type="text" placeholder="Last Name" />
        <input name="email" type="email" placeholder="Email" />
        <div>
          <input id="avatar" name="avatar" type="file" accept="image/*" />
        </div>
        <div>
          <label htmlFor="isFavorite">Enable like favorite</label>
          <input id="isFavorite" name="isFavorite" type="checkbox" />
        </div>

        <button type="submit">SAVE</button>
      </form>
    </section>
  );
};
