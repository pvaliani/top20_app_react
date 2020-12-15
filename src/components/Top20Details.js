const Top20Details = ({name, artist, position}) => {
    
    // Top20 Details are shown below
    // Top20 Details takes in name, artist and position as gathered from JSON
  
    return (
      <>
      <h2>Song Title: {name}</h2>
      <h4>Artist: {artist} </h4>
      <h4>Chart Position: {position}</h4>
      </>
    )
  };
  
  export default Top20Details;