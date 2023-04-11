import React from 'react';
import Typography from '../Typography';

export const HeaderTitle: React.FC<{
  title: string;
  color?: string;
}> = (props) => (
  <Typography fontSize={16} numberOfLines={1} color={props.color ?? '#000'}>
    {props.title}
  </Typography>
);
