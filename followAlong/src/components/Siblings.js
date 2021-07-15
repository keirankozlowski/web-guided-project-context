import React, { useContext } from "react";
import { FamilyContext } from "../App";

// set this up with context api, hooks or prop render pattern (up to you)
const Siblings = () => {
  const family = useContext(FamilyContext);

  return (
    <section className="parents">
      {family.siblings.map((sibling) => (
        <div className="person" key={sibling.name}>
          <img width="150" src={sibling.img} alt={sibling.name} />
          <strong>{sibling.name}</strong>
        </div>
      ))}
    </section>
  );
};

export default Siblings;