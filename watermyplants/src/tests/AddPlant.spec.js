import { AddPlant } from "../components/AddPlant";
import { screen, render } from "@testing-library/react";

describe("Add Plant Testing", () => {
    test("Renders Properly", () => {
        render(<AddPlant/>)
    })
})