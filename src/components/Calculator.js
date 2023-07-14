import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Buttons';
import '../styles/calculator.css';

function Calculator() {
  const [display, setDisplay] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const result = calculate(display, buttonName);
    setDisplay(result);
  };

  const { total, next, operation } = display;

  return (
    <div className="page-wrapper">
      <h1>Let&apos;s do some math!</h1>
      <div className="calculator-wrapper">
        <table>
          <tbody>
            <tr>
              <th colSpan="4" className="display">
                {total}
                {' '}
                {operation}
                {' '}
                {next}
              </th>
            </tr>
            <tr>
              <td>
                <Button label="AC" handleClick={handleClick} />
              </td>
              <td>
                <Button label="+/-" handleClick={handleClick} />
              </td>
              <td>
                <Button label="%" handleClick={handleClick} />
              </td>
              <td className="coloredBg">
                <Button label="÷" handleClick={handleClick} />
              </td>
            </tr>

            <tr>
              <td>
                <Button label="7" handleClick={handleClick} />
              </td>
              <td>
                <Button label="8" handleClick={handleClick} />
              </td>
              <td>
                <Button label="9" handleClick={handleClick} />
              </td>
              <td className="coloredBg">
                <Button label="x" handleClick={handleClick} />
              </td>
            </tr>

            <tr>
              <td>
                <Button label="4" handleClick={handleClick} />
              </td>
              <td>
                <Button label="5" handleClick={handleClick} />
              </td>
              <td>
                <Button label="6" handleClick={handleClick} />
              </td>
              <td className="coloredBg">
                <Button label="-" handleClick={handleClick} />
              </td>
            </tr>

            <tr>
              <td>
                <Button label="1" handleClick={handleClick} />
              </td>
              <td>
                <Button label="2" handleClick={handleClick} />
              </td>
              <td>
                <Button label="3" handleClick={handleClick} />
              </td>
              <td className="coloredBg">
                <Button label="+" handleClick={handleClick} />
              </td>
            </tr>

            <tr>
              <td colSpan="2">
                <Button label="0" handleClick={handleClick} />
              </td>
              <td>
                <Button label="." handleClick={handleClick} />
              </td>
              <td className="coloredBg">
                <Button label="=" handleClick={handleClick} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Calculator;
