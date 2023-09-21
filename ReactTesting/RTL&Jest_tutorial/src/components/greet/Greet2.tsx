import React from "react";
import { GreetProps } from "./Greet.types";

export const Greet2 = ({ name = "" }: GreetProps) => {
  return <div>Hello {name ?? 'Greet'}</div>;
};
