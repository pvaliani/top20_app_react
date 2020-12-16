import Top20Details from "./Top20Details"

    // Selector takes in top20 which is the containers state array tracking all song objects
    // Could pass a full song object and for each song in array of songs, render a <Song/> component

const Top20Selector = ({top20}) => {

    // Map the top20 objects as songs to a new array called top20SongsNodes
    const top20SongsNodes = top20.map((song) => {

        let name = song["im:name"].label;
        let artist = song["im:artist"].label;
        let key = top20.indexOf(song); // position is mapped by index

        // return name, artist and position and id i.e key to Top20Details component variables of same name so they can be re-used and displayed on screen 
        return(

            <Top20Details name={name} artist={artist} position={key + 1} key={key} />
         )


    })

    // return the array which has been mapped as an unordered list
    return (
      <>
        <ul>
            {top20SongsNodes}
        </ul>
      
      </>
    )
  }
  
  export default Top20Selector;