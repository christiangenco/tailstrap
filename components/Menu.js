import Link from "next/link";
import { withRouter } from "next/router";

const SectionLink = withRouter(
  ({ router, href, children, selected = false, className = "" }) => (
    <Link href={href}
      className={
        "no-underline block font-medium hover:text-gray-900 p-1 " +
        (selected || router.pathname === href
          ? "text-black"
          : "text-gray-800")+" "+className}>
        {children}
    </Link>
  )
);

const SubsectionLink = ({ href, children, selected = false }) => (
  <SectionLink href={href} selected={selected} className="text-sm">
    {children}
  </SectionLink>
);

export default ({ className }) => (
  <div
    className={className}
    style={{ flexBasis: 320, height: "calc(100vh - 4rem)", top: "4rem" }}
  >
    <div className="p-4">
      <input
        className="rounded border px-3 py-2 w-full"
        type="text"
        placeholder="Search..."
      />
    </div>

    <div className="overflow-y-scroll h-full border-t p-4">
      <SectionLink href="/">Getting Started</SectionLink>
      <SectionLink href="/">Layout</SectionLink>
      <SectionLink href="/">Content</SectionLink>
      <SectionLink href="/" selected={true}>
        Components
      </SectionLink>

      <ul className="list-reset">
        <li>
          <SubsectionLink href="/accordion">Accordion</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/alerts">Alerts</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/badge">Badge</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/breadcrumb">Breadcrumb</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/buttons">Buttons</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/button group">Button group</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/card">Card</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/carousel">Carousel</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/collapse">Collapse</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/dropdowns">Dropdowns</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/forms">Forms</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/inputGroup">Input group</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/jumbotron">Jumbotron</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/listGroup">List group</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/modal">Modal</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/navs">Navs</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/navbar">Navbar</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/pagination">Pagination</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/popovers">Popovers</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/progress">Progress</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/scrollspy">Scrollspy</SubsectionLink>
        </li>
        <li>
          <SubsectionLink href="/tooltips">Tooltips</SubsectionLink>
        </li>
      </ul>
    </div>
  </div>
);
