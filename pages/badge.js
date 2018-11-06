import Example from "../components/Example";

const Badge = ({ color = "blue", children }) => (
  <div
    className={`rounded border border-${color}-light text-${color}-darker bg-${color}-lighter p-4 mb-4`}
    role="alert"
  >
    {children}
  </div>
);

export default () => (
  <div>
    <h1 className="font-light text-5xl">Badges</h1>
    <p className="text-2xl font-light leading-normal w-4/5">
      Documentation and examples for badges, our small count and labeling
      component.
    </p>

    <h2 className="font-medium text-3xl mt-10">Example</h2>
    <p>
      Badges scale to match the size of the immediate parent element by using
      relative font sizing and <code className="font-mono">em</code> units.
    </p>

    <Example
      code={`<h1 class="mb-2 font-medium">
  Example heading
  <span className="bg-grey-darker rounded text-grey-lightest px-2 py-1">
    New
  </span>
</h1>
<h2 class="mb-2 font-medium">
  Example heading
  <span className="bg-grey-darker rounded text-grey-lightest px-2 py-1">
    New
  </span>
</h2>
<h3 class="mb-2 font-medium">
  Example heading
  <span className="bg-grey-darker rounded text-grey-lightest px-2 py-1">
    New
  </span>
</h3>
<h4 class="mb-2 font-medium">
  Example heading
  <span className="bg-grey-darker rounded text-grey-lightest px-2 py-1">
    New
  </span>
</h4>
<h5 class="mb-2 font-medium">
  Example heading
  <span className="bg-grey-darker rounded text-grey-lightest px-2 py-1">
    New
  </span>
</h5>
<h6 class="mb-2 font-medium">
  Example heading
  <span className="bg-grey-darker rounded text-grey-lightest px-2 py-1">
    New
  </span>
</h6>`}
    >
      <h1 className="mb-2 font-medium">
        Example heading{" "}
        <span className="bg-grey-darker rounded text-grey-lightest px-2 py-1">
          New
        </span>
      </h1>
      <h2 className="mb-2 font-medium">
        Example heading{" "}
        <span className="bg-grey-darker rounded text-grey-lightest px-2 py-1">
          New
        </span>
      </h2>
      <h3 className="mb-2 font-medium">
        Example heading{" "}
        <span className="bg-grey-darker rounded text-grey-lightest px-2 py-1">
          New
        </span>
      </h3>
      <h4 className="mb-2 font-medium">
        Example heading{" "}
        <span className="bg-grey-darker rounded text-grey-lightest px-2 py-1">
          New
        </span>
      </h4>
      <h5 className="mb-2 font-medium">
        Example heading{" "}
        <span className="bg-grey-darker rounded text-grey-lightest px-2 py-1">
          New
        </span>
      </h5>
      <h6 className="mb-2 font-medium">
        Example heading{" "}
        <span className="bg-grey-darker rounded text-grey-lightest px-2 py-1">
          New
        </span>
      </h6>
    </Example>
  </div>
);
