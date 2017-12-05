import React from "react";

const SearchForm = props => 
	<div>
		<p>
			SearchForm component
		</p>
		<form>

			<label htmlFor="topic">Topic</label>
			<input 
				type="number"
				name="topic"
				value={props.topic}
				onChange={props.handleInputChange}
				id="topicInput"
				required
			/>

			<label htmlFor="startYr">Start Year</label>
			<input
				type="number" 
				name="startYr" 
				value={props.startYr}
				onChange={props.handleInputChange}
				id="startYearInput" />

			<label htmlFor="endYr">End Year</label>
			<input 
				type="number"
				name="endYr" 
				value={props.endYr}
				onChange={props.handleInputChange}
				id="endYearInput" />

			<button 
				type="submit"
				onClick={(ev) => props.handleSearchSubmit(ev)}>
				Submit
			</button>

		</form>
	</div>

export default SearchForm;