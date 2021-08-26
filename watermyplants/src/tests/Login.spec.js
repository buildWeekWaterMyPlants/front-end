import { Login } from "../components/Login";
import { screen, render } from "@testing-library/react";

describe("Login Testing", () => {
    test("Renders Properly", () => {
        render(<Login/>)
    })
})