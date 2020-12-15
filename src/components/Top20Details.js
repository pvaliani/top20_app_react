const Top20Details = ({top20}) => {
    if (!top20) return null;
  
    return (
      <>
      <h3>{top20.mission_name}</h3>
      <p>Top20 Info: {top20.rocket.rocket_name}</p>
      </>
    )
  };
  
  export default Top20Details;