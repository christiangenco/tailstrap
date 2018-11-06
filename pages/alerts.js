import Example from "../components/Example";

const Alert = ({ color = "blue", children }) => (
  <div
    className={`rounded border border-${color}-light text-${color}-darker bg-${color}-lighter p-4 mb-4`}
    role="alert"
  >
    {children}
  </div>
);

export default () => (
  <div>
    <h1 className="font-light text-5xl">Alerts</h1>
    <p className="text-2xl font-light leading-normal w-4/5">
      Provide contextual feedback messages for typical user actions with the
      handful of available and flexible alert messages.
    </p>

    <h2 className="font-medium text-3xl mt-10">React Component</h2>

    <p>blah blah</p>
    <Example
      code={`const Alert = ({ color = "blue", children }) => (
  <div
    className={\`rounded border border-\${color}-light text-\${color}-darker bg-\${color}-lighter p-4 mb-4\`}
    role="alert"
  >
    {children}
  </div>
);

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
      code={`<div class="rounded border border-blue-light text-blue-darker bg-blue-lighter p-4 mb-4 font-mono" role="alert">
A simple primary alert—check it out!
</div>

<div class="rounded border border-grey-light text-grey-darker bg-grey-lighter p-4 mb-4" role="alert">
A simple secondary alert—check it out!
</div>

<div class="rounded border border-green-light text-green-darker bg-green-lighter p-4 mb-4" role="alert">
A simple success alert—check it out!
</div>

<div class="rounded border border-red-light text-red-darker bg-red-lighter p-4 mb-4" role="alert">
A simple danger alert—check it out!
</div>

<div class="rounded border border-yellow-light text-yellow-darker bg-yellow-lighter p-4 mb-4" role="alert">
A simple warning alert—check it out!
</div>

<div class="rounded border border-teal-light text-teal-darker bg-teal-lighter p-4 mb-4" role="alert">
A simple info alert—check it out!
</div>
`}
    >
      <Alert color="blue">A simple primary alert—check it out!</Alert>

      <Alert color="grey">A simple secondary alert—check it out!</Alert>

      <Alert color="green">A simple success alert—check it out!</Alert>

      <Alert color="red">A simple danger alert—check it out!</Alert>

      <Alert color="yellow">A simple warning alert—check it out!</Alert>

      <Alert color="teal">A simple info alert—check it out!</Alert>
    </Example>
  </div>
);
