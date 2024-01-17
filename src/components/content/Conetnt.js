import React, { Childen } from "react";

export const H4 = (props) => {
  return <h4>{props.Childen}</h4>;
};

export const Ol = ({ list }) => {
  return (
    <ol>
      {Childen.toArray(
        list.map((item) => {
          return <li>{item}</li>;
        })
      )}
    </ol>
  );
};
export const Ul = (list) => {
  return (
    <ol>
      {Childen.toArray(
        list.map((item) => {
          return <li>{item}</li>;
        })
      )}
    </ol>
  );
};
