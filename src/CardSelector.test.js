import React from "react";
import { render, fireEvent, screen, getByTestId } from "@testing-library/react";
import CardSelector from "./CardSelector";
import { act } from "react-dom/test-utils";
import { unmountComponentAtNode } from "react-dom";

test("renders card selector", () => {
  const cards = [
    { number: "4242", name: "Debit card" },
    { number: "5252", name: "Credit card" }
  ];
  const cardChange = jest.fn();
  const { container, getByDisplayValue } = render(
    <CardSelector cards={cards} onCardChange={cardChange} />
  );
  const debitCard = getByDisplayValue("Debit card");
  expect(container).toMatchInlineSnapshot(`
    <div>
      <select>
        <option
          value="4242"
        >
          Debit card
        </option>
        <option
          value="5252"
        >
          Credit card
        </option>
      </select>
    </div>
  `);
  const select = container.querySelector("select");
  fireEvent.change(select, { target: { value: "5252" } });
  expect(cardChange.mock.calls.length).toBe(1);
  expect(cardChange.mock.calls[0][0]).toBe(cards[1]);
});
