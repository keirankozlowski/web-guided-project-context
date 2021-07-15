import React from 'react';

import { FamilyContext } from '../App';

const Parents = props => {
  return (
    <section className="parents">
      <FamilyContext.Consumer>
        {family => (
            <>
              {
                family.parents.map(parent => (
                  <div className="person" key={parent.name}>
                    <img width="150" src={parent.img} alt={parent.name} />
                    <strong>{parent.name}</strong>
                  </div>
                ))
              }
            </>
        )}
        {/* {props.family.parents.map(p => (
          <div className="person" key={p.name}>
            <img width="150" src={p.img} alt={p.name} />
            <strong>{p.name}</strong>
          </div>
        ))} */}
      </FamilyContext.Consumer>
    </section>
  );
};

export default Parents;
