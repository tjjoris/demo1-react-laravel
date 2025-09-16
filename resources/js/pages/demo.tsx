// import React from "react";
import { join } from "path";
import Hello from "../components/hello";
import Layout from "../layouts/layout";
import { Link } from "@inertiajs/react";




function Demo() {
  return (
    <div>
      <h1 className="title">
        hello world I am cool.
      </h1>
      <Hello name="Luke" />

      <Link preserveScroll href="hello" className="block title mt-[1000px]">{new Date().toLocaleTimeString()}
      </Link>
    </div>
  );
}

//this is how the layout is used when there is not a defualt layout.
Demo.layout = (page: React.ReactNode) => <Layout children={page} />;

export default Demo;