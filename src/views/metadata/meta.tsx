import React from "react";

const Meta = (props: any) => {
  return (
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{props.title}</title>
    </head>
  );
};

export default Meta;
