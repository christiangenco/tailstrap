import Highlight from "react-highlight";

export default ({ children, code }) => (
  <>
    {children ? (
      <div className="border-4 border-gray-100 p-6 mt-2">{children}</div>
    ) : (
      <div
        className="border-4 border-gray-100 p-6 mt-2"
        dangerouslySetInnerHTML={{ __html: code }}
      />
    )}

    <div className="bg-gray-100 overflow-y-scroll w-full p-4 relative">
      <button
        className="absolute top-0 right-0 rounded text-gray-600 mr-1 px-2 py-1 hover:bg-blue-500 hover:text-blue-100 text-sm"
        onClick={() => {}}
      >
        Copy
      </button>
      <Highlight className="jsx">{code}</Highlight>
    </div>
  </>
);
