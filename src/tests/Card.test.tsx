import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Card } from '../components/cards/Card';

vi.mock('../components/cards/ButtonClose', () => ({
  ButtonClose: () => <div>ButtonClose</div>,
}));
vi.mock('../components/cards/ButtonDelete', () => ({
  ButtonDelete: () => <div>ButtonDelete</div>,
}));
vi.mock('../components/cards/ButtonFavorite', () => ({
  ButtonFavorite: () => <div>ButtonFavorite</div>,
}));
vi.mock('../components/cards/ButtonRemove', () => ({
  ButtonRemove: () => <div>ButtonRemove</div>,
}));

describe('Card Component', () => {
  const defaultProps = {
    email: 'test@example.com',
    name: 'John',
    last_name: 'Doe',
    avatar: 'avatar.png',
    id: 1,
    isFavorite: false,
    currLocation: 'contacts' as
      | 'favorite'
      | 'contacts'
      | 'overview-contact'
      | 'invalid-location',
  };

  it('should render ButtonFavorite and ButtonDelete when in contacts and not favorite', () => {
    render(
      <Card {...defaultProps} isFavorite={false} currLocation="contacts" />
    );

    expect(screen.getByText('ButtonFavorite')).not.toBeNull();
    expect(screen.getByText('ButtonDelete')).not.toBeNull();
  });

  it('should render ButtonClose and ButtonDelete when in contacts and is favorite', () => {
    render(
      <Card {...defaultProps} isFavorite={true} currLocation="contacts" />
    );

    expect(screen.getByText('ButtonClose')).not.toBeNull();
    expect(screen.getByText('ButtonDelete')).not.toBeNull();
  });

  it('should render ButtonRemove when in favorite', () => {
    render(<Card {...defaultProps} currLocation="favorite" />);

    expect(screen.getByText('ButtonRemove')).not.toBeNull();
  });

  it('should render ButtonFavorite when in overview-contact', () => {
    render(<Card {...defaultProps} currLocation="overview-contact" />);

    expect(screen.getByText('ButtonFavorite')).not.toBeNull();
  });

  it('should not render any buttons when in an invalid location', () => {
    render(<Card {...defaultProps} currLocation="invalid-location" />);

    expect(screen.queryByText('ButtonClose')).toBeNull();
    expect(screen.queryByText('ButtonDelete')).toBeNull();
    expect(screen.queryByText('ButtonFavorite')).toBeNull();
    expect(screen.queryByText('ButtonRemove')).toBeNull();
  });
});
