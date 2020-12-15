const Top20Details = ({top20}) => {
    if (!top20) return null;
  
    return (
      <>
      <h3>Entry1: {top20.feed['author']['name']['label']}</h3>
      <p>Entry2: {top20.feed['entry'][0]['title']['label']} </p>
      </>
    )
  };
  
  export default Top20Details;