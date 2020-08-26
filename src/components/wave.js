import React, { useState } from 'react';
import styled from 'styled-components';

const WaveButton = styled.button`
  background: rebeccapurple;
  border: none;
  color: white;
  font-size: 1.25rem;
`

const Wave = () => {
  const [waves, setWaves] = useState(0);
  const label = `👋🏾 ${waves} ${waves === 1 ? 'wave' : 'waves'}`

  return (
    <WaveButton
      onClick={() => setWaves(waves + 1)}
    >
      {label}
    </WaveButton>
  )
};

export default Wave;