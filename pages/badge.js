import Example from "../components/Example";

const Badge = ({ color = "blue", children }) => (
  <div
    className={`rounded border border-${color}-400 text-${color}-800 bg-${color}-200 p-4 mb-4`}
    role="alert"
  >
    {children}
  </div>
);

export default () => (
  <div>
    <h1 className="font-400 text-5xl">Badges</h1>
    <p className="text-2xl font-400 leading-normal w-4/5">
      Documentation and examples for badges, our small count and labeling
      component.
    </p>

    <h2 className="font-medium text-3xl mt-10">Example</h2>
    <p>
      Badges scale to match the size of the immediate parent element by using
      relative font sizing and <code className="font-mono">em</code> units.
    </p>

    <Example
      code={`<h1 class="text-5xl mb-2 font-medium">
  Example heading
  <span class="bg-gray-600 rounded text-gray-100 px-2 py-1">
    New
  </span>
</h1>
<h2 class="text-4xl mb-2 font-medium">
  Example heading
  <span class="bg-gray-600 rounded text-gray-100 px-2 py-1">
    New
  </span>
</h2>
<h3 class="text-3xl mb-2 font-medium">
  Example heading
  <span class="bg-gray-600 rounded text-gray-100 px-2 py-1">
    New
  </span>
</h3>
<h4 class="text-2xl mb-2 font-medium">
  Example heading
  <span class="bg-gray-600 rounded text-gray-100 px-2 py-1">
    New
  </span>
</h4>
<h5 class="text-xl mb-2 font-medium">
  Example heading
  <span class="bg-gray-600 rounded text-gray-100 px-2 py-1">
    New
  </span>
</h5>
<h6 class="mb-2 font-medium">
  Example heading
  <span class="bg-gray-600 rounded text-gray-100 px-2 py-1">
    New
  </span>
</h6>`}
    />
  </div>
);
