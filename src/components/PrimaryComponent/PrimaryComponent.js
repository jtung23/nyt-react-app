import React from 'react';
import HeaderComponent from "../HeaderComponent";
import PrimaryBodyComponent from "../PrimaryBodyComponent";

const PrimaryComponent = (props) => 
	<div>
		<HeaderComponent usage={props.usage} />
		<PrimaryBodyComponent
			usage={props.usage}
			usageFunc={props.usageFunc}
			handleInputChange={this.handleInputChange}
			handleSearchSubmit={this.handleSearchSubmit}
		/>
	</div>

export default PrimaryComponent;
