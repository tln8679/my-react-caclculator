import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import CalculatorButton from '../CalculatorButton';

describe('CalculatorButton', () => {
  it('renders the button with label', () => {
    render(
      <CalculatorButton
        displayLabel="5"
        buttonType="Operand"
        setCalculationString={vi.fn()}
      />
    );
    expect(screen.getByRole('button', { name: '5' })).toBeInTheDocument();
  });

  it('calls setCalculationString when an operand is clicked', () => {
    const setCalcString = vi.fn();
    render(
      <CalculatorButton
        displayLabel="7"
        buttonType="Operand"
        setCalculationString={setCalcString}
      />
    );
    fireEvent.click(screen.getByRole('button', { name: '7' }));
    expect(setCalcString).toHaveBeenCalled();
  });

  it('does not allow two operators in a row', () => {
    const setCalcString = vi.fn((fn) => fn('1 +'));
    const setErrorHighlight = vi.fn();

    render(
      <CalculatorButton
        displayLabel="-"
        buttonType="Operator"
        setCalculationString={setCalcString}
        setErrorHighlight={setErrorHighlight}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: '-' }));

    // Check that the string was not modified (returns same string)
    expect(setCalcString).toHaveReturnedWith('1 +');

    // Error highlight triggered
    expect(setErrorHighlight).toHaveBeenCalledWith(true);
  });
});
