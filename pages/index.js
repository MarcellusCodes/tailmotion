import Head from "next/head";
import Link from "next/link";
import frontendComponents from "../src/utils";

export default function Home() {
  console.log(frontendComponents);
  return (
    <div>
      <Link href="/">Test</Link>
      {frontendComponents.map((component) => (
        <div>
          <Link
            href={{
              pathname: `/components/${component.name}`,
            }}
          >
            {component.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
