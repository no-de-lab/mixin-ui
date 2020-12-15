import React, { useState } from 'react';
import DropLeft from '.';

export default function DropLeftLayout() {
  const [visible, setVisible] = useState();

  return (
    <>
      <button onClick={() => setVisible(!visible)}>드롭레프트</button>
      <DropLeft visible={visible} setVisible={setVisible} />
    </>
  );
}
