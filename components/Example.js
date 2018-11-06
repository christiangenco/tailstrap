import Highlight from "react-highlight";

export default ({ children, code }) => (
  <>
    <div className="border-4 border-grey-lightest p-6 mt-2">{children}</div>
    <div className="bg-grey-lightest overflow-y-scroll w-full p-4 relative">
      <button
        className="absolute pin-t pin-r rounded text-grey-dark mr-1 p-2 hover:bg-blue hover:text-blue-lightest text-sm"
        onClick={() => {}}
      >
        Copy
      </button>
      <Highlight className="jsx">{code}</Highlight>
    </div>
  </>
);
