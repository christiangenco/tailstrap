(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{U0j5:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/alerts",function(){return n("prP5")}])},prP5:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),l=n.n(r),o=n("ke5e"),a=n("74EB"),s=l.a.createElement,i=function(e){var t=e.color,n=void 0===t?"blue":t,l=e.children,o=Object(r.useState)(!0),a=o[0],i=o[1];return a?s("div",{className:"rounded border border-".concat(n,"-400 text-").concat(n,"-800 bg-").concat(n,"-200 p-4 mb-4 relative"),role:"alert"},s("button",{type:"button",className:"absolute top-0 right-0 px-4 py-3 text-xl font-bold",datadismiss:"alert","aria-label":"Close",onClick:function(){return i(!1)}},s("span",{"aria-hidden":"true"},"\xd7")),l):null};t.default=function(){return s("div",null,s(a.a,null,"Alerts"),s(a.c,null,"Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages."),s("h2",{className:"font-medium text-3xl mt-10"},"Examples"),s("p",null,"Alerts are available for any length of text, as well as an optional dismiss button. For inline dismissal, use a javascript framework that can listen for click events on the close button."),s(o.a,{code:'<div class="rounded border border-blue-400 text-blue-800 bg-blue-200 p-4 mb-4 font-mono" role="alert">\nA simple primary alert\u2014check it out!\n</div>\n\n<div class="rounded border border-gray-400 text-gray-800 bg-gray-200 p-4 mb-4" role="alert">\nA simple secondary alert\u2014check it out!\n</div>\n\n<div class="rounded border border-green-400 text-green-800 bg-green-200 p-4 mb-4" role="alert">\nA simple success alert\u2014check it out!\n</div>\n\n<div class="rounded border border-red-400 text-red-800 bg-red-200 p-4 mb-4" role="alert">\nA simple danger alert\u2014check it out!\n</div>\n\n<div class="rounded border border-yellow-400 text-yellow-800 bg-yellow-200 p-4 mb-4" role="alert">\nA simple warning alert\u2014check it out!\n</div>\n\n<div class="rounded border border-teal-400 text-teal-800 bg-teal-200 p-4 mb-4" role="alert">\nA simple info alert\u2014check it out!\n</div>\n'}),s(a.b,null,"React Component Example"),s("p",null,"Tailstrap alerts can be used much less verbosely if made into a React component."),s(o.a,{code:'const Alert = ({ color = "blue", children }) => {\n  const [show, setShow] = useState(true);\n\n  return show ? (\n    <div\n      className={`rounded border border-${color}-400 text-${color}-800 bg-${color}-200 p-4 mb-4 relative`}\n      role="alert"\n    >\n      <button\n        type="button"\n        className="absolute top-0 right-0 px-4 py-3 text-xl font-bold"\n        datadismiss="alert"\n        aria-label="Close"\n        onClick={() => setShow(false)}\n      >\n        <span aria-hidden="true">&times;</span>\n      </button>\n      {children}\n    </div>\n  ) : null;\n};\n\n<Alert color="green">A simple success alert\u2014check it out!</Alert>\n'},s(i,{color:"green"},"A simple success alert\u2014check it out!")))}}},[["U0j5",1,0]]]);