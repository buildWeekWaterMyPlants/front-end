import { SignUp } from "../components/SignUp";
import { screen, render } from "@testing-library/react";

describe("Sign Up Testing", () => {
    test("Renders Properly", () => {
        render(<SignUp/>)
    })
})