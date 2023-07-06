import React from 'react';
import './Calculator.css';

const Calculator = () => (
  <div className="page-wrapper">
    <div className="calculator-wrapper">
      <table>
        <tr>
          <th colSpan="4">0</th>
        </tr>
        <tr>
          <td>AC</td>
          <td>+/-</td>
          <td>%</td>
          <td className="xt-right">÷</td>
        </tr>
        <tr>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td className="xt-right">x</td>
        </tr>
        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td className="xt-right">-</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td className="xt-right">+</td>
        </tr>
        <tr>
          <td colSpan="2">0</td>
          <td>.</td>
          <td className="xt-right">=</td>
        </tr>
      </table>
    </div>
  </div>
);

export default Calculator;
