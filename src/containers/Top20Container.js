import {useState, useEffect} from "react"

import Top20Selector from "../components/Top20Selector";
import Top20Details from "../components/Top20Details";
// We do the fetch within the container because the container will save the data state
const Top20Container = () => {

    // set our tunes here with a state variable - null is just the default value for the useState saying there's nothing there yet. This could also be an empty array - best practice to match it to data type so this should be an empty array
    const [top20, setTop20] = useState(null);

    // This will fetch the songs - the top 20 songs
    const getTop20 = () => {
        console.log("getting Top 20...");
        // fetch the url here - the fetch function returns a promise object. Promises have  a .then method
        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`)
        // Whenever the fetch is complete THEN do something i.e then - res is response i.e response from fetch which is json-ify'd res. This is an implicit return.
        .then((res) => {
            // convert the fetched data to json. Res here is a "readable" bit stream
            return res.json()

        })
        // .then is the data that comes back from the response that has been json'd so pass the json'd data in here and do "something" with the data i.e do setTop20 i.e update the state variable
        .then((data) => {
            setTop20(data);

        })

    };

    // useState is for data and useEffect is for time - we just want to do the fetch here whenever something happens i.e getTop20. At this point we can check the inspect console to view what has been fetched and converted. Now that we have the data up to line34 we want to affect the state. data.feed.entry. Empty dependency array says fetch and fetch once only at start
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