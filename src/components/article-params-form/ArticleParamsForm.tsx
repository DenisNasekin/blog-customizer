import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { useState } from 'react';
import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {
	const [openForm, setOpenFrom] = useState<boolean>(false);
	return (
		<>
			<ArrowButton state={openForm} openForm={() => setOpenFrom} />
			<aside className={styles.container}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
