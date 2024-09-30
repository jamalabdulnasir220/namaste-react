import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/resBody.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search res list for burger input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("rescard");

  expect(cardsBeforeSearch.length).toBe(8);

  const searchButton = screen.getByRole("button", { name: "Search button" });

  const searchInput = screen.getByTestId("search");

  fireEvent.change(searchInput, { target: { value: "burger" } });

  fireEvent.click(searchButton);

  const cardsAfterSearch = screen.getAllByTestId("rescard");

  expect(cardsAfterSearch.length).toBe(1);
});

it("Should filter res list and render cards with rate higher than 4", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeTopRatedClick = screen.getAllByTestId('rescard')

  expect(cardsBeforeTopRatedClick.length).toBe(8);

  const topButton = screen.getByRole('button', {name: "Top rated restaurants"});

  fireEvent.click(topButton);

  const cardsAfterTopRatedClick = screen.getAllByTestId('rescard')

  expect(cardsAfterTopRatedClick.length).toBe(7);

});
