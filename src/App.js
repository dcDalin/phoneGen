import React from "react";
import phoneNumberGenerator from "./utils";
import IconAscending from "./assets/icons/numeric-ascending-sort.svg";
import IconDescending from "./assets/icons/numerical-descending-sort.svg";

class App extends React.Component {
  /* istanbul ignore next */
  state = {
    amount: null,
    numbers: [],
    error: null,
    asc: false
  };

  componentDidMount() {
    const numbers = JSON.parse(localStorage.getItem("numbers"));
    /* istanbul ignore next */
    if (numbers && numbers.length > 0) {
      /* istanbul ignore next */
      this.setState({ numbers });
    }
  }

  /* istanbul ignore next */
  generateNumbers = e => {
    e.preventDefault();
    const { amount } = this.state;
    const numbers = phoneNumberGenerator(amount);
    this.setState({ numbers });
    localStorage.setItem("numbers", JSON.stringify(numbers));
  };

  /* istanbul ignore next */
  sortAsc = e => {
    e.preventDefault();
    const { numbers } = this.state;
    this.setState({ numbers: numbers.sort() });
  };

  /* istanbul ignore next */
  sortDesc = e => {
    e.preventDefault();
    const { numbers } = this.state;
    /* istanbul ignore next */
    this.setState({ numbers: numbers.reverse() });
  };

  handleChange = e => {
    this.setState({ amount: e.target.value });
  };

  render() {
    const { numbers, error, amount } = this.state;
    const disable = amount > 10000 || amount < 1;
    return (
      <div className="w-1/2 mx-auto ">
        <h1 className="p-10 text-center text-4xl font-semibold text-gray-100">
          Random Phone Number Generator
        </h1>
        <div className="flex p-4">
          <div className="w-1/2 mr-4 h-12">
            <div className="mb-4 p-4">
              <h1 className="text-gray-200 text-lg font-bold mb-2">
                Total Generated Phonenumbers
              </h1>
              <div className="">
                <p className="font-mono text-6xl font-extrabold text-gray-100">
                  {this.state.amount}
                </p>
              </div>
            </div>
          </div>
          <form className="w-1/2 ml-4 bg-gray-600">
            <div className="p-4">
              <label
                className="block text-gray-200 text-sm font-bold mb-2"
                htmlFor="phoneNumber"
              >
                How many phonenumbers?
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="number"
                onChange={this.handleChange}
              />
            </div>
            <div className="flex px-4 pb-4 items-center justify-between">
              <button
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                onClick={this.generateNumbers}
                disabled={disable}
              >
                Generate
              </button>
            </div>
          </form>
        </div>
        <div className="flex-1 ml-8 mr-4 p-4 bg-gray-600">
          <div className="w-full mb-2">
            <p className="text-lg font-bold text-gray-100">
              All Generated Phone Numbers
            </p>
            <button
              id="asc"
              className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <img
                className="h-4"
                src={IconAscending}
                alt="Sort Ascending"
                onClick={this.sortAsc}
              />
            </button>
            <button
              id="desc"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <img
                className="h-4"
                src={IconDescending}
                alt="Sort Descending"
                onClick={this.sortDesc}
              />
            </button>
          </div>
          <div className="w-full bg-gray-200 p-4">
            <ul className="font-mono font-semibold list-inside tracking-wide text-gray-600">
              {/* istanbul ignore next */
              numbers &&
                numbers.map((phone, idx) => <li key={idx}>{phone}</li>)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
