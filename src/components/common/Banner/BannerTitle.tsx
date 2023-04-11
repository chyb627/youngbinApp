import React from 'react';
import Typography from '../../ui/Typography';

const BannerTitle: React.FC<{
  title: string;
  color?: string;
  fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
}> = (props) => (
  <Typography fontSize={16} numberOfLines={1} color={props.color ?? '#000'} fontWeight={props.fontWeight ?? 'normal'}>
    {props.title}
  </Typography>
);

export default BannerTitle;
