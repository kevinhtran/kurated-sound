import React from "react";

export default function Instructions(props) {
  return (
    <div className="instructionsContainer">
      <img src="https://doorvest.com/android-icon-144x144.png" />
      <h1>Doorvest Technical Interview</h1>
      <p>
        This challenge is an opportunity for you to demonstrate your programming
        skills, as well as an opportunity for us to get you excited about the
        sort of problems we tackle at scale.
      </p>
      <p>
        For this exercise, you will be integrating{" "}
        <a href="https://blog.plaid.com/plaid-link/" target="_blank">
          Plaid Link
        </a>{" "}
        into this react app.
      </p>
      <ol>
        <li>
          Plaid has a{" "}
          <a href="https://github.com/plaid/react-plaid-link" target="_blank">
            react plugin
          </a>{" "}
          which has already been included in this project.
        </li>
        <li>
          In order to initialize plaid, you will need a Plaid Link Token, I have
          created an API that will return a unique token for you. Fetch the
          token from here and use it when initializing Plaid:
          <pre>
            GET:
            https://d3l2g8b8ha.execute-api.us-west-1.amazonaws.com/pr22/financials/createlinktoken
          </pre>
        </li>
        <li>
          Using React Hooks, initialize Plaid in <code>Plaid.js</code> allow the
          "Open Plaid" button to open the Plaid Link module.
        </li>
        <li>
          In this Plaid module, you will be able to link any bank account using
          <pre>
            Username: user_good
            <br />
            Password: pass_good
          </pre>
        </li>
        <li>
          After linking the bank, display the list of account names and account
          numbers (mask) below the "Open Plaid" button.
        </li>
      </ol>
    </div>
  );
}
