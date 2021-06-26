import React from 'react';
import { Text } from 'react-native';

const Familia = ({ children }) => {
  return (
    <>
      <Text>Membros da família:</Text>
      {children}
    </>
  );
}
export default Familia;