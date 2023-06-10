import CardColor from './CardColor';
import randomGenerateColor from '../util/randomGenerateColor';
import { useState } from 'react';

export default function Generator() {
  const [color, setColor] = useState(randomGenerateColor);
  const changeColor = () => setColor(randomGenerateColor);
  return (
    <>
      <div className="card-generator">
        <CardColor color={color} />
      </div>
      <div>
        <button className="buttons" onClick={changeColor}>
          New generate
        </button>
      </div>
    </>
  );
}
