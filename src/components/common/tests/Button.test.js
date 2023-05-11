import { render, screen } from '@testing-library/react';
import Button from '../Button';
import renderer from 'react-test-renderer';

describe('Test for Button component', () => {
  it('should renders snapshot', () => {
    const component = renderer.create(
      <Button
        name='test'
        type='button'
        className='btn-primary'
        disabled={false}
      />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('should renders the button component', () => {
    render(
      <Button
        name='test'
        type='button'
        className='btn-primary'
        disabled={false}
      />
    );

    const button = screen.getByTestId('defaultButton');
    const buttonName = screen.getByText('test');

    expect(button).toBeInTheDocument();
    expect(buttonName).toBeInTheDocument();
  });
});