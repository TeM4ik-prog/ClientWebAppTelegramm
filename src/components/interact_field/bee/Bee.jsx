import './Bee.scss';

export default function Bee({ isAttack }) {
	return (
		<div
			className={
				!isAttack
					? `block__bee static__bee`
					: `block__bee attacking__bee`
			}
		></div>
	);
};


