import React from 'react';
import '../styles/Main.css';
import Card from './Card';
import ComparisonContainer from './ComparisonContainer'
import PropTypes from 'prop-types';

const Main = ( { districts, handleComparison, cards, clearedComparison, generateComparisons } ) => {
  const district = districts.map((district, idx) => {
    return (<Card 
      info={district} 
      key={idx} 
      handleComparison={handleComparison}/>);
  })
  
  return (
    <main>
      {cards.length > 0 
        && <ComparisonContainer 
            cards={cards} 
            handleComparison={handleComparison}
            clearedComparison={clearedComparison} 
            generateComparisons={generateComparisons}/>}
      <section className='card-container'>{district}</section>
      
    </main>
  )
}

Main.propTypes = {
  districts: PropTypes.array
}

export default Main