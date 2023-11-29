import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const Report = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const options = {
    // Add your ApexCharts options here
    chart: {
      // Chart configuration options
    },
    // Other options...
  };

  const series = [
    {
      name: "Series 1",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      // Your series data
    },
  ];

  const donutOptions = {
    chart: {
      type: "donut",
    },
    labels: [
      "Category A",
      "Category B",
      "Category C",
      "Category D",
      "Category E",
    ],
  };

  const donutSeries = [44, 55, 41, 17, 15];

  const barOptions = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ["Cat 1", "Cat 2", "Cat 3", "Cat 4", "Cat 5"],
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "70%",
        borderRadiusApplication: "end",
        borderRadius: 8,
      },
    },
  };

  const barSeries = [
    {
      name: "Series 1",
      data: [30, 40, 35, 50, 49], // Replace with your data values
    },
  ];

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex flex-col gap-4 bg-white dark:bg-gray-800 py-5">
      <label className="relative inline-flex items-center cursor-pointer mr-3 mx-14">
        <input
          type="checkbox"
          className="sr-only peer"
          onChange={toggleDarkMode}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-white peer-checked:bg-blue-600"></div>
        <span className="ml-1 text-sm font-medium text-gray-900 dark:text-white">
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          )}
        </span>
      </label>
      <div
        className="items-center justify-between gap-5 dark:text-gray-300 mx-5"
        style={{ display: "-webkit-box" }}
      >
        <div className="basis-1/2 grid grid-cols-2 gap-5">
          <div className="basis-1/2 bg-white dark:bg-gray-900 rounded-lg border dark:border-gray-500 shadow-lg p-4">
            <div>
              <div className="flex align-top">
                <span className="text-lg font-medium">$</span>
                <span className="text-4xl font-bold ">14,094</span>
              </div>
              <div>Another $48,346 to Goal</div>
            </div>
            <div className="mt-10">
              <Chart options={donutOptions} series={donutSeries} type="donut" />
            </div>
          </div>
          <div className="basis-1/2 bg-white dark:bg-gray-900 rounded-lg border dark:border-gray-500 shadow-lg p-4">
            <div>
              <div className="flex align-top">
                <span className="text-lg font-medium">$</span>
                <span className="text-4xl font-bold ">14,094</span>
              </div>
              <div>Another $48,346 to Goal</div>
            </div>
            <div className="mt-2">
              <Chart options={barOptions} series={barSeries} type="bar" />
            </div>
          </div>
          <div className="basis-1/2 grid bg-white dark:bg-gray-900 rounded-lg border dark:border-gray-500 shadow-lg p-4">
            <div>
              <div className="flex align-top">
                <span className="text-lg font-medium">$</span>
                <span className="text-4xl font-bold ">14,094</span>
              </div>
              <div>Another $48,346 to Goal</div>
            </div>
            <div className="mt-10">
              <div className="flex justify-between items-center mb-5">
                <span>1,048 to Goal</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full w-3/4"></div>
              </div>
            </div>
          </div>
          <div className="basis-1/2 h-[290px] grid bg-white dark:bg-gray-900 rounded-lg border dark:border-gray-500 shadow-lg p-4">
            <div>
              <div className="flex align-top">
                <span className="text-lg font-medium">$</span>
                <span className="text-4xl font-bold ">14,094</span>
              </div>
              <div>Another $48,346 to Goal</div>
            </div>
            <div className="mt-10">
              <div className="mb-3">Today’s Heroes</div>
              <div className="flex -space-x-3 rtl:space-x-reverse">
                <img
                  className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                  src="/images/avatars/user-01.png"
                  alt=""
                />
                <img
                  className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                  src="/images/avatars/user-02.png"
                  alt=""
                />
                <img
                  className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                  src="/images/avatars/user-03.png"
                  alt=""
                />
                <img
                  className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                  src="/images/avatars/user-05.png"
                  alt=""
                />
                <img
                  className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                  src="/images/avatars/user-04.png"
                  alt=""
                />
                <img
                  className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                  src="/images/avatars/user-06.png"
                  alt=""
                />
                <a
                  className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                  href="#"
                >
                  +99
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/2 bg-white dark:bg-gray-900 rounded-lg shadow-lg border dark:border-gray-500 p-4">
          <div className="mx-5 my-5">
            <div className="text-lg font-bold ">Sales This Months</div>
            <div>Users from all channels</div>
            <div className="mt-10">
              <div className="flex align-top">
                <span className=" text-lg font-medium">$</span>
                <span className="text-4xl font-bold ">14,094</span>
              </div>
              <div>Another $48,346 to Goal</div>
            </div>
          </div>
          <Chart options={options} series={series} type="line" height={350} />
        </div>
      </div>
    </div>
  );
};

export default Report;
