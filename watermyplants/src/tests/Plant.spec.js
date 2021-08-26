import { Plant } from "../components/Plant";
import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { mockPlant } from "../mock";
import userEvent from "@testing-library/user-event";

describe("Add Plant Testing", () => {
    test("Renders Properly", () => {
        render(
            <Router>
                <Plant/>
            </Router>
        )
    })
    test("Renders w/plant Properly", () => {
        render(
            <Router>
                <Plant {...mockPlant} />
            </Router>
        )
    })
    test("Runs handleDelete when button is pressed", () => {
        const mockDelete = jest.fn();
        const { getByTestId } = render(
            <Router>
                <Plant deletePlant={mockDelete} />
            </Router>
        )
        const deleteBtn = getByTestId("delete");
        userEvent.click(deleteBtn);
        expect(mockDelete.mock.calls.length).toBe(1)
    })
})