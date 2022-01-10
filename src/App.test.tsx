import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('initial render', () => {
  render(<App />);

  const background = screen.getByTestId('backgroundImg');
  const sideBar = screen.getByTestId('list');

  expect(background).toBeVisible();
  expect(sideBar).toBeVisible();
});

test('testing buttons', () => {
  render(<App />);

  const buttons = screen.getByTestId('button');

  fireEvent.click(buttons);

  const title = screen.getByTestId('characterName');
  const image = screen.getByTestId('characterImage');
  const information = screen.getByTestId('characterInformation');

  expect(title).toBeVisible();
  expect(image).toBeVisible();
  expect(information).toBeVisible();
});
