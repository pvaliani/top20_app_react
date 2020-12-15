const Top20Details = ({name, artist, position}) => {
    // if (!top20) return null;
  
    return (
      <>
      <h2>Song Title: {name}</h2>
      <h4>Artist: {artist} </h4>
      <h4>Chart Position: {position}</h4>
      </>
    )
  };
  
  export default Top20Details;