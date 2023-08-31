import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import App from "../App";

describe("Sums two numbers", () => {
  it("Should render the sum of two numbers given by the user", async () => {
    // GIVEN
    render(<App />);
    const input1 = screen.getByPlaceholderText("First number");
    const input2 = screen.getByPlaceholderText("Second number");
    const button = screen.getByText("Sum");

    // WHEN
    fireEvent.change(input1, { target: { value: "5" } });
    fireEvent.change(input2, { target: { value: "7" } });
    await userEvent.click(button);

    // THEN
    const resultText = await screen.findByText("Result: 12");
    expect(resultText).toBeInTheDocument();
  });

  it("Should not produce a result when one or both inputs are empty", () => {
    // GIVEN
    render(<App />);
    const input1 = screen.getByPlaceholderText("First number");
    const input2 = screen.getByPlaceholderText("Second number");
    const button = screen.getByText("Sum");

    // WHEN one input is empty
    fireEvent.change(input1, { target: { value: "5" } });
    fireEvent.click(button);

    // THEN
    expect(
      screen.getByText("Result: Both fields must be numeric values")
    ).toBeInTheDocument();

    // WHEN both inputs are empty
    fireEvent.change(input1, { target: { value: "" } });
    fireEvent.change(input2, { target: { value: "" } });

    fireEvent.click(button);

    // THEN
    expect(
      screen.getByText("Result: Both fields must be numeric values")
    ).toBeInTheDocument();
  });
});
