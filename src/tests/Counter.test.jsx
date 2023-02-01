import { render, fireEvent, screen } from "@testing-library/react";
import MainPage from "../containers/MainPage";

test("increments counter", () => {
  render(<MainPage />);

  const counter = screen.getByTestId("counter");
  const incrementBtn = screen.getByTestId("increment");

  fireEvent.click(incrementBtn);

  expect(counter).toHaveTextContent("1");
});
