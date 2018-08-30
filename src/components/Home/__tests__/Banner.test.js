import React from "react";
import { render } from "react-testing-library";
import Banner from "../Banner";

describe("Home Banner", () => {

    test("Renders correctly", () => {
        expect(
            render(<Banner appName={"whats this"}/>)
        )toMatchSnapshot;
    })
})