import './InfoBear.scss';

export default function InfoBear() {
	return (
		<div className='block__infoBear'>
			<img src='/images/icons/dead_head.svg' alt='dead_head' className='dead__head'
			/>
			<div className='block__description'>
				<div className='block__one'>
					<h3>BEEAR</h3>
					<div className='block__text'>
						<img src='/images/icons/shield.svg' alt='shield' />
						<p>Level: 10</p>
					</div>
				</div>
				<div className='block__two'>
					<img src='/images/icons/chain.svg' alt='chain' className='chain' />

					<h3>HP heal</h3>
					<div className='block__text'>
						<p>Coming soon</p>
					</div>
				</div>
				<div className='block__three'>
					<h3>Loot</h3>
					<div className='block__text'>
						<img src='/images/icons/score/honey.svg' alt='honey' />
						<p>25,000</p>
					</div>
				</div>
			</div>
		</div>
	);
};


