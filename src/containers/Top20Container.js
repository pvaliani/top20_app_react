import {useState, useEffect} from "react"

import Top20Selector from "../components/Top20Selector";
import Top20Details from "../components/Top20Details";

const Top20Container = () => {

    const [top20, setTop20] = useState(null);

    const getTop20 = () => {
        console.log("getting Top 20...");

        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`)
        .then((res) => {

            return res.json()

        })

        .then((data) => {
            setTop20(data);

        })

    };


    useEffect(() => {

        getTop20();

    },[]);
    if(!top20) return null;

    return (
        <>
            <h1>Top 20 Songs In The UK Currently 💽 </h1>
            <Top20Selector top20={top20.feed.entry} />
        
        </>
    )

};

export default Top20Container;