import { AddPlant } from "../components/AddPlant";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Add Plant Testing", () => {
    test("Renders Properly", () => {
        render(<AddPlant/>)
    })
})