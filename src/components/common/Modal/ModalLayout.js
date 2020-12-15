import React, { useState } from 'react';
import Modal from '.';

export default function ModalLayout() {
  const [visible, setVisible] = useState();

  return (
    <>
      <button onClick={() => setVisible(!visible)}>모달</button>
      <Modal visible={visible} setVisible={setVisible} />
    </>
  );
}
