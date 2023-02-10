import * as React from 'react';
import { Heading } from '@aws-amplify/ui-react';
import "./Header.css"

export const DefaultHeadingExample = () => {
  return <Heading className="heading" color="darkblue" level={1}>Love Finances</Heading>;
};
