import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { useState, useRef, useEffect } from 'react';
import styles from './ArticleParamsForm.module.scss';
import { Select } from '../select';

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
					<Select selected={null} options={[]} />
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
