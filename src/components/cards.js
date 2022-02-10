import './../App.css';

export default function CardsGroup() {
  return (
    <div className='AppHeader'>
      <div className='cardBox'>
        <CardSmall/>
        <Card />
      </div>
      <div className='cardBox'>
        <Card />
        <CardSmall/>
      </div>
    </div>
  );
}

function Card() {
	
	return(
		<div className='cardBG'>
			<div className='rowShort'></div>
			<div className='row'></div>
			<div className='rowMed'></div>
		</div>
	)
}

function CardSmall() {
	
	return(
		<div className='cardBGSmall'>
			<div className='rowShortSmall'></div>
			<div className='rowSmall'></div>
			<div className='rowMedSmall'></div>
		</div>
	)
}