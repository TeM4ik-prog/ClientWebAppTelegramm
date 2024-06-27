import './Score.scss';

export default function Score() {
	return (
		<div className='block__score'>
			<div className='block__rang'>
				<img src='/images/icons/score/rang.svg' alt='rang' />
				<p>R1</p>
			</div>
			<p className='block__description'>
				<p>3,950</p>
				<img src='/images/icons/score/honey.svg' alt='honey' />
				<p>/100,000</p>
				<img src='/images/icons/score/honey.svg' alt='honey' />
				<img
					src='/images/icons/score/info.svg'
					alt='info'
					className='info'
				/>
			</p>
		</div>
	);
};


