import Top20Details from "./Top20Details"


const Top20Selector = ({top20}) => {


    const top20SongsNodes = top20.map((song) => {

        let name = song["im:name"].label;
        let artist = song["im:artist"].label;
        let key = top20.indexOf(song);

        return(

            <Top20Details name={name} artist={artist} position={key + 1} key={key} />
         )


    })

    return (
      <>
        <ul>
            {top20SongsNodes}
        </ul>
      
      </>
    )
  }
  
  export default Top20Selector;