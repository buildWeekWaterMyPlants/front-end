import { SignUp } from "../components/SignUp";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Sign Up Testing", () => {
    test("Renders Properly", () => {
        render(<SignUp/>)
    })
})