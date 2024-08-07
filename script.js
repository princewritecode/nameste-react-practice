const createElement = React.createElement('div', { id: 'parent' }, React.createElement('div', { id: 'chld' }, [React.createElement('h1', {}, "hello from heading 1"), React.createElement('h2', {}, "hello from heading 2")]));

const rootElem = ReactDOM.createRoot(document.getElementById('root'));

rootElem.render(createElement);