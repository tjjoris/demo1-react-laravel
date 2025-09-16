// import React from "react";
import { join } from "path";
import Hello from "../components/hello";
import Layout from "../layouts/layout";



function Demo() {
  return (
    <div className="p-6">
      <h1 className="title">
        hello world
      </h1>
      <Hello name="Luke" />

    </div>
  );
}

//this is how the layout is used when there is not a defualt layout.
Demo.layout = (page: React.ReactNode) => <Layout children={page} />;

export default Demo;