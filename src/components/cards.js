import './../App.css';
import ActionMac from './actionMac';
import ActionMacRed from './actionMacRed';

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
			<ActionMac />
			<div className='rowShort'></div>
			<div className='row'></div>
			<div className='rowMed'></div>
		</div>
	)
}

function CardSmall() {
	
	return(
		<div className='cardBGSmall'>
			<ActionMacRed/>
			<div className='rowShortSmall'></div>
			<div className='rowSmall'></div>
			<div className='rowMedSmall'></div>
		</div>
	)
}