import { ArrowButton } from 'components/arrow-button';
import { Text } from 'components/text';
import { Select } from 'components/select';
import { RadioGroup } from 'components/radio-group';
import { Separator } from 'components/separator';
import { Button } from 'components/button';

import { useState, useRef, useEffect, FormEvent } from 'react';
import styles from './ArticleParamsForm.module.scss';
import {
	fontFamilyOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	fontSizeOptions,
	OptionType,
	ArticleStateType,
	defaultArticleState,
} from 'src/constants/articleProps';

type ArticleParamsFormProps = {
	date: ArticleStateType;
	setDate: (date: ArticleStateType) => void;
};

export const ArticleParamsForm = (props: ArticleParamsFormProps) => {
	//Состояние формы и данных
	const [form, setForm] = useState<boolean>(false);
	const [state, setState] = useState(props.date);

	//Вывод формы
	const formRef = useRef<HTMLFormElement>(null);
	useEffect(() => {
		if (formRef.current)
			formRef.current.classList.toggle(styles.container_open);
	}, [form]);

	//Открытие и закрытие формы
	function openFrom() {
		setForm(!form);
	}
	useEffect(() => {
		function closeFromEsc(event: KeyboardEvent) {
			if (event.code === 'Escape') setForm(false);
		}
		document.addEventListener('keydown', closeFromEsc);
		return () => document.removeEventListener('keydown', closeFromEsc);
	}, [form]);

	//Функции обработки выбора значений инпутов. Напрашивается кастомный хук
	function handleFontFamily(item: OptionType) {
		setState({ ...state, fontFamilyOption: item });
	}
	function handleFontSize(item: OptionType) {
		setState({ ...state, fontSizeOption: item });
	}
	function handleFontColor(item: OptionType) {
		setState({ ...state, fontColor: item });
	}
	function handleBackgroundColor(item: OptionType) {
		setState({ ...state, backgroundColor: item });
	}
	function handlecontentWidth(item: OptionType) {
		setState({ ...state, contentWidth: item });
	}

	//Функции сброса и отправки формы
	function handleReset() {
		setState(defaultArticleState);
		props.setDate(defaultArticleState);
	}
	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		props.setDate(state);
	}

	return (
		<>
			<ArrowButton state={form} openForm={openFrom} />
			<aside className={styles.container} ref={formRef}>
				<form
					className={styles.form}
					onSubmit={handleSubmit}
					onReset={handleReset}>
					<Text
						as='h2'
						size={31}
						weight={800}
						family={'open-sans'}
						uppercase
						dynamicLite>
						Задайте параметры
					</Text>
					<Select
						title='Шрифт'
						options={fontFamilyOptions}
						selected={state.fontFamilyOption}
						onChange={handleFontFamily}
					/>
					<RadioGroup
						name='font size'
						title='размер шрифта'
						options={fontSizeOptions}
						selected={state.fontSizeOption}
						onChange={handleFontSize}
					/>
					<Select
						title='Цвет шрифта'
						options={fontColors}
						selected={state.fontColor}
						onChange={handleFontColor}
					/>
					<Separator />
					<Select
						title='Цвет фона'
						options={backgroundColors}
						selected={state.backgroundColor}
						onChange={handleBackgroundColor}
					/>
					<Select
						title='Ширина контента'
						options={contentWidthArr}
						selected={state.contentWidth}
						onChange={handlecontentWidth}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
