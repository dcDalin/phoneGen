import React from "react";
import IconAscending from "./assets/icons/numeric-ascending-sort.svg";
import IconDescending from "./assets/icons/numerical-descending-sort.svg";

function App() {
  return (
    <div className="w-1/2 mx-auto ">
      <h1 className="p-10 text-center text-4xl font-semibold text-gray-100">
        Random Phone Number Generator
      </h1>
      <div class="flex p-4">
        <div class="w-1/2 mr-4 h-12">
          <div className="mb-4 p-4">
            <h1 className="text-gray-200 text-lg font-bold mb-2">
              Total Generated Phonenumbers
            </h1>
            <div className="">
              <p className="font-mono text-6xl font-extrabold text-gray-100">
                23
              </p>
            </div>
          </div>
        </div>
        <div class="w-1/2 ml-4 bg-gray-600">
          <div class="p-4">
            <label
              class="block text-gray-200 text-sm font-bold mb-2"
              for="username"
            >
              How many phonenumbers?
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="number"
            />
          </div>
          <div class="flex px-4 pb-4 items-center justify-between">
            <button
              class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Generate
            </button>
          </div>
        </div>
      </div>
      <div class="flex ml-8 mr-4 mb-4 p-4 bg-gray-600">
        <div class="w-1/2 h-12">
          <p className="font-small text-gray-100">Max Generated Phone Number</p>
          <p className="text-lg font-bold text-gray-300">0737273773</p>
        </div>
        <div class="w-1/2  h-12">
          <p className="font-small text-gray-100">Min Generated Phone Number</p>
          <p className="text-lg font-bold text-gray-300">0737273773</p>
        </div>
      </div>
      <div class="flex-1 ml-8 mr-4 p-4 bg-gray-600">
        <div className="w-full mb-2">
          <p className="text-lg font-bold text-gray-100">
            All Generated Phone Numbers
          </p>
          <button class="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <img className="h-4" src={IconAscending} alt="Sort Ascending" />
          </button>
          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <img className="h-4" src={IconDescending} alt="Sort Descending" />
          </button>
        </div>
        <div className="w-full bg-gray-200 p-4">
          <ul className="font-mono font-semibold list-inside tracking-wide text-gray-600">
            <li>0712345673</li>
            <li>0982837838</li>
            <li>0712345673</li>
            <li>0982837838</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
