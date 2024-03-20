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
	defaultArticleState,
} from 'src/constants/articleProps';

export const ArticleParamsForm = () => {
	const [form, setForm] = useState<boolean>(false);
	const formRef = useRef<HTMLFormElement>(null);

	useEffect(() => {
		if (formRef.current)
			formRef.current.classList.toggle(styles.container_open);
	}, [form]);
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
						selected={defaultArticleState.fontFamilyOption}
					/>
					<RadioGroup
						name='font size'
						title='размер шрифта'
						options={fontSizeOptions}
						selected={defaultArticleState.fontSizeOption}
					/>
					<Select
						title='Цвет шрифта'
						options={fontColors}
						selected={defaultArticleState.fontColor}
					/>
					<Separator />
					<Select
						title='Цвет фона'
						options={backgroundColors}
						selected={defaultArticleState.backgroundColor}
					/>
					<Select
						title='Ширина контента'
						options={contentWidthArr}
						selected={defaultArticleState.contentWidth}
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
