import React from "react";
import ReactDOM from "react-dom";
const heading = <h1>Hello my name is prince</h1>;
const heading2 = React.createElement('div',
    { id: 'parent' },
    React.createElement('div', { id: 'child' },
        [
            React.createElement('h1', {}, "hello from heading 1"),
            React.createElement('h2', {}, "hello from heading 2")
        ]
    )
);

const heading3 = (
    <>
        <h2>Working on things
            that matter</h2>
        <h3>not what you are looking</h3>
    </>
);

const container = <div>{heading}{heading2}{heading3}</div>;
const rootElem = ReactDOM.createRoot(document.getElementById('root'));
rootElem.render(container);