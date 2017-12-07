import React from 'react';

export const ArticleResult = props =>

	<div>
		{props.articleArr.map(item => {
			<div>
				<h1>
					item.headline
		 		</h1>
		 		<p>
			 		item.snippet
			 	</p>
			 	<p>
		 			item.pub_date
		 		</p>
		 	</div>
			})

		}

	 </div>