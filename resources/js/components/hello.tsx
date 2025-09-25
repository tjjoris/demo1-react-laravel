import React from "react";

type HelloProps = { name: string };

export default function Hello({ name }: HelloProps) {
  return <h1 className="text-2xl font-bold">This is a work in progress demo of posting, and deleting to a database using Laravel, and React for front end. It is not moderated. 👋</h1>;
}
