import { Plant } from "../components/Plant";
import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

describe("Add Plant Testing", () => {
    test("Renders Properly", () => {
        render(
            <Router>
                <Plant/>
            </Router>
        )
    })
})