import React from "react";
import TitleHooks from "../../TitleHooks/TitleHooks";

const Blog = () => {
  TitleHooks("Blog");
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 mb-8 dark:text-gray-400">
            Some Questions and Answers are given below that you want to know.
          </p>
          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                1.1 what is cors?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                Cors stands for Cross-Origin Resource Sharing (CORS). It is a
                browser security feature that restricts cross-origin HTTP
                requests that are initiated from scripts running in the browser.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                1.2 Why are you using firebase? What other options do you have
                to implement authentication?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                Firebase allows real-time database connection, which means
                multiple users can see the changes in the data when the data
                gets created or edited. Firebase Authentication provides backend
                services, easy-to-use SDKs, and ready-made UI libraries to
                authenticate users to your app. It supports authentication using
                passwords, phone numbers, popular federated identity providers
                like Google, Facebook and Twitter, and more.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                1.3 How does the private route work?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                The react private route component renders child components (
                children ) if the user is logged in. If not logged in the user
                is redirected to the /login page with the return url passed in
                the location state property.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                1.4 What is Node? How does Node work?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                Node allows developers to write JavaScript code that runs
                directly in a computer process itself instead of in a browser.It
                is a used as backend service where javascript works on the
                server-side of the application. This way javascript is used on
                both frontend and backend. Node. js runs on chrome v8 engine
                which converts javascript code into machine code.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
