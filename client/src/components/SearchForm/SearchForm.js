import React from "react";

export const SearchForm = props => 
	<div>
		<p>
			SearchForm component
		</p>
		<form>

			<label htmlFor="topic">Topic</label>
			<input 
				type="text"
				name="topic"
				value={props.topic}
				onChange={props.handleInputChange}
				id="topicInput"
			/>

			<label htmlFor="startYr">Start Year</label>
			<input
				type="number" 
				name="startYr" 
				value2={props.startYr}
				onChange={props.handleInputChange}
				id="startYearInput" />

			<label htmlFor="endYr">End Year</label>
			<input 
				type="number"
				name="endYr" 
				value3={props.endYr}
				onChange={props.handleInputChange}
				id="endYearInput" />

			<button 
				type="submit"
				onClick={(ev) => props.handleSearchSubmit(ev)}>
				Submit
			</button>

		</form>
	</div>