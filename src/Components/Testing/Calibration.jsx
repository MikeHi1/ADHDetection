import React, { useEffect, useState } from "react";
import { Modal } from "flowbite";
import Help from "../../assets/calibration.png";

export default function Calibration({ setTestState }) {
  const [modal, setModal] = useState(null);
  function showModal() {
    modal.show();
  }
  function handleButtonClick() {
    setTestState("Test1");
  }

  useEffect(() => {
    const targetE1 = document.getElementById("default-modal");
    const modal = new Modal(targetE1);
    setModal(modal);
  }, []);

  return (
    <div className="container mx-auto px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 min-h-screen flex flex-col place-content-center">
      <div>Calibration</div>

      <nav className="w-full h-16 bg-white">
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto border border-gray-200 rounded-full dark:bg-gray-700 dark:border-gray-600">
          <p className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
            Not yet calibrated
          </p>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            Recalibrate
          </button>

          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            Toggle Filter
          </button>

          <button
            onClick={showModal}
            npm
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            Help
          </button>
        </div>
      </nav>

      <div className="calibrationDiv">
        <input type="button" className="Calibration" id="Pt1" />
        <input type="button" className="Calibration" id="Pt2" />
        <input type="button" className="Calibration" id="Pt3" />
        <input type="button" className="Calibration" id="Pt4" />
        <input type="button" className="Calibration" id="Pt5" />
        <input type="button" className="Calibration" id="Pt6" />
        <input type="button" className="Calibration" id="Pt7" />
        <input type="button" className="Calibration" id="Pt8" />
        <input type="button" className="Calibration" id="Pt9" />
      </div>

      <button onClick={handleButtonClick}>Change State in Child</button>

      <button
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
        className="hidden"
        type="button"
      >
        Toggle modal
      </button>

      <div
        id="default-modal"
        tabindex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <img src={Help} alt="Help" />
            </div>
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="default-modal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                I accept
              </button>
              <button
                data-modal-hide="default-modal"
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
