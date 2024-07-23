import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ButtonAdd } from '../components/header/ButtonAdd';

describe('ButtonAdd Component', () => {
  it('should render the button with the correct text and image', () => {
    const mockDropdownForm = vi.fn();
    const mockDropdownMenu = vi.fn();

    render(
      <ButtonAdd
        dropdownForm={mockDropdownForm}
        dropdownMenu={mockDropdownMenu}
      />
    );

    const button = screen.getByRole('button');
    expect(button).not.toBeNull();

    const image = screen.getByAltText('');
    expect(image).not.toBeNull();

    const span = screen.getByText('NEW');
    expect(span).not.toBeNull();
  });

  it('should call dropdownForm and dropdownMenu when the button is clicked', () => {
    const mockDropdownForm = vi.fn();
    const mockDropdownMenu = vi.fn();

    render(
      <ButtonAdd
        dropdownForm={mockDropdownForm}
        dropdownMenu={mockDropdownMenu}
      />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockDropdownForm).toHaveBeenCalled();
    expect(mockDropdownMenu).toHaveBeenCalled();
  });
});
