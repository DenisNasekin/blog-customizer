import { ArrowButton } from 'components/arrow-button';
import { Text } from 'components/text';
import { Select } from 'components/select';
import { RadioGroup } from 'components/radio-group';
import { Separator } from 'components/separator';
import { Button } from 'components/button';

import { useState, useRef, useEffect } from 'react';
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

export const ArticleParamsForm = () => {
	//Состояние формы и данных
	const [form, setForm] = useState<boolean>(false);
	const [date, setDate] = useState<ArticleStateType>({
		fontFamilyOption: defaultArticleState.fontFamilyOption,
		fontSizeOption: defaultArticleState.fontSizeOption,
		fontColor: defaultArticleState.fontColor,
		backgroundColor: defaultArticleState.backgroundColor,
		contentWidth: defaultArticleState.contentWidth,
	});

	//Вывод формы
	const formRef = useRef<HTMLFormElement>(null);
	useEffect(() => {
		if (formRef.current)
			formRef.current.classList.toggle(styles.container_open);
	}, [form]);

	//Функции обработки выбора значений инпутов. Напрашивается кастомный хук
	function handleFontFamily(item: OptionType) {
		setDate({ ...date, fontFamilyOption: item });
	}
	function handleFontSize(item: OptionType) {
		setDate({ ...date, fontSizeOption: item });
	}
	function handleFontColor(item: OptionType) {
		setDate({ ...date, fontColor: item });
	}
	function handleBackgroundColor(item: OptionType) {
		setDate({ ...date, backgroundColor: item });
	}
	function handlecontentWidth(item: OptionType) {
		setDate({ ...date, contentWidth: item });
	}

	return (
		<>
			<ArrowButton state={form} openForm={() => setForm(!form)} />
			<aside className={styles.container} ref={formRef}>
				<form className={styles.form}>
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
						selected={date.fontFamilyOption}
						onChange={handleFontFamily}
					/>
					<RadioGroup
						name='font size'
						title='размер шрифта'
						options={fontSizeOptions}
						selected={date.fontSizeOption}
						onChange={handleFontSize}
					/>
					<Select
						title='Цвет шрифта'
						options={fontColors}
						selected={date.fontColor}
						onChange={handleFontColor}
					/>
					<Separator />
					<Select
						title='Цвет фона'
						options={backgroundColors}
						selected={date.backgroundColor}
						onChange={handleBackgroundColor}
					/>
					<Select
						title='Ширина контента'
						options={contentWidthArr}
						selected={date.contentWidth}
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
