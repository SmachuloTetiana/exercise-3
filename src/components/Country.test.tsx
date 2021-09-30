import React from "react";
import {shallow} from "enzyme";
import Country from "./Country";

describe("Search country by code", () => {
    test("should render", () => {
        const component = shallow(<Country />);

        expect(component).toMatchSnapshot();
    });
});
