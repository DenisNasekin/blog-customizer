import arrow from 'src/images/arrow.svg';
import styles from './ArrowButton.module.scss';
import { useEffect, useRef } from 'react';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

type ArrowButtonProps = {
	state: boolean;
	openForm: OnClick;
};
export const ArrowButton = (props: ArrowButtonProps) => {
	const buttonRef = useRef<HTMLDivElement>(null);
	const arrowRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		if (buttonRef.current)
			buttonRef.current.classList.toggle(styles.container_open);
		if (arrowRef.current) arrowRef.current.classList.toggle(styles.arrow_open);
	}, [props.state]);

	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={styles.container}
			onClick={props.openForm}
			ref={buttonRef}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={styles.arrow}
				ref={arrowRef}
			/>
		</div>
	);
};
