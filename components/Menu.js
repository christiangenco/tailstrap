import Link from "next/link";

export default ({ className }) => (
  <div className={className} style={{ flexBasis: 320 }}>
    <input
      className="rounded border px-3 py-2 w-full"
      type="text"
      placeholder="Search..."
    />
    Getting Started <br />Components <br />
    <Link href="/alerts">Alerts</Link> <br />
    <Link href="/badge">Badge</Link>
  </div>
);
