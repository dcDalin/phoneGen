import React from "react";
import App from "./App";
import { shallow } from "../enzyme";

it("renders welcome message", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
