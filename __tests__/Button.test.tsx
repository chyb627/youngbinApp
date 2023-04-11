import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import Button from '../src/components/ui/Button';
import Typography from '../src/components/ui/Typography';

test('Button Test', async () => {
  const onPressed = jest.fn();
  const expectedButtonName = 'TEST_BUTTON';

  render(
    <Button onPress={onPressed}>
      <Typography>{expectedButtonName}</Typography>
    </Button>,
  );

  expect(screen.toJSON()).toMatchSnapshot();

  fireEvent.press(screen.getByText(expectedButtonName));

  expect(onPressed).toHaveBeenCalled();
});
