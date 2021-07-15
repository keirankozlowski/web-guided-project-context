import React from "react";

// set this up with context api, hooks or prop render pattern (up to you)
const Siblings = (props) => {
  return (
    <section className="parents">
      {/* {props.family.siblings.map((p) => (
        <div className="person" key={p.name}>
          <img width="150" src={p.img} alt={p.name} />
          <strong>{p.name}</strong>
        </div>
      ))} */}
    </section>
  );
};

export default Siblings;