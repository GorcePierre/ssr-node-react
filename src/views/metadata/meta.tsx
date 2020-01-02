import React from "react";
import { MetaProps } from "../../type/meta.type";

const Meta = (props: MetaProps) => {
  return (
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{props.title}</title>
    </head>
  );
};

export default Meta;
