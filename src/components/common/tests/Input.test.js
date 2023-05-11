import { render, screen } from '@testing-library/react';
import Input from '../Input';
import renderer from 'react-test-renderer';

describe('Test block for Input component', () => {
  it('should renders snapshot', () => {
    const component = renderer.create(
      <Input
        name='testInput'
        type='text'
        label='Test Input'
        id='test'
        handleChange={() => { }}
        handleBlur={() => { }}
        value='test'
        isRequired={true}
        placeHolder='test'
      />
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('should render Input component', () => {
    render(
      <Input
        name='testInput'
        type='text'
        label='Test Input'
        id='test'
        handleChange={() => { }}
        handleBlur={() => { }}
        value='test'
        isRequired={true}
        placeHolder='test'
      />
    );

    const inputLabel = screen.getByText(/test input/i);
    const input = screen.getByPlaceholderText('test');
    const inputByRole = screen.getByRole('textbox');

    expect(inputLabel).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(inputByRole).toBeInTheDocument();
    expect(input.value).toBe('test');
  });
});
