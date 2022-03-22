import { h } from 'preact';
import { useState } from 'preact/hooks';
import ReactDOM from 'react-dom';
import MyButton from './my-button';

function App() {

    const [counter, setCount] = useState(0);

    const increment = () => {
        setCount(counter + 1);
    }

    return (
        <div>
            <div>Counter: {counter}</div>
            <div><MyButton click={increment} /></div>
        </div>);
}

ReactDOM.render(<App />, document.querySelector('#root'));