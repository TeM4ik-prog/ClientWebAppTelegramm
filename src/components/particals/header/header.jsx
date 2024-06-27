import "./header.scss"

export default function Header() {
	return (
		<header className='header'>
			<button className="button__cancel">Cancel</button>
			<div className="block__title">
				<h1 className="title">BeeVerse by NCTR</h1>
				<p>bot</p>
			</div>
			<button className='button__menu'>
				<img src='/images/icons/header__menu.svg' alt='menu' />
			</button>
		</header>
	);
};


