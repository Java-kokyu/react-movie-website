import Button from "./Button"
import styles from "./App.module.css"
import {useState, useEffect} from "react";

function Hello() {
    function effectFn() {
        console.log("Created! :)");
        return destroyFn;
    }
    function destroyFn() {
        console.log("Destroyed! :(");
    }
    useEffect(effectFn, []);
    useEffect(() => {
        console.log("Created! :)");
        return () => console.log("Destroyed! :(");
    }, []);
    return <h1>Hello!</h1>
}

function App() {
    const [count, setCount] = useState(0);
    const [keyword, setKeyword] = useState("");
    const [showing, setShowing] = useState(true);
    const onClick = () => {
        setCount((prev) => prev + 1);
    }
    const onChange = (event) => {
        setKeyword(event.target.value);
    }
    const onShowing = () => {
        setShowing(prev => !prev);
    }
    useEffect(() => {
        console.log("CALL THE API...")
    }, []);
    useEffect(() => {
        if(keyword !== "" && keyword.length > 5)
        console.log("I run when 'keyword' changes");
    }, [keyword]);
    useEffect(() => {
        console.log("I run when 'count' changes")
    }, [count]);
    useEffect(() => {
        console.log("I run when 'keyword & count' changes")
    }, [keyword, count]);
    return (
        <div>
            <input value={keyword} onChange={onChange} type="text" placeholder="Search here"/>
            <h1 className={styles.title}>{count}</h1>
            <Button text="Click me" countUp={onClick} />
            {showing ? <Hello /> : null}
            <Button text={showing ? "Hide" : "Show"} countUp={onShowing}/>
        </div>
    );
}

export default App;
