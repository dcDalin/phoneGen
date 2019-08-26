import React from "react";
import App from "./App";
import Auth from "./utils/auth";
import generateNumbers from "./utils";
import { shallow, mount } from "../enzyme";

it("Renders App component", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});

it("Renders Auth component", () => {
  const wrapper = shallow(<Auth />);
  expect(wrapper).toMatchSnapshot();
});

it("calls handleChange", () => {
  const wrapper = mount(<App />);
  const handleChangeSpy = jest.spyOn(wrapper.instance(), "handleChange");
  wrapper.find('input[name="number"]').simulate("change", {
    target: { name: "phone", value: 7 }
  });
  expect(handleChangeSpy.mock.calls.length).toEqual(0);
});

it("calls generateNumbers", () => {
  const wrapper = mount(<App />);
  const generateNumbersSpy = jest.spyOn(wrapper.instance(), "generateNumbers");
  wrapper.find('button[type="submit"]').simulate("click");
  expect(generateNumbersSpy.mock.calls.length).toEqual(0);
});

it("Generates numbers correctly", () => {
  expect(generateNumbers(4)).toBeTruthy();
});

it("calls sortAsc", () => {
  const wrapper = mount(<App />);
  const generateNumbersSpy = jest.spyOn(wrapper.instance(), "sortAsc");
  wrapper.find("#asc").simulate("click");
  expect(generateNumbersSpy.mock.calls.length).toEqual(0);
});

it("calls sortDesc", () => {
  const wrapper = mount(<App />);
  const generateNumbersSpy = jest.spyOn(wrapper.instance(), "sortDesc");
  wrapper.find("#asc").simulate("click");
  expect(generateNumbersSpy.mock.calls.length).toEqual(0);
});
