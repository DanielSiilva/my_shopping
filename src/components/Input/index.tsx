import React from 'react';
import { TextInputProps } from 'react-native';

import { Container } from './styles';

type Props = TextInputProps & {
  size?: 'small' | 'medium' | 'large';
}

export function Input({ size = 'large', ...rest }: Props) {
  return (
    <Container size={size}  {...rest} />
  );
}