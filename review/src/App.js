import React from 'react';

const App = ({ person }) => {
    return(
    <div className="App component">
        <h1>Main App</h1>
        <h1>{person.name.title} {person.name.first} {person.name.last}</h1>
        <SubComp1 person={person} />
    </div>);
};

const SubComp1 = ({ person }) => {
    return(<div className="component">
        <h1>Sub Comp 1</h1>
        <img src={person.picture.large} alt="a very handsome guy" />
        <SubComp2 email={person.email} />
    </div>);
}

const SubComp2 = ({ email }) => {
    return(<div className="component">
        <h1>Sub Comp 2</h1>
        <h1>{email}</h1>
    </div>);
}

export default App;
