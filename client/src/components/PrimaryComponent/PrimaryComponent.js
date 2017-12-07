import React from 'react';
import HeaderComponent from "../HeaderComponent";
import PrimaryBodyComponent from "../PrimaryBodyComponent";

const PrimaryComponent = (props) => 
	<div>
		<HeaderComponent usage={props.usage} />
		<PrimaryBodyComponent
			{...props}
		/>
	</div>

export default PrimaryComponent;
