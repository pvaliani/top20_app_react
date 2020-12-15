const Top20Details = ({top20}) => {
    if (!top20) return null;
  
    return (
      <>
      <h3>bob: {top20.feed['author']['name']['label']}</h3>
      <p>bob</p>
      </>
    )
  };
  
  export default Top20Details;