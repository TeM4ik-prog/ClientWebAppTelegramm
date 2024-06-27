import './InterfaceMenu.scss';


export default function InterfaceMenu() {
	return (
		<div className='block__interface'>
			<ul>
				<li style={{ marginLeft: 'calc(3/375*100vw)' }}>
					<img src="/images/icons/menu/star.svg" alt='img' />
					<h3>Leaders</h3>
				</li>
				<li
					style={{
						marginLeft: 'calc(-1/375*100vw)',
					}}
				>
					<img src='/images/icons/menu/message.svg' alt='img' />
					<h3>Friends</h3>
				</li>
				<li
					style={{
						marginLeft: 'calc(-3/375*100vw)',
						marginBottom: 'calc(14/375*100vw)',
					}}
				>
					<img
						src='/images/icons/menu/flag.svg'
						alt='img'
						style={{
							width: 'calc(39/375*100vw)',
							height: 'calc(33/375*100vw)',
						}}
					/>

					<img
						src='/images/icons/chain.svg'
						alt='img'
						className='chain'
					/>
					<h3 className='retreat'>Retreat</h3>
					<p>Coming soon</p>
				</li>
				<li style={{ marginLeft: 'calc(2/375*100vw)' }}>
					<img
						src='/images/icons/menu/bell.svg'
						alt='img'
						style={{
							width: 'calc(21/375*100vw)',
							height: 'calc(28/375*100vw)',
						}}
					/>
					<h3 style={{ marginTop: 'calc(-5/375*100vw)' }}>Quests</h3>
				</li>
				<li
					style={{
						marginLeft: 'calc(-1/375*100vw)',
					}}
				>
					<img src='/images/icons/menu/box.svg' alt='img' />
					<h3>Treasure</h3>
				</li>
			</ul>
		</div>
	);
};

