import React from "react";
import Link from "next/link";
import frontendComponents from "../../src/utils";
import dynamic from "next/dynamic";

function Component({ component }) {
  const parsedComponent = JSON.parse(component)[0];
  const DynamicComponent = dynamic(() =>
    import(`../../src/components/${parsedComponent.name}`)
  );
  return (
    <div>
      <h2>{parsedComponent.name}</h2>
      <DynamicComponent />
    </div>
  );
}

export default Component;

export async function getStaticPaths() {
  const data = frontendComponents;

  const paths = data.map((component) => {
    return {
      params: { component: component.name },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const componentName = context.params.component;
  const filteredComponent = frontendComponents.filter(
    (component) => component.name === componentName
  );

  return {
    props: { component: JSON.stringify(filteredComponent) },
  };
}
