import React from "react";

const Faq = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
            How it works
          </p>
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What are JavaScript used for?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  JavaScript is a text-based programming language used both on
                  the client-side and server-side that allows you to make web
                  pages interactive.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Is JavaScript used for backend?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Yes, JavaScript is used widely in frontend development, but in
                  recent years is used for backend development too. Node. js (a
                  JavaScript runtime) makes that possible by providing backend
                  functionality.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Is JavaScript easier than HTML?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  HTML is easy to learn and use, while JavaScript can be more
                  challenging to learn. HTML is used for front-end development,
                  while JavaScript is used for front-end and back-end
                  development.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What is JavaScript in HTML?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  JavaScript is the Programming Language for the Web. JavaScript
                  can update and change both HTML and CSS. JavaScript can
                  calculate, manipulate and validate data.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                How do I start JavaScript code?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  1. Open your favorite browser (here we will use Google
                  Chrome). 2. Open the developer tools by right clicking on an
                  empty area and select Inspect. Shortcut: F12 . Inspect
                  Browser. 3. On the developer tools, go to the console tab.
                  Then, write JavaScript code and press enter to run the code.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
