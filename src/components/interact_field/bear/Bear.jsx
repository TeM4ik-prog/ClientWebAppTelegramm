import './Bear.scss';

const Bear = ({ isAttack, setIsAttack }) => {
	// const [isAttack, setIsAttack] = useState(false);

	const attackFunc = () => {
		setIsAttack(true);

		const timeoutId = setTimeout(() => {
			setIsAttack(false);
		}, 700);

		return () => clearTimeout(timeoutId);
	};

	return (
		<div
			className={
				!isAttack
					? `block__bear static__bear}`
					: `block__bear attacking__bear}`
			}
			onClick={attackFunc}
		>
			<div
				className={
					!isAttack
						? `damage`
						: `damage damage_view`
				}
			></div>
			<div
				className={
					!isAttack
						? `damage_two`
						: `damage_two damage_view}`
				}
			></div>
			<div
				className={
					!isAttack
						? `damage__three`
						: `.damage__three damage_view`
				}
			></div>
		</div>
	);
};

export default Bear;
