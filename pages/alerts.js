import Example from "../components/Example";
import { H1, Subheading, H2 } from "../components/Elements";
import { useState } from "react";

const Alert = ({ color = "blue", children }) => {
  const [show, setShow] = useState(true);

  return show ? (
    <div
      className={`rounded border border-${color}-400 text-${color}-800 bg-${color}-200 p-4 mb-4 relative`}
      role="alert"
    >
      <button
        type="button"
        className="absolute top-0 right-0 px-4 py-3 text-xl font-bold"
        datadismiss="alert"
        aria-label="Close"
        onClick={() => setShow(false)}
      >
        <span aria-hidden="true">&times;</span>
      </button>
      {children}
    </div>
  ) : null;
};

export default () => (
  <div>
    <H1>Alerts</H1>
    <Subheading>
      Provide contextual feedback messages for typical user actions with the
      handful of available and flexible alert messages.
    </Subheading>

    <H2>React Component Example</H2>

    <p>
      Tailstrap alerts can be used much less verbosely if made into a React
      component.
    </p>
    <Example
      code={`const Alert = ({ color = "blue", children }) => {
  const [show, setShow] = useState(true);

  return show ? (
    <div
      className={\`rounded border border-$\{color}-400 text-$\{color}-800 bg-$\{color}-200 p-4 mb-4 relative\`}
      role="alert"
    >
      <button
        type="button"
        className="absolute top-0 right-0 px-4 py-3 text-xl font-bold"
        datadismiss="alert"
        aria-label="Close"
        onClick={() => setShow(false)}
      >
        <span aria-hidden="true">&times;</span>
      </button>
      {children}
    </div>
  ) : null;
};

<Alert color="green">A simple success alert—check it out!</Alert>
`}
    >
      <Alert color="green">A simple success alert—check it out!</Alert>
    </Example>

    <h2 className="font-medium text-3xl mt-10">Examples</h2>
    <p>
      Alerts are available for any length of text, as well as an optional
      dismiss button. For inline dismissal, use a javascript framework that can
      listen for click events on the close button.
    </p>

    <Example
      code={`<div class="rounded border border-blue-400 text-blue-800 bg-blue-200 p-4 mb-4 font-mono" role="alert">
A simple primary alert—check it out!
</div>

<div class="rounded border border-gray-400 text-gray-800 bg-gray-200 p-4 mb-4" role="alert">
A simple secondary alert—check it out!
</div>

<div class="rounded border border-green-400 text-green-800 bg-green-200 p-4 mb-4" role="alert">
A simple success alert—check it out!
</div>

<div class="rounded border border-red-400 text-red-800 bg-red-200 p-4 mb-4" role="alert">
A simple danger alert—check it out!
</div>

<div class="rounded border border-yellow-400 text-yellow-800 bg-yellow-200 p-4 mb-4" role="alert">
A simple warning alert—check it out!
</div>

<div class="rounded border border-teal-400 text-teal-800 bg-teal-200 p-4 mb-4" role="alert">
A simple info alert—check it out!
</div>
`}
    />
  </div>
);
