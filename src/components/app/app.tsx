import { CSSProperties } from 'react';
import clsx from 'clsx';
import { Article } from 'src/components/article/Article';
import { ArticleParamsForm } from 'src/components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from 'src/constants/articleProps';
import styles from './app.module.scss';

export const App = () => {
	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': defaultArticleState.fontFamilyOption.value,
					'--font-size': defaultArticleState.fontSizeOption.value,
					'--font-color': defaultArticleState.fontColor.value,
					'--container-width': defaultArticleState.contentWidth.value,
					'--bg-color': defaultArticleState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				submit={function (): void {
					throw new Error('Function not implemented.');
				}}
				reset={function (): void {
					throw new Error('Function not implemented.');
				}}
			/>
			<Article />
		</div>
	);
};
