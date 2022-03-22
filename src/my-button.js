import { h } from 'preact';

export default function MyButton({ click }) {

    return (
        <button onClick={click}>Increment</button>
    );
}