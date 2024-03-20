import arrow from 'src/images/arrow.svg';
import styles from './ArrowButton.module.scss';
import clsx from 'clsx';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

type ArrowButtonProps = {
	state: boolean;
	openForm: OnClick;
};
export const ArrowButton = (props: ArrowButtonProps) => {
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(props.state ? styles.container_open : styles.container)}
			onClick={props.openForm}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(props.state ? styles.arrow_open : styles.arrow)}
			/>
		</div>
	);
};
