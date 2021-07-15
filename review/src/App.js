import React from 'react';

const App = ({ person }) => {
    console.log(person);
    return(<div className="App component">
        <h1>Main Component</h1>
        <h1>{person.name.title} {person.name.first} {person.name.last}</h1>
        <SubComp1 person={person} />
    </div>);
};

const SubComp1 = ({ person })=> {
    console.log(person);
    return(<div className="component">
        <h1>Sub Comp 1</h1>
        <img src={person.picture.large} alt="super cute" />
        <SubComp2 email={person.email} />
    </div>);
}

const SubComp2 = ({ email }) => {
    return(<div className="component">
        <h1>Sub Comp 2</h1>
        <p>{email}</p>
    </div>);
}

export default App;