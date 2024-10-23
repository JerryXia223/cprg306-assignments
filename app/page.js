import Link from "next/link"

export default function Page() {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li>
          <Link href="/week-2">Week 2 assignment</Link>
        </li>
        <li>
          <Link href="/week-3">Week 3 assignment</Link>
        </li>
        <li>
          <Link href="/week-4">Week 4 assignment</Link>
        </li>
        <li>
          <Link href="/week-5">Week 5 assignment</Link>
        </li>
        <li>
          <Link href="/week-6">Week 6 assignment</Link>
        </li>
        <li>
          <Link href="/week-7">Week 7 assignment</Link>
        </li>
        <li>
          <Link href="/week-8">Week 8 assignment</Link>
        </li>
      </ul>
    </div>
  );
};