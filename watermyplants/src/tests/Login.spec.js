import { Login } from "../components/Login";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Login Testing", () => {
    test("Renders Properly", () => {
        render(<Login/>)
    })
})